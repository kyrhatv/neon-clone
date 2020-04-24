import React, { useRef, useEffect } from 'react';
import { FunctionComponent } from 'react';
import { ToastComponent } from '@syncfusion/ej2-react-notifications';

import '@syncfusion/ej2-base/styles/bootstrap4.css';
import '@syncfusion/ej2-react-buttons/styles/bootstrap4.css';
import '@syncfusion/ej2-react-popups/styles/bootstrap4.css';
import '@syncfusion/ej2-react-notifications/styles/bootstrap4.css';

import Icon from 'hs-components/Icon/Icon';
import InlineSpace from 'hs-components/hs-component-space';
import { Col, Row } from 'react-bootstrap';
import { IconName } from '@fortawesome/fontawesome-svg-core';

export type ToastProps = {
    type: 'info' | 'warning' | 'danger' | 'success';
    isShown: boolean;
};

const Toast: FunctionComponent<ToastProps> = ({ type, isShown }) => {
    const toastRef = useRef(null);

    const toastCreated = () => {
        toastRef.current.show();
    };

    useEffect(() => {
        if (toastRef.current !== null && toastRef.current.isRendered) {
            toastRef.current.show();
        }
    }, [isShown]);

    const types = {
        info: { class: 'e-toast-info', iconName: 'info-circle' },
        warning: { class: 'e-toast-warning', iconName: 'exclamation-triangle' },
        danger: { class: 'e-toast-danger', iconName: 'exclamation-circle' },
        success: { class: 'e-toast-success', iconName: 'check-circle' }
    };

    const contentTemplate = () => {
        return (
            <Row>
                <Col md={12}>
                    <Icon iconName={types['info'].iconName as IconName} size="1x" />
                    <InlineSpace />
                    <span>
                        HELLOHELLOHELLOHELLOHELLOHELLOHELLOHELLOHELLOHELLOHELLOHELLOHELLOHELLOHELLO HELLOHELLOHELLOHELLO
                    </span>
                </Col>
            </Row>
        );
    };

    return (
        <ToastComponent
            ref={toastRef}
            cssClass={types['info'].class}
            created={toastCreated}
            position={{ X: 'Right', Y: 'Bottom' }}
            width="auto"
            height="auto"
            content={contentTemplate}
            // buttons={buttons}
            showProgressBar={true}
        />
    );
};

export default Toast;
