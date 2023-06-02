import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from "@phosphor-icons/react";
import { Card } from "../Card";
import { Container } from "./style";

export function Dashboard(){
  return(
    <>
      <Container>
        <Card icon={<ArrowCircleUp color='green'/>} value={'120000'} title={'Entradas'}/>
        <Card icon={<ArrowCircleDown color='red'/>} value={'120000'} title={'Saídas'}/>
        <Card icon={<CurrencyDollar color="white"/>} value={'0'} title={'Total'} isGreen/>
      </Container>
    </>
  )
}