import Navbar from "../navbar/navbar"
import Footer from "../footer/footer"


function Layout({ children }){  
  return (
    <>
      <Navbar/>
      <main>
        { children }
      </main>       
      <Footer/>
    </>
  ) 
}

export default Layout;