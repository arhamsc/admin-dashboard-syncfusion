import { IconProps } from '@mui/material';

export type SideBarLinks = {
    title: String;
    links: {
        name: String;
        icon: IconProps;
    }[];
};
