import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import charactersSlice from '~/store/charactersSlice';

const store = configureStore({
  reducer: {
    characters: charactersSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export default store;
