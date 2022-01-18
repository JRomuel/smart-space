import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Hero from '../containers/Hero'
import HowItWorks from '../containers/HowItWorks'


export default function Home() {
  return (
    <>
      <Hero/>
      <HowItWorks/>
    </>

  )
}
