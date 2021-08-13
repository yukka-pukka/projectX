import React from 'react'
import UserContext from "../../UserContext";

const Profile = () =>{
    const { user } = React.useContext(UserContext);

    return(
        <div>
            <div style = {{
                display: "flex",
                justifyContent: "space-around",
                margin: "15 px 0px",
            }}>
                <div>
                    <img style ={{ width: "160px", height :" 160 px", borderRadius: "80px"}}
                    
                 />
                </div>
                <div>
                    <h4>Welcome {user.email}</h4>
                </div>
                    <div>
                        <h5>Favorites</h5>
                    </div>
        </div>
    </div>


    )
}

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