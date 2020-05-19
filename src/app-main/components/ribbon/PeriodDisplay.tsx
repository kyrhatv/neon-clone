import React from 'react';
import { FunctionComponent } from 'react';
import { Badge } from 'react-bootstrap';
import moment from 'moment';

type PeriodDisplayProps = {
    date: Date;
};

const PeriodDisplay: FunctionComponent<PeriodDisplayProps> = ({ date }) => {
    return (
        <Badge variant="secondary">
            {moment(date).startOf('week').format('LL') + ' - ' + moment(date).endOf('week').format('LL')}
        </Badge>
    );
};

export default PeriodDisplay;
