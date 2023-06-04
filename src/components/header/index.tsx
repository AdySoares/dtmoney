import logo from '../../assets/logo.svg'
import { NewTransaction } from '../NewTransaction';

import { Container, Content } from "./style";

interface ModalProps{
  openModal: () => void,
}

export function Header({ openModal}:ModalProps){
  return(
      <Container>
        <Content>
          <img src={logo} alt="Dt Money" />
          <button
            onClick={openModal}> Nova Transação</button>
        </Content>
      </Container>

  )
}