/*
  O Axios é uma biblioteca JavaScript usada para fazer requisições HTTP.
  Podemos fazer algumas requisições HTTP como GET, POST, PUT, DELETE, etc.
*/
import axios from 'axios';

/*
  Aqui abaixo estou passando como parâmetro o email e password. No caso esses sao os dados
  utilizado pelo usuario do arquivo Login.js 
*/
const postData = async (email, password) => {
  try {
/*
  Posso botar dentro das aspas a url da api. Se voce observar, estou usando o post, 
  e ele é utilizado tanto para enviar dados para o servidor como para fazer autenticação.
*/
    const response = await axios.post('url', {
      //Para a validação do login, estou enviando email e password
      email: email,
      password: password
    });
    return response;
  } catch (error) {
    throw error;
  }
};

/*
  Nao precisamos enviar os dados email e password, porque por padrão o axios já faz isso.
*/

export default postData;
