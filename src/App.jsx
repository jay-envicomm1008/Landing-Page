import styles from "./style";
import { Billing, Business, CardDeal, Clients, CTA, Footer, Navbar, Stats, Testimonials, Hero } from "./components";

const App = () => (
  <div>

    <div className="bg-black w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>
      
      <div style={{ background: '#404041' }}>
        <div className={`bg-gradient ${styles.flexStart}`} >
          <div className={`${styles.boxWidth}`}>
            <Hero />
          </div>
        </div>
        
        <div className={`bg-gradient ${styles.flexStart}`} >
          <div className={`${styles.boxWidth}`}>
            <Stats />
            <Business />
            <Billing />
            <CardDeal />
            <Testimonials />
            <Clients />
            <CTA />
            <Footer />
          </div>
        </div>  
      </div>
    </div>

    </div>
);

export default App;
