import { Alert, Grid } from '@mui/material';
import { Container } from '@mui/system';
import { FC, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { CharacterCard } from '~/components/CharacterCard';
import Loader from '~/components/Loader';
import { useAppDispatch } from '~/store';
import { charactersSelector, fetchCharacters } from '~/store/charactersSlice';

const Characters: FC = () => {
  const { characters, error, status } = useSelector(charactersSelector);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchCharacters());
  }, [dispatch]);

  if (status === 'loading') {
    return <Loader />;
  }

  if (status === 'failed') {
    return <Alert severity='error'>{error}</Alert>;
  }
  return (
    <Container
      sx={{
        mt: 4,
      }}
    >
      <Grid container spacing={5}>
        {characters.map((character) => (
          <Grid item sm={12} md={6} key={character.id}>
            <CharacterCard character={character} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Characters;
