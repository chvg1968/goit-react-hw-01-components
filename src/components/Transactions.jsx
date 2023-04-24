import React from 'react';
import { Table, THead, TBody, TR, TH, TD  } from '../styles/Transactions.styled.js';
const movs = require ('./transactions.json');

function Transactions() {
    return (
    <Table>
        <THead>
            <tr>
                <TH>Type</TH>
                <TH>Amount</TH>
                <TH>Currency</TH>
            </tr>
        </THead>
        { movs.map((mov, index) => (
        <TBody key={index}>
            <TR >
                <TD>{mov.type}</TD>
                <TD>{mov.amount}</TD>
                <TD>{mov.currency}</TD>
            </TR>
        </TBody>
        ))
        }
    </Table>
)
}

export default Transactions;