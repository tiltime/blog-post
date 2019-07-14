import axios from 'axios'
import _ from 'lodash'
import Link from 'next/link'
import moment from 'moment'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import Pagination from 'react-paginate'
import {
    Author, AuthorName, AuthorRole, AuthorPlace, AvatarImg, 
    Wrapper, Post, PostBody, PostDetail, PostDate, PostHeader, PostImage
  } from '../styled-css/post'
//import css
import '../css/reset.css'
import '../css/styles.css'

const api = axios.create({
  baseURL: 'http://maqe.github.io/json'
})

const PostItem = ({ post }) => (
    <Post>
      <PostDetail>
        <PostImage src={post.image_url}></PostImage>
        <PostHeader><Link to="/post/:id"><a>{post.title}</a></Link></PostHeader>
        <PostBody>{post.body}</PostBody>
        <PostDate><FontAwesomeIcon icon={faClock} size="xs"></FontAwesomeIcon>{moment(post.created_at).fromNow()}</PostDate>
      </PostDetail>
      <Author>
        <AvatarImg src={post.avatar_url}/>
        <AuthorName>{post.name}</AuthorName>
        <AuthorRole>{post.role}</AuthorRole>
        <AuthorPlace><FontAwesomeIcon icon={faMapMarkerAlt} size="xs" />{post.place}</AuthorPlace>
      </Author>
    </Post>
);

const Index = props => {
  return (
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
