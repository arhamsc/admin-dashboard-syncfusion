import {
    AiOutlineCalendar,
    AiOutlineShoppingCart,
    AiOutlineAreaChart,
    AiOutlineBarChart,
    AiOutlineStock,
} from 'react-icons/ai';
import {
    FiShoppingBag,
    FiEdit,
    FiPieChart,
} from 'react-icons/fi';
import {
    BsKanban,
    BsBarChart,
} from 'react-icons/bs';
import { BiColorFill } from 'react-icons/bi';
import { IoMdContacts } from 'react-icons/io';
import { RiContactsLine, RiStockLine } from 'react-icons/ri';
import { GiLouvrePyramid } from 'react-icons/gi';
import { SideBarLinks } from '../models/sideBarLinks';

export const links : SideBarLinks[] = [
    {
        title: 'Dashboard',
        links: [
            {
                name: 'E-Commerce',
                icon: <FiShoppingBag />,
            },
        ],
    },

    {
        title: 'Pages',
        links: [
            {
                name: 'Orders',
                icon: <AiOutlineShoppingCart />,
            },
            {
                name: 'Employees',
                icon: <IoMdContacts />,
            },
            {
                name: 'Customers',
                icon: <RiContactsLine />,
            },
        ],
    },
    {
        title: 'Apps',
        links: [
            {
                name: 'Calendar',
                icon: <AiOutlineCalendar />,
            },
            {
                name: 'Kanban',
                icon: <BsKanban />,
            },
            {
                name: 'Editor',
                icon: <FiEdit />,
            },
            {
                name: 'Color-picker',
                icon: <BiColorFill />,
            },
        ],
    },
    {
        title: 'Charts',
        links: [
            {
                name: 'Line',
                icon: <AiOutlineStock />,
            },
            {
                name: 'Area',
                icon: <AiOutlineAreaChart />,
            },

            {
                name: 'Bar',
                icon: <AiOutlineBarChart />,
            },
            {
                name: 'Pie',
                icon: <FiPieChart />,
            },
            // {
            //     name: 'Financial',
            //     icon: <RiStockLine />,
            // },
            // {
            //     name: 'Color-mapping',
            //     icon: <BsBarChart />,
            // },
            // {
            //     name: 'Pyramid',
            //     icon: <GiLouvrePyramid />,
            // },
            // {
            //     name: 'Stacked',
            //     icon: <AiOutlineBarChart />,
            // },
        ],
    },
];
