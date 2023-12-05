import React, { useContext } from 'react'
import Modal from '@mui/material/Modal';
import { Container, Paper, TextField, Button, Stack, Select, MenuItem } from '@mui/material';
import AuthContext from '../PrivaterRoute/AuthContext';

function CustomerModal(props) {
    
  const { modalOpen, setModalOpen, customerData, setCustomerData, customers, setCustomers } = props;

  const { userid } = useContext(AuthContext);

    const handleSubmit = (event) => {
        event.preventDefault();

        fetch(`https://svendeprovecorewebapp.azurewebsites.net/api/customer/edit`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'userId': userid
            },
            body: JSON.stringify(customerData),
        })
        .then((response) => response)
        .then((data) => {
            console.log('Data updated:', data);

            const updatedCustomers = customers.map((customer) => {
                if (customer.id === customerData.id) {
                    return customerData;
                }
                return customer
            })

            setCustomers(updatedCustomers)
        })
        .catch((error) => {
            console.error('Error updating data:', error.message);
        });

        setModalOpen(false);
    }

  return (
    <Modal open={modalOpen} onClose={() => setModalOpen(false)}>
        <Container sx={{ paddingTop: '3%'}}>
            <Paper sx={{ padding: 2}} elevation={3}>
                <form onSubmit={handleSubmit}>
                    <Stack spacing={2}>
                        <h1>Edit companydata</h1>
                        <TextField
                            id="companyname"
                            label="Company Name"
                            name="Companyname"
                            value={customerData.companyName}
                            onChange={e => setCustomerData({
                                ...customerData, 
                                companyName: e.target.value
                            })}
                            fullWidth
                            required
                        />
                        <TextField
                            id="tenantId"
                            label="TenantId"
                            name="TenantId"
                            value={customerData.tenantId}
                            onChange={e => setCustomerData({
                                ...customerData, 
                                tenantId: e.target.value
                            })}
                            fullWidth
                            required
                        />
                        <TextField
                            id="cvrNumber"
                            label="CVRNumber"
                            name="CVRNumber"
                            value={customerData.cvrNumber}
                            onChange={e => setCustomerData({
                                ...customerData, 
                                cvrNumber: e.target.value
                            })}
                            fullWidth
                            required
                        />
                        <TextField
                            id="country"
                            label="Country"
                            name="Country"
                            value={customerData.country}
                            onChange={e => setCustomerData({
                                ...customerData, 
                                country: e.target.value
                            })}
                            fullWidth
                            required
                        />
                        <Select
                            id="status"
                            value={customerData.status}
                            label="Status"
                            onChange={e => setCustomerData({
                                ...customerData,
                                status: e.target.value
                            })}
                            required
                        >
                            <MenuItem value={"Active"}>Active</MenuItem>
                            <MenuItem value={"Inactive"}>Inactive</MenuItem>
                            <MenuItem value={"Blocked"}>Blocked</MenuItem>
                        </Select>
                        <Select
                            id="licensetype"
                            value={customerData.licenstype}
                            label="License type"
                            onChange={e => setCustomerData({
                                ...customerData,
                                licenstype: e.target.value
                            })}
                            required
                        >
                            <MenuItem value={"Essentials"}>Essentials</MenuItem>
                            <MenuItem value={"Basic"}>Basic</MenuItem>
                            <MenuItem value={"Premium"}>Premium</MenuItem>
                        </Select>

                        <Button type="submit" variant='contained'>Save</Button>
                    </Stack>
                </form>
            </Paper>
        </Container>
    </Modal>
  )
}

export default CustomerModal