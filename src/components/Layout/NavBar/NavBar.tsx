import {
    Avatar,
    Badge,
    Grid,
    IconButton,
    Stack,
    styled,
    Typography,
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
    const toggleSideBar =
        useContext(AppContext)?.toggleSideBar ?? function () {};

    return (
        <Grid
            container
            justifyContent="space-between"
            spacing={4}
            py={2}
            alignItems="center">
            <Grid item flex={1}>
                {/* Can ignore quaternary error as i have merged my own interface */}
                <NavIcon
                    onClick={() => toggleSideBar((active: Boolean) => !active)}>
                    <BiMenu />
                </NavIcon>
            </Grid>
            <Grid item>
                <NavIcon>
                    <FiShoppingCart />
                </NavIcon>
            </Grid>
            <Grid item>
                <NavIcon>
                    <Badge badgeContent={4} color="secondary">
                        <BiMessage />
                    </Badge>
                </NavIcon>
            </Grid>
            <Grid item>
                <NavIcon>
                    <Badge badgeContent={1} color="secondary">
                        <BiNotification />
                    </Badge>
                </NavIcon>
            </Grid>
            <Grid item>
                <Stack direction="row" alignItems={'center'} spacing={1} px={2}>
                    <Avatar />
                    <Typography color="quaternary.main">
                        Hi,<b>Arham</b>
                    </Typography>
                    <NavIcon>
                        <RiArrowDropDownLine />
                    </NavIcon>
                </Stack>
            </Grid>
        </Grid>
    );
};

export default NavBar;
