import React from 'react';
import { FunctionComponent } from 'react';
import { Row, Col, Button, ButtonGroup } from 'react-bootstrap';

import { useTranslation } from 'react-i18next';

import InlineSpace from 'hs-components/hs-component-space';
import './style.css';
import Icon from 'hs-components/Icon/Icon';

import { DatePicker } from 'hs-components/sf-calendars';

const Ribbon: FunctionComponent = () => {
    const [t] = useTranslation();

    return (
        <Row className="header-container-ribbon" noGutters>
            <Col md={5}>
                <Button size="sm" variant="dark">
                    {t('ribbon.today')}
                </Button>
                <InlineSpace />
                <Button size="sm" variant="dark">
                    {t('ribbon.planif')}
                </Button>
                <InlineSpace />
                <ButtonGroup>
                    <Button size="sm" variant="dark">
                        <Icon iconName="chevron-left" />
                    </Button>
                    <Button size="sm" variant="dark">
                        <Icon iconName="chevron-right" />
                    </Button>
                </ButtonGroup>
                <InlineSpace />
                <DatePicker
                    id="dasd"
                    width={'150px'}
                    allowEdit
                    // isReadOnly
                    cssClass={'bootstrap4'}
                    dayHeaderFormat={'Short'}
                    depth={'Month'}
                    firstDayOfWeek={0}
                    max={new Date('2099-11-31')}
                    min={new Date('1999-01-01')}
                    showClearButton
                    showTodayButton
                    value={new Date()}
                />
                <InlineSpace />
                <InlineSpace />1 mars 2020 - 7 mars 2020
            </Col>
        </Row>
    );
};

export default Ribbon;
