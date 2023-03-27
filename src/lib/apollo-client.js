import {ApolloClient, HttpLink, InMemoryCache} from '@apollo/client';

import {removeLastTrailingSlash} from 'lib/util';

let client;



export function getApolloClient() {
    if (!client) {
        client = _createApolloClient();
    }

    return client;
}


export function _createApolloClient() {
    return new ApolloClient({
        link: new HttpLink({
            uri: removeLastTrailingSlash(process.env.WORDPRESS_GRAPHQL_ENDPOINT),
        }),
        cache: new InMemoryCache({

            typePolicies: {
                RootQuery: {
                    queryType: true,

                },
                RootMutation: {
                    mutationType: true,
                },
            },
        }),
        defaultOptions: {
            watchQuery: {
                // fetchPolicy: 'cache-first',
                fetchPolicy: 'no-cache',
                errorPolicy: 'ignore'
            },
            query: {
                // fetchPolicy: "cache-first",
                fetchPolicy: 'no-cache',
                errorPolicy: 'ignore'
            }
        }
    });
}
