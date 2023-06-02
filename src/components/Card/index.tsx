import { Container } from "./style"

export function Card({icon, title, value, ...rest}:any){
  return(
    <Container {...rest}>
      <header>
        <h4>{title}</h4>
        {icon}
      </header>
      <p>R$ {value}</p>
    </Container>
  )
}