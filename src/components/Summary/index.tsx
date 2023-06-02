import { MagnifyingGlass } from "@phosphor-icons/react";
import { Container, Frame, Search } from "./style";
import { Transaction } from "../Transaction";

export function Summary(){
  return(
    <Container>
      <Search>
        <input type="text" placeholder="Busque uma transação"/>
        <button>{<MagnifyingGlass/>} Buscar</button>
      </Search>
      <Frame>
        <Transaction description='oi' price={2000} category="test" date="10/05/2001" cashOutflow/>
        <Transaction description='oi' price={2000} category="test" date="10/05/2001" />
      </Frame>
      
    </Container>
  )
}