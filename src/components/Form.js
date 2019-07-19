import React from 'react'

const Form = (props) => {
  return (
    <div class = "counter">
      <h2 class = "titles">Form</h2>
      <div className="insideCounter">
        <div class = "each">
          <input name = "name" type="text" onChange = {props.handleChange} placeholder = "Name"/>
          <label>{props.name}</label>
          </div>
          <div class = "each">
          <input name = "surname" type="text" onChange = {props.handleChange} placeholder = "Surname"/>
          <label>{props.surname}</label>
          </div>
          <div class = "each">
          <input name = "age" type="text" onChange = {props.handleChange} placeholder = "Age"/>
          <label>{props.age}</label>
          </div>
      </div>
    </div>
  )
}

export default Form