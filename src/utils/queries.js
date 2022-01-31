import { gql } from '@apollo/client';

export const QUERY_WISH = gql`
  query wish($id: ID!) {
    wish(_id: $id) {
      _id
      wishText
      createdAt
      username
    }
  }
`;

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
    }
  }
`;

export const QUERY_ME = gql`
  {
    me {
      _id
      username
      email
    }
  }
`;

export const QUERY_ME_BASIC = gql`
  {
    me {
      _id
      username
      email
      friendCount
      friends {
        _id
        username
      }
    }
  }
`;

export const QUERY_CHECKOUT = gql`
  query getCheckout($amount: Int) {
    getCheckout(amount: $amount) {
      session
    }
  }
`;
