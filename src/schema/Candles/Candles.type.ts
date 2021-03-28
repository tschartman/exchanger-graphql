import { gql } from 'graphql-modules';
const Shrimpy = require('shrimpy-node');
const publicClient = new Shrimpy.ShrimpyApiClient();

export const Candle = gql`
type Candle {
  open: String
  close: String
  high: String
  low: String
  volume: String
  quoteVolume: Float
  btcVolume: String
  usdVolume: Float
  time: String
}
`;

interface CandleResolverInput {
    exchange: String,
    baseSymbol: String,
    quoteSymbol: String,
    interval: String 
}

export const CandleResolver = {
    Query: {
        candles(root: Object, args: CandleResolverInput ) {
            const {exchange, baseSymbol, quoteSymbol, interval} = args; 
            return publicClient.getCandles(exchange, baseSymbol, quoteSymbol, interval)
        }
    }
}