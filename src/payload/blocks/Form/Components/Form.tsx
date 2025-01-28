'use client'

import { FormSubmission, Form as FormType } from '@payload-types'
import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import React from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import toast from 'react-hot-toast'

import uploadMedia from '@/utils/uploadMedia'

import { fieldsJsx } from './Fields'

export interface Data {
  [key: string]: string | File[]
}

const Form = ({
  form,
  className = '',
}: {
  form: FormType
  className?: string
}) => {
  const router = useRouter()
  const {
    fields,
    confirmationType,
    redirect,
    confirmationMessage,
    submitButtonLabel,
    id,
  } = form

  const buildInitialFormState = () => {
    return fields?.reduce(
      (acc, field) => {
        if ('name' in field && field.name) {
          // Handle fields that have a 'name' property
          switch (field.blockType) {
            case 'checkbox':
              acc[field.name] = field?.defaultValue || false
              break
            case 'number':
              acc[field.name] = field.defaultValue || null
              break
            case 'text':
            case 'textarea':
              acc[field?.name] = field.defaultValue || ''
              break
            case 'select':
            case 'country':
              acc[field.name] = ''
              break
            case 'email':
              acc[field.name] = ''
              break
            case 'upload':
              acc[field.name] = null
              break
            default:
              acc[field] = ''
              break
          }
        } else if (field.blockType === 'message') {
          acc['message'] = field.message || ''
        }
        return acc
      },
      {} as Record<string, any>,
    )
  }

  const formMethod = useForm({
    defaultValues: buildInitialFormState(),
  })

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    setValue,
    reset,
  } = formMethod

  const { mutate, isPending } = useMutation({
    mutationFn: async (data: Data) => {
      const url = typeof window !== 'undefined' ? window.location.origin : ''

      try {
        // Creating form-submission payload, if form has images uploading them to media collection and adding them to file field
        const formattedData = await Promise.all(
          Object.entries(data).map(async ([name, value]) => {
            // For all types other than file storing it in value field
            if (typeof value !== 'object') {
              return { field: name, value }
            }

            const imageID: any[] = []

            for await (const file of value) {
              try {
                const imageResponse = await uploadMedia(file)
                imageID.push(imageResponse.id)
              } catch (error) {
                console.error(`Failed to upload file: ${file.name}`, error)
                throw new Error(`Failed to upload file: ${file.name}`)
              }
            }

            return {
              field: name,
              value: '',
              file: imageID,
            }
          }),
        )

        const response = await fetch(`${url}/api/form-submissions`, {
          method: 'POST',
          body: JSON.stringify({
            form: id,
            submissionData: formattedData,
          }),
          headers: {
            'Content-Type': 'application/json',
          },
        })

        const formattedResponse = (await response.json()) as FormSubmission

        return formattedResponse
      } catch (error) {
        throw new Error('Failed to submit form, please try again!')
      }
    },
    onSuccess: () => {
      if (confirmationType === 'redirect' && redirect) {
        const { url } = redirect
        const redirectUrl = url
        if (redirectUrl) router.push(redirectUrl)
      } else if (confirmationType === 'message' && confirmationMessage)
        toast.success('🎉 Successfully submitted Form', { id: 'form-submit' })
      reset()
    },
  })

  const onsubmit = async (data: Data) => {
    mutate(data)
  }

  return (
    <form
      id={id.toString()}
      onSubmit={handleSubmit(onsubmit)}
      className={className}>
      <div className='form-wrap'>
        <FormProvider {...formMethod}>
          {fields &&
            fields?.map((field, index) => {
              const Field: React.FC<any> = fieldsJsx[field?.blockType]
              if (Field) {
                return (
                  <React.Fragment key={index}>
                    <Field
                      form={form}
                      {...field}
                      {...formMethod}
                      register={register}
                      errors={errors}
                      setValue={setValue}
                      control={control}
                    />
                  </React.Fragment>
                )
              }
            })}
        </FormProvider>
      </div>
      <div className='button-group'>
        <div className='action-button '>
          <button type='submit' className='action-button' disabled={isPending}>
            {isPending
              ? 'Submitting...'
              : submitButtonLabel
                ? submitButtonLabel
                : 'Submit'}
          </button>
        </div>
      </div>
    </form>
  )
}

export default Form
