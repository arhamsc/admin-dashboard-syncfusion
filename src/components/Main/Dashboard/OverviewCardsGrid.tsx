import { Stack } from '@mui/material';
import { FC } from 'react';
import { BiRefresh } from 'react-icons/bi';
import { BsFillPeopleFill, BsPeople } from 'react-icons/bs';
import { FiPackage } from 'react-icons/fi';
import { GiProgression } from 'react-icons/gi';
import OverviewCard from '../../Layout/UIComponents/OverviewCards/OverviewCard';

const OverviewCardsGrid = () => {
    return (
        <Stack
            direction="row"
            spacing={2}
            flexWrap={'wrap'}
            justifyContent="center"
            alignContent="center"
            rowGap={2}>
            <OverviewCard
                isAHike
                iconBgColor="#aaf4f8"
                cardIcon={<BsFillPeopleFill />}
                profitNumber={'34,495'}
                percentage="4"
                title="Customers"
            />
            <OverviewCard
                iconBgColor="secondary.main"
                cardIcon={<FiPackage />}
                profitNumber={'4,667'}
                percentage="2"
                title="Products"
            />
            <OverviewCard
                isAHike
                iconBgColor="#eecfa4"
                cardIcon={<GiProgression />}
                profitNumber={'456,923'}
                percentage="40"
                title="Sales"
            />
            <OverviewCard
                iconBgColor="#a9efca"
                cardIcon={<BiRefresh />}
                profitNumber={'2,456'}
                percentage="10"
                title="Refunds"
            />
        </Stack>
    );
};

export default OverviewCardsGrid;
