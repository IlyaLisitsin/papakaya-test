/*global defaultMode, modes*/
import { SWITCH_MEASURE } from '../../constants/actions';

const initialState = {
    currentMeasure: 'cm'
};

export default function handle(state=initialState, action) {

    const { type, payload } = action;

    switch(type) {
        case SWITCH_MEASURE:
            return { ...state, currentMeasure: payload };
        default:
            return state;
    }
}