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

const Hero = () => (
    <div className={classes.rlp__hero}>
        <div className="rpl__container">
            <div className={classes.content_wrapper}>
                <div className={classes.left_content}>
                    <p className={classes.top_text}>RESIDENTIAL & OFFICE SPACES</p>
                    <h1>Smart Living Style for Smart People</h1>
                    <p>Much did had call new drew that kept. Limits expect wonder law she. Now has you views woman noisy match money rooms.</p>
                </div>

                <div className={classes.content__input}>
                    <span className={classes.input_addon}><AiOutlineHome /></span>
                    <input type="text" placeholder="Enter Zipcode to search properties"/>
                    <button type="button">Search Now!</button>
                </div>
                
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

                <div className={classes.right_image}>
                    <Image src={hero_image} alt='banner'/>  
                </div>
            </div>
        </div>
    </div>
)

export default Hero;