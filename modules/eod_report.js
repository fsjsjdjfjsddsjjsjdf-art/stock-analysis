// trader-eod: Daily End-of-Day performance audit report
export function generateEODReport(stocks) {
    return stocks.map(s => ({
        symbol: s.symbol,
        startValue: s.prevClose,
        endValue: s.ltp,
        returnPct: (((s.ltp - s.prevClose) / s.prevClose) * 100).toFixed(2) + '%'
    }));
}
