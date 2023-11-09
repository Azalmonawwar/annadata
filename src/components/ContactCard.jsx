import FeedbackSection from "./Feedback";
import Info from "./Info";

const ContactCard = () => {
    return (
      <>
      <div className="mt-28 mx-[10%]">
      <Info/> 
      </div>
      
      <div className="mx-[7%] mt-10 ">
        <FeedbackSection />
    </div>
      </>
    );
  };
  export default ContactCard;