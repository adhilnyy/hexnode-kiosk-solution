import React from 'react'

const FreeTrailBtn = ({lg}) => {
  return (
    <a role="link" aria-label="Start a 14-day free trial" href="https://www.hexnode.com/mobile-device-management/cloud/signup/" className={`action-btn font-medium text-[15px] leading-[24px] ${lg ? "lg:block hidden" : "" } `}>
        14 day free trial
    </a>
  )
}

export default FreeTrailBtn