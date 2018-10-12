import React, { Component } from 'react' // We need to import react so we can make use of its .component class


export default class RegistrationForm extends Component {
  render(){
    return(
      <form>
        <input type="text" />
        <input type="password" />
        <button type="submit"> Submit </button>
      </form>
    )
  }
}
