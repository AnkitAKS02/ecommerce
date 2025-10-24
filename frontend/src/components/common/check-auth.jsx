import React from 'react'
import { Navigate, useLocation } from 'react-router-dom'

function CheckAuth({ isAuhtenticated, user, children }) {
    const location = useLocation();

    if (!isAuhtenticated &&
        !(
        location.pathname.includes('/login') ||
        location.pathname.includes('/register') 
        )
    ) {
        return <Navigate to= '/auth/login'/> 
    }

    if (isAuhtenticated &&
        (
        location.pathname.includes('/login') ||
        location.pathname.includes('/register') 
        )
    ) {
        if (user?.role === "admin") {
            return <Navigate to = '/admin/dashbord'/>
        } else {
            return <Navigate to = '/shop/home'/>
        }
    }

    if (isAuhtenticated && user?.role !== 'admin' && location.pathname.includes('admin')) {
        return <Navigate to = '/unauth-page'/>
    }

    if (isAuhtenticated && user?.role === 'admin' && location.pathname.includes('shop')) {
        return <Navigate to = '/admin/dashboard'/>
    }
  return (
    <div>
      {children}
    </div>
  )
}

export default CheckAuth
