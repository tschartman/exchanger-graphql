import { createApplication, createModule } from 'graphql-modules';
import { gql } from 'graphql-modules';
import {Exchange, ExchangeResolver} from './Exchange/Exchange.type';
import {Ticker, TickerResolver} from './Ticker/Ticker.type';
import {OrderBooks, OrderBooksResolver} from './OrderBooks/OrderBooks.type';
import {Candle, CandleResolver} from './Candles/candles.type';

const Query = gql`
    type Query {
        supportedExchanges: [Exchange]
        exchangeAssets(exchange: String!): [ExchangeAsset]
        tickers(exchange: String!): [Ticker]
        orderBooks(exchange: String!, baseSymbol: String!, quoteSymbol: String!, limit: Int!): [MarketOrderBook]
        candles(exchange: String!, baseSymbol: String!, quoteSymbol: String!, interval: String!): [Candle]
    }
`

const rootModule = createModule({
    id: 'root-module',
    dirname: __dirname,
    typeDefs: [Query, Exchange, Ticker, OrderBooks, Candle],
    resolvers: [ExchangeResolver, TickerResolver, OrderBooksResolver, CandleResolver]
})

export const application = createApplication({
    modules: [rootModule],
});