import React from 'react'
import { NavLink } from 'react-router'

export default function NavItems({route}) {

  return (
    <NavLink to={route.path}>{route.pathname}</NavLink>
  )
}
