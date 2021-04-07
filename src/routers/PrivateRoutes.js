import React from 'react'
import { Redirect, Route } from 'react-router'
import PropTypes from 'prop-types'


export const PrivateRoutes = ({
    isAuthenticated,
    component: Component,
    ...rest
}) => {

    localStorage.setItem("LastPath", rest.location.pathname);
    return (
        <Route {...rest}
            component={ (props)=>(
                (isAuthenticated)
                ? (<Component {...props} />)
                : (<Redirect to='/login'/>)
            )}
            
        />
    )
}


PrivateRoutes.prototypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired
}