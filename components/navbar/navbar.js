import Link from 'next/link'



export default function Navbar(){
  return (
    <nav className='navbar'>
      <div className="logo">
        PHOTO GALLERY
      </div>
      <ul>
        <li><Link href='/'><a>Home</a></Link></li>
        <li><Link href='/about'><a>About</a></Link></li>
        <li><Link href='/gallery'><a>Gallery</a></Link></li>
        <li><Link href='/team'><a>Team</a></Link></li>
      </ul>
    </nav>

  )
}