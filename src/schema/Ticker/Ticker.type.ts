import { gql } from 'graphql-modules';
const Shrimpy = require('shrimpy-node');
const publicClient = new Shrimpy.ShrimpyApiClient();

export const Ticker = gql`
type Ticker {
  name: String
  symbol: String
  priceUsd: Float
  priceBtc: String
  lastUpdated: String
}
`;

interface TickerResolverInput {
    exchange: String
}

export const TickerResolver = {
    Query: {
        tickers(root: Object, args: TickerResolverInput ) {   
            return publicClient.getTicker(args.exchange)
        }
    }
}