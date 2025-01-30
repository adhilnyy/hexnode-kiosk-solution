import React from 'react'
import Form from './Form'
import ButtonLink from './ButtonLink'

const SignUp = () => {
  return (
    <div className='bg-blue grid place-items-center'>
        <div className="container grid place-items-center py-[50px] ">
            <h3 className="text-[30px] text-white font-bold leading-[38px] text-center mb-[20px] md:text-[42px] md:leading-[1.3]">
                Sign up and try Hexnode free for 14 days! 
            </h3>
            <Form  btnContent={"get started"} />
            <p className="text-[17px] leading-[24px] text-center text-footer-gray font-medium pt-2.5">No credit cards required.
            <ButtonLink title="Request a demo" href="https://www.hexnode.com/mobile-device-management/request-demo/" />
            </p>
        </div>
    </div>
  )
}

export default SignUp