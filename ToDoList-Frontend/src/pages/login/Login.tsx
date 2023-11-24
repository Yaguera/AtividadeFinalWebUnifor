import "./Login.css"
import Header from "../header/Header";
import { useState } from 'react';
import axios from 'axios';

export default function Login() {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [error, setError] = useState('');
    const [user, setUser] = useState('');
  
    const handleLogin = async (e) => {
      e.preventDefault();
  
      try {
        const response = await axios.post(
          'http://localhost:5173/login',
          { email, senha },
          {
            headers: { 'Content-Type': 'application/json' },
          }
        );
  
        console.log(response.data);
        setUser(response.data);
  
      } catch (err) {
        if (!err?.response) {
          setError('Erro ao acessar o servidor');
        } else if (err.response.status === 401) {
          setError('Usuário ou senha inválidos');
        }
      }
    };
  
    return (
      <>
        <Header navItem1="" navItem2="Voltar" linkItem1="" linkItem2="/" />
        <div className="form-cadastro">
          <div className="container">
            <form
              className="row g-3 needs-validation"
              noValidate
              onSubmit={(e) => handleLogin(e)}
            >
              <div className="col-md-12">
                <label htmlFor="validationCustom03" className="form-label">
                  E-mail
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="validationCustom03"
                  placeholder="Digite seu e-mail"
                  required
                  onChange={(e) => setEmail(e.target.value)}
                />
                <div className="invalid-feedback">
                  Por favor, digite um e-mail válido.
                </div>
              </div>
              <div className="col-md-12">
                <label htmlFor="validationCustom02" className="form-label">
                  Senha
                </label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Digite sua senha"
                  id="validationCustom02"
                  required
                  onChange={(e) => setSenha(e.target.value)}
                />
                <div className="valid-feedback">Tudo certo!</div>
              </div>
              <div className="col-12"></div>
              <div className="col-12">
                <button type="submit" className="btn btn-danger">
                  Login
                </button>
              </div>
            </form>
            <p>{error}</p>
          </div>
        </div>
      </>
    );
  }