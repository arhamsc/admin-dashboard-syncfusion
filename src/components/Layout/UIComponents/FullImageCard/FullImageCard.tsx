import {
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia,
    styled,
} from '@mui/material';

export const FICard = styled(Card)(() => ({
    root: {
        position: 'relative',
    },
}));

export const FICardActionArea = styled(CardActionArea)(() => ({
    root: {
        position: 'relative',
    },
}));

export const FICardActions = styled(CardActions)(() => ({
    root: {
        position: 'relative',
    },
}));

export const FICardContent = styled(CardContent)(() => ({
    root: {
        position: 'relative',
        background: 'transparent',
    },
}));

export const FICardMedia = styled(CardMedia)(() => ({
   
        position: 'absolute',
        top: 0,
        right: 0,
        height: '100%',
        width: '100%',
    
}));
