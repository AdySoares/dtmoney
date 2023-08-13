import { ArrowCircleDown, ArrowCircleUp, X } from "@phosphor-icons/react";
import { TypeTransactionContainer, Forms, RatioBox } from "./style";
import Modal from "react-modal";
import { FormEvent, useState } from "react";
import { api } from "../../services/axios";

Modal.setAppElement("#root");

interface ModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransaction({
  isOpen,
  onRequestClose,
}: ModalProps) {

  const [type,SetType] = useState<string>('')
  const [description,SetDescription] = useState<string>('')
  const [category,SetCategory] = useState<string>('')
  const [price,SetPrice] = useState<number>()

  function SendNewTransaction(event: FormEvent) {
    event.preventDefault()

    api.post('/transactions',{
      type,
      description,
      category,
      price
    })
  }


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
          <input 
            id="Description" 
            placeholder="Descrição"
            onChange={({target}) => (
              SetDescription(target.value)
            )}
            
          />
          <input 
            type="number" 
            id="Price" 
            placeholder="Preço"
            onChange={({target}) => (
              SetPrice(Number(target.value))
            )} 
          
          />
          <input
            id="Category"
            placeholder="Categoria"
            onChange={({target}) => (
              SetCategory(target.value)
            )}

          />

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

        <button type="submit" onClick={SendNewTransaction}>Cadastrar</button>
      </Forms>
    </Modal>
  );
}
