import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.css'

export default function Home() {
  const {title, text, btn} = styles;
  return (
    <>
      <Header page={"Home | Ninjas"}/>
    <div className="">

      <h1 className={title}>Home</h1>
      <p className={text}>
        Lorem ipsum dolor sit amet  adipisicing elit. Debitis expedita mollitia blanditiis ex voluptatem officiis deserunt aperiam nobis error, iure ullam odio animi, nemo esse aliquid voluptatum tenetur. Ut, ullam?
      </p>
      <p className={text}>
        Lorem ipsum dolor sit amet  adipisicing elit. Debitis expedita mollitia blanditiis ex voluptatem officiis deserunt aperiam nobis error, iure ullam odio animi, nemo esse aliquid voluptatum tenetur. Ut, ullam?
      </p>
      <Link href='/Ninjas'><a className={btn}>See Ninjas</a></Link>
   
    </div>
    </>
    
  )
}
