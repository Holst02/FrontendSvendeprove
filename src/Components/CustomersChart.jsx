import React, { useState, useEffect } from 'react';
import { LineChart } from '@mui/x-charts';
import { Typography } from '@mui/material';

function CustomersChart(props) {
    const { customers } = props;

    const [customersCreated, setCustomersCreated] = useState([]);
    const [totalUsers, setTotalUsers] = useState([]);
    
    // Custom sorting by date
    const sortByDate = (a, b) => {
        const dateA = new Date(a.created);
        const dateB = new Date(b.created);
        return dateA.getTime() - dateB.getTime();
    };

    const [customersData, setCustomersData] = useState();
    
    // Runs when customers has returned from webservice
    useEffect(() => {
        setCustomersData(
            customers.map((customer) => {
                return {
                    created: new Date(customer.created),
                    users: customer.users
                }
            })
        );
    }, [customers]);

    useEffect(() => {
        if (customersData != undefined) {
            if (customersData.length > 0) {
                const sortedCustomersData = customersData.sort(sortByDate)
                let sumTotalUsers = 0;

                // Calculate the cumulative sum of users
                const cumulativeTotalUsers = sortedCustomersData.map((customer) => {
                    sumTotalUsers += customer.users;
                    return sumTotalUsers;
                });

                setCustomersCreated(sortedCustomersData.map((customer) => customer.created));
                setTotalUsers(cumulativeTotalUsers);
            }
        }
    }, [customersData])

  return (
    <>
        <Typography style={{textAlign: 'center', fontWeight: 'bold'}} variant='h5'>Amount of Total Users</Typography>
        { totalUsers.length > 0 && customersCreated.length > 0 && <LineChart
            xAxis={[
                { 
                    data: customersCreated,
                    scaleType: 'time'
                }]}
            series={[{
                data: totalUsers,
                area: true
            }]}
            height={400}
        />}
    </>
  );
}

export default CustomersChart;
