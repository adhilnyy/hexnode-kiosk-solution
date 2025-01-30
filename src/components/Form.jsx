import { useState } from "react";

const Form = ({ btnContent }) => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const submitForm = (e) => {
    e.preventDefault();

    const emailValue = email.trim();

    if (!emailValue) {
      setError("Please enter your work email!");
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailValue)) {
      setError("Invalid email format");
    } else {
      setError("");
      console.log("submitted successfully");
      
    }

    // Clear error after 5 seconds
    setTimeout(() => {
      setError("");
    }, 5000);
  };

  return (
    <>
      <div className="grid grid-cols-12 gap-2 pr-5" role="form" aria-labelledby="form-title">
        <h2 id="form-title" className="sr-only">Email Subscription Form</h2>
        <input
          type="email"
          name="email"
          value={email}
          onChange={handleEmail}
          className="bg-white col-span-12 lg:col-span-6 rounded-field px-[10px] h-[53px] focus:outline-none focus:ring-0 placeholder:text-input-gray text-[17px] leading-[21px]"
          placeholder="Your Work Email"
          aria-label="Your Work Email"
        />
        <button
          type="submit"
          onClick={submitForm}
          className="action-btn col-span-12 lg:col-span-6 text-[16px] leading-[20px] font-normal"
          aria-label={btnContent}
        >
          {btnContent}
        </button>
      </div>
      <div className="w-full h-5">
        <p aria-live="polite" aria-hidden={!error} className={`text-sm text-white font-extralight text-center pt-2.5 transition-all duration-300 ${ error ? "opacity-100" : "opacity-0" }`}>
          {error}
        </p>
      </div>

    </>
  );
};

export default Form;
