import Error from '../Error'
import Width from '../Width'
import { FieldErrorsImpl, FieldValues, UseFormRegister } from 'react-hook-form'

interface EmailField {
  name: string
  label?: string | null
  width?: number | null
  required?: boolean | null
  id?: string | null
  blockName?: string | null
  blockType: 'email'
}
const Email: React.FC<
  EmailField & {
    register: UseFormRegister<FieldValues & any>
    errors: Partial<
      FieldErrorsImpl<{
        [x: string]: any
      }>
    >
  }
> = ({ name, label, width, register, required: requiredFromProps, errors }) => {
  return (
    <Width width={width as number}>
      <div>
        <label htmlFor={label ?? ''}>{label}</label>

        <div className='form'>
          <div className='form-group'>
            <input
              type='email'
              id={label ?? ''}
              {...register(name, { required: requiredFromProps as boolean })}
            />
          </div>
        </div>
        {requiredFromProps && errors[name] && (
          <Error error={errors[name]} label={label!} />
        )}
      </div>
    </Width>
  )
}
export default Email
