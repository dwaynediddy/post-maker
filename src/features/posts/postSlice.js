import { createSlice, nanoid }from '@reduxjs/toolkit'

const initialState = [
    {id: '1', title: 'First Post', content: 'Hello world!'},
    {id: '2', title: 'nba', content: 'finals have started who will win this year?'}
]

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        postAdded: {
            reducer(state, action) {
                state.push(action.payload)
            }, 
            prepare(title, content) {
                return {
                    payload: {
                        id: nanoid(),
                        title,
                        content
                    }
                }
            }
        }
    }
})

export const selectAllPosts = (state) => state.posts

export const { postAdded } = postsSlice.actions

export default postsSlice.reducer