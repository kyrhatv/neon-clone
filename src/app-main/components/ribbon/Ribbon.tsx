import React, { useState } from 'react';
import { FunctionComponent } from 'react';
import { Row, Col, Button, ButtonGroup, Badge } from 'react-bootstrap';
import moment from 'moment';
import { useTranslation } from 'react-i18next';

import InlineSpace from 'hs-components/hs-component-space';
import './style.css';
import Icon from 'hs-components/Icon/Icon';

import { DatePicker } from 'hs-components/sf-calendars';

const Ribbon: FunctionComponent = () => {
    const [t] = useTranslation();

    const [currentDay, setCurrentDay] = useState(new Date());

    const prevClickedHandler = () => {
        setCurrentDay(moment(currentDay).subtract(1, 'week').toDate());
    };
    const nextClickedHandler = () => {
        setCurrentDay(moment(currentDay).add(1, 'week').toDate());
    };

    const todayClickedHandler = () => {
        setCurrentDay(new Date());
    };

    const onSelectedDateChange = (newDate: Date) => {
        setCurrentDay(newDate);
    };

    return (
        <Row className="header-container-ribbon" noGutters>
            <Col md={5}>
                <Button size="sm" variant="dark" onClick={todayClickedHandler}>
                    {t('ribbon.today')}
                </Button>
                <InlineSpace />
                <Button size="sm" variant="dark">
                    {t('ribbon.planif')}
                </Button>
                <InlineSpace />
                <ButtonGroup>
                    <Button size="sm" variant="dark" onClick={prevClickedHandler}>
                        <Icon iconName="chevron-left" />
                    </Button>
                    <Button size="sm" variant="dark" onClick={nextClickedHandler}>
                        <Icon iconName="chevron-right" />
                    </Button>
                </ButtonGroup>
                <InlineSpace />
                <DatePicker
                    id="dasd"
                    width={'150px'}
                    cssClass={'bootstrap4'}
                    dayHeaderFormat={'Short'}
                    depth={'Month'}
                    firstDayOfWeek={0}
                    max={new Date('2099-11-31')}
                    min={new Date('1999-01-01')}
                    value={currentDay}
                    onDateChanged={onSelectedDateChange}
                />
                <InlineSpace />
                <Badge variant="secondary">1 mars 2020 - 7 mars 2020</Badge>
            </Col>
        </Row>
    );
};

export default Ribbon;
