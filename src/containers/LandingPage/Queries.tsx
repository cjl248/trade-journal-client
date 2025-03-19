import { gql } from "@apollo/client";

export const GET_TRADES = gql`
  query Query {
    trades {
      id
      symbol
      tradeType
      quantity
      price
      tradeDate
      notes
    }
  }
`;
