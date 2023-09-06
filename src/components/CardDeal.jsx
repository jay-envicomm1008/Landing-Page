import { vision } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        <div className="text-black text-white">
          Vision <br className="sm:block hidden" />
        </div> 
      </h2>
      <p className={`${styles.paragraph} text-black text-justify max-w-[470px] mt-5`}>
        Our aim is to be the global leader in providing reliable
        environmental compliance and consultancy solutions
      </p>

      <Button styles={`mt-10`} />
    </div>

    <div className={layout.sectionImg}>
      {/* <img src={vision} alt="billing" className="w-[70%] h-[100%]" /> */}
    </div>
  </section>
);

export default CardDeal;
