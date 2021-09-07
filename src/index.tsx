import React from "react";
import ReactDOM from "react-dom";
import { App } from './App';
import { createServer } from 'miragejs'

createServer({
    routes(){
        this.namespace = 'api';
        this.get('/transactions', () =>{
            return [
                {
                    id: 1,
                    tittle: 'Transation 1',
                    amount: 400,
                    type: 'deposit',
                    category: 'Food',
                    
                }
            ]
        })
    }
})
ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);