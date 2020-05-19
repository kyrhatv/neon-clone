import React from 'react';

import { Row, Col } from 'react-bootstrap';
import { FunctionComponent } from 'react';

import InlineSpace from 'hs-components/hs-component-space';

import Icon from 'hs-components/Icon';
import './style.css';
export type StepperProps = {};

const Quart: FunctionComponent<StepperProps> = () => {
    return (
        <div className="Quart">
            <Col md={12} style={{ paddingLeft: '0px' }}>
                <Row className="Quart__header">
                    <Icon iconName="cube" /> <InlineSpace />
                    {'E Sullivan MH2 (8,0)'}
                </Row>
                <Row style={{ marginLeft: 15 }} className="Quart__assignations" noGutters>
                    <Col md={12}>
                        <Row style={{ margin: ' 0,0,0,0 ', borderLeftColor: '#32a852' }} className={` Assignation`}>
                            <Row className="Assignation--multi">
                                <Col md={4}>{true && <span style={{ fontWeight: 'bold' }}>{'Timesphere'}</span>}</Col>
                                <Col md={4}> {true && <span>{'Support'}</span>}</Col>
                                <Col md={4}>{`8h-17h (8h)`}</Col>
                            </Row>
                        </Row>
                    </Col>
                </Row>
            </Col>
        </div>
    );
};

export default Quart;
