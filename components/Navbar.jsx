import Link from 'next/link';
import { FcMenu, FcHome, FcAbout } from 'react-icons/fc';
import { BsSearch } from 'react-icons/bs';
import { FiKey } from 'react-icons/fi';
import classes from './Navbar.module.css';
import { motion } from 'framer-motion';

const fadeInDown = {
    initial: {
        y: 60,
        opacity: 0
    },
    animate: {
        y: 0,
        opacity: 1,
        transition: {
            duration: .6,
            delay:2
        }
    }
}

const MenuLinks = () => (
    <>
    <ul>
        <li><Link href='/' ><a className={classes.active}>Home</a></Link></li>
        <li><Link href='/'>About</Link></li>
        <li><Link href='/'>Service</Link></li>
        <li><Link href='/'>Portfolio</Link></li>
        <li><Link href='/'>Blog</Link></li>
        <li><Link href='/'>Contact</Link></li>
    </ul>
    </>
)

const Navbar = () => (
    
        <nav className={classes.rlp__navbar}>
            <div className='rpl__container'>
                <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .1, duration: .6 }} className={classes.rlp__navbar_wrapper}>
                    <div className={classes.logo}>
                        <Link href='/' mt='2'>SmartSpace</Link>
                    </div>
                    <div className={classes.links_container}>
                        <MenuLinks/>
                    </div>
                </motion.div>
           
            </div>
        </nav>

);

export default Navbar;