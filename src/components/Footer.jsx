import React from 'react'

const footerContent = [{label: "Terms of Use", href: "https://www.hexnode.com/legal/terms-of-use/"},
                        {label: "Privacy", href: "https://www.hexnode.com/legal/privacy-policy/"},
                        {label: "Cookies", href: "https://www.hexnode.com/legal/cookies-policy/"}]

const Footer = () => {

  return (
    <footer className='bg-footer-white grid place-items-center p-[30px_0] sm:p-[20px_0]'>
      <div className="container grid grid-cols-12">
        <div className='col-span-6'>
          <div className='flex justify-start gap-1'>
          {
            footerContent.map((item, index) => (
              <React.Fragment  key={index}>
              <a href={item.href} className='text-xs leading-[24px] font-medium text-footer-gray cursor-pointer'>{item.label}</a>
              { index !== footerContent.length - 1 && <span className='text-xs leading-[24px] font-medium text-footer-gray mx-1'> - </span> }
              </React.Fragment>
            ))
          }
          </div>
        </div>
        <div className='col-span-6 text-end'>
          <p className='text-xs leading-[24px] font-medium text-footer-gray'>Copyright © 2024 Mitsogo Inc. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer