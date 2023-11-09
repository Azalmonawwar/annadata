// import ContactForm from "@/components/ContactForm";

import ContactCard from "@/components/ContactCard";

const Contact = () => {
  return (
    <>
    <ContactCard/>
    <div className="min-h-screen bg-white ">
      <div >
        <div className="max-w-7xl mx-auto px-3 sm:px-3 lg:px-3">
          <div className=" overflow-hidden ">
            <div className="px-4  sm:p-6">
              <h2 className="text-2xl font-semibold text-gray-900">Contact Us</h2>
              <div className="mt-4 text-gray-600">
                <h3 className="text-lg font-semibold">Get in Touch</h3>
                <p>
                  At EduFocus, we value your feedback, inquiries, and collaborations. We are here to listen, assist, and engage with you. Please feel free to reach out to us using the contact details below.
                </p>
              </div>

              <div className="mt-6 text-gray-600">
                <h3 className="text-lg font-semibold">General Inquiries:</h3>
                <p>
                  For general inquiries or information about our services, please contact us via email or phone:<br />
                  Email: <a href="mailto:info@edufocus.org">info@edufocus.org</a><br />
                  Phone: +1 (123) 456-7890
                </p>
              </div>

              <div className="mt-6 text-gray-600">
                <h3 className="text-lg font-semibold">Stay Connected:</h3>
                <p>
                  Join our community and stay informed about the latest developments, research, and success stories in the field of education by subscribing to our newsletter. By subscribing, you&rsquo;ll receive regular updates on our initiatives, policy recommendations, and the impact we&rsquo;re making.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    </>
  );
};

export default Contact;
