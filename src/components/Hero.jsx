import Image from "next/image";
const Hero = () => {
  return (
    <section className="bg-gray-900 pt-28 pb-28 ">
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
          <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-white">
          Welcome to अन्नदाता (Annadata) 
          </h1>
          <p className="max-w-2xl mb-6 font-light text-gray-300 lg:mb-8 md:text-lg lg:text-xl">
          At Annadata, we believe in the power of kindness and the impact of sharing. Our mission is simple yet profound: to collect the surplus food from events and celebrations and ensure it doesn't go to waste. Instead, we transform it into a source of nourishment for those in need.<br/><br/>Every plate of food we save represents a smile on a hungry face, a step towards reducing food waste, and a gesture of compassion. We invite you to be a part of this noble journey and join hands with us in making the world a better place.
          </p>
          <a
            href="#register"
            className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-900"
          >
            Explore More
            <svg
              className="w-5 h-5 ml-2 -mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </a>
          <a
            href="#Donate"
            className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg  focus:ring-4 text-white border-gray-700 hover:bg-gray-700 focus:ring-gray-800 "
          >
            Donate Us 
          </a>
        </div>
        <div className=" lg:mt-0 h-[80%] lg:col-span-5 lg:flex order-first md:order-last rounded-lg pb-5 md:pb-0 ">
        <Image src={'/img2.jpg'} alt='image' height={400} width={1000} className="rounded-lg"/>
          {/* <img
            src="/img2.jpg"
            alt="image"
            className="rounded-lg"
          /> */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
