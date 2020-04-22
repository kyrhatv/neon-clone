import React, { useState } from 'react';
import { FunctionComponent } from 'react';
import { Row, Col, Button, ButtonGroup, Badge } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import moment from 'moment';
import InlineSpace from 'hs-components/hs-component-space';
import Icon from 'hs-components/Icon/Icon';
import { DatePicker } from 'hs-components/sf-calendars';

import PeriodDisplay from './PeriodDisplay';

import './style.css';

import { selectById, updateRibbon } from './ribbonsSlice';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from 'app-main/app/store';

type RibbonProps = {
    id: string;
};

const Ribbon: FunctionComponent<RibbonProps> = ({ id }) => {
    const [t] = useTranslation();
    const dispatch = useDispatch();

    const ribbonState = useSelector((state: RootState) => selectById(state, id));

    const nbOfWeeks = 1;

    const [currentDay, setCurrentDay] = useState(ribbonState.selectedDate);

    const prevClickedHandler = () => {
        // const selectedDate = moment(currentDay).subtract(nbOfWeeks, 'week').toDate();
        // dispatch(
        //     updateRibbon({
        //         id: id,
        //         changes: { selectedDate: selectedDate }
        //     })
        // );

        setCurrentDay(moment(currentDay).subtract(nbOfWeeks, 'week').toDate());
    };
    const nextClickedHandler = () => {
        setCurrentDay(moment(currentDay).add(nbOfWeeks, 'week').toDate());
    };

    const todayClickedHandler = () => {
        setCurrentDay(new Date());
    };

    const planifClickedHandler = () => {
        setCurrentDay(moment(new Date()).add(nbOfWeeks, 'week').toDate());
    };
    const onSelectedDateChange = (newDate: Date) => {
        setCurrentDay(newDate);
    };

    return (
        <Row className="header-container-ribbon" noGutters>
            <Col md={12}>
                <Button size="sm" variant="dark" onClick={todayClickedHandler}>
                    {t('ribbon.today')}
                </Button>
                <InlineSpace />
                <Button size="sm" variant="dark" onClick={planifClickedHandler}>
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
                <PeriodDisplay date={currentDay}></PeriodDisplay>
            </Col>
        </Row>
    );
};

export default Ribbon;
