import { useState } from 'react'
import { useDispatch } from 'react-redux'

import { postAdded } from './postSlice'
 

const AddPostForm = () => {
    const dispatch = useDispatch()

    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    
    const onTitleChange = e => setTitle(e.target.value)
    const onContentChange = e => setContent(e.target.value)

    const onSavePostClicked = () => {
        if(title && content) {
            dispatch(
                postAdded(title, content)
            )
            setTitle('')
            setContent('')
        }
    }

  return (
    <section>
        <h2>Add Post</h2>
        <form>
            <label htmlFor="postTitle">Post Title: </label>
            <input
                type="text"
                id="postTitle"
                name="postTitle"
                value={title}
                onChange={onTitleChange}
            />
            <label htmlFor="postContent">Content: </label>
            <textarea 
                id="postContent"    
                name="postContent" 
                value={content}
                onChange={onContentChange}
            />
            <button type='button' onClick={onSavePostClicked}>Submit Post</button>
        </form>
    </section>
  )
}

export default AddPostForm