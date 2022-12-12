import React from 'react'
import PamelaLeft from '../../assets/images/pamela-woman-1.png'
import PamelaRight from '../../assets/images/pamela-woman-2.png'

const PamelaTopPicks: React.FC = () => {

  return (
    <section className="top-picks container">
      <div className="section-1 d-none d-md-flex">
        <img src={PamelaLeft} alt="Woman with black coat" />
          <div className="block-1">
              <h1>Pamela Reif's Top Picks</h1>
              <button className="btn-dark">SHOP NOW</button>
          </div>
      </div>
      <div className="section-2 d-none d-md-flex">
        <div className="block-2">
            <h1>Let's Be Conscious</h1>
            <button className="btn-white">FLASH SALE</button>
        </div>
        <img className="right" src={PamelaRight} alt="Woman with parkas" />
      </div>
    </section>
  )
}

export default PamelaTopPicks