// trader-playground: Dumb trade sandbox and suggestion tester arcade
export function runPlaygroundSim(action, symbol, amount) {
    return {
        action: action,
        symbol: symbol,
        allocatedAmount: amount,
        status: 'EXECUTED_SANDBOX',
        simulatedPnL: (Math.random() * 5000 - 2000).toFixed(2)
    };
}
