import React from 'react'
import {gql, useQuery} from '@apollo/client'
import styled from 'styled-components'

const getmovie = gql`
{
    getmovie{
        id
        medium_cover_image
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
            {!loading && data.getmovie && data.getmovie.map(el=><Movie key={el.id} {...el}/>)}
        </Container>
    )
}

export default Home