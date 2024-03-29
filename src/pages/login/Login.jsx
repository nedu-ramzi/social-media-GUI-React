import './login.css';

export default function Login() {
  return (
    <div className='login'>
        <div className="loginWrapper">
            <div className="loginLeft">
                <h3 className="loginLogo">MortalDeity</h3>
                <span className="loginDesc">Connect with friends and the world around you on MortalDeity</span>
            </div>
            <div className="loginRight">
                <div className="loginBox">
                    <input placeholder="Email" className="loginInput" />
                    <input placeholder="Password" className="loginInput" />
                    <button className="LoginButton">Log In</button>
                    <span className="loginForgot">Forgot Password?</span>
                    <button className="loginRegisteration">
                        Create a New Account
                    </button>
                </div>
            </div>

        </div>
    </div>
  )
}
