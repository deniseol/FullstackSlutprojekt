import { useEffect } from 'react'
import './App.css'

function App() {
    useEffect(() => {
        fetch("/api")
        .then(res => res.json())
        .then(data => console.log(data));
    }, []);

    return (
        <div>
        <h1>Min app</h1>
        </div>
          )

}

export default App

/* import { useEffect } from 'react'
import './App.css'

function App() {
  useEffect(() => {
    fetch("/api")
      .then(res => res.json())
      .then(data => console.log(data))
  }, [])


  return (
   <></>
  )
}

export default App */

/*  const [data, setData] = useState(null);

    useEffect(() => {
    fetch("/api")
        .then(res => res.json())
        .then(data => setData(data))
        .catch(err => console.error("API error:", err));
    }, []);

    if (!data) return <div>Loading...</div>; */
/*
add existing projecgt to github¨
1. Förbered din lokala kod
Se till att din kod finns i en mapp på din dator (t.ex. mitt-projekt).

Om du använder Vite/React/Node.js har du förmodligen redan en package.json och andra projektfiler.

2. Skapa ett nytt repository på GitHub
Gå till github.com och logga in.

Klicka på "New" (grön knapp) för att skapa ett nytt repository.

Fyll i:

Repository name: mitt-projekt (eller vad du vill)

Public/Private: Välj (Public är gratis)

Lämna "Initialize this repository with a README" omarkerat (om du redan har kod).

Klicka på "Create repository".

3. Initiera Git i din projektmapp (lokalt)
Öppna Command Prompt (Windows) eller Terminal (Mac/Linux) och navigera till din projektmapp:


cd sökväg/till/din/projektmapp
Kör sedan:


git init
git add .
git commit -m "Första commit: Projektuppsättning"
4. Koppla din lokala kod till GitHub
PS C:\Iths\fullstack\FullstackSlutprojekt> git remote add origin https://github.com/deniseol/FullstackSlutprojekt.git
PS C:\Iths\fullstack\FullstackSlutprojekt> git branch -M main
PS C:\Iths\fullstack\FullstackSlutprojekt> git push -u origin main
 */
