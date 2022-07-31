import { IconProps } from '@mui/material';
import React, { ReactNode } from 'react';
import { IconBaseProps } from 'react-icons';
import { IconType } from 'react-icons/lib';

export type SideBarLinks = {
    title: String;
    links: {
        name: String;
        icon: IconProps;
    }[];
};
