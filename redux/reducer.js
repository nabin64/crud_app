import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    client: { toogleForm: false, formId: undefined, deleteId: null }
}
export const ReducerSlice = createSlice({
    name: 'crudapp',
    initialState,
    reducers: {
        toogleChangeAction: (state) => {
            state.client.toogleForm = !state.client.toogleForm
        },
        updateAction: (state, action) => {
            state.client.formId = action.payload

        },
        deleteAction: (state, action) => {
            state.client.deleteId = action.payload
        }


    }
})

export const { toogleChangeAction, updateAction, deleteAction } = ReducerSlice.actions
export default ReducerSlice.reducer;