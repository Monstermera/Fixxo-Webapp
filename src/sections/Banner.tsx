import React from 'react'
import { NavLink } from 'react-router-dom'

const Banner: React.FC = () => {

  return (
    <div className="banner container">
      <NavLink to="/products">Get 25% OFF at the Fixxo Selection - Shop Now!</NavLink>
    </div>
    )
}

export default Banner