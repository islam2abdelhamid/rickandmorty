import { Alert, Box, CircularProgress, Grid, Pagination } from '@mui/material';
import { Container } from '@mui/system';
import { FC, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { CharacterCard } from '~/components/CharacterCard';
import { useAppDispatch } from '~/store';
import { charactersSelector, fetchCharacters } from '~/store/charactersSlice';

const Characters: FC = () => {
  const {
    characters,
    info: { pages, page },
    error,
    status,
  } = useSelector(charactersSelector);
  const dispatch = useAppDispatch();
  const [currentPage, setCurrentPage] = useState(page);

  useEffect(() => {
    dispatch(fetchCharacters(currentPage));
  }, [dispatch, currentPage]);

  return (
    <Container
      sx={{
        mt: 4,
      }}
    >
      <Box display='flex' justifyContent='center' alignItems='center'>
        {status === 'loading' && (
          <CircularProgress
            className='loader'
            size={50}
            sx={{
              alignItems: 'center',
              justifyContent: 'center',
            }}
          />
        )}
        {status === 'failed' && <Alert severity='error'>{error}</Alert>}
      </Box>
      {status === 'idle' && (
        <Grid container spacing={5}>
          {characters.map((character) => (
            <Grid item sm={12} md={6} key={character.id}>
              <CharacterCard character={character} />
            </Grid>
          ))}
        </Grid>
      )}
      <Pagination
        color='primary'
        count={pages}
        sx={{ margin: 5 }}
        onChange={(_, page) => setCurrentPage(page)}
        page={currentPage}
      />
    </Container>
  );
};

export default Characters;
