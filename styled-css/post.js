import styled from 'styled-components'

export const Wrapper = styled.div`
  margin: 0 auto;
  width: 1200px;
  padding: 10px;
`
export const Post = styled.div`
  border: 1px solid #dddddd;
  box-shadow: 2px 2px 5px #ececec;
  padding: 16px;
  margin-bottom: 16px;
  background-color: #f0f0f0;
  display: flex;
  position: relative;
  &:nth-child(2n+1) {
    background: #ffffff;
  }
`
export const PostDetail = styled.div`
  border-right: 1px solid #dddddd;
  width: 85%;
  padding-right: 16px;
`
export const PostImage = styled.img`
  display: block;
  width: auto;
  height: 140px;
  margin-right: 16px;
  float: left;
`
export const PostHeader = styled.h3`
  font-weight: normal;
  color: #000;
  line-height: 1em;
  margin-top: 2px;
`
export const PostBody = styled.p`
  opacity: 0.7;
  font-size: 0.85em;
`
export const PostDate = styled.span`
  opacity: 0.5;
  font-size: 0.75em;
`
export const Author = styled.div`
  text-align: center;
  width: 15%;
`
export const AvatarImg = styled.img`
  width: 80px;
  border-radius: 60px;
  margin-bottom: 10px;
`
export const AuthorName = styled.span`
  color: #c83430;
  font-size: 0.85em;
  display: block;
  margin-bottom: 10px;
`
export const AuthorRole = styled.span`
  font-size: 0.75em;
  display: block;
  margin-bottom: 10px;
`
export const AuthorPlace = styled.span`
  font-size: 0.7em;
  display: block;
`