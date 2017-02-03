import * as stockConst from './stockConstants';

export function addToStock(stockName) {
    return {
        type: stockConst.ADD_TO_STOCK,
        stockName,
    };
}
