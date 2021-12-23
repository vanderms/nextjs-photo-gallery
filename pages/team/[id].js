import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import  NotFound from '../../components/404/404'

function Details(props){

  const router = useRouter();
  const [ member, setMember ] = useState(null);  

  useEffect(()=>{
    const query = async ()=>{
      
      const res = await fetch(`https://jsonplaceholder.typicode.com/users/${router.query.id}`);
      
      if(res.ok) setMember({found: true, data: await res.json()})
      else setMember({ found: false })
    }

    if(router?.query?.id) query()
      
  }, [router])
  
  if(member == null){
    return null;
  }
  
  if(member.found == false){
    return <NotFound/>
  }

  return (
    <section className="details">
      <h1>{member.data.name}</h1>
      <p>{member.data.email}</p>      
      <p>{member.data.address.city}</p>      
    </section>
  )  
}

export default Details;