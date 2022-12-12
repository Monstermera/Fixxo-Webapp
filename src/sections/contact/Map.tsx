import React from 'react'

const Map: React.FC = () => {
  
  return (
    <section className="map">
         <iframe className="google-map" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d65149.347398774706!2d17.977545488155307!3d59.317641136438866!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x318fdc3be1cbab58!2sYasuragi!5e0!3m2!1ssv!2sse!4v1665826990026!5m2!1ssv!2sse" allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
    </section>  
    )
}

export default Map