import moment from 'moment'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import {
  Author, AuthorName, AuthorRole, AuthorPlace, AvatarImg, 
  Post, PostBody, PostDetail, PostDate, PostHeader, PostImage
} from '../styled-css/post'

const PostItem = ({ post }) => (
  <Post>
    <PostDetail>
      <PostImage src={post.image_url}></PostImage>
      <PostHeader><a>{post.title}</a></PostHeader>
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

export default PostItem;
