import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4omxwvm0pyo01w712s59t86/master',
    cache: new InMemoryCache()
})