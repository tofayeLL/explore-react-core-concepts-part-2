import './User.css'
export default function User({userInfo}){
    
    return (
        <div className='userStyle'>
            <h3>name: {userInfo.name}</h3>
            <p>email: {userInfo.email}</p>
        </div>
    )
}