import './App.css';
import twitterLogo from './assets/twitter.svg'
import { useState, useEffect } from 'react'
import Search from './components/Search'
import Avatar from './components/Avatar'
import UserBox from './components/UserBox';
import Tweets from './components/Tweets'
import Welcome from './components/Welcome'

function App() {

  const [message, setMsg] = useState([])
  const [usernames, setUsernames] = useState([])
  const [users, setUsers] = useState([])
  const [userSelected, setUserSelected] = useState({})


  function getData() {
    fetch(`/.netlify/functions/fetchUser?username=${usernames}`)
      .then((x) => x.json())
      .then(({ msg }) => {
        console.log(msg.data);
        return setMsg(`${msg.data.id} ${msg.data.name}`)
      })
  }

  function storeLocally(data) {
    setUsernames(data)
    localStorage.setItem('username', data);
  }

  useEffect(() => {
    let username = localStorage.getItem('username')
    console.log(username);
    setUsernames(username)

  }, [])

  return (
    <div className="App">
      {/* <h2>Twitter Playground</h2>

      <div className="input">
        <input type="text" placeholder='Username' onChange={(e) => storeLocally(e.target.value)} value={username} />

      </div>
      <button type="submit" onClick={() => getData()}>Fetch</button>
      <div className="output">
        {message}
      </div> */}

      <aside>
        <header>
          <Avatar image={twitterLogo} />
        </header>
        <Search search={usernames} setSearch={setUsernames} />
        <div className="user__boxes">
          {
            users.map(user => (
              <UserBox
                name={user.name}
                key={user.id}
                setUserSelected={setUserSelected}
                image={user.image}
              />
            ))
          }

        </div>
      </aside>
      {
        userSelected.id ? (
          <main>
            <header>
              <Avatar image={userSelected.image} />
            </header>
            <Tweets></Tweets>
          </main>
        ) : (
          <Welcome />
        )
      }




    </div>
  );
}

export default App;
