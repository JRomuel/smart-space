import classes from './HowItWorks.module.css';
import Image from 'next/image';
import research_icon from '../assets/images/research_icon.svg';
import instant_valuation_icon from '../assets/images/instant_valuation_icon.svg';
import track_property_icon from '../assets/images/track_property_icon.svg';


const HowItWorks = () => (

    <div className={classes.rlp__hiworks}>
        <div className="rpl__container">
            <h2 className={classes.title}>How it works?</h2>
            <div className={classes.cards_wrapper}>
                <div className={classes.card}>
                    <div className={classes.card_icon}>
                        <Image src={research_icon} alt='banner'/>  
                    </div>
                    <h4>Research Suburbs</h4>
                    <p>Wonder twenty hunted and put income set desire expect. Am cottage calling.</p>
                </div>
                <div className={`${classes.card} ${classes.valuation}`}>
                    <div className={classes.card_icon}>
                        <Image src={instant_valuation_icon} alt='banner'/>  
                    </div>
                    <h4>Instant Valuation</h4>
                    <p>Conveying or northward offending admitting perfectly my. Colonel gravit and moonlight.</p>
                </div>
                <div  className={`${classes.card} ${classes.property}`}>
                    <div className={classes.card_icon}>
                        <Image src={track_property_icon} alt='banner'/>  
                    </div>
                    <h4>Track Property</h4>
                    <p>Moderate children at of outweigh it. Unsatiable it considered invitation he travelling insensible.</p>
                </div>
            </div>
        </div>
    </div>
)


export default HowItWorks;