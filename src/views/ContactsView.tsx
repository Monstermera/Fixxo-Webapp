import React from 'react'
import MainMenu from '../sections/MainMenu'
import Footer from '../sections/Footer'
import Breadcrumb from '../sections/Breadcrumb'
import Map from '../sections/contact/Map'
import ContactForm from '../sections/contact/ContactForm'

const ContactsView: React.FC = () => {
  document.title = 'Contacts | Fixxo.'

  return (
    <>
      <MainMenu />
      <Breadcrumb currentPage={"Contacts"} /> 
      <Map />
      <ContactForm />
      <Footer />
    </>
  )
}

export default ContactsView