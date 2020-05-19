import React, { FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';
import InlineSpace from 'hs-components/hs-component-space';
import Icon from 'hs-components/Icon';
import { Button, Row, Col } from 'react-bootstrap';

type ParametersButtonProps = {
    displayText?: string;
    destinationUrl?: string;
};

const ParametersButton: FunctionComponent<ParametersButtonProps> = ({ displayText, destinationUrl }) => {
    const [t] = useTranslation();

    return (
        <Row style={{ paddingBottom: '5px' }}>
            <Col md={12}>
                <Button variant="primary" size="sm" block>
                    <Icon iconName="cogs" />
                    <InlineSpace />
                    {t('ShiftRequirements.configs.PlanningParameters')}
                </Button>
            </Col>
        </Row>
    );
};

export default ParametersButton;
