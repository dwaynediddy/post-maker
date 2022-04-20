import { createSlice } from "@reduxjs/toolkit"

const initialState = [
    {id: '0', name: 'Ghenghis Khan'},
    {id: '1', name: 'Mike Lowrey'},
    {id: '2', name: 'Jimmy Buckets'}
]

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {

    }
})

export const selectAllUsers = (state) => state.users 

export default usersSlice.reducer