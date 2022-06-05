import React from "react";

const AuthContext = React.createContext({
  ctxUserName: "sonu@user.com",
  role: "Admin",
  access: 123,
  loggedIn: true,
});

export default AuthContext;
