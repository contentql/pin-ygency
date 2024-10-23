import Error from '../Error'
import Width from '../Width'
import { Form } from 'react-bootstrap'
import {
  FieldErrorsImpl,
  FieldValues,
  UseFormRegister,
  UseFormSetValue,
} from 'react-hook-form'

interface SelectField {
  name: string
  label?: string | null
  width?: number | null
  defaultValue?: string | null
  options?:
    | {
        label: string
        value: string
        id?: string | null
      }[]
    | null
  required?: boolean | null
  id?: string | null
  blockName?: string | null
  blockType: 'select'
}

const SelectField: React.FC<
  SelectField & {
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
  options,
  defaultValue,
  width,
  register,
  setValue,
  required: requiredFromProps,
  errors,
}) => {
  return (
    <Width width={width as number}>
      <div>
        <label>{label}</label>
        <div className='user-form'>
          <Form.Select
            size='sm'
            aria-label={defaultValue || 'select'}
            className='custom-select'
            {...register(name, {
              required: requiredFromProps as boolean,
              onChange: (event: React.ChangeEvent<HTMLSelectElement>) => {
                setValue(name, event.target.value)
              },
            })}>
            <option>Options</option>
            {options?.map((option, index) => (
              <option key={index} value={option?.value}>
                {option?.label}
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
export default SelectField
