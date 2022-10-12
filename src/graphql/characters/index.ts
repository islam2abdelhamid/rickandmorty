import { apolloClient } from '~/graphql';
import { gql } from '@apollo/client';
const GET_CHARACTERS = gql`
  query GetCharacters($page: Int) {
    characters(page: $page) {
      info {
        count
        pages
        next
        prev
      }
      results {
        id
        name
        status
        species
        type
        image
        origin {
          name
          id
        }
        location {
          name
          id
        }
      }
    }
  }
`;

export const getCharacters = async (page: number) => {
  const data = await apolloClient.query({
    query: GET_CHARACTERS,
    variables: {
      page,
    },
  });
  return data;
};
