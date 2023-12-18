import React from 'react'
import '../styles/SignUp.css'
import { Link } from 'react-router-dom'
const SignUp = () => {
  return (
    <>
  <div className="bg-black">
    <header>
      <div className="logo">
        <img
          src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_Green.png"
          alt=""
        />
      </div>
    </header>
    <div className="signup-container">
      <main>
        <section>
          <div className="layout-container">
            <h1>Sign up to start listening</h1>
            <form action="">
              <div className="input-container">
                <label for="">Email address</label>
                <input
                  type="email"
                  name=""
                  id=""
                  placeholder="name@domian.com"
                />
              </div>
              <div>
                <a href="" className="text-green">Use phone number instend</a>
              </div>
              <div><button className="bg-green next-btn">Next</button></div>
            </form>
            <div className="signupwith">
              <div className="divider"><span>or</span></div>
              <div className="google"><img src="https://www.flaticon.com/free-icon/search_281764" alt=""/><span>Sign up with Google</span></div>
              <div className="google"><img src="../images/facebook.png" alt=""/><span>Sign up with Facebook</span></div>
            </div>
            <div className="login-container">
              <span>Already have an account?<Link to='/'>Log in here</Link></span>
            </div>
          </div>
        </section>
      </main>
      <footer>
        <span>This site is protected by reCAPTCHA and the Google </span>
        <span>
        <a href="">Privacy Policy</a> and <a href="">Terms of Service apply.</a>
      </span>
      </footer>
    </div>
  </div>
    </>
  )}
export default SignUp
