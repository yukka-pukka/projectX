import { Autocomplete } from "@react-google-maps/api";
import React from "react";
import UserContext from "../../UserContext";

const Profile = () => {
  const { user } = React.useContext(UserContext);

  return (
    <div>
      <div
        style={{
          width: "100%",
        }}
      >
        <div>
          <img
            style={{ width: "160px", height: " 160 px", borderRadius: "80px" }}
          />
        </div>
        <div>
          <h5
            style={{
              width: "fit-content",
              marginRight: "0",
              marginLeft: "auto",
            }}
          >
            Welcome {user.email}
          </h5>
        </div>
      </div>
      <h2
        style={{
          marginTop: "24px",
          margin: "15 px 0px",
        }}
      >
        Saved Search:
      </h2>
      <div>
        <a href="/restaurants?q=wings"> Wings</a>
      </div>
    </div>
  );
};

export default Profile;

// import React, { useContext } from 'react';
// import { Redirect } from 'react-router-dom';
// import {UserContext} from "../user/login";
// import './Profile.css';

// const Profile = () => {
//     const user = useContext(UserContext)

//     return (
//         user ? (
//         <div>
//             <h1>Welcome, {user.name}</h1>
//             <h3>Your Information:</h3>
//             <h4>Name:</h4>
//             <p>{user.name}</p>
//             <h4>Email:</h4>
//             <p>{user.email}</p>
//         </div>
//     ) : (<Redirect to="/"/>)
//     )
// }
// export default Profile;
