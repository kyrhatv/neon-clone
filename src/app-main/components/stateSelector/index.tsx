import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Stepper from 'hs-components/Stepper';

import { ConfirmModal } from 'hs-components/modals';

export function StateSelector({ steps, initialStepId }) {
    const [t] = useTranslation();

    const [isShown, setIsShown] = useState(false);
    const [currentStep, setcurrentStep] = useState(steps.find((step) => step.id === initialStepId));
    const [nextStep, setNextStep] = useState(null);

    const confirmModalTexts = {
        headerText: t('confirmationModal.title'),
        message: t('stateSelector.modalText'),
        confirmButtonText: t('buttons.yes'),
        cancelButtonText: t('buttons.no')
    };

    const stepChangedHandler = (event, step) => {
        setNextStep(step);
        setIsShown(true);
    };
    const modalConfirmHandler = () => {
        setcurrentStep(nextStep);
        setNextStep(null);
        setIsShown(false);
    };
    const modalCloseHandler = () => {
        setNextStep(null);
        setIsShown(false);
    };

    return (
        <>
            <ConfirmModal
                isShown={isShown}
                displayTexts={confirmModalTexts}
                onConfirm={modalConfirmHandler}
                onHide={modalCloseHandler}
                onCancel={modalCloseHandler}
            />
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
}
