import React from 'react';
import { Container, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

const rows = [
  { id: 1, name: 'John Doe', email: 'johndoe@example.com', status: 'Active', license: 'ABC123' },
  { id: 2, name: 'Mathias Doe', email: 'mathiasdoe@example.com', status: 'Inactive', license: 'DEF456' },
  { id: 3, name: 'Jeppe Doe', email: 'jeppedoe@example.com', status: 'Pending', license: 'GHI789' },
];

const columns = [
  { field: 'name', headerName: 'Name', width: 150 },
  { field: 'email', headerName: 'Email', width: 250 },
  { field: 'status', headerName: 'Status', width: 100 },
  { field: 'license', headerName: 'License', width: 150 },
];

function Index(){
  return (
    <Container>
        <TableContainer>
        <Table>
            <TableHead>
            <TableRow>
                {columns.map((column) => (
                    <TableCell key={column.field}>{column.headerName}</TableCell>
                    ))}
            </TableRow>
            </TableHead>
            <TableBody>
            {rows.map((row) => (
                <TableRow key={row.id}>
                {columns.map((column) => (
                    <TableCell key={`${column.field}-${row.id}`}>{row[column.field]}</TableCell>
                    ))}
                </TableRow>
            ))}
            </TableBody>
        </Table>
        </TableContainer>
    </Container>
  );
};

export default Index;

