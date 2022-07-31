import { SxProps } from '@mui/material/styles';

export const listSubHeaderStyle: SxProps = {
    fontSize: '1rem',
};

export const activeListItemButtonStyle: SxProps = {
    backgroundColor: 'quaternary.main',
    borderRadius: '0.5rem',
    color: 'primary.main',
    marginX: '1rem',
    ':hover': {
        backgroundColor: 'quaternary.light',
    },
};
