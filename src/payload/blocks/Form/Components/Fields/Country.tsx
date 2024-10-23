import Error from '../Error'
import Width from '../Width'
import Image from 'next/image'
import { Form } from 'react-bootstrap'
import {
  FieldErrorsImpl,
  FieldValues,
  UseFormRegister,
  UseFormSetValue,
} from 'react-hook-form'

import { trpc } from '@/trpc/client'

interface CountryField {
  name: string
  label?: string | null
  width?: number | null
  required?: boolean | null
  id?: string | null
  blockName?: string | null
  blockType: 'country'
}
const Country: React.FC<
  CountryField & {
    setValue: UseFormSetValue<any>
    register: UseFormRegister<FieldValues & any>
    errors: Partial<
      FieldErrorsImpl<{
        [x: string]: any
      }>
    >
  }
> = ({
  name,
  label,
  width,
  register,
  setValue,
  required: requiredFromProps,
  errors,
}) => {
  const { data: countries, isLoading: isCountriesLoading } =
    trpc?.form?.getAllCountries.useQuery()
  return (
    <Width width={width as number}>
      <div>
        <label>{label}</label>

        <div className='user-form'>
          <Form.Select
            aria-placeholder={
              isCountriesLoading ? 'Loading...' : 'Select country'
            }
            className='custom-select'
            {...register(name, {
              required: requiredFromProps as boolean,
              onChange: (event: React.ChangeEvent<HTMLSelectElement>) => {
                setValue(name, event.target.value)
              },
            })}>
            {countries?.flatMap((country: any, index: number) => (
              <option
                className='option'
                key={index}
                style={{ display: 'flex', gap: '2px' }}>
                <Image src={country?.flag} alt='' width={28} height={14} />
                <p>{country?.name}</p>
              </option>
            ))}
          </Form.Select>
        </div>
        {requiredFromProps && errors[name] && (
          <Error error={errors[name]} label={label!} />
        )}
      </div>
    </Width>
  )
}
export default Country
