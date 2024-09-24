import React, { useState } from 'react';
import { FaUser, FaLock } from 'react-icons/fa';
import './Login.css'; 
import EsqSenha from './EsqueceuSenha';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isVisible, setVisible] = useState(false);

    const handleModal = () => setVisible(!isVisible);

    const handleLogin = () => {
     
        const mockUser = { name: 'Nome Exemplo', email }; 
        localStorage.setItem("user", JSON.stringify(mockUser));
        window.location.href = '/home'; 
    };

    return (
        <div className="container">
            <form className='form-login' onSubmit={(e) => e.preventDefault()}>
                <img src="/src/assets/logo 2.png" alt="Logo" />
                <h2>Trade Up</h2>
                <div className='input1'>
                    <FaUser className="icon" />
                    <input 
                        type="email" 
                        placeholder="E-mail"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className='input2'>
                    <FaLock className="icon" />
                    <input 
                        type="password" 
                        placeholder="Senha"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <div className="recall-forget">
                    <label className="custom-checkbox">
                        <input type="checkbox" />
                        <span className="checkmark"></span>
                        Lembrar de mim
                    </label>
                    <a href="#" onClick={handleModal}>Esqueceu a senha?</a>
                </div>
                <button type="button" onClick={handleLogin}>Entrar</button>
                <div className="signup-link">
                    <p>Não tem uma conta? <a href="/Cadastro">Cadastre-se</a></p>
                </div>
            </form>
            {isVisible && <EsqSenha sair={handleModal} />}
        </div>
    );
};

export default Login;
