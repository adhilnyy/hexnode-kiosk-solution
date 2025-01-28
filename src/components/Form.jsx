import {useState} from 'react'

const Form = ({btnContent}) => {

  const [email, setEmail] = useState("")
  const [error, setError] = useState("")

  const handleEmail = (e) => {
    setEmail(e.target.value)
  }

  const submitForm = (e) => {
    e.preventDefault();

    const emailInput = e.target.elements.email
    if (!e.target.value) {
      setError("Please enter your work email!")
    } else if (!emailInput.validity.valid) {
      setError("Invalid email format")
    }else{
      setError("")
    }

  }

  return (
    <>
    <div className='flex justify-start gap-2'>
    <input type="email" value={email} onChange={handleEmail} className='bg-white rounded-field px-[10px] h-[53px] focus:outline-none focus:ring-0 placeholder:text-input-gray text-[17px] leading-[21px]' placeholder='Your Work Email' />
    <button type='submit' onClick={submitForm} className='action-btn text-[16px] leading-[20px] font-normal'>
        {btnContent}
    </button>
    </div>
    <p className='text-[18px] leading-[24px] text-white font-extralight text-center pt-2.5'>{error}</p>
    </>
  )
}

export default Form