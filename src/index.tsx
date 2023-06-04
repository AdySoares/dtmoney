import React from 'react';
import ReactDOM from 'react-dom/client';
import {App} from './App';
import { GlobalStyle } from './styles/GlobalStyle';
import {createServer} from 'miragejs'

createServer({
  routes() {
    this.namespace = 'api';

    this.get('/transactions', () => {
      return [
        {
          id:1,
          description: 'Compra de Flores',
          price:200,
          category: 'itens',
          date: '15/05/203',
          cashOutflow: true
        },
        {
          id:2, 
          description: 'venda do video game',
          price: 5000,
          category: 'venda',
          date: '31/05/203',
          cashOutflow: false
        },
        {
          id: 3,
          description: 'venda do Laptop',
          price: 15000,
          category: 'venda',
          date: '31/05/203',
          cashOutflow: false
        }
      ]
    })
  }
})

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
    <GlobalStyle/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

