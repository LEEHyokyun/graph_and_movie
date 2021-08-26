import React from 'react'
import {useParams} from 'react-router-dom'
import {gql, useQuery} from '@apollo/client'
import styled from 'styled-components'

const seemovie = gql`
    query seemovie($id: Int!){ 
        seemovie(id: $id){
            id
            title
            medium_cover_image
            summary
            language
          }
    }
`

const Container = styled.div`
  height: 100vh;
  background-image: linear-gradient(-45deg, #d754ab, #fd723a);
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: white;
`;

const Column = styled.div`
  margin-left: 10px;
`;

const Title = styled.h1`
  font-size: 65px;
  margin-bottom: 15px;
`;

const Subtitle = styled.h4`
  font-size: 35px;
  margin-bottom: 10px;
`;

const Description = styled.p`
  font-size: 28px;
`;

const Poster = styled.div`
  width: 25%;
  height: 60%;
  background-color: transparent;
`;

function Detail() {
    const {id} = useParams()
    //console.log(typeof id)
    const {loading, data} = useQuery(seemovie, {
        variables: {id : Number(id)}
    })
    console.log(loading, data)
    //console.log(res)
    if(loading) {
        return(<Container>Loading...</Container>)
    }
    if(!loading && data.seemovie){
    return (
        <Container>
          <Column>
            <Title>{data.seemovie.title}</Title>
            <Subtitle>{data.seemovie.language}</Subtitle>
            {data.seemovie.summary && <Description>{data.seemovie.summary}</Description>}
            {!data.seemovie.summary && <Description>No summary! Believe your thought!</Description>}
          </Column>
          {!loading && data.seemovie.medium_cover_image && <Poster>{data.seemovie.medium_cover_image}</Poster>}
        </Container>
      );
    }
}

export default Detail