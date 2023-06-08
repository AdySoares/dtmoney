import { ArrowCircleDown, ArrowCircleUp, X } from "@phosphor-icons/react";
import { TypeTransactionContainer, Forms, RatioBox } from "./style";
import Modal from "react-modal";
import { useState } from "react";

interface ModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

Modal.setAppElement("#root");
export function NewTransaction({
  isOpen,
  onRequestClose,
}: ModalProps) {

  const [type,SetType] = useState<string>()

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className="modal-content"
      overlayClassName="modal-overly"
    >
      <button 
        onClick={onRequestClose}
        className="close-modal"
      >
        {<X size={24}/>}
      </button>

      <Forms>
        <fieldset>
          <legend>Nova transação</legend>
          <input id="Description" placeholder="Descrição" />
          <input type="number" id="Price" placeholder="Preço" />
          <input id="Category" placeholder="Categoria" />

          <TypeTransactionContainer>
            <RatioBox
              onClick={(e) => {
                e.preventDefault()
                SetType('Deposit')
              }}
              isActive={type === 'Deposit'}
              activeColor='green-dark'
            >
              {<ArrowCircleUp color={type === 'Deposit' ? 'white' : 'green'} size={24}/>}
              <span>Entrada</span>
              </RatioBox>

            <RatioBox
              onClick={(e) => {
                e.preventDefault()
                SetType('Withdrawal')
              }}
              isActive={type === 'Withdrawal'}
              activeColor='red-dark'
            >
              {<ArrowCircleDown color={type === 'Withdrawal' ? 'white' : 'red'} size={24}/>}
              <span>Saída</span>
            </RatioBox>
          </TypeTransactionContainer>
        </fieldset>

        <button type="submit">Cadastrar</button>
      </Forms>
    </Modal>
  );
}
