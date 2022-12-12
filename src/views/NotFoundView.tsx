import React from 'react'
import background from '../assets/images/page-not-found.jpg';

const NotFoundView: React.FC = () => {
  
  return (
    <div className="page-error">
      <img className="error-img" src={background} alt="" />
      <h1> <strong>404</strong> <br /> Page not found</h1>
    </div>
  
  )
}

export default NotFoundView