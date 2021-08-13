import React from 'react';
import { Route, Redirect } from 'react-router-dom'
import UserContext from '../UserContext'

function PrivateRoute({ children, ...rest }) {
  const { user } = React.useContext(UserContext);

  console.log('private route user', user)
  return (
    <Route
      {...rest}
      render={({ location }) =>
        user ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}

export default PrivateRoute