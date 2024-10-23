'use client'

import { Params } from '../types'
import { FormType } from '@payload-types'
import React from 'react'

import FormComponent from './Components/Form'

interface FormProps extends FormType {
  params: Params
}
const FormBlock: React.FC<FormProps> = ({ params, ...block }) => {
  const form =
    block?.form?.value && typeof block?.form?.value !== 'string'
      ? block?.form?.value
      : undefined

  return (
    <section className='pt-130 rpt-100 pb-100 rpb-70 container'>
      <h4>{block?.title}</h4>
      {form ? <FormComponent form={form} /> : null}
    </section>
  )
}

export default FormBlock
