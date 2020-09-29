import * as React from 'react'

interface Props {
  name: string
  type: 'text' | 'email'
  label: string
  placeholder: string
  value: string
  onChange: (name: string, value: string) => void
}

const TextField = ({
  name,
  type,
  label,
  placeholder,
  value,
  onChange,
}: Props) => {
  const handleChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    onChange(name, ev.target.value)
  }

  return (
    <>
      <label htmlFor={name}>{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={handleChange}
      />
    </>
  )
}

export default TextField
