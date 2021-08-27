import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
    uri: "http://localhost:4000/",
    resolvers: {
        Movie : {isLiked : () => false},

        Mutation : {
            triggerLike : (_, {id}, {cache}) => {
                //console.log(id)
                //console.log(cache.modify)
                cache.modify({
                    id: `Movie:${id}`,
                    fields: {
                        isLiked: (isLiked) => !isLiked
                    }
            })
        }}
        
    },
    cache: new InMemoryCache()
})

export default client;