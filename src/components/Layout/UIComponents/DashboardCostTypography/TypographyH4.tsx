import { Typography } from '@mui/material';
import { FC } from 'react';

const DashboardCostTypography: FC<{
    title: string;
    amount: number;
    amountColor: string;
}> = ({ title, amount, amountColor }) => {
    return (
        <p>
            <Typography variant="h4" fontWeight="bold" color={amountColor}>
                ${amount.toLocaleString('en-US')}
            </Typography>
            <Typography variant="body1" color={amountColor}>
                {title}
            </Typography>
        </p>
    );
};

export default DashboardCostTypography;
