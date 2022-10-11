import styled from '@emotion/styled';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Character } from '../../types/Character';
import Indicator from './Indicator';

const StyledBox = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 1rem;
`;

interface CharacterCardProps {
  character: Character;
}

export const CharacterCard = ({ character }: CharacterCardProps) => (
  <Card sx={{ display: 'flex' }}>
    <CardMedia component='img' sx={{ width: 151 }} image={character.image} alt={character.name} />

    <CardContent>
      <Box>
        <Typography component='div' variant='h5'>
          {character.name}
        </Typography>
        <Box flexDirection='row' display='flex' alignItems='center'>
          <Indicator status={character.status} />
          <Typography variant='subtitle2' color='text.secondary' component='div' ml={2}>
            {character.species}
          </Typography>
        </Box>
      </Box>

      <StyledBox>
        <Typography variant='subtitle2' color='text.secondary' component='div'>
          Origin
        </Typography>
        <Typography component='div' variant='body1'>
          {character.origin.name}
        </Typography>
      </StyledBox>

      <StyledBox>
        <Typography variant='subtitle2' color='text.secondary' component='div'>
          Location
        </Typography>
        <Typography component='div' variant='body1'>
          {character.location.name}
        </Typography>
      </StyledBox>
    </CardContent>
  </Card>
);
