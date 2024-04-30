
/* Aqui vamos criar a LoginPage para o usuário fazer Login! */

/*
    Neste componente, estou utilizando a função useState do React para gerenciar os estados dos inputs. 
    O useState é um hook do React que nos permite adicionar o estado a componentes de função. 
    
    Logo abaixo explicarei melhor o como usá-lo. 
*/
import React, { useState } from 'react';
import postData from '../pages/api/DataPost';

function Login() {

/*
    Logo abaixo estou utilizando o useState do react e explicarei um pouco sua funcionalidade.

    Aqui abaixo ele retorna um par de valores: o estado atual e uma função que nos permite atualizar esse estado.
    Estou usando o useState nos dois inputs: e-mail e password. Porém, quando é mais de um dado conectados entre sí,
    é possível agrupá-los em apenas um useState, irei dar um exemplo a seguir:

    const [data, setData] = useState({
      email: '',
      password: ''
    });

    Mas para fins didáticos, irei usar um useState para cada dado.

  */
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  /* 
    Logo abaixo eu tenho duas constantes, essas constantes definem funções que são 
    chamadas quando há uma mudança no valor dos campos de email e senha.
    
    Também poderia agrupá-las em apenas uma constante, mas irei deixar separadas para um melhor entendimento.
  */
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  /* Essa constante handleSubmit define uma função que será executada quando o formulário for enviado. */
  const handleSubmit = async (e) => {
    e.preventDefault();
    /*Se sair tudo ok, entra no try*/
    try {
      const response = await postData(email, password);
      alert("Login com sucesso!");
      console.log(response.data);
      /*Se der erro, entra no catch*/
    } catch (error) {
      /*Aqui dou um console para verificar o erro. É possível fazer uma cadeia maior para de verificação
      de erros, mas aqui irei user apenas esse. */
      console.error('Erro ao fazer login:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        E-mail:
        <input type="email" value={email} onChange={handleEmailChange} />
      </label>
      <br />
      <label>
        Senha:
        <input type="password" value={password} onChange={handlePasswordChange} />
      </label>
      <br />
      <button type="submit">Entrar</button>
    </form>
  );
}

export default Login;
