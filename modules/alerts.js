// trader-alerts: Price, VWAP, and RSI alert rules engine
export function checkAlerts(stock) {
    if (stock.ltp >= stock.target1) return { triggered: true, type: 'TARGET_1_HIT' };
    if (stock.ltp <= stock.stopLoss) return { triggered: true, type: 'STOP_LOSS_HIT' };
    return { triggered: false };
}
