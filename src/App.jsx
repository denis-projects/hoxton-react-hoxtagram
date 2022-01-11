import { useEffect, useState } from 'react'
import './App.css'
import Logo from './Components/Logo'
import Posts from './Components/Posts'

function App() {
    const [posts, setPost] = useState([])

    useEffect(() => {
        fetch(`http://localhost:8000/images`).then(resp => resp.json())
            .then(posts => setPost(posts))
    }, [])



    return (
        <div className="App">
            <Logo />

            <Posts posts={posts} />

        </div>
    )
}

export default App