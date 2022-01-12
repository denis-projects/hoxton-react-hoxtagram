import { useEffect, useState } from 'react'
import './App.css'
import Logo from './Components/Logo'
import Posts from './Components/Posts'

function App() {
    const [images, setImages] = useState([]);
    useEffect(() => {
        fetch("http://localhost:3000/images")
            .then((resp) => resp.json())
            .then((images) => setImages(images));
        console.log(images);
    }, []);

    function showLikes(image) {
        return fetch(`http://localhost:3000/images/${image.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(image),
        }).then((resp) => resp.json());
    }

    function increaseLikes(image) {
        const update = [...images];
        image.likes++;
        showLikes(image);
        setImages(update);
    }

    return (
        <div className="App">
            <Logo />

            <Posts posts={Posts} />

        </div>
    )
}

export default App