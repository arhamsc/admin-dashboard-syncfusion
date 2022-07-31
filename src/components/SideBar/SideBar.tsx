import {
    Box,
    List,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    ListSubheader,
    Stack,
} from '@mui/material';
import { Key, ReactNode } from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../../assets/Logo.svg';
import { links } from '../../data/dummyData';
import { activeListItemButtonStyle, listSubHeaderStyle } from './styles'; //New way of importing in V5 of MUI

const SideBar = () => {
    return (
        <Box boxShadow={6}>
            <Stack>
                <Box textAlign={'center'} p={0} m={0}>
                    <NavLink to="/">
                        <img width="50%" src={Logo} alt="SCA Company" />
                    </NavLink>
                </Box>
                {links.map((item) => (
                    <List
                        key={item.title as Key}
                        component={'nav'}
                        subheader={
                            <ListSubheader
                                component={'div'}
                                sx={listSubHeaderStyle}>
                                {item.title.toUpperCase()}
                            </ListSubheader>
                        }>
                        {item.links.map((link) => (
                            <NavLink
                                to={`./${link.name.toLowerCase()}`}
                                key={link.name as Key}
                                style={({ isActive }) => ({
                                    textDecoration: 'none',
                                    color: 'inherit',
                                })}>
                                {({ isActive }) => (
                                    <ListItemButton
                                        sx={
                                            isActive
                                                ? activeListItemButtonStyle
                                                : { marginX: '1rem' }
                                        }>
                                        <ListItemIcon
                                            sx={
                                                isActive
                                                    ? {
                                                          color: 'primary.main',
                                                          fontSize: '1.5rem',
                                                      }
                                                    : { fontSize: '1.5rem' }
                                            }>
                                            {link.icon as ReactNode}
                                        </ListItemIcon>
                                        <ListItemText primary={link.name} />
                                    </ListItemButton>
                                )}
                            </NavLink>
                        ))}
                    </List>
                ))}
            </Stack>
        </Box>
    );
};

export default SideBar;
