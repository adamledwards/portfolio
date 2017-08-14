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
      <span className="Meta-heading">{heading}</span><br/>
      <span className="Meta-text">{text}</span>
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
      <input className="Meta-heading" placeholder="Heading" value={heading} onChange={(event) => handleOnChange(event, 'heading')} type="text" />
      <input className="Meta-text" placeholder="Text" value={text} onChange={(event) => handleOnChange(event, 'text')} type="text" />
      <div className="row">
        <button onClick={onClose} ><i className="fa fa-check" aria-hidden="true" /></button>
        <button onClick={onRemove} ><i className="fa fa-times" aria-hidden="true" /></button>
      </div>
    </div>
  )
}

export type MetaType = {
  heading: string,
  text: string
}

export default Meta
