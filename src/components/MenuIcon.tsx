import React from 'react'
import { NavLink } from 'react-router-dom'

export interface MenuType {
    hideOnMobile?: string
    link: string
    icon: string
    quantity?: string
}

const MenuIcon: React.FC<MenuType> = ({link, icon, quantity, hideOnMobile}) => {

  return (
    <NavLink className={ `menu-icon ${hideOnMobile ? "d-none d-md-flex" : ""}` } to={link} end>
      <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-red">{quantity}</span>
        <i className={icon}></i>
    </NavLink> 
  )
}

export default MenuIcon