import './LoginPage.css'
import { FaUser, FaLock } from "react-icons/fa";

function LoginPage (){
    return (
        <>
        <div className="formContainer">
            <h2>CSRS Login</h2>
            <form>
                <div className="Email">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        className="input"
                        placeholder="Enter your email"
                    /> <FaUser className='icon'/>
                </div>
                <div className="Password">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        className="input"
                        placeholder="Enter your password"
                    /> <FaLock className='icon'/>
                </div>
                <div className='remember-forgot'>
                    <label><input type = 'checkbox'/>Remember me</label> 
                    <a href = '#'>Forgot Password?</a>
                </div>
                <button type="submit" className="btn btn-primary">
                    Login
                </button>
            </form>
        </div>
        </>
    );
};

export default LoginPage; 