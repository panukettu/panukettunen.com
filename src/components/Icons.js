import React from 'react'
import iconGithub from '../assets/icon-github.png'
import iconSoundcloud from '../assets/icon-soundcloud.png'
import iconLinkedIn from '../assets/icon-linkedin.png'
import iconTwitter from '../assets/icon-twitters.png'
import './icon.css'

const Icons = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        opacity: 0.7,
      }}
    >
      <Icon src={iconGithub} url="https://github.com/panukettu" />
      <Icon src={iconTwitter} url="https://twitter.com/panukettu" height="25" />
      <Icon
        src={iconLinkedIn}
        url="https://www.linkedin.com/in/panu-kettunen-06617b118/"
      />
      <Icon src={iconSoundcloud} url="https://soundcloud.com/merihaka187" />
    </div>
  )
}
const Icon = ({ url, src, height }) => {
  return (
    <div
      className="icon"
      style={{
        margin: '4px',
        padding: '9px',
      }}
    >
      <a target="_blank" href={url}>
        <img src={src} height={height || 22} />
      </a>
    </div>
  )
}

export default Icons
