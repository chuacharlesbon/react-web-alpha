import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../type';

const modal = (state: RootState) => state.modal;

const defaultData = {
    title: "Welcome!",
    message: "Discover new features.",
    onClose: () => { },
    onSubmit: () => { },
};

export const selectModalShow = createSelector(modal, (state) => state.showModal);

export const selectModal = createSelector(modal, (state) => state.data ?? defaultData);