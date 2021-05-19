import React from 'react'
import { Card } from 'primereact/card';
import 'primereact/resources/themes/saga-blue/theme.css'
import 'primereact/resources/primereact.min.css'
import { username, email } from './StateManegement'
import "./welcome.css"
function Welcome() {
  const user = username.use()
  const emailId = email.use()
  return (
    <Card className='card'>
      <h1>Welcome:{user.username}</h1>
      <h2>Your Email Is: {emailId.email}</h2>
    </Card>
  )
}

export default Welcome;