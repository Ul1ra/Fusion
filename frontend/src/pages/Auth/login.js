import { useState } from "react";
import { fetchAndDispatchToken } from "../../store/actions/authactions";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { withRouter, Link } from "react-router-dom";
import Footer from "../../components/Footer/footer";
import NavBar from "../../components/NavBar/navBar";
import "../../Styles/login.scss";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const loginClickHandler = () => {
    dispatch((dispatch, getState) =>
      fetchAndDispatchToken(
        dispatch,
        getState,
        username,
        password,
        email,
        navigate
      )
    );
  };

  return (
    <div id="Page">
      <NavBar />
      <div id="main">
        <div className="container-login">
          <div className="user-data">
            <div className="login-user-data">
            <h1>LOGIN</h1>
            </div>
            

            <div className="input-block">
              <div className="input">
                <input
                  className="input-field-user"
                  type="email"
                  placeholder="E-mail address"
                  value={email}
                  name="email"
                  onChange={(e) => setEmail(e.target.value)}
                  // type="text"
                  // placeholder="Username"
                  // value={username}
                  // name="username"
                  // onChange={(e) => setUsername(e.target.value)}
                />
              </div>

              <div className="input">
                <input
                  className="input-field-user"
                  type="password"
                  placeholder="Password"
                  value={password}
                  name="password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              {/* <div>
                <input
                  type="email"
                  placeholder="E-mail address"
                  value={email}
                  name="email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div> */}
            </div>
            <div className="login-button-container">
              <button className="button-medium" onClick={loginClickHandler}>
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
