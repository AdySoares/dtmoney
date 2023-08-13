import React from 'react';
import ReactDOM from 'react-dom/client';
import {App} from './App';
import { GlobalStyle } from './styles/GlobalStyle';
import {Model, createServer} from 'miragejs'

createServer({

  models: {
    transaction: Model,
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id:1,
          description: 'Compra de Flores',
          price:200,
          category: 'itens',
          date: new Date(),
          type: 'Deposit'
        },
        {
          id:2, 
          description: 'venda do video game',
          price: 5000,
          category: 'venda',
          date: Date(),
          type: 'Deposit'
        },
        {
          id: 3,
          description: 'venda do Laptop',
          price: 15000,
          category: 'venda',
          date: Date(),
          type: 'Withdrawal'
        }
      ]
    })
  },

  routes() {
    this.namespace = 'api';
    

    this.get('/transactions', () => {
      return this.schema.all('transaction')
    })

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody)

      return schema.create('transaction', data)
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

