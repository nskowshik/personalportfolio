import React from 'react';
import {SVGIcon} from '../components';
import { ReactSVG } from 'react-svg'

const Footer = () => {
  const media= [
    {
      icon: "/image/phone.svg",
      url: "tel:8124547978"
    },
    {
      icon: "/image/gmail.svg",
      url: "mailto:aathins5@gmail.com"
    },
    {
      icon: "/image/github.svg",
      url: "https://github.com/nskowshik"
    },
    {
      icon: "/image/instagram.svg",
      url: "https://www.instagram.com/_aathi_23_12/"
    },
    {
      icon: "/image/linkedin.svg",
      url: "https://www.linkedin.com/in/kowshik-n-s-82b530161/"
    },
    {
      icon: "/image/whatsapp.svg",
      url: " https://wa.me/8124547978"
    }
  ]
  return(
    <div className="w-full h-full flex justify-center items-center px-20">
      <ul className="flex gap-4 navigation-container">
        {media.map(el => {
          return(
            <li className="navigation-items mediaIcon">
              <a href={el.url} target="_blank">
                <SVGIcon>
                  <ReactSVG className="social" src={el.icon} />
                </SVGIcon>
              </a>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Footer;
