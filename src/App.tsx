import { Dashboard } from "./components/Dashboard";
import { useState } from 'react'
import { Header } from "./components/Header";
import Modal from 'react-modal'
import { GlobalStyle } from "./styles/global";

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
        <>
            <Header onOpenNewTransactionModal={handleCloseNewTransactionModal}/>
            <Dashboard/>
            <Modal 
            isOpen={isNewTransactionModalOpen}
            onRequestClose={handleCloseNewTransactionModal}
            >

            </Modal>
            <GlobalStyle/>
        </>
    );
}