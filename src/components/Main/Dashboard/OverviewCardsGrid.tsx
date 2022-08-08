import { Stack } from '@mui/material';
import { FC } from 'react';
import { IconBaseProps } from 'react-icons';
import { BiRefresh } from 'react-icons/bi';
import { BsFillPeopleFill, BsPeople } from 'react-icons/bs';
import { FiPackage } from 'react-icons/fi';
import { GiProgression } from 'react-icons/gi';
import OverviewCard from '../../Layout/UIComponents/OverviewCards/OverviewCard';

type OverViewCardType = {
    isAHike: boolean;
    iconBgColor: string;
    cardIcon: IconBaseProps;
    profitNumber: string;
    percentage: string;
    title: string;
};

const overViewCardData: OverViewCardType[] = [
    {
        isAHike: true,
        iconBgColor: '#aaf4f8',
        cardIcon: <BsFillPeopleFill />,
        profitNumber: '34,495',
        percentage: '4',
        title: 'Customers',
    },
    {
        isAHike: false,
        iconBgColor: 'secondary.main',
        cardIcon: <FiPackage />,
        profitNumber: '4,667',
        percentage: '2',
        title: 'Products',
    },
    {
        isAHike: true,
        iconBgColor: '#eecfa4',
        cardIcon: <GiProgression />,
        profitNumber: '456,923',
        percentage: '40',
        title: 'Sales',
    },
    {
        isAHike: false,
        iconBgColor: '#a9efca',
        cardIcon: <BiRefresh />,
        profitNumber: '2,456',
        percentage: '10',
        title: 'Refunds',
    },
];

const OverviewCardsGrid = () => {
    return (
        <Stack
            direction="row"
            spacing={2}
            flexWrap={'wrap'}
            justifyContent="center"
            alignContent="center"
            rowGap={2}>
            {overViewCardData.map((data) => (
                <OverviewCard
                    isAHike={data.isAHike}
                    iconBgColor={data.iconBgColor}
                    cardIcon={data.cardIcon}
                    profitNumber={data.profitNumber}
                    percentage={data.percentage}
                    title={data.title}
                />
            ))}
        </Stack>
    );
};

export default OverviewCardsGrid;
