import { combineReducers } from 'redux';
import ComparePanel from './ComparePanel/reducer';
import ControlPanel from './ControlPanel/reducer';
import MeasureSettings from './MeasureSettings/reducer';

export default combineReducers({
    ComparePanel,
    ControlPanel,
    MeasureSettings,
});