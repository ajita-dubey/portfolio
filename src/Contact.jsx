import React from 'react'
import { useRef } from 'react';
import { FaPaperPlane } from 'react-icons/fa6'
import { Element } from 'react-scroll'
import emailjs from '@emailjs/browser';
import { useState } from 'react';

function Contact() {
  const form = useRef();
  const [pending, setPending] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();
    setPending(true)

    emailjs
      .sendForm('service_wuqcymk', 'template_eve0z5s', form.current, {
        publicKey: 'F_lto3ygN7Ed_M-y7',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          setPending(false)
        },
        (error) => {
          console.log('FAILED...', error.text);
          setPending(false)
        },
      );
  };
  return (
   
    <Element name="contact">
    <section className =" flex justify-center items-center text-center pt-20 h-screen bg-zinc-50">
    <div className='w-[38rem]  '>

    
      <h2 className='text-3xl font-medium capitalize pb-4 text-center'>Contact Me</h2>
      <p className="text-gray-700 mb-3 ">
                Please contact me directly at{" "}
                <a className="underline" href="mailto:dubeyajita305@gmail.com">
                    dubeyajita305@gmail.com
                </a>{" "}
                or through this form.
            </p>
            <form className='mt-10 flex-col flex mx-2 ' ref={form} onSubmit={sendEmail}>
                <input className='h-14 px-4 mb-3 rounded-lg ' type='email' required= {true} placeholder='Your email' name='user_email'/>
                <input className='h-14 px-4 rounded-lg ' type='text' required= {true} placeholder='Your name' name='user_name' />
                <textarea className='h-52 my-3 rounded-lg p-4' required= {true} placeholder='Your message' name='message' />
                <button
                    type="submit"
                    className="group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-gray-900
                     text-white rounded-full outline-none transition-all focus:scale-110 hover:scale-110
                      hover:bg-gray-950 active:scale-105  disabled:scale-100 disabled:bg-opacity-65"
                    disabled={pending}
                >
                    {pending ? (
                        <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white"></div>
                    ) : (
                        <>
                            Submit{" "}
                            <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-1
                             group-hover:-translate-y-1" />{" "}
                        </>
                    )}
                </button>
            </form>
            </div>

    
    </section>
    </Element>
   
  )
}

export default Contact
