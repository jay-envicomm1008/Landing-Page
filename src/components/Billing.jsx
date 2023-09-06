import { apple,bill, google,services} from "../assets";
import styles, { layout } from "../style";

const Billing = () => (
  <section id="product" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      

      
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
      
    </div>

    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        <div className="text-black text-white">
          Consultancy Services<br className="sm:block hidden" /> Offered 
          </div>
      </h2>
      <p className={`${styles.paragraph} text-black text-justify max-w-[470px] mt-5`}>
        Our consulting services provide expert advice and specialized
        solutions to assist businesses in navigating challenging obstacles and achieving
        their objectives. Across sectors, we provide strategic planning,
        process improvement, and inventive issue solving. Our expert staff 
        works closely with clients to analyze their specific needs, discover
         development prospects, and implement effective tactics.
      </p>

      {/* <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
        <img src={apple} alt="google_play" className="w-[128.86px] h-[42.05px] object-contain mr-5 cursor-pointer" />
        <img src={google} alt="google_play" className="w-[144.17px] h-[43.08px] object-contain cursor-pointer" />
      </div> */}
    </div>
  </section>
);

export default Billing;
