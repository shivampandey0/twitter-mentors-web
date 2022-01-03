import './App.css';
import twitterLogo from './assets/twitter.svg'
import { useState, useEffect } from 'react'
import Search from './components/Search'
import Avatar from './components/Avatar'
import UserBox from './components/UserBox';
import Tweets from './components/Tweets'
import Welcome from './components/Welcome'

function App() {

  const [usernames, setUsernames] = useState('')
  const [users, setUsers] = useState([])
  const [userSelected, setUserSelected] = useState({})


  function getData() {
    console.log('usernames for search', usernames);

    fetch(`/.netlify/functions/node-fetch?usernames=${usernames}`)
      .then((x) => x.json())
      .then(({ msg }) => {
        let usersList = users ? users.concat(msg.data) : msg.data;
        setUsers(usersList)
        storeLocally(usersList)
      })
  }

  function storeLocally(usersList) {
    localStorage.setItem('usersList', JSON.stringify(usersList));
  }

  useEffect(() => {
    let usersList = JSON.parse(localStorage.getItem('usersList'))
    setUsers(usersList)

  }, [])

  return (
    <div className="App">
      <aside>
        <header>
          <Avatar image={twitterLogo} />
        </header>
        <Search setSearch={setUsernames} onClick={() => getData()} />
        <div className="user__boxes">
          {
            users ? (users.map(user => (
              <UserBox
                name={user.name}
                key={user.id}
                setUserSelected={setUserSelected}
                image={user.profile_image_url}
              />
            ))) : (<div></div>)
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
