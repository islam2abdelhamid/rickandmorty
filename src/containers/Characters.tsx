import { FC, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '~/store';
import { charactersSelector, fetchCharacters } from '~/store/charactersSlice';

const Characters: FC = () => {
  const chars = useSelector(charactersSelector);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchCharacters());
  }, [dispatch]);

  return <div>characters</div>;
};

export default Characters;
