import './Login.css';
import { useState } from 'react';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onSubmitHandler = (e) => {
        e.preventDefault();
        console.log(email, password);
    };

    return (
        <div className="login" onSubmit={onSubmitHandler}>
            <div className="login-left"></div>
            <div className="login-right">
                <form className="login-form">
                    <h2>Login</h2>
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
                    <button>Login</button>
                    <p>
                        Don't have an account? <a href="/signup">Signup</a>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default Login;
