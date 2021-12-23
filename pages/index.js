import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Navbar from '../components/navbar/navbar'
import Footer from '../components/footer/footer'
import Link from 'next/link'


function Home() {
  return (
    <>
    <Head>
      <title> Gallery | Homepage </title>      
    </Head> 
      <section className={styles.section}>  
        <div className={styles.content}>
          <header>
            <h1>THE BEST PHOTO GALLERY IN TOWN</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae quos iure deserunt amet perspiciatis nam odit repellendus nesciunt vitae veniam non deleniti facere cum possimus corrupti, dolore ad numquam? Similique.</p>
          </header>
          <div className="cta">
            <Link href='/gallery'><a>See Gallery</a></Link> 
          </div>
        </div>
        <div className={styles.bgImageContainer}>
          <div className={styles.bgImage}>
            <img src='./cover.jpg' width={5472 / 10} height={3648 / 10}/>
          </div>        
        </div>
      </section>
    </> 
  )
}

export default Home;