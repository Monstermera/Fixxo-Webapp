import React from 'react'

interface ExternalLink {
    link: string
    icon: any
}

const ExternalLinkIcon: React.FC<ExternalLink> = ({link, icon}) => {
  return (
    <a href={link} target="_blank">
        <i className={icon}></i>
    </a>

  )
}

export default ExternalLinkIcon