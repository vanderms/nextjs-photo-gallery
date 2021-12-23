import Head from 'next/head'
import path from '../../lib/path';
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
          <img src={path('/pexels-anna-shvets-3727461.jpg')} width={320} height={480}/>
          <img src={path('/pexels-fauxels-3183134.jpg')} width={320} height={480}/>
          <img src={path('/pexels-longxiang-qian-1984527.jpg')} width={320} height={480}/>
          <img src={path('/pexels-scott-webb-139205.jpg')} width={320} height={480}/>
          <img src={path('/pexels-tru-fotos-2042538.jpg')} width={320} height={480}/>
        </div>
      </section>
    </>
  )
}


export default Gallery;