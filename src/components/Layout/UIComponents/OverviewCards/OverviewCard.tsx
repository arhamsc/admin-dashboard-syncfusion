import {
    Avatar,
    Card,
    CardContent,
    CardHeader,
    Stack,
    Typography,
} from '@mui/material';
import  { FC, ReactNode } from 'react';

const OverviewCard: FC<OverViewCardTypes> = ({
    iconBgColor,
    iconColor,
    isAHike,
    cardIcon,
    profitNumber,
    percentage,
    title,
}) => {
    return (
        <Card
            sx={{
                width: '15rem',
                paddingTop: '1rem',
                backgroundColor: '#ffffff',
                borderRadius: "0.5rem"
            }}
            elevation={1}>
            <CardHeader
                sx={{ paddingBottom: '0' }}
                avatar={
                    <Avatar
                        sx={{
                            backgroundColor: iconBgColor,
                            color: iconColor ?? 'primary.main',
                            width: '3rem',
                            height: '3rem',
                            fontSize: '1.2rem',
                        }}>
                        {cardIcon}
                    </Avatar>
                }
            />
            <CardContent>
                <Stack direction="row" alignItems={'center'}>
                    <Typography variant="h6" fontWeight={'bold'} pr="0.5rem">
                        {profitNumber}
                    </Typography>
                    <Typography
                        fontSize="0.8rem"
                        color={isAHike ? 'green' : 'red'}>
                        {isAHike ? '+' : '-'}{percentage}%
                    </Typography>
                </Stack>
                <Typography
                    component="h2"
                    fontSize={'0.8rem'}
                    color="quaternary.light">
                    {title}
                </Typography>
            </CardContent>
        </Card>
    );
};

type OverViewCardTypes = {
    cardIcon: ReactNode;
    profitNumber: string;
    percentage: string;
    title: string;
    iconBgColor: string;
    iconColor?: string;
    isAHike?: boolean;
};

export default OverviewCard;
