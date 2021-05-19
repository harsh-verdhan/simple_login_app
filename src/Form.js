import React from 'react'
import { handleUsername, handleEmail, handlePassword } from './StateManegement'
import 'primeflex/primeflex.css';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Card } from 'primereact/card';
import './Form.css'
import { Link } from 'react-router-dom';
import 'primereact/resources/themes/saga-blue/theme.css'
import 'primereact/resources/primereact.min.css'


function Form() {
  return (
    <Card  >
      <form>
        <div className="p-formgroup-inline form" >
          <div className="p-field">
            <label htmlFor="firstname5" className="p-sr-only">Username</label>
            <InputText onChange={handleUsername} name='username' id="firstname5" type="text" required placeholder="Username" />
          </div>
          <div className="p-field">
            <label htmlFor="lastname5" className="p-sr-only">Email</label>
            <InputText onChange={handleEmail} name='email' id="lastname5" type="email" required placeholder="Email" />
          </div>
          <div className="p-field">
            <label htmlFor="password" className="p-sr-only">Password</label>
            <InputText onChange={handlePassword} name='password' id="password" type="password" required placeholder="Password" />
          </div>
          <Button >
            <Link to="/welcome">Login</Link>
          </Button>
        </div>
      </form>
    </Card>
  )
}

export default Form;