// trader-scanner: RVOL, VWAP, and ORB momentum scanner logic
export function scanMomentum(stocks) {
    return stocks.filter(s => s.rvol >= 1.5 && s.ltp > s.vwap);
}
