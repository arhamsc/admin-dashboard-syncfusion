import { FICard } from '../../Layout/UIComponents/FullImageCard/FullImageCard';
import EarningImage from '../../../assets/Earning.svg';
import {
    Box,
    Button,
    CardContent,
    CardMedia,
    IconButton,
    Stack,
    styled,
    Typography,
} from '@mui/material';
import { cardMediaStyles, cardStyles } from './styles';
import { AiFillDollarCircle } from 'react-icons/ai';

const EarningsCard = () => {
    return (
        <FICard sx={cardStyles}>
            <CardMedia
                sx={cardMediaStyles}
                component="img"
                src={EarningImage}
                alt="EarningImage"
            />
            <CardContent sx={{ paddingTop: '2rem' }}>
                <Stack direction="row">
                    <Stack>
                        <Typography
                            component="h2"
                            variant="body1"
                            fontWeight={'bold'}
                            color="quaternary.light">
                            Earnings
                        </Typography>
                        <Typography
                            component="h2"
                            variant="h5"
                            fontWeight={'bold'}>
                            $89,224.556
                        </Typography>
                    </Stack>
                    <Box width="50%" />
                    <NavIcon>
                        <AiFillDollarCircle fontSize={'3.5rem'} />
                    </NavIcon>
                </Stack>
                <Box height="1rem" />
                <Button variant="contained" color="secondary" disableElevation>
                    Download
                </Button>
            </CardContent>
        </FICard>
    );
};

export default EarningsCard;

const NavIcon = styled(IconButton)(({ theme }) => ({
    fontSize: '4rem',
    color: theme.palette.secondary.main,
}));
