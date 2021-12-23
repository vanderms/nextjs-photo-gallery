import Head from 'next/head'
import styles from './gallery.module.css';


function Gallery(){
  return(
    <>
    <Head>
      <title> Gallery | Photos </title>
    </Head>
      <section>
        <h1>Gallery</h1>
        <div className={styles.container}>
          <img src='/pexels-anna-shvets-3727461.jpg' width={320} height={480}/>
          <img src='/pexels-fauxels-3183134.jpg' width={320} height={480}/>
          <img src='/pexels-longxiang-qian-1984527.jpg' width={320} height={480}/>
          <img src='/pexels-scott-webb-139205.jpg' width={320} height={480}/>
          <img src='/pexels-tru-fotos-2042538.jpg' width={320} height={480}/>
        </div>
      </section>
    </>
  )
}


export default Gallery;