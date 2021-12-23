import Link from "next/link";

function MemberCard({ id, name, email, website }){
  return(
    <div className="member-card-component">
      <Link href={`/team/${id}`}><a>
        <h3 className="name">{ name }</h3>
      </a></Link>
     
      <div className="email">{ email }</div>
      <div className="website">{ website }</div>
    </div>
  )
}


export default MemberCard;