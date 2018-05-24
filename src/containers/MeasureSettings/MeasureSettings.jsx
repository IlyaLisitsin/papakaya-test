import React from 'react';
import { connect } from 'react-redux';
import * as actionCreators from './actions';
import cn from 'classnames';
import { switchMeasure } from './actions';

import './measurSettings.css';

const MeasureSettings = ({ currentMeasure, switchMeasure }) => {

    const handleClick = (e) => switchMeasure(e.target.value);

    return (
        <div className="measure-switcher">
            <div className={cn(
                'radio',
                {'radio-active': currentMeasure === 'in'}
            )
            }>
                <label>
                    <input type="radio" value="in" checked={currentMeasure === 'in'} onClick={handleClick} />
                    <span>In</span>
                </label>
            </div>
            <div className={cn(
                'radio',
                {'radio-active': currentMeasure === 'cm'}
            )
            }>
                <label>
                    <input type="radio" value="cm" checked={currentMeasure === 'cm'} onClick={handleClick} />
                    <span>Cm</span>
                </label>
            </div>
        </div>
    );

};

export default connect(
    state => ({
        currentMeasure: state.MeasureSettings.currentMeasure,
    }),
    {
        switchMeasure: actionCreators.switchMeasure,
    }
)(MeasureSettings);