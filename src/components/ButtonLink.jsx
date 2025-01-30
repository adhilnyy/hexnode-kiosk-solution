import React from 'react'

const ButtonLink = ({title, href}) => {
  return (
        <a className="button-link group" href={href} target='_blank' >
            {title}
        <span className="arrow text-red group-hover:translate-x-1">
            <svg xmlns="http://www.w3.org/2000/svg" width="6" height="12" viewBox="0 0 9.433 16.867">
                <path id="right_icon" data-name="right icon" d="M3933.889,3431.981l7.02,7.02-7.02,7.02" transform="translate(-3932.475 -3430.567)" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
            </svg>
        </span>
        </a>

  )
}

export default ButtonLink