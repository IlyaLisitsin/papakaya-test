import React from 'react';
import ControlPanel from './ControlPanel/ControlPanel';
import ComparePanel from './ComparePanel/ComparePanel';
import MeasureSettings from './MeasureSettings/MeasureSettings';
import './root.css';

export const Root = () => (
    <div className="tangiblee-app">
        <ComparePanel />
        <MeasureSettings />
        <ControlPanel />
    </div>
);
