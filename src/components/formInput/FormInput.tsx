import React, { FC, ReactElement, ChangeEvent } from 'react';
import './FormInput.scss';

type PropsType = {
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void,
  label?: string
  type: string,
  value: string,
  required: boolean
  name?: string
  id?: string
}

const FormInput: FC<PropsType> = (
  { handleChange, label, ...otherProps }
): ReactElement => {
  return (
    <div className="group">
      <input
        className="form-input"
        onChange={handleChange}
        {...otherProps}
      />
      {
        label ? (
          <label className={`${otherProps.value.length ? 'shrink' : ''} form-input-label`}>
            {label}
          </label>
        ) : (null)
      }
    </div>
  )
}

export default FormInput;
