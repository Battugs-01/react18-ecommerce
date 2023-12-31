// import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Ачааллаж...</div>;
  }

  return (
    isAuthenticated ? (
        <>
      <div>
        <img width={40} src={user.picture} alt={user.name} />
        {/* <h2>{user.name}</h2>
        <p>{user.email}</p> */}
      </div>
      <li>
        <LogoutButton/>
      </li>
      </>
    ) : (
        <li>
            <LoginButton/>
        </li>
    )
  );
};

export default Profile;