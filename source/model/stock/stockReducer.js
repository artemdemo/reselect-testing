import * as stockConst from './stockConstants';

const initialState = {
    [stockConst.STOCK_NAMES.LEFT]: [],
    [stockConst.STOCK_NAMES.RIGHT]: [],
};

const idGen = () => Math.floor(Math.random() * 10000);

export default function stockReducer(state = initialState, action) {
    switch (action.type) {
        case stockConst.ADD_TO_STOCK:
            return Object.assign({}, state, {
                [action.stockName]: [
                    ...state[action.stockName],
                    {
                        id: `${idGen()}-${idGen()}-${idGen()}`,
                    },
                ],
            });
        default:
            return state;
    }
}
