import { useState, useEffect } from "react";
import gamaxios from "src/api.documentation";

const AuthStore = () => {
  const [userData, setUserData] = useState({});
  const [status, setStatus] = useState("initial"); // initial | user | guest
  const [tagihan, setTagihan] = useState(0);

  const authMethods = {
    authenticate: () => {},
    login: ({ email, password }) => {
      console.log("jabnjh");
      return gamaxios
        .post("/login-customer", {
          email,
          password,
        })
        .then((res) => {
          setStatus("user");
          setUserData(res.data.body.user_data);
          console.log("res", res);
        })
        .catch((err) => {
          console.log("err", err);

          console.log(err.response.data.message);
        });
    },
    signup: ({ name, email, password }) => {
      console.log(name, email, password);
      return gamaxios
        .post("/register-customer", {
          name,
          email,
          password,
        })
        .then((res) => {
          setStatus("user");
          setUserData(res.data.body.user_data);
          console.log("res", res);
        })
        .catch((err) => {
          console.log("err", err);

          console.log(err.response.data.message);
        });
    },
    logout: () => {
      setStatus("guest");
    },
  };

  useEffect(() => {
    //masuk
    setStatus("guest");
  }, []);
  useEffect(() => {
    console.log(userData);
  }, [userData]);

  return {
    status,
    authMethods,
    userData,
    tagihan,
    setTagihan,
  };
};

export default AuthStore;
