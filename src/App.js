import "./App.css";
import twitterLogo from "./assets/twitter.svg";
import { useState, useEffect } from "react";
import Search from "./components/Search";
import Avatar from "./components/Avatar";
import UserBox from "./components/UserBox";
import Tweets from "./components/Tweets";
import Welcome from "./components/Welcome";
import UserActions from "./components/UserActions";

const App = () => {
  const [usernames, setUsernames] = useState("");
  const [users, setUsers] = useState([]);
  const [userSelected, setUserSelected] = useState({});

  const getData = () => {
    const user = doesExist(usernames);
    if (user) {
      setUserSelected(user);
      alert("User already exists!");
    } else {
      fetch(`/.netlify/functions/user-fetch?usernames=${usernames}`)
        .then((x) => x.json())
        .then(({ msg }) => {
          let usersList = users ? users.concat(msg.data) : msg.data;
          storeLocally(usersList);
        });
    }
  };

  const storeLocally = (usersList) => {
    setUsers(usersList);
    localStorage.setItem("usersList", JSON.stringify(usersList));
  };

  const openProfile = (username) =>
    window.open(`https://twitter.com/${username}`, "_blank");

  const removeProfile = (userId) => {
    const usersList = users.filter((item) => item.id !== userId);
    storeLocally(usersList);
    setUserSelected({});
  };

  const doesExist = (username) => {
    const exists = users.find((user) => user.username === username);
    return exists;
  };

  useEffect(() => {
    let usersList = JSON.parse(localStorage.getItem("usersList"))
      ? JSON.parse(localStorage.getItem("usersList"))
      : [];
    setUsers(usersList);
  }, []);

  return (
    <div className="app flex-row">
      <aside className="sidebar">
        <header className="appbar">
          <Avatar image={twitterLogo} />
        </header>
        <Search setSearch={setUsernames} onClick={() => getData()} />
        <div className="user-boxes">
          {users ? (
            users.map((user) => (
              <UserBox
                user={user}
                key={user.id}
                setUserSelected={setUserSelected}
              />
            ))
          ) : (
            <div></div>
          )}
        </div>
      </aside>
      {userSelected.id ? (
        <main className="container">
          <header className="appbar">
            <Avatar
              image={userSelected.profile_image_url}
              name={userSelected.name}
            />
            <UserActions
              openProfile={() => openProfile(userSelected.username)}
              deleteUser={() => removeProfile(userSelected.id)}
            />
          </header>
          <Tweets {...userSelected} />
        </main>
      ) : (
        <Welcome />
      )}
    </div>
  );
};

export default App;
