import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Contact = () => {
  useEffect(() => {
    AOS.init(
      {
        duration: 2000, // Animation duration
        easing: 'ease-in-out', // Animation easing
        offset: 100, // Offset (in px) from the top/bottom of an element to trigger animations
        once: true
      }
    )
  }, []);
  return (
    <div className=''>
      <h2 data-aos="fade-down" className="text-center text-3xl font-bold py-8 text-fuchsia-600">You Can Reach Us</h2>
      <section data-aos="fade-right" className="py-9 bg-fuchsia-300">
        <div className="grid max-w-6xl grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 md:divide-x">
          <div className="py-6 md:py-0 md:px-6">
            <h1 className="text-4xl font-bold">Get in touch</h1>
            <p className="pt-2 pb-4">Fill in the form to start a conversation</p>
            <div className="space-y-4">
              <p className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
                </svg>
                <span>Rajshahi, 9999 City</span>
              </p>
              <p className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                </svg>
                <span>+88 0123456789</span>
              </p>
              <p className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                </svg>
                <span>contact@business.com</span>
              </p>
            </div>
          </div>
          <form noValidate="" className="flex flex-col py-6 space-y-6 md:py-0 md:px-6">
            <label className="block">
              <span className="mb-1 font-semibold ">Full name</span>
              <input type="text" placeholder="sabbir hossen" className="block w-full  rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:dark:ring-default-600 dark:bg-gray-100" />
            </label>
            <label className="block">
              <span className="mb-1 font-semibold">Email address</span>
              <input type="email" placeholder="sabbir.eng66@gmail.com" className="block w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:dark:ring-default-600 dark:bg-gray-100" />
            </label>
            <label className="block">
              <span className="mb-1 font-semibold">Message</span>
              <textarea rows="3" className="block w-full rounded-md focus:ring focus:ring-opacity-75 focus:dark:ring-default-600 dark:bg-gray-100"></textarea>
            </label>
            <button type="button" className="self-center px-10 py-2 text-lg  overflow-hidden font-semibold rounded bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white">Submit</button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;