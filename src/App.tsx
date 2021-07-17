import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";
import Modal from 'react-modal';
import { useState } from "react";
import { NewTransactionModal } from "./components/NewTransactionModal";
import { TransactionsProvider } from "./context/TransactionsContext";

Modal.setAppElement('#root')

export function App() {

  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

  function handleToggleModal() {
    setIsNewTransactionModalOpen(!isNewTransactionModalOpen)
  }

  return (
    <TransactionsProvider>
      <Header onOpenNewTransactionModal={handleToggleModal} />
      <Dashboard />
      <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleToggleModal}
      />
      <GlobalStyle />
    </TransactionsProvider>
  );
}

