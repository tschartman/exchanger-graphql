import { gql } from 'graphql-modules';
const Shrimpy = require('shrimpy-node');
const publicClient = new Shrimpy.ShrimpyApiClient();

export const OrderBooks = gql`
type MarketOrderBook {
    baseSybol: String
    quoteSymbol: String
    orderBooks: [ExchangeOrderBook]
}

type ExchangeOrderBook {
    exchange: String
    orderBook: OrderBook
}

type OrderBook {
    asks: [OrderBookItem]
    bids: [OrderBookItem]
}

type OrderBookItem {
    price: Float
    quantity: Float
}
`

interface OrderBookResolverInput {
    exchange: String,
    baseSymbol: String,
    quoteSymbol: String,
    limit: Number
}

export const OrderBooksResolver = {
    Query: {
        orderBooks(root: Object, args: OrderBookResolverInput) {
            const {exchange, baseSymbol, quoteSymbol, limit} = args;
            return publicClient.getOrderBooks(exchange, baseSymbol, quoteSymbol, limit)
        }
    }
}