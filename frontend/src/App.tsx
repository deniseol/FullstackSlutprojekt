import { useEffect } from 'react'
import './App.css'

function App() {
    useEffect(() => {
        fetch("/api")
        .then(res => res.json())
        .then(data => console.log(data));
    }, []);

}

export default App

/*  const [data, setData] = useState(null);

    useEffect(() => {
    fetch("/api")
        .then(res => res.json())
        .then(data => setData(data))
        .catch(err => console.error("API error:", err));
    }, []);

    if (!data) return <div>Loading...</div>; */
