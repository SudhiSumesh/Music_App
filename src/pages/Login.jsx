import { Link } from "react-router-dom";
import { useState } from "react";
import "../styles/Login.css";
const Login = ({ url }) => { 
  // validation
  const [values, setValues] = useState({
    userName: "",   
    password: "",
  });
  const [validateError, setValidateError] = useState({});
  const person = {
    userName: "Amal",  
    password: "123",
  };
  const errors={}
  //handle input change
  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
  };
  //handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (values.userName !== person.userName ) {
      errors.userNameError='Incorrect user name'
      setValidateError(errors)
    } 
    else if(values.password !== person.password){
      errors.password='Incorrect user password'
      setValidateError(errors)
    }
    else {
    window.location=url
       console.log("login");
       setValidateError(errors)
      
    }
  };
  return (
    <div className="bg">
      <header>
        <div className="logo">
          <img
            src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_Green.png"
            alt=""
          />
        </div>
      </header>
      <main>
        <form className="login-container"  onSubmit={handleSubmit}>
          <h1>Log in to Spotify</h1>

          <div>
            <div className="input-container">
              <label htmlFor="">Username</label>
              <input
                type="text"
                name="userName"
                placeholder="Email or username"
                onChange={handleChange}    
              />
                   {validateError.userNameError && (
                <div style={{ color: "red"}}> Incorrect  username </div>
              ) }
            </div>
            <div className="input-container">
              <label htmlFor="">Password</label>
              <input
                type="password"
                name="password"
                placeholder="Password"
                onChange={handleChange}
              />
                   {validateError.password &&(
                <div style={{ color: "red" }}>Incorrect  password</div>
              )}
            </div>
          </div>
          <div>
            <button type="submit" className="bg-green next-btn">
              Login
            </button>
          </div>
          <div className="sign-container">
            <a href="">Forgot your password?</a>
          </div>
          <span className="dont">
            Don't have an account?<Link to='/signup'>Sign up for spotify</Link>
          </span>
        </form>
        <footer>
          <span>This site is protected by reCAPTCHA and the Google </span>
          <span>
            <a href="">Privacy Policy</a> and{" "}
            <a href="">Terms of Service apply.</a>
          </span>
        </footer>
      </main>
    </div>
  );
};

export default Login;
