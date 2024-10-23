import Width from '../Width'
import {
  FieldErrorsImpl,
  FieldValues,
  UseFormRegister,
  UseFormSetValue,
  UseFormWatch,
} from 'react-hook-form'

interface CheckboxField {
  name: string
  label?: string | null
  width?: number | null
  required?: boolean | null
  defaultValue?: boolean | null
  id?: string | null
  blockName?: string | null
  blockType: 'checkbox'
}

const CheckboxField: React.FC<
  CheckboxField & {
    register: UseFormRegister<FieldValues & any>
    errors: Partial<
      FieldErrorsImpl<{
        [x: string]: any
      }>
    >
    setValue: UseFormSetValue<FieldValues>
    watch: UseFormWatch<FieldValues>
  }
> = ({
  name,
  defaultValue,
  label,
  width,
  register,
  required: requiredFromProps,
  errors,
  setValue,
  watch,
}) => {
  // Watch the checkbox value
  const checkedValue = watch(name, defaultValue || false)

  return (
    <Width width={width as number}>
      <div className='label-input'>
        <div className='checkbox-wrapper'>
          <input
            type='checkbox'
            id={name}
            {...register(name, { required: requiredFromProps as boolean })}
            checked={checkedValue}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              setValue(name, event.target.checked)
            }
          />
        </div>

        <div style={{ marginLeft: '6px', textAlign: 'left' }}>{label}</div>
      </div>
      {requiredFromProps && errors[name] && (
        <p style={{ color: 'red' }}>{errors[name]?.type as any}</p>
      )}
    </Width>
  )
}
export default CheckboxField
