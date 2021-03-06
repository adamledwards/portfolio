// @flow
import React from 'react'

type Props = {
  heading: string,
  text: string,
  onClick: Function
}

type EditProps = {
  heading: string,
  text: string,
  onChange: Function,
  onClose: Function,
  onRemove: Function
}

export const Meta = ({heading, text, onClick}: Props) => {
  return (
    <div className="col-lg-3 Meta" onClick={onClick}>
      <span>{heading}</span><br/>
      <span>{text}</span>
    </div>
  )
}

export const MetaEdit = ({heading, text, onChange, onClose, onRemove}: EditProps) => {
  const handleOnChange = (event, key) => onChange(
    {
      heading,
      text,
      [key]: event.target.value
    }
  )
  return (
    <div className="col-lg-3 Meta Meta--edit">
      <input placeholder="Heading" value={heading} onChange={(event) => handleOnChange(event, 'heading')} type="text" />
      <input placeholder="Text" value={text} onChange={(event) => handleOnChange(event, 'text')} type="text" />
      <div className="row">
        <button onClick={onClose} ><i className="fa fa-check" aria-hidden="true" /></button>
        <button onClick={onRemove} ><i className="fa fa-times" aria-hidden="true" /></button>
      </div>
    </div>
  )
}

export default Meta
