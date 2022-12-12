import React from 'react'
import { NavLink } from 'react-bootstrap'
import ClearanceWoman from '../../assets/images/clearance-woman.png'
import ClearanceMan from '../../assets/images/clearance-man.png'

const Clearance: React.FC = () => {

  return (
    <section className="clearance container">
        <div className="section-1 d-none d-lg-flex"> 
            <div className="block-1">
                <h1>Winter Clearance <br /> Up to 70% Off!</h1>
                <p>
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, 
                    totam rem apriam eaque ipsa quae ab illo inventore.
                </p>
                <button className="btn-dark">SHOP NOW</button> 
            </div>
            <img className="img-left" src={ClearanceWoman} alt="Woman with her hands in the air" />
        </div>
        
        <div className="section-2 d-none d-md-flex">
            <div className="block-2">
                <h1>New Arrivals</h1>
                <button className="btn-dark">SHOP NOW</button>
            </div>
            <img className="img-right" src={ClearanceMan} alt="Man with coat" />
        </div>
    </section> 
    )
}

export default Clearance