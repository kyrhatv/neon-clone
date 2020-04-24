import React from 'react';

import { FunctionComponent } from 'react';

import { Button, Modal } from 'react-bootstrap';

import Icon from 'hs-components/Icon/Icon';
import InlineSpace from 'hs-components/hs-component-space';

type ConfirmModalTexts = {
    headerText: string;
    confirmButtonText: string;
    cancelButtonText: string;
};

type ConfirmModalProps = {
    isShown: boolean;
    displayTexts: ConfirmModalTexts;
    children: JSX.Element;
    onConfirm: () => void;
    onHide: () => void;
    onCancel: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

const ConfirmModal: FunctionComponent<ConfirmModalProps> = ({
    isShown,
    displayTexts,
    children,
    onConfirm,
    onHide,
    onCancel
}) => {
    return (
        <Modal show={isShown} onHide={onHide}>
            <Modal.Header closeButton>
                <Modal.Title>{displayTexts.headerText}</Modal.Title>
            </Modal.Header>

            <Modal.Body>{children}</Modal.Body>

            <Modal.Footer>
                <Button variant="secondary" onClick={onCancel}>
                    <Icon prefix="far" iconName="times-circle" />
                    <InlineSpace />
                    {displayTexts.cancelButtonText}
                </Button>
                <Button variant="primary" onClick={onConfirm}>
                    <Icon prefix="far" iconName="check-circle" />
                    <InlineSpace />
                    {displayTexts.confirmButtonText}
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default ConfirmModal;
