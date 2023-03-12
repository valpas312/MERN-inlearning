import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const ArticlePage = () => {
  const [articleInfo, setArticleInfo] = useState({ upvotes: 0, comments: [] })

  const [upvotes, setUpvotes] = useState()

  const { articleId } = useParams()

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(`http://localhost:3000/api/articles/${articleId}`)
      setArticleInfo(result.data)
      setUpvotes(result.data.upvotes)
      console.log(result.data)
      console.log(upvotes)
    }
    fetchData()
  }, [])

  const upvoteArticle = async (e) => {
    e.preventDefault()
    const result = await axios.put(`http://localhost:3000/api/articles/${articleId}/upvote`)
    setUpvotes(result.data)
  }

  return (<>
    {
      articleInfo
      ? (
        <>
          <h1>{articleInfo.name}</h1>
          <div>
          <p>{upvotes}</p>
          <button onClick={upvoteArticle}>Upvote</button>
          </div>
          <p>{articleInfo.content}</p>
          <h3>Comments</h3>
          {
            articleInfo.comments.map((comment, key) => (
              <div key={key}>
                <p>{comment.username}</p>
                <p>{comment.text}</p>
              </div>
            ))
          }
        </>
      )
      : <p>No article found</p>
    }
  </> )
}

export default ArticlePage