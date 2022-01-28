import * as React from 'react';
import classes from './BestDeals.module.css';
import Image from 'next/image';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import best_deals_image1 from '../assets/images/best_deals_image1.jpg';
import best_deals_image2 from '../assets/images/best_deals_image2.jpg';
import best_deals_image3 from '../assets/images/best_deals_image3.jpg';



const theme = createTheme({
    palette: {
      primary: {
        // light: will be calculated from palette.primary.main,
        main: '#F85A47',
        // dark: will be calculated from palette.primary.main,
        // contrastText: will be calculated to contrast with palette.primary.main
      },
      secondary: {
        light: '#0066ff',
        main: '#0044ff',
        // dark: will be calculated from palette.secondary.main,
        contrastText: '#ffcc00',
      },
      // Used by `getContrastText()` to maximize the contrast between
      // the background and the text.
      contrastThreshold: 3,
      // Used by the functions below to shift a color's luminance by approximately
      // two indexes within its tonal palette.
      // E.g., shift from Red 500 to Red 300 or Red 700.
      tonalOffset: 0.2,
    },
  });

function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography component={'span'}>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };
  
  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

const BestDeals = () => {


    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    return(
        <div className={classes.rlp__bestDeals}>
            <div className="rpl__container">
                <div className={classes.title_button_wrapper}>
                    <div className={classes.title_wrapper}>
                        <h2>Best Real Estate Deals</h2>
                        <p>Colonel gravity get thought fat smiling add but. Wonder twenty hunted and put income set desire expect.</p>
                    </div>
                    <div className={classes.button}>
                        <button className='button rounded'>View All Property</button>
                    </div>
                </div>
                <ThemeProvider theme={theme}>
                    <Box sx={{ width: '100%' }}>
                        <Box sx={{ borderColor: 'divider' }}>
                            <Tabs className={classes.tabs} value={value} onChange={handleChange} aria-label="basic tabs example"  indicatorColor="primary"
            textColor="primary">
                                <Tab className={classes.tab} label="Residential Property" {...a11yProps(0)} />
                                <Tab className={classes.tab} label="Commercial Property" {...a11yProps(1)} />
                                <Tab className={classes.tab} label="Agriculture Property" {...a11yProps(2)} />
                                <Tab className={classes.tab} label="Industrial Property" {...a11yProps(3)} />
                            </Tabs>
                        </Box>
                        <TabPanel className={classes.tabpanel} value={value} index={0}>
                            <div className={classes.tab_images_wrapper}>
              
                                <div className={classes.tab_image}>
                                    <Image src={best_deals_image1} alt='banner'/> 
                                    <div className={classes.pills}>
                                        <span>Featured</span>
                                        <span>3D</span>
                                    </div> 
                                </div>
                         
                                <div className={classes.tab_image}>
                                    <Image src={best_deals_image3} alt='banner'/>  
                                    <div className={classes.pills}>
                                        <span>Featured</span>
                                    </div>
                                </div>

                                <div className={classes.tab_image}>
                                    <Image src={best_deals_image2} alt='banner'/> 
                                    <div className={classes.pills}>
                                        <span>Featured</span>
                                        <span>3D</span>
                                    </div>
                                </div>
                            </div>
              
                        </TabPanel>
                        <TabPanel className={classes.tabpanel} value={value} index={1}>
                            <div className={classes.tab_images_wrapper}>
                                <div className={classes.tab_image}>
                                    <Image src={best_deals_image1} alt='banner'/>  
                                    <div className={classes.pills}>
                                        <span>Featured</span>
                                        <span>3D</span>
                                    </div>
                                </div>
                                <div className={classes.tab_image}>
                                    <Image src={best_deals_image2} alt='banner'/>  
                                    <div className={classes.pills}>
                                        <span>Featured</span>
                                        <span>3D</span>
                                    </div>
                                </div>
                                <div className={classes.tab_image}>
                                    <Image src={best_deals_image3} alt='banner'/>  
                                    <div className={classes.pills}>
                                        <span>Featured</span>
                                        <span>3D</span>
                                    </div>
                                </div>
                            </div>
                        </TabPanel>
                        <TabPanel className={classes.tabpanel} value={value} index={2}>
                            <div className={classes.tab_images_wrapper}>
                                <div className={classes.tab_image}>
                                    <Image src={best_deals_image1} alt='banner'/>  
                                    <div className={classes.pills}>
                                        <span>Featured</span>
                                        <span>3D</span>
                                    </div>
                                </div>
                                <div className={classes.tab_image}>
                                    <Image src={best_deals_image3} alt='banner'/>  
                                    <div className={classes.pills}>
                                        <span>Featured</span>
                                        <span>3D</span>
                                    </div>
                                </div>
                                <div className={classes.tab_image}>
                                    <Image src={best_deals_image2} alt='banner'/>  
                                    <div className={classes.pills}>
                                        <span>Featured</span>
                                        <span>3D</span>
                                    </div>
                                </div>
                          
                            </div>
                        </TabPanel>
                        <TabPanel className={classes.tabpanel} value={value} index={3}>
                            <div className={classes.tab_images_wrapper}>
                            
                                <div className={classes.tab_image}>
                                    <Image src={best_deals_image2} alt='banner'/>  
                                    <div className={classes.pills}>
                                        <span>Featured</span>
                                        <span>3D</span>
                                    </div>
                                </div>
                                <div className={classes.tab_image}>
                                    <Image src={best_deals_image3} alt='banner'/>  
                                    <div className={classes.pills}>
                                        <span>Featured</span>
                                        <span>3D</span>
                                    </div>
                                </div>
                                <div className={classes.tab_image}>
                                    <Image src={best_deals_image1} alt='banner'/> 
                                    <div className={classes.pills}>
                                        <span>Featured</span>
                                        <span>3D</span>
                                    </div> 
                                </div>
                            </div>
                        </TabPanel>
                    </Box>
                </ThemeProvider>
            </div>
        </div>
    )
}



export default BestDeals;