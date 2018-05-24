import { SWITCH_MEASURE } from '../../constants/actions';

export function switchMeasure(measure) {
    return {
        type: SWITCH_MEASURE,
        payload: measure
    };
}