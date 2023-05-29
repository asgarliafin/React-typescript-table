import * as React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { User } from '../features/user/userSlice';

interface BasicTableProps {
    users: User[];
}

const BasicTable: React.FC<BasicTableProps> = ({ users }) => {
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell>Username</TableCell>
                        <TableCell>Email</TableCell>
                        <TableCell>Street</TableCell>
                        <TableCell>City</TableCell>
                        <TableCell>Company Name</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {users.map(({id, username, email, address : {street, city}, company : {name}}) => (
                        <TableRow key={id}>
                            <TableCell>{id}</TableCell>
                            <TableCell>{username}</TableCell>
                            <TableCell>{email}</TableCell>
                            <TableCell>{street}</TableCell>
                            <TableCell>{city}</TableCell>
                            <TableCell>{name}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default BasicTable;
