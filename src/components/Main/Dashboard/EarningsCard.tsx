import {
    FICard,
    FICardContent,
} from '../../Layout/UIComponents/FullImageCard/FullImageCard';
import EarningImage from '../../../assets/Earning.svg';
import {
    CardMedia,
    Grid,
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
            <FICardContent>
                <Grid container>
                    <Grid item xs={4}>
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
                        <Grid item xs={1}>
                            <NavIcon>
                                <AiFillDollarCircle />
                            </NavIcon>
                        </Grid>
                    </Grid>
                </Grid>
            </FICardContent>
        </FICard>
    );
};

export default EarningsCard;

const NavIcon = styled(IconButton)(({ theme }) => ({
    fontSize: '4rem',
    color: theme.palette.secondary.main,
}));
