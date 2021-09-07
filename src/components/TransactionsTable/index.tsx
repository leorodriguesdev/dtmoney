import { useEffect } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";

export function TransactionsTable() {
    useEffect(() => {
        api.get('transations')
        .then(data => console.log(data))
    },[]);


    return (

        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>Desenvolvimento de website</td>
                        <td className="deposit">R$120,00</td>
                        <td>Desenvolvimento</td>
                        <td>13/13/1000</td>
                    </tr>
                    <tr>
                        <td>Desenvolvimento de website</td>
                        <td className="withdraw">R$-12,00</td>
                        <td>Desenvolvimento</td>
                        <td>13/13/1000</td>
                    </tr>
                </tbody>
            </table>
        </Container>
    ) 
}