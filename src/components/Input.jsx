import React from 'react'

const Input = ({type, placeholder}) => {
  return (
    <div class="form-field d-flex align-items-center">
      <input type={type} placeholder={placeholder} /> 
    </div>
  )
}

export default Input
