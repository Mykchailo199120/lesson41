import { useState } from 'react'
import './App.css'



function App() {
  const [userId,setUserId] = useState(1)

  return (
    <>

        <div className={"App"}>
            <h1>React + Axios</h1>

            <label>
                Оберіть ID користувача:
                <input
                type="number"
                value={userId}
                onChange={(e) => setUserId(Number(e.target.value))}
                min="1"
                />
            </label>
            <userPosts userId={userId} />
        </div>
    </>
  )
}

export default App
