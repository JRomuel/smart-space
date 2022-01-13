import Link from 'next/link';
import { FcMenu, FcHome, FcAbout } from 'react-icons/fc';
import { BsSearch } from 'react-icons/bs';
import { FiKey } from 'react-icons/fi';
import classes from './Navbar.module.css';

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
                <div className={classes.rlp__navbar_wrapper}>
                    <div className={classes.logo}>
                        <Link href='/' mt='2'>SmartSpace</Link>
                    </div>
                    <div className={classes.links_container}>
                        <MenuLinks/>
                    </div>
                </div>
           
            </div>
        </nav>

);

export default Navbar;