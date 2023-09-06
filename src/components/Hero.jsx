import styles from "../style";
import { discount, contact2 } from "../assets";
import GetStarted from "./GetStarted";

const Hero = () => {
  return (
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient  rounded-[10px] mb-2">
          <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
          <p className={`${styles.paragraph} ml-2`}>
            <span className="text-green">WELCOME TO</span> {" "}
            <span className="text-black"></span>
          </p>
        </div>

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="text-black flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
            ENVI-<br className="sm:block hidden" />{" "}
            <span className="text-black text-white ">COMM</span>{" "}
          </h1>
          <div className="ss:flex hidden md:mr-4 mr-0">
            <GetStarted />
          </div>
        </div>

        <h1 className="text-black font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full">
          CORPORATION.
        </h1>
        <p className={`${styles.paragraph} text-justify text-black max-w-[470px] mt-5`}>
          Conducting environmental evaluations is our main duties.
          We examine the potential effects of proposed developments
          on the surrounding ecosystems through meticulous data collecting and analysis. 
        
        </p>
      </div>

      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <img src={contact2} alt="billing" className="w-[80%] h-[60%] relative z-[5]" />

        
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        
      </div>

      <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted />
      </div>
    </section>
  );
};

export default Hero;
