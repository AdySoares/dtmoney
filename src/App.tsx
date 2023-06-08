import { useState } from "react";
import { Dashboard } from "./components/Dashboard";
import { Summary } from "./components/Summary";
import { Header } from "./components/header";
import { NewTransaction } from "./components/NewTransaction";

export function App() {

  const [isOpenModal, SetIsOpenModal] = useState(false)

  function newTransactionModalIsOpen (){
    SetIsOpenModal(true)
  }
  function newTransactionModalIsClose (){
    SetIsOpenModal(false)
  }

  return (
    <div className="App">
      <Header
        openModal={newTransactionModalIsOpen} 
      />
      <Dashboard/>
      <Summary/>

     <NewTransaction 
      onRequestClose={newTransactionModalIsClose}
      isOpen={isOpenModal}
    />

    </div>
  );
}

