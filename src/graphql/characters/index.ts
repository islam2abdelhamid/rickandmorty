import { apolloClient } from '~/graphql';
import { gql } from '@apollo/client';
const GET_CHARACTERS = gql`
  query GetCharacters {
    characters {
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

export const getCharacters = async () => {
  const data = await apolloClient.query({
    query: GET_CHARACTERS,
  });
  return data;
};
