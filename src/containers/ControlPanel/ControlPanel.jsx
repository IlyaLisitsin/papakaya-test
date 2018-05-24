import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from './actions';
import { ItemBox } from '../../components/ControlPanel/ItemBox';
import ReactIScroll from 'react-iscroll';
import iScroll from 'iscroll';
import './controlPanel.css';
import { mmToIn, mmToCm } from "../../core/utils";

export class ControlPanel extends Component {

    itemHoveredHandler(item, mode) {
        if (!this.props.currentItems.filter(i => i.id === item.id).length) {
            this.props.switchItem(item, mode);
        }
    }

    isItemActive(item) {
        return this.props.currentItems.find(i => i.id === item.id);
    }

    itemSizeGen(item) {
        const { currentMeasure } = this.props;

        if (currentMeasure === 'in') return {
            width: mmToIn(item.itemBoxThumb.width),
            height: mmToIn(item.itemBoxThumb.height),
            currentMeasure,
        }

        return {
            width: mmToCm(item.itemBoxThumb.width),
            height: mmToCm(item.itemBoxThumb.height),
            currentMeasure,
        }
    }

    render() {
        const itemWidth = 15;
        const computedWidth = itemWidth * Object.keys(this.props.modes).reduce((sum, mode) => {
            return sum + this.props.modes[mode].items.length;
        }, 0) + 'em';
        const options = {
            mouseWheel: true,
            scrollbars: true,
            scrollX: true,
            scrollY: false
        };

        return (
            <div className="control-panel">
                <ReactIScroll iScroll={iScroll} options={options}>
                    <div className="iscroll-wrap" style={{ width: computedWidth }}>
                        <ul>
                            {
                                Object.keys(this.props.modes).map(mode =>
                                    this.props.modes[mode].items.map(item =>
                                        <ItemBox item={item} itemSize={this.itemSizeGen(item)} isActive={this.isItemActive(item)} onHovered={this.itemHoveredHandler.bind(this, item, mode)} />
                                    )
                                )
                            }
                        </ul>
                    </div>
                </ReactIScroll>
            </div>
        );
    }
}

let mapStateToProps = (state) => {
    return {
        modes: state.ControlPanel.modes,
        currentItems: state.ControlPanel.currentItems,
        currentMeasure: state.MeasureSettings.currentMeasure,
    };
};

let mapDispatchToProps = (dispatch) => bindActionCreators(actionCreators, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ControlPanel);