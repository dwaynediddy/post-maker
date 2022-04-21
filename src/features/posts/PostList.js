import { useSelector } from 'react-redux'
import { selectAllPosts } from './postSlice'
import PostAuthor from '../posts/PostAuthor'
import TimeAgo from '../posts/TimeAgo'
import ReactionButtons from './ReactionButton'

const PostList = () => {
    const posts = useSelector(selectAllPosts)

    const orderedPosts = posts.slice().sort((a, b) => b.date.localeCompare(a.date))

    const renderPosts = orderedPosts.map(post => (
      <section className="postsCard" key={post.id}>
        <article key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content.substring(0, 100)}</p>
            <p className="postCredit">
              <PostAuthor userId={post.userId} />
              <TimeAgo timeStamp={post.date} />
            </p>
            <ReactionButtons post={post}/>
        </article>
      </section>
  ))
  return (
    <div className="posts">
        <h2>Posts</h2>
        {renderPosts}
    </div>
  )
}

export default PostList