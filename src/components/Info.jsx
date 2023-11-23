const Info = () => {
  return (
    <div className="container mx-auto flex flex-col bg-white">
      <div className="draggable w-full">
        <div className="container mx-auto my-16 flex flex-col items-center gap-16">
        <h1 className="text-black text-3xl md:text-5xl font-extrabold">Contact Section</h1>
          <div className="grid w-full grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          
            <div className="shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] flex flex-col items-center gap-3 rounded-3xl bg-white px-8 py-10 hover:bg-green-500">
            <svg xmlns="http://www.w3.org/2000/svg" className="mx-2 h-16 w-16 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              <p className="text-black text-2xl font-extrabold">Email</p>
              <p className="text-black text-base leading-7">Contact us at</p>
              <a className=" text-black text-lg font-bold" href="mailto: contact@annadata.com">contact@annadata.com</a>
            </div>


            <div className="shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] flex flex-col items-center gap-3 rounded-3xl bg-white px-8 py-10 hover:bg-blue-500">
            <svg xmlns="http://www.w3.org/2000/svg" className="mx-2 h-16 w-16 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l-1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              <p className="text-black text-2xl font-extrabold">Phone</p>
              <p className="text-black text-base leading-7">Reach out to us by phone</p>
              <a className="text-black text-lg font-bold" href="tel:+516-486-5135">+91-7892202101</a>
            </div>


            <div className="shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] flex flex-col items-center gap-3 rounded-3xl bg-white px-8 py-10 hover:bg-green-500">
            <svg xmlns="http://www.w3.org/2000/svg" className="mx-2 h-16 w-16 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              <p className="text-black text-2xl font-extrabold">Location</p>
              <p className="text-black text-base leading-7">Find us at our office</p>
              <a className="text-black text-lg font-bold" target="_blank" href="https://maps.app.goo.gl/mcBa6LJp5JJ4bxFT9">14, Mango, Jamshedpur</a>
            </div>
          </div>
        </div>
      </div>
      <hr class="w-48 h-1 mx-auto bg-black border-0 rounded "/>

    </div>
  );
};

export default Info;
