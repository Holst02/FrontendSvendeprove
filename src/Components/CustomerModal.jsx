import React, { useContext } from 'react'
import Modal from '@mui/material/Modal';
import { Container, Paper, TextField, Button, Stack } from '@mui/material';
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
                            id="virksomhedsnavn"
                            label="Virksomhedsnavn"
                            name="Virksomhedsnavn"
                            value={customerData.virksomhedsnavn}
                            onChange={e => setCustomerData({
                                ...customerData, 
                                virksomhedsnavn: e.target.value
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
                            id="cvrNummer"
                            label="CVRNummer"
                            name="CVRNummer"
                            value={customerData.cvrNummer}
                            onChange={e => setCustomerData({
                                ...customerData, 
                                cvrNummer: e.target.value
                            })}
                            fullWidth
                            required
                        />
                        {/* Make option so only Active, Deactivated and ???? */}
                        <TextField
                            id="status"
                            label="Status"
                            name="Status"
                            value={customerData.status}
                            onChange={e => setCustomerData({
                                ...customerData, 
                                status: e.target.value
                            })}
                            fullWidth
                            required
                        />
                        {/* Make option so only Essential, basic and premium is choices */}
                        <TextField
                            id="licenstype"
                            label="Licensetype"
                            name="Licensetype"
                            value={customerData.licenstype}
                            onChange={e => setCustomerData({
                                ...customerData, 
                                licenstype: e.target.value
                            })}
                            fullWidth
                            required
                        />

                        <Button type="submit" variant='contained'>Save</Button>
                    </Stack>
                </form>
            </Paper>
        </Container>
    </Modal>
  )
}

export default CustomerModal