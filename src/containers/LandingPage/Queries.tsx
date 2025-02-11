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

export const GET_TRADE = gql`
  query Trade($tradeId: ID!) {
    trade(id: $tradeId) {
      ... on GetTradeError {
        errorMessage
        statusCode
        tradeId
      }
      ... on Trade {
        id
        notes
        price
        quantity
        symbol
        tradeDate
        tradeType
      }
    }
  }
`;
