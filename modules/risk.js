// trader-budget & risk: Position sizing and SEBI MIS margin calculations
export function calculatePositionSize(capital, ltp, riskPerShare) {
    const margin = capital * 5; // 20% SEBI MIS margin leverage
    const maxShares = Math.floor((capital * 0.02) / riskPerShare);
    return { margin, maxShares };
}
