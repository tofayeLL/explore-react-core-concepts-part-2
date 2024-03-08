 
export default function Friend({friend}){
   const {name, username, email} = friend;
    return (
        <div className="box">
            <h3>Name: {name}</h3>
            <h4>UserName: {username}</h4>
            <p>Email: {email}</p>
        </div>
    )
}