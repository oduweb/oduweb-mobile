import axios from 'axios';

import {inject} from 'mobx-react';

class auth {
  login = async (email, password) => {
    console.log(email + ' ' + password);
    const data2 = null;
    const data = await axios
      .post('http://localhost:5001/graphql', {
        query: `
          mutation {
            login(email:"${email}",password:"${password}"){
              ok
              token
              refreshToken
              errors{
                path
                message
              }
            }
          }`,
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then(result => {
        const token = result.data.data.login.token;
        alert('token: ' + token);
      });
  };

  register = async () => {
    const data = await axios
      .post(
        'http://localhost:5001/graphql',
        {
          query: `mutation { registerUser(firstName:"baki",lastName:"test",userName:"sdsadasd222",password:"testtesttest",email:"test42@odu.edu.tr") {
              ok
              errors {
                path
                message
              }
            }
          }`,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      )
      .then(result => {
        const ok = result.data.data.registerUser.ok;
        const message = result.data.data.registerUser.errors[0].message;
        alert('Durum: ' + ok + ' Message: ' + message);
      });
  };
}

export default new auth();
