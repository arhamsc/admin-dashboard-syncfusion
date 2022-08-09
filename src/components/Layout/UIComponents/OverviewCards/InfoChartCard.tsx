import { Paper } from '@mui/material';
import { FC, ReactNode } from 'react';

const InfoChartCard: FC<{
    children: ReactNode;
    color?: string;
    elevation?: number;
    //props?: Partial<ComponentProps<typeof Paper>>;
}> = ({ children, color, elevation }) => {
    return (
        <Paper
            elevation={elevation ?? 0}
            sx={{
                backgroundColor: color ?? 'secondary.main',
                paddingX: '2rem',
                paddingY: '1rem',
                borderRadius: '1rem',
                height: '100%',
                //...props,
            }}>
            {children}
        </Paper>
    );
};

export default InfoChartCard;
