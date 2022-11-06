import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

const TileItem = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    color: theme.palette.text.secondary,
    cursor: 'pointer',
    padding: theme.spacing(1),
    textAlign: 'center',
    alignItems: 'center',
}));

export default TileItem;
