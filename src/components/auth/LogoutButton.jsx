// import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <button className="btn btn-primary" onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
      Гарах
    </button>
  );
};

export default LogoutButton;