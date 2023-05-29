import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../store/store';
import { getUsers } from '../../services/api';

interface User {
  id: number;
  username: string;
  email: string;
  address: {
    street: string;
    city: string;
  };
  company: {
    name: string;
  };
}

interface UserState {
  users: User[];
  loading: boolean;
  error: string | null;
}

const initialState: UserState = {
  users: [],
  loading: false,
  error: null,
};

export const fetchUsers = createAsyncThunk<User[], void, {}>('user/fetchUsers', async () => {
    const response = await getUsers();
    return response.data;
  });
  

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchUsers.fulfilled, (state, action: PayloadAction<User[]>) => {
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message as string;
      });
  },
});

export default userSlice.reducer;

export const selectUsers = (state: RootState): User[] => state.user.users;
export const selectLoading = (state: RootState): boolean => state.user.loading;
export const selectError = (state: RootState): string | null => state.user.error;
