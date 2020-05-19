import React, { useState } from 'react';
import { FunctionComponent } from 'react';

import { useTranslation } from 'react-i18next';
import Stepper from 'hs-components/Stepper';
import { Alert } from 'react-bootstrap';

import { ConfirmModal } from 'hs-components/modals';
import Icon from 'hs-components/Icon';
import InlineSpace from 'hs-components/hs-component-space';

import { Step } from 'hs-components/Stepper/Stepper';

type StateSelectorProps = {
    featureId: string;
    steps: Step[];
    initialStepId: string;
};

const StateSelector: FunctionComponent<StateSelectorProps> = ({ featureId, steps, initialStepId }) => {
    const [t] = useTranslation();

    const [isShown, setIsShown] = useState(false);
    const [currentStep, setcurrentStep] = useState(steps.find((step) => step.id === initialStepId));
    const [nextStep, setNextStep] = useState(steps.find((step) => step.id === initialStepId));

    const confirmModalTexts = {
        headerText: t('confirmationModal.title'),
        confirmButtonText: t('buttons.yes'),
        cancelButtonText: t('buttons.no')
    };

    const stepChangedHandler = (event, step) => {
        setNextStep(step);
        setIsShown(true);
    };
    const modalConfirmHandler = () => {
        setcurrentStep(nextStep);
        setNextStep(currentStep);
        setIsShown(false);
    };
    const modalCloseHandler = () => {
        setNextStep(currentStep);
        setIsShown(false);
    };

    return (
        <>
            <ConfirmModal
                isShown={isShown}
                displayTexts={confirmModalTexts}
                onConfirm={modalConfirmHandler}
                onHide={modalCloseHandler}
                onCancel={modalCloseHandler}>
                <>
                    <p>
                        {t('stateSelector.modalText', {
                            stepName: t('stateSelector.' + featureId + '.' + nextStep.id)
                        })}
                    </p>

                    {nextStep.irrevocable && (
                        <Alert variant="warning">
                            <Icon iconName="exclamation-triangle" />
                            <InlineSpace /> {t('stateSelector.irrevocableWarning')}
                        </Alert>
                    )}
                </>
            </ConfirmModal>
            <Stepper
                id="state-Selector"
                steps={steps}
                iconShape={'circle'}
                currentStep={currentStep}
                withStepNumbers
                stepTranslation={t('step')}
                onStepChanged={stepChangedHandler}
            />
        </>
    );
};
export default StateSelector;
