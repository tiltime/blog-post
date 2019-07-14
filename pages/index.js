import axios from 'axios'
import styled from 'styled-components'
import _ from 'lodash'
import Pagination from 'react-paginate';
//import css
import '../css/reset.css'
import '../css/styles.css'

const api = axios.create({
  baseURL: 'http://maqe.github.io/json'
})

const Wrapper = styled.div`
  margin: 0 auto;
  width: 1200px;
  padding: 10px;
`
const Post = styled.div`
  border: 1px solid #dddddd;
  box-shadow: 2px 2px 5px #ececec;
  padding: 10px;
  margin-bottom: 10px;
  background-color: #f0f0f0;
  display: flex;
  position: relative;
  &:nth-child(2n+1) {
    background: #ffffff;
  }
`
const PostImage = styled.img`
  display: block;
  width: auto;
  height: 140px;
  margin-right: 10px;
  float: left;
`

const PostHeader = styled.h3`
  font: bold 1.2em;
  color: #000;
`
const PostDetail = styled.div`
  border-right: 1px solid #dddddd;
  width: 85%;
`
const PostBody = styled.p`
  opacity: 0.8;
  font-size: 0.85em;
`
const Author = styled.div`
  text-align: center;
  width: 15%;
`
const AvatarImg = styled.img`
  width: 80px;
  border-radius: 60px;
  margin-bottom: 10px;
`
const AuthorName = styled.span`
  color: #c83430;
  font-size: 0.85em;
  display: block;
  margin-bottom: 10px;
`
const AuthorPlace = styled.span`
  font-size: 0.85em;
  display: block;
`
const AuthorRole = styled.span`
  font-size: 0.75em;
  display: block;
  margin-bottom: 10px;
`

const PostItem = ({ post }) => (
    <Post>
      <PostDetail>
        <PostImage src={post.image_url}></PostImage>
        <PostHeader>{post.title}</PostHeader>
        <PostBody>{post.body}</PostBody>
      </PostDetail>
      <Author>
        <AvatarImg src={post.avatar_url}/>
        <AuthorName>{post.name}</AuthorName>
        <AuthorRole>{post.role}</AuthorRole>
        <AuthorPlace><i class=""></i>{post.place}</AuthorPlace>
      </Author>
    </Post>
);

const Index = props => {
  console.log(props.posts)
  
  return (
    <Wrapper>
      <h1>MAQA Forums</h1>
      <h2>Subtitle</h2>
      <h3>Posts</h3>
      <div>
        {props.posts.map(post => (
          <PostItem key={post.id} post={post}></PostItem>
        ))}
        <Pagination></Pagination>
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
