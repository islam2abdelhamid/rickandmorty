import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getCharacters } from '~/graphql/characters';
import { RootState } from '~/store';
import { Character } from '~/types/Character';

interface ResponseInfo {
  page: number;
  pages: number;
}

interface CharacterState {
  characters: Character[];
  info: ResponseInfo;
  status: 'idle' | 'loading' | 'failed';
  error: string | null;
}

export const fetchCharacters = createAsyncThunk(
  'characters/fetchCharacters',
  async (page: number) => {
    const response = await getCharacters(page);
    return response.data.characters;
  },
);

const initialState: CharacterState = {
  characters: [],
  error: null,
  status: 'idle',
  info: {
    page: 1,
    pages: 0,
  },
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
        (
          state: CharacterState,
          action: PayloadAction<{ results: Character[]; info: ResponseInfo }>,
        ) => {
          state.status = 'idle';
          state.characters = action.payload.results;
          state.info = action.payload.info;
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
