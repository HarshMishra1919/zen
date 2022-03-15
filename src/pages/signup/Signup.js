import './Signup.css';
import { useState } from 'react';

const Signup = () => {
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onSubmitHandler = (e) => {
        e.preventDefault();
        console.log(userName, email, password);
    }

    return (
        <div className="signup" onSubmit = {onSubmitHandler}>
            <div className="signup-left"></div>
            <div className="signup-right">
                <form className="signup-form">
                    <h2>Sign up</h2>
                    <label>
                        <span>Full Name</span>
                        <input
                            type="text"
                            onChange={(e) => setUserName(e.target.value)}
                            value={userName}
                            required
                        />
                    </label>
                    <label>
                        <span>Email address</span>
                        <input
                            type="email"
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                            required
                        />
                    </label>
                    <label>
                        <span>Password</span>
                        <input
                            type="password"
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                            required
                        />
                    </label>
                    <button>Signup</button>
                </form>
            </div>
        </div>
    );
};

export default Signup;
