import React, { useState } from 'react';

import { FunctionComponent } from 'react';

import Icon from 'hs-components/Icon/Icon';
import './bs-stepper.min.css';
import InlineSpace from 'hs-components/hs-component-space';

type Step = {
    id: string;
    index: number;
    displayText: string;
};

type StepperProps = {
    id: string;
    steps: Step[];
    initialStep: string;
    iconShape: 'circle' | 'square';
    withStepNumbers?: boolean;
    stepTranslation?: string;
};

const Stepper: FunctionComponent<StepperProps> = ({
    id,
    steps,
    initialStep,
    iconShape,
    withStepNumbers = false,
    stepTranslation = null
}) => {
    const [currentStep, setcurrentStep] = useState(steps.find((step) => step.id === initialStep));

    const currentStepstyle = { color: '#007bff' };
    const defaultStyle = { textAlign: 'center', color: '#6c757d' };

    const defaultLineStyle = { backgroundColor: '#6c757d' };
    const activeLineStyle = { backgroundColor: '#007bff' };

    return (
        <div id={id} className="bs-stepper" style={{ margin: '20px' }}>
            <div className="bs-stepper-header">
                {steps.map((step) => {
                    return (
                        <>
                            <div style={{ textAlign: 'center' }} className="step" data-target="#test-l-1">
                                <button
                                    style={step.index <= currentStep.index ? currentStepstyle : defaultStyle}
                                    className="step-trigger"
                                    onClick={() => setcurrentStep(step)}>
                                    <Icon
                                        prefix={step.id === currentStep.id ? 'fas' : 'far'}
                                        iconName={iconShape}
                                        size="2x"></Icon>
                                    <InlineSpace />
                                    {withStepNumbers && stepTranslation != null ? (
                                        <>
                                            {stepTranslation + ' ' + step.index.toString() + ':'} <InlineSpace />
                                        </>
                                    ) : null}
                                    {step.displayText}
                                </button>
                            </div>
                            {step.index !== steps.length ? (
                                <div
                                    style={step.index < currentStep.index ? activeLineStyle : defaultLineStyle}
                                    className="line"></div>
                            ) : null}
                        </>
                    );
                })}
            </div>
        </div>
    );
};

export default Stepper;
