import React from 'react'
import iconGithub from '../assets/icon-github.png'
import iconSoundcloud from '../assets/icon-soundcloud.png'
import iconLinkedIn from '../assets/icon-linkedin.png'
import iconTwitter from '../assets/icon-twitters.png'
import '../assets/icon.css'

const Icons = () => {
  return (
    <div
      style={{
        position: 'relative',
        top: '0px',
        right: '0px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        padding: '5px',
        marginBottom: '15px',
        height: '15px',
      }}
    >
      <Icon src={iconGithub} url="https://github.com/panukettu" />
      <Icon src={iconTwitter} url="https://twitter.com/panukettu" />
      <Icon
        src={iconLinkedIn}
        url="https://www.linkedin.com/in/panu-kettunen-06617b118/"
      />
      <Icon src={iconSoundcloud} url="https://soundcloud.com/merihaka187" />
    </div>
  )
}
const Icon = ({ url, src, height = 20 }) => {
  return (
    <div
      className="icon"
      style={{
        marginRight: '25px',
      }}
    >
      <a target="_blank" href={url}>
        <img src={src} height={height} />
      </a>
    </div>
  )
}

export default Icons
