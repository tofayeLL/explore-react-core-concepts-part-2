
import './Post.css'
export default function Post({post}){
    const {id, title, body} = post;
    return(
        <div className="postStyle">
            <h3>postId: {id}</h3>
            <h4>Title: {title}</h4>
            <p>Description: {body}</p>
        </div>
    )
}