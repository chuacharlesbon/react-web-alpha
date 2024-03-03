import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { loginService } from '../../services/userServices';
import axios from 'axios';

interface LOGIN {
    email: string;
    password: string;
}

interface STATE {
    loading: boolean;
    data: {
        user_status: string;
    };
}

export const usersInitialState: STATE = {
    loading: false,
    data: {
        user_status: "Loading"
    }
};

const login = createAsyncThunk('auth/login', async (body: LOGIN) => {
    const data: any = await loginService(body);
    // return data.data;
    // const data: any = await fetch('https://cmt-server-1.vercel.app/api/ping').then(res => res.json()).then(data => data);
    console.log(data);
    return { user_status: data.data?.server ?? "Loaded" };
});

const abort = () => {
    console.log('trigger abort');
    const CancelToken = axios.CancelToken;
    const source = CancelToken.source();
    source.cancel();
}


const { actions, reducer } = createSlice({
    name: 'user',
    initialState: usersInitialState,
    reducers: {},
    extraReducers: (builder) => {
        // login: (state, action: PayloadAction<any>) => {
        //     state.data = {user_status: "Loaded"};
        //     state.loading = false;
        // },
        builder
        .addCase(login.pending, (state, action) => {
            state.data = usersInitialState.data;
            state.loading = true;
        })
        .addCase(login.fulfilled, (state, action) => {
            state.data = action.payload;
            state.loading = false;
        })
    }
});

export const usersActions = {
    ...actions,
    login,
    abort
};

export const usersReducer = reducer;