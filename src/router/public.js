import React from 'react'
import { Route, Redirect } from 'react-router-dom'

// Stateless component (functional component)
const PublicRoute = ({ 
  isLoggedIn, 
  component: Component, 
  ...rest
}) => ( // Los parentesis indican que se va a regresar el contenido tal cual y no un valor por 'return'
  <Route {...rest} component={(props) => (
    isLoggedIn ? (
      <Redirect to="/" />
    ) : (
      <div>
        <Component {...rest} {...props}/>
      </div>
    ) 
  )} />
)

export default PublicRoute