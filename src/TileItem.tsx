import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

const TileItem = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    cursor: 'pointer',
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default TileItem;
