import { createSlice }from '@reduxjs/toolkit'

const initialState = [
    {id: '1', title: 'First Post', content: 'Hello world!'},
    {id: '2', title: 'nba', content: 'finals have started who will win this year?'}
]

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {}
})

export const selectAllPosts = (state) => state.posts

export default postsSlice.reducer