import classes from './Hero.module.css';
import Image from 'next/image';
import airbnb_logo from '../assets/images/airbnb_logo.svg';
import buzz_logo from '../assets/images/buzz_logo.svg';
import chase_logo from '../assets/images/chase_logo.svg';
import gucc_logo from '../assets/images/gucc_logo.svg';
import microsoft_logo from '../assets/images/microsoft_logo.svg';
import uber_logo from '../assets/images/uber_logo.svg';
import hero_image from '../assets/images/hero-image.jpg';
import { AiOutlineHome } from 'react-icons/ai'; 
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import { motion } from 'framer-motion';

// const easing = [.6, -.05, .01, .99];

const fadeInUp = {
    initial: {
        y: 60,
        opacity: 0
    },
    animate: {
        y: 0,
        opacity: 1,
        transition: {
            duration: .6,
        }
    }
}

const fadeInUp2 = {
    initial: {
        y: 60,
        opacity: 0
    },
    animate: {
        y: 0,
        opacity: 1,
        transition: {
            duration: .6,
            delay: 1.2
        }
    }
}

const fadeInUp3 = {
    initial: {
        y: 100,
        opacity: 0
    },
    animate: {
        y: 0,
        opacity: 1,
        transition: {
            duration: .6,
            delay: 1.9
        }
    }
}
const socail_animate = {
    initial: {
        x: 40,
        opacity: 0
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            duration: .4,
        }
    }
}

const socail_animate_stagger = {
    animate: {
        transition: {
            staggerChildren: 0.3,
            delayChildren: 2.2,

        }
    }
}

const stagger = {
    animate: {
        transition: {
            staggerChildren: 0.3,
            delayChildren: .4,
        }
    }
}

const Hero = () => (
    <motion.div className={classes.rlp__hero} exit={ {opacity: 0} } initial='initial' animate='animate'>
        <motion.div className={classes.tealbg} initial={{ height: 0 }} animate={{ height: '100%', transition: { duration: 1, delay: 1.5 } }}></motion.div>
        <div className="rpl__container">
            <div className={classes.content_wrapper}>
                <motion.div variants={stagger} className={classes.left_content}>
                    <motion.p variants={fadeInUp} className={classes.top_text}>RESIDENTIAL & OFFICE SPACES</motion.p>
                    <motion.h1 variants={fadeInUp}>Smart Living Style for Smart People</motion.h1>
                    <motion.p variants={fadeInUp}>Much did had call new drew that kept. Limits expect wonder law she. Now has you views woman noisy match money rooms.</motion.p>
                </motion.div>

                <motion.div variants={fadeInUp2} className={classes.content__input}>
                    <span className={classes.input_addon}><AiOutlineHome /></span>
                    <input type="text" placeholder="Enter Zipcode to search properties"/>
                    <button type="button">Search Now!</button>
                </motion.div>
                
                <div className={classes.partners}>
                    <p>Our Amazing Partners</p>
                    <div className={classes.partners_wrapper}>
                        <div className={classes.partner_image}>
                            <Image src={buzz_logo} alt='banner'/>  
                        </div>
                        <div className={classes.partner_image}>
                            <Image src={chase_logo} alt='banner'/>  
                        </div>
                        <div className={classes.partner_image}>
                            <Image src={microsoft_logo} alt='banner'/>  
                        </div>
                        <div className={classes.partner_image}>
                            <Image src={gucc_logo} alt='banner'/>  
                        </div>
                        <div className={classes.partner_image}>
                            <Image src={airbnb_logo} alt='banner'/>  
                        </div>
                        <div className={classes.partner_image}>
                            <Image src={uber_logo} alt='banner'/>  
                        </div>
                    </div>

                </div>

                <motion.div variants={ fadeInUp3 } className={classes.right_image}>
                    <Image src={hero_image} layout="responsive" alt='banner'/>  
                </motion.div>
            </div>
        </div>
        <div className={classes.lines}>
            <div></div>
            <div></div>
            <div></div>
        </div>

        <motion.div variants={socail_animate_stagger} className={classes.socials}>
            <motion.span variants={ socail_animate }><FaFacebookF /></motion.span>
            <motion.span variants={ socail_animate }><FaInstagram /></motion.span>
            <motion.span variants={ socail_animate }><FaTwitter /></motion.span>
            <motion.span variants={ socail_animate }><FaLinkedin /></motion.span>
        </motion.div>
    </motion.div>
)

export default Hero;