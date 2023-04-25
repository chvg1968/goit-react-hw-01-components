import React from 'react';
import { Table, THead, TBody, TR, TH, TD  } from '../styles/Transactions.styled.js';
import PropTypes from 'prop-types';
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
            <TR key={0}>
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

Transactions.propTypes = {
    movs: PropTypes.arrayOf(PropTypes.shape({
      type: PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired,
      currency: PropTypes.string.isRequired
    })).isRequired
  };

export default Transactions;