import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getCharacters } from '~/graphql/characters';
import { RootState } from '~/store';
import { Character } from '~/types/Character';

interface CharacterState {
  characters: Character[];
  status: 'idle' | 'loading' | 'failed';
  error: string | null;
}

export const fetchCharacters = createAsyncThunk('characters/fetchCharacters', async () => {
  const response = await getCharacters();
  return response.data.characters.results;
});

const initialState: CharacterState = {
  characters: [],
  error: null,
  status: 'idle',
};

const charactersSlice = createSlice({
  name: 'characters',
  initialState,
  reducers: {},
  extraReducers: (builder: any) => {
    builder
      .addCase(fetchCharacters.pending, (state: CharacterState) => {
        state.status = 'loading';
      })
      .addCase(
        fetchCharacters.fulfilled,
        (state: CharacterState, action: PayloadAction<Character[]>) => {
          state.status = 'idle';
          state.characters = action.payload;
        },
      )
      .addCase(fetchCharacters.rejected, (state: CharacterState, action: any) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const charactersSelector = (state: RootState) => state.characters;
export default charactersSlice.reducer;
