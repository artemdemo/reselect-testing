import React from 'react';
import StockController from '../containers/StockController/StockController';

const MainView = () => {
    return (
        <div>
            <p>
                <span className='glyphicon glyphicon-globe' />
                &nbsp;
                Main View
            </p>

            <hr />

            <StockController />
        </div>
    );
};

export default MainView;
