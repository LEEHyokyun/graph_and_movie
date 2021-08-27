import React from 'react'
import { Link } from 'react-router-dom'

import {gql, useMutation} from '@apollo/client'
import styled from 'styled-components'

const triggerLike = gql`
  mutation triggerLike($id : Int!){
    triggerLike(id: $id) @client
  }
`


const Container = styled.div`
  height: 380px;
  width: 100%;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  border-radius: 7px;
  overflow: visible
`;

const Poster = styled.div`
  background-image: url(${props => props.bg});
  height: 100%;
  width: 100%;
  background-size: cover;
  background-position: center center;
`;

//isLiked is from frontend, not backend
function Movie({id, movieImage, isLiked}) {
  const [triggerLikeByClicked] = useMutation(triggerLike, {variables: {id: Number(id)}})
    return (
        <div>
    <Container>
        <Link to={`/${id}`}>
        <Poster bg={movieImage} />
        </Link>
        <button onClick={triggerLikeByClicked}>{isLiked? "UNLIKE" : "LIKE"}</button>
    </Container>
        </div>
    )
}

export default Movie