import { feedback } from "../constants";
import styles from "../style";
import FeedbackCard from "./FeedbackCard";

const Testimonials = () => (
  <section id="clients" className={`${styles.paddingY} ${styles.flexCenter} flex-col relative `}>
    <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40" />

    <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
      <h2 className={styles.heading2}>
        <div className="text-black text-white">
          About Us<br className="sm:block hidden" />  
        </div>
      </h2>
      <div className="w-full md:mt-0 mt-6">
        <p className={`${styles.paragraph} text-black text-justify text-left max-w-[450px]`}>
          Envi-Comm Corporation is an environmental consultancy corporation composed of individuals who
          are passionate about sustainable development through the compliance of various environmental regulations
          well as the institutionalization of in-house environmental conservation and sustainable development programs
          and systems
        </p>
      </div>
    </div>

    <div className="flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]">
      {feedback.map((card) => <FeedbackCard key={card.id} {...card} />)}
    </div>
  </section>
);

export default Testimonials;
