import classes from './Reviews.module.css';
import { AiFillStar } from "react-icons/ai";
import jane_cooper from '../assets/images/jane_cooper.png';
import robert_fox from '../assets/images/robert_fox.png';
import leslie from '../assets/images/leslie.png';
import airbnb_logo from '../assets/images/airbnb_logo.svg';
import buzz_logo from '../assets/images/buzz_logo.svg';
import chase_logo from '../assets/images/chase_logo.svg';
import gucc_logo from '../assets/images/gucc_logo.svg';
import microsoft_logo from '../assets/images/microsoft_logo.svg';
import uber_logo from '../assets/images/uber_logo.svg';
import Image from 'next/image';



const Reviews = () => (
    <div className={classes.rlp__reviews}>
            <div className="rpl__container">
                <h2 className={classes.title}>Loved by businesses, and individuals across the globe.</h2>
                <div className={classes.reviews_wrapper}>
                    <div className={classes.review}>
                        <div className={classes.rating_wrapper}>
                            <span className={classes.rating}><AiFillStar /></span>
                            <span className={classes.rating}><AiFillStar /></span>
                            <span className={classes.rating}><AiFillStar /></span>
                            <span className={classes.rating}><AiFillStar /></span>
                            <span className={classes.rating}><AiFillStar /></span>
                        </div>
                        <div className={classes.comment}>
                            <p>Moderate children at of outweigh it. Unsatiable it considered invitation he travelling insensible. Consulted admitting oh mr up as described.</p>
                        </div>
                     
                        <div className={classes.author}>
                            <div  className={classes.author_image}>
                                <Image src={jane_cooper} alt='banner'/> 
                            </div>
                            <div className={classes.author_details}>
                                <p className={classes.name}>Jane Cooper</p>
                                <p className={classes.location}>Los Angeles, CA</p>
                            </div>
                        </div>
                    </div>
                    <div className={classes.review}>
                        <div className={classes.rating_wrapper}>
                            <span className={classes.rating}><AiFillStar /></span>
                            <span className={classes.rating}><AiFillStar /></span>
                            <span className={classes.rating}><AiFillStar /></span>
                            <span className={classes.rating}><AiFillStar /></span>
                            <span className={classes.rating}><AiFillStar /></span>
                        </div>
                        <div className={classes.comment}>
                            <p>The and collecting motionless difficulty son. His hearing staying ten colonel met. Sex drew six easy four dear cold</p>
                        </div>
                     
                        <div className={classes.author}>
                            <div  className={classes.author_image}>
                                <Image src={robert_fox} alt='banner'/> 
                            </div>
                            <div className={classes.author_details}>
                                <p className={classes.name}>Robert Fox</p>
                                <p className={classes.location}>New York City, NY</p>
                            </div>
                        </div>
                    </div>
                    <div className={classes.review}>
                        <div className={classes.rating_wrapper}>
                            <span className={classes.rating}><AiFillStar /></span>
                            <span className={classes.rating}><AiFillStar /></span>
                            <span className={classes.rating}><AiFillStar /></span>
                            <span className={classes.rating}><AiFillStar /></span>
                            <span className={classes.rating}><AiFillStar /></span>
                        </div>
                        <div className={classes.comment}>
                            <p>Sociable on as carriage my position weddings raillery consider. Peculiar trifling absolute and wandered vicinity property yet.</p>
                        </div>
                     
                        <div className={classes.author}>
                            <div  className={classes.author_image}>
                                <Image src={leslie} alt='banner'/> 
                            </div>
                            <div className={classes.author_details}>
                                <p className={classes.name}>Leslie Alexander</p>
                                <p className={classes.location}>Buffalo, NJ</p>
                            </div>
                        </div>
                    </div>

            
                </div>

                <div className={classes.partners_contact}>
                    <div className={classes.partners}>
                        <div className={classes.partners_wrapper}>
                            <div className={classes.partner_image}>
                                <Image src={airbnb_logo} alt='banner'/>  
                            </div>
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
                                <Image src={uber_logo} alt='banner'/>  
                            </div>
                        </div>

                    </div>
                    <div className={classes.contact}>
                        <p>Give us a Call 1-888-111-2222 and we can set you up, or check our pricing plans</p>
                    </div>
                </div>
            
            </div>
    </div>
)

export default Reviews;