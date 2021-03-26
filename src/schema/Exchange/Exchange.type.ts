import { gql } from 'graphql-modules';
const Shrimpy = require('shrimpy-node');
const publicClient = new Shrimpy.ShrimpyApiClient();

export const Exchange = gql`
  type Exchange {
    exchange: String
    bestCaseFee: String
    worstCaseFee: String
    icon: String
  }

  type ExchangeAsset {
    id: String
    name: String
    symbol: String
    tradingSymbol: String
  }
`;

interface ExchangeResolverInput {
    exchange: String
}

export const ExchangeResolver = {
    Query: {
        supportedExchanges() {
            return publicClient.getSupportedExchanges()
        },
        exchangeAssets(root: Object, args: ExchangeResolverInput ) {   
            return publicClient.getExchangeAssets(args.exchange)
        }
    }
}