import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import articles from './article-content'
import axios from 'axios'

const ArticlePage = () => {
  const [articleInfo, setArticleInfo] = useState({ upvotes: 0, comments: [] })

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(`/api/articles/${name}`)
      setArticleInfo(result.data)
    }
    fetchData()
  }, [])

  const { articleId } = useParams()
  const article = articles.find(article => article.name === articleId)

  return (<>
    <h1>{article.title}</h1>
    {article.content.map((paragraph, key) => (
      <p key={key}>{paragraph}</p>
    ))}
  </> )
}

export default ArticlePage