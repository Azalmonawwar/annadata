const Info = () => {
  return (
    <div className="container mx-auto flex flex-col bg-white">
      <div className="draggable w-full">
        <div className="container mx-auto my-32 flex flex-col items-center gap-16">
          <div className="grid w-full grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            <div className="shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] flex flex-col items-center gap-3 rounded-3xl bg-white px-8 py-10">
              <p className="text-black text-2xl font-extrabold">Email</p>
              <p className="text-black text-base leading-7">Contact us at</p>
              <a className="text-black text-lg font-bold" href="mailto: hello@loopple.com">hello@loopple.com</a>
            </div>
            <div className="shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] flex flex-col items-center gap-3 rounded-3xl bg-white px-8 py-10">
              <p className="text-black text-2xl font-extrabold">Phone</p>
              <p className="text-black text-base leading-7">Reach out to us by phone</p>
              <a className="text-black text-lg font-bold" href="tel:+516-486-5135">+516-486-5135</a>
            </div>
            <div className="shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] flex flex-col items-center gap-3 rounded-3xl bg-white px-8 py-10">
              <p className="text-black text-2xl font-extrabold">Location</p>
              <p className="text-black text-base leading-7">Find us at our office</p>
              <a className="text-black text-lg font-bold" target="_blank" href="https://goo.gl/maps/QcWzYETAh4FS3KTD7">10924 Urna Convallis</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
