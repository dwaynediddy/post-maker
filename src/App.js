import React from 'react'
import PostList from './features/posts/PostList'
import AddPostForm from './features/posts/AddPostForm'

import './App.css';

function App() {
  return (
    <main className="App">
      <AddPostForm />
      <PostList />

    </main>
  );
}

export default App;
