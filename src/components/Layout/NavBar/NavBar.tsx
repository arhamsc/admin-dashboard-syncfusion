import {
    Avatar,
    Badge,
    Grid,
    IconButton,
    Stack,
    styled,
    Typography,
    useTheme,
} from '@mui/material';
import { useContext } from 'react';
import { BiMenu, BiMessage, BiNotification } from 'react-icons/bi';
import { FiShoppingCart } from 'react-icons/fi';
import { RiArrowDropDownLine } from 'react-icons/ri';
import { AppContext } from '../../../context/AppContext';

const NavIcon = styled(IconButton)(({ theme }) => ({
    fontSize: '2rem',
    color: theme.palette.quaternary.main,
}));

const NavBar = () => {
    const theme = useTheme();
    const toggleSideBar = useContext(AppContext).toggleSideBar;

    return (
        <Grid
            container
            justifyContent="space-between"
            spacing={4}
            py={2}
            alignItems="center">
            <Grid item flex={1}>
                {/* Can ignore quaternary error as i have merged my own interface */}
                <IconButton onClick={() => toggleSideBar((active) => !active)}>
                    <BiMenu
                        fontSize={'2rem'}
                        color={theme.palette.quaternary.main.toString()}
                    />
                </IconButton>
            </Grid>
            <Grid item>
                <FiShoppingCart
                    fontSize={'2rem'}
                    color={theme.palette.quaternary.main.toString()}
                />
            </Grid>
            <Grid item>
                <Badge badgeContent={4} color="secondary">
                    <BiMessage
                        fontSize={'2rem'}
                        color={theme.palette.quaternary.main.toString()}
                    />
                </Badge>
            </Grid>
            <Grid item>
                <Badge badgeContent={1} color="secondary">
                    <BiNotification
                        fontSize={'2rem'}
                        color={theme.palette.quaternary.main.toString()}
                    />
                </Badge>
            </Grid>
            <Grid item>
                <Stack direction="row" alignItems={'center'} spacing={1} px={2}>
                    <Avatar />
                    <Typography color="quaternary.main">
                        Hi,<b>Arham</b>{' '}
                    </Typography>
                    <RiArrowDropDownLine />
                </Stack>
            </Grid>
        </Grid>
    );
};

export default NavBar;
