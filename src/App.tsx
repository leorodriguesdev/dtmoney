import { TransactionsProvider } from "./../src/hooks/useTransactions";
import { Dashboard } from "./components/Dashboard";
import { useState } from 'react'
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";
import { NewTransactionModal } from "./components/NewTransactionModal";
import Modal from 'react-modal'



Modal.setAppElement('#root');

export function App() {

    const [isNewTransactionModalOpen,setIsNewTransactionModalOpen] = useState(false);
    

    function handleOpenNewTransactionModal() {
        setIsNewTransactionModalOpen(true);
    }

    function handleCloseNewTransactionModal() {
        setIsNewTransactionModalOpen(false);
    }

    return (
        <TransactionsProvider>
            <Header onOpenNewTransactionModal={handleOpenNewTransactionModal}/>
            <Dashboard/>
            <NewTransactionModal
                isOpen={isNewTransactionModalOpen}
                onRequestClose={handleCloseNewTransactionModal}
            />
            <GlobalStyle/>
        </TransactionsProvider>
    );
}