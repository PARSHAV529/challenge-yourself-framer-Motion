import { Link } from 'react-router-dom';
import { motion,useTransform,useScroll } from 'framer-motion';

import cityImg from '../assets/city.jpg';
import heroImg from '../assets/hero.png';

export default function WelcomePage() {

  const {scrollY}=useScroll()

  const opacityCity = useTransform(scrollY,[0,200,300,500],[1,0.5 ,0.5,0])
  const opacityHero= useTransform(scrollY,[0,300,600],[1,1 ,0])
  const YCity = useTransform(scrollY,[0,200],[0,-100])
  const YHero = useTransform(scrollY,[0,200],[0,-150])
  const yText= useTransform(scrollY,[0,200,300,500],[0,50,50,300])
  const xLeft= useTransform(scrollY,[0,600,700],[-150,-75,0])
  const s3Left= useTransform(scrollY,[0,600,900],[-150,-75,0])
  const s4Right= useTransform(scrollY,[0,800,1000],[-150,-75,0])
  const xRight= useTransform(scrollY,[0,600,700],[150,75,0])
  const scaleText = useTransform(scrollY,[0,300],[1.3,1.5])

  return (
    <>
      <header id="welcome-header">
        <motion.div style={{y:yText,scale:scaleText}} id="welcome-header-content">
          <h1>Ready for a challenge?</h1>
          <Link id="cta-link" to="/challenges">
            Get Started
          </Link>
        </motion.div>
        <motion.img
          style={{opacity:opacityCity,y:YCity}}
          src={cityImg}
          alt="A city skyline touched by sunlight"
          id="city-image"
        />
        <motion.img style={{opacity:opacityHero,y:YHero}} src={heroImg} alt="A superhero wearing a cape" id="hero-image" />
      </header>
      <main id="welcome-content">
        <motion.section style={{x:xLeft}}>
          <h2>There&apos;s never been a better time.</h2>
          <p>
            With our platform, you can set, track, and conquer challenges at
            your own pace. Whether it&apos;s personal growth, professional
            achievements, or just for fun, we&apos;ve got you covered.
          </p>
        </motion.section>

        <motion.section style={{x:xRight}}>
          <h2>Why Challenge Yourself?</h2>
          <p>
            Challenges provide a framework for growth. They push boundaries,
            test limits, and result in genuine progress. Here, we believe
            everyone has untapped potential, waiting to be unlocked.
          </p>
        </motion.section>

        <motion.section style={{y:s3Left}}>
          <h2>Features</h2>
          <ul>
            <li>Custom challenge creation: Set the rules, define your pace.</li>
            <li>
              Track your progress: See your growth over time with our analytics
              tools.
            </li>
            <li>
              Community Support: Join our community and get motivated by peers.
            </li>
          </ul>
        </motion.section>

        <motion.section style={{y:s4Right}}>
          <h2>Join Thousands Embracing The Challenge</h2>
          <p>
            “I never realized what I was capable of until I set my first
            challenge here. It&apos;s been a transformative experience!” - Alex
            P.
          </p>
          {/* You can add more testimonials or even a carousel for multiple testimonials */}
        </motion.section>
      </main>
    </>
  );
}
