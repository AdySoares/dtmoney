import { MagnifyingGlass } from "@phosphor-icons/react";
import { Container, Frame, Search } from "./style";
import { Transaction } from "../Transaction";
import { useEffect, useState } from "react";
import { api } from "../../services/axios";

export function Summary(){

  const [transactions, SetTransactions] = useState([])

  useEffect(() => {
   api.get('/transactions')
   .then( (response: any) => SetTransactions(response.data.transactions))
  },[])

  

  return(
    <Container>
      <Search>
        <input type="text" placeholder="Busque uma transação"/>
        <button>{<MagnifyingGlass/>} Buscar</button>
      </Search>
      <Frame>
        {
          transactions.map(({id,description,price,category,date,type}) => {

            return(
              <Transaction
                key={id}
                description={description}
                price={
                  new Intl.NumberFormat(
                    'pt-br',
                    {
                      style: 'currency',
                      currency: 'BRL'
                    }).format(price)
                }
                category={category}
                date={new Intl.DateTimeFormat('pt-br').format(new Date(date))}
                type={type}
              />
            )
          })   
        }
      </Frame>
      
    </Container>
  )
}