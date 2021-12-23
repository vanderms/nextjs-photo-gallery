import MemberCard from "../../components/member-card/member-card";


export const getStaticProps = async function(){
  
  const res = await fetch('https://jsonplaceholder.typicode.com/users');  
  const members = await res.json();    
  return {
    props: { members }
  }
}



function Team({ members }){
  
  return(
    <section className="section-team">
      <header>
        <h1>Meet Our Team</h1>
      </header>
      <div className="cards-container">
        { members.map( member =>  <MemberCard {...member } key={member.id}/>)}
      </div>
    </section>
  )
}

export default Team;