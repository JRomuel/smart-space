import { TextField } from "@mui/material";
import classes from './Newsletter.module.css';

const Newsletter = () => (
    <div className={classes.newsletter_area}>
        <h4>Get Our Newsletter</h4>
        <p className={classes.subtitle}>To join the worldwide community</p>
        <div className={classes.textfield}>
            <div className={classes.textinput}>
                <TextField fullWidth id="standard-basic" label="Type your Email Address" variant="outlined"/>
            </div>
            <button className='button newsletter'>Send Now</button>
        </div>
        <hr />
    </div>
);


export default Newsletter;

