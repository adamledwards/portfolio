// @flow
import React from 'react'
import './Modal.style.scss'
type Props = {
  children: React$Element<any>,
  onClose?: Function

}
const Modal = ({children, onClose}: Props) => (
  <section className="Modal">
    <div className="Modal-container">
    {children}
    </div>
  </section>
)

export default Modal
