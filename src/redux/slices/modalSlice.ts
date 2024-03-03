import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

interface MODALDATA {
    title: string;
    message: string;
    onClose: any;
    onSubmit: any;
}

interface STATE {
    showModal: boolean;
    data: {
        title: string;
        message: string;
        onClose: any;
        onSubmit: any;
    };
}

export const modalInitialState: STATE = {
    showModal: false,
    data: {
        title: "Welcome!",
        message: "Discover new features.",
        onClose: () => { },
        onSubmit: () => { },
    }
};

const showModal = createAsyncThunk('modal/show', async (body: MODALDATA) => {
    try {
        const modalData = {
            title: body.title ? body.title.toUpperCase() : "Welcome!",
            message: body.message ? body.message : "Discover new features.",
            onClose: body.onClose ? body.onClose : () => { },
            onSubmit: body.onSubmit ? body.onSubmit : () => { },
        };
        return modalData;
    } catch (error) {
        console.log(error);
        return {
            title: "Internal error.",
            message: "Something went wrong. Please try again later or reload the browser.",
            onClose: () => { },
            onSubmit: () => { },
        }
    }
});


const { actions, reducer } = createSlice({
    name: 'modal',
    initialState: modalInitialState,
    reducers: {
        closeModal: (state) => {
            state.showModal = false;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(showModal.fulfilled, (state, action) => {
            state.data = action.payload;
            state.showModal = true;
        })
    }
});

export const modalActions = {
    ...actions,
    showModal,
};

export const modalReducer = reducer;