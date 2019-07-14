import _ from 'lodash'
import Head from 'next/head'
import Pagination from 'react-paginate'
import api from '../api'
import PostItem from '../components/post'
import { Wrapper } from '../styled-css/post'
//import css
import '../css/reset.css'
import '../css/styles.css'



const Index = props => {
  return (
    <div>
      <Head>
          <title>Blog Posts</title>
          <link href='http://fonts.googleapis.com/css?family=Roboto' rel='stylesheet' type='text/css'></link>
      </Head>
      <Wrapper>
        <h1>MAQA Forums</h1>
        <h2>Subtitle</h2>
        <h3>Posts</h3>
        <div>
          {props.posts.map(post => (
            <PostItem key={post.id} post={post}></PostItem>
          ))}
          <Pagination
            previousLabel={'previous'}
            nextLabel={'next'}
            breakLabel={'...'}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            containerClassName={'pagination'}
            subContainerClassName={'pages pagination'}
            activeClassName={'active'}
          />
        </div>
      </Wrapper>
    </div>
  )
}

Index.getInitialProps = async function() {
  const res = await api.get('/posts.json')
  const authors = await api.get('/authors.json')
  const posts = res.data
  const size = 8
  return {
    posts: posts.slice(0, size).map((post, i) => {
        const author = _.filter(authors.data, _.matches({ 'id' : post.author_id }))
        console.log(author)
        return (
          _.merge(post, _.omit(author[0], 'id'))
        )
    })
  }
}

export default Index;
