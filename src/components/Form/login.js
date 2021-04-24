import React, { useState } from "react";

function login() {
  const adminUser = {
    email: "admin@admin.com",
    password: "admin123",
  };

  const [user, setUser] = userState({ name: "", emil: "" });
  const [error, setError] = useState("");

  const Login = (details) => {};

  return <div></div>;
}

export default login;
