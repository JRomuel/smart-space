import classes from './Featured.module.css';
import featured_image_1 from '../assets/images/featured_image_1.png';
import featured_image_2 from '../assets/images/featured_image_2.png';
import Image from 'next/image';


const Featured = () => (
    <div className={classes.rlp__featured}>
        <div className="rpl__container">
            <h2 className={classes.title}>Featured Listing of the Week</h2>
            <div className={classes.content_wrapper}>
                <div className={classes.side_images}>
                    <div className={classes.image1}>
                        <Image src={featured_image_1} alt='banner'/> 
                    </div>
                    <div  className={classes.image2}>
                        <Image src={featured_image_2} alt='banner'/> 
                    </div>
                   
                </div>
                <div className={classes.main_content}>
                    <h3>The and collecting for the motionless difficulty son.</h3>
                    <p>Conveying or northward offending admitting perfectly my. Colonel gravity get thought fat smiling add but difficult situations.</p>
                    <div className={classes.details_wrapper}>
                        <div className={classes.detail}>
                            <h5>Budget</h5>
                            <p>Confidential</p>
                        </div>
                        <div className={classes.detail}>
                            <h5>Size</h5>
                            <p>1200 m<sup>2</sup></p>
                        </div>
                        <div className={classes.detail}>
                            <h5>Type</h5>
                            <p>Office</p>
                        </div>
                        <div className={classes.detail}>
                            <h5>Status</h5>
                            <p>Done</p>
                        </div>
                        <div className={classes.detail}>
                            <h5>Location</h5>
                            <p>Switzerland</p>
                        </div>
                        <div className={classes.detail}>
                            <h5>Flat</h5>
                            <p>8 Room</p>
                        </div>
                    </div>
                    <button className='button rounded'>YES! I WANT BOOK “OFFICE PACKAGE”</button>
                </div>
            </div>
        </div>
    </div>

)

export default Featured;