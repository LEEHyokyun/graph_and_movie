import React from 'react'
import {gql, useQuery} from '@apollo/client'

const getmovie = gql`
{
    getmovie{
        id
        medium_cover_image
      }
}
`

function Home() {
    //const res = useQuery(getmovie)
    const {loading, error, data} = useQuery(getmovie)
    console.log(loading, error, data)
    return(
        <h2>HOME</h2>
    )
}

export default Home