import React from 'react'

const SelectInput = (props) => {
  const options = props.options
  const optionsElements = options.map(option => (
      <option key={option.value} value={option.value}>{option.label || option.value}</option>
    )
  )
  return (
    <select
      onChange={props.onChange}
      value={props.value}
      onBlur={props.onBlur}
      autoFocus={props.autoFocus}
    >
      { optionsElements }
      <option value={''}>None</option>
    </select>
  )
}


export default SelectInput
