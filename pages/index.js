import Link from 'next/link'
import axios from 'axios'
import _ from 'lodash'

const api = axios.create({
  baseURL: 'http://maqe.github.io/json'
})

const PostLink = ({ post }) => (
    <li key={post.id}>
        <Link as={`/p/${post.id}`} href={`/post?id=${post.id}`}>
            <a>{post.title}</a>
        </Link>
        <style jsx>{`
      li {
        list-style: none;
        margin: 5px 0;
      }

      a {
        text-decoration: none;
        color: blue;
        font-family: 'Arial';
      }

      a:hover {
        opacity: 0.6;
      }
    `}</style>
    </li>
);

const Index = props => {
  console.log(props.posts)
  
  return (
    <div>
      <h1>MAQA Forums</h1>
      <ul>
        {props.posts.map(post => (
          <PostLink key={post.id} post={post}></PostLink>
        ))}
      </ul>
      <style jsx>{`
          h1,
          a {
            font-family: 'Arial';
          }

          ul {
            padding: 0;
          }

          li {
            list-style: none;
            margin: 5px 0;
          }

          a {
            text-decoration: none;
            color: blue;
          }

          a:hover {
            opacity: 0.6;
          }
      `}</style>
    </div>
  )
}

Index.getInitialProps = async function() {
  const res = await api.get('/posts.json')
  const authors = await api.get('/authors.json')
  const posts = res.data
  return {
    posts: posts.map((post, i) => {
        const author = _.filter(authors.data, _.matches({ 'id' : post.author_id }))
        console.log(author)
        return (
          _.merge(post, _.omit(author[0], 'id'))
        )
    })
  }
}

export default Index;
