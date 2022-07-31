import { IconBaseProps } from 'react-icons';

export type SideBarLinks = {
    title: String;
    links: {
        name: String;
        icon: IconBaseProps;
    }[];
};
