import { gql, useQuery } from '@apollo/client';

const CURRENT_USER_QUERY = gql`
  query CURRENT_USER_QUERY {
    authenticatedUser {
      id
      name
    }
  }
`;

export function useUser() {
  const { data } = useQuery(CURRENT_USER_QUERY);
  console.log({ data });
  return data;
}
