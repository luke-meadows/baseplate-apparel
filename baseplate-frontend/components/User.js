import { gql, useQuery } from '@apollo/client';

export const CURRENT_USER_QUERY = gql`
  query CURRENT_USER_QUERY {
    authenticatedItem {
      ... on User {
        name
      }
    }
  }
`;

export function useUser() {
  const { data, loading } = useQuery(CURRENT_USER_QUERY);
  const user = data?.authenticatedItem;
  return { user, loading };
}
