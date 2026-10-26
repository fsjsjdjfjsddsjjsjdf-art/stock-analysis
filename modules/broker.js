// trader-broker: Zerodha Kite, DhanHQ, Upstox order payload generator
export function generateBrokerPayload(broker, symbol, qty, price, type) {
    return {
        broker: broker.toUpperCase(),
        exchange: 'NSE',
        symbol: symbol,
        quantity: qty,
        order_type: type,
        product: 'MIS',
        price: price,
        timestamp: new Date().toISOString()
    };
}
