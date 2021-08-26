import React from 'react'
import {useParams} from 'react-router-dom'
import {gql, useQuery} from '@apollo/client'

const seemovie = gql`
    query seemovie($id: Int!){ 
        seemovie(id: $id){
            id
            title
            medium_cover_image
          }
    }
`

function Detail() {
    const {id} = useParams()
    //console.log(typeof id)
    const {loading, data} = useQuery(seemovie, {
        variables: {id : Number(id)}
    })
    console.log(loading, data)
    //console.log(res)
    if(loading){
        return <h2>loading..</h2>
    }
    if(data && data.seemovie){
        return <h2>{data.seemovie.title}</h2>
    }
}

export default Detail