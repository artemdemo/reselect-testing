import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import * as stockConst from '../../model/stock/stockConstants';
import { addToStock } from '../../model/stock/stockActions';

class StockController extends Component {
    constructor(props) {
        super(props);

        const leftStockSelector = stock => stock[stockConst.STOCK_NAMES.LEFT];
        const rightStockSelector = stock => stock[stockConst.STOCK_NAMES.RIGHT];

        this.countLeftSelector = createSelector(
            leftStockSelector,
            (items) => {
                console.log('calc LEFT');
                return items.length;
            },
        );

        this.countRightSelector = createSelector(
            rightStockSelector,
            (items) => {
                console.log('calc RIGHT');
                return items.length;
            },
        );
    }

    render() {
        const { stock, addToStock } = this.props;

        let leftCount = this.countLeftSelector(stock);
        let rightCount = this.countRightSelector(stock);

        // stock[stockConst.STOCK_NAMES.LEFT].forEach(() => leftCount++);
        // stock[stockConst.STOCK_NAMES.RIGHT].forEach(() => rightCount++);

        return (
            <div>
                <p>
                    <label>Left:</label> {leftCount}
                </p>
                <p>
                    <label>Right:</label> {rightCount}
                </p>
                <button
                    onClick={() => addToStock(stockConst.STOCK_NAMES.LEFT)}
                    className='btn btn-default'>
                    Add left
                </button>
                &nbsp;
                <button
                    onClick={() => addToStock(stockConst.STOCK_NAMES.RIGHT)}
                    className='btn btn-default'>
                    Add right
                </button>
            </div>
        );
    }
};

export default connect(
    state => ({
        stock: state.stock,
    }), {
        addToStock,
    },
)(StockController);
