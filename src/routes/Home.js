import React from 'react'
import {gql, useQuery} from '@apollo/client'
import styled from 'styled-components'

import Movie from '../components/Movie'

const getmovie = gql`
{
    getmovie{
        id
        title
        summary
        medium_cover_image
        isLiked @client
      }
}
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;
const Header = styled.header`
  background-image: linear-gradient(-45deg, #d754ab, #fd723a);
  height: 45vh;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
const Title = styled.h1`
  font-size: 60px;
  font-weight: 600;
  margin-bottom: 20px;
`;
const Subtitle = styled.h3`
  font-size: 35px;
`;
const Loading = styled.div`
  font-size: 18px;
  opacity: 0.5;
  font-weight: 500;
  margin-top: 10px;
`;

const Movies = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 25px;
  width: 60%;
  position: relative;
  top: -50px;
`;

function Home() {
    //const res = useQuery(getmovie)
    const {loading, error, data} = useQuery(getmovie)
    console.log(loading, error, data)
    return(
        <Container>
            <Header>
                <Title>graph and movie by apollo</Title>
                <Subtitle>ToyProject</Subtitle>
            </Header>
            {loading && <Loading>Loading...</Loading>}
            <Movies>
            {!loading && data.getmovie && data.getmovie.map(el=><Movie key={el.id} id={el.id} movieImage={el.medium_cover_image} isLiked={el.isLiked}/>)}
            </Movies>
        </Container>
    )
}

export default Home