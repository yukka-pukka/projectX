import React from "react";

import Routes from "./components/routes";
import UserContext from "./UserContext";
import firebase from "./utils/firebase";



const App = () =>  {
  const [user, setUser] = React.useState(undefined);

  React.useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      setUser(user);
      if (user) {
        console.log(user.email);
        console.log(user.uid);
      } else {
        console.log("no user logged in");
      }
    });
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <Routes />
    </UserContext.Provider>
  );
};

export default App;
