import { MagnifyingGlass } from "@phosphor-icons/react";
import { Container, Frame, Search } from "./style";
import { Transaction } from "../Transaction";
import { useEffect, useState } from "react";
import { api } from "../../services/axios";

export function Summary(){

  const [transactions, SetTransactions] = useState([])

  useEffect(() => {
   api.get('transactions')
   .then( (response: any) => SetTransactions(response.data))
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
                price={price}
                category={category}
                date={date}
                type={type}
              />
            )
          })   
        }
      </Frame>
      
    </Container>
  )
}