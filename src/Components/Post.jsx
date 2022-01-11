import './Post.css'

function Post(props) {
    return <section className="image-container">

        {props.posts.map((post) => {
            return <article className="image-card">
                <h2 className="title">{post.title}</h2>
                <img src={post.image} className="image" />
                <div className="likes-section">
                    <span className="likes">{post.likes} likes</span>
                    <button className="like-button" onClick={() => props.increaseLikes(props.posts)}>♥</button>
                </div>
                <ul className="comments">
                    <li>Get rid of these comments</li>
                    <li>And replace them with the real ones</li>
                    <li>From the server</li>
                </ul>
            </article>
        })}

    </section>
}

export default Post