const Contact = () => {
    return (
      <div className="flex p-4 md:mt-20 mt-10" id="contact">
      <h1 className="text-5xl mt-5 text-center font-extrabold uppercase bg-gradient-to-r from-blue-400 via-green-200 to-purple-900 text-transparent bg-clip-text p-10 md:text-8xl md:p-10">Ready to contact?</h1>

  
        <div className="flex grid grid-cols-1 md:grid-cols-1 p-5 border-[2px] border-gray-400 rounded-[50px] bg-gradient-to-r from-blue-400 mt-10">
          <a className="flex items-center" href="mailto:guido.llaurado@gmail.com" target="_blank">
            <div className="flex flex-col-2 items-center">
              <img src="gmail.png" className="w-1/5 p-4" alt="Gmail Icon" />
              <h1 className="mt-2 text-xl text-gray-200 md:text-4xl">
                Gmail
              </h1>
            </div>
          </a>
  
          <a className="flex items-center" href='https://wa.me/+' target='_blank'>
            <div className="flex flex-col-2 items-center">
              <img src="wpcn.svg" className="w-1/5 p-4" alt="Whatsapp Icon" />
              <h1 className="mt-2 text-xl text-gray-200 md:text-4xl">
                Whatsapp
              </h1>
            </div>
          </a>
  
          <a className="flex items-center" href="https://www.instagram.com/guidollaurado/" target="_blank">
            <div className="flex flex-col-2 items-center">
              <img src="instagram.png" className="w-1/5 p-4" alt="Instagram Icon" />
              <h1 className="mt-2 text-xl text-gray-200 md:text-4xl">
                Instagram
              </h1>
            </div>
          </a>
  
          <a className="flex items-center" href="https://calendly.com/guido-llaurado/appointment-for-landinpage" target="_blank">
            <div className="flex flex-col-2 items-center">
              <img src="appoint.png" className="w-1/5 p-4" alt="calendarIcon" />
              <h1 className="mt-2 text-xl text-gray-200 md:text-4xl">
                Book an appointment
              </h1>
            </div>
          </a>
        </div>
      </div>
    );
  };
  
  export default Contact;