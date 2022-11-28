import React from 'react'
import { connect } from 'react-redux'

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(id, customerName, accountNumber, accountType) {
    return { id, customerName, accountNumber, accountType };
  }
  


  
export const Main = (props) => {
    const rows =  props.records;
  return (
      <div className='container pt-5'>
          
          <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
          <TableCell align="right">accountType</TableCell>
            <TableCell align="right">customerName</TableCell>
            <TableCell align="right">accountNumber</TableCell>
            <TableCell align="right">accountType</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell align="right">{row.customerName}</TableCell>
              <TableCell align="right">{row.accountNumber}</TableCell>
              <TableCell align="right">{row.accountType}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

    </div>
  )
}

const mapStateToProps = state => {
    return { records: state.accounts };
  };



export default connect(mapStateToProps)(Main);