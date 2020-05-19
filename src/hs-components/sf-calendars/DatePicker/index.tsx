import React, { useRef } from 'react';
import { FunctionComponent } from 'react';
import { DatePickerComponent, ChangedEventArgs } from '@syncfusion/ej2-react-calendars';

import '../style.css';

import { CalendarView, DayHeaderFormats } from '@syncfusion/ej2-calendars/src/calendar/calendar';

import '@syncfusion/ej2-base/styles/bootstrap4.css';
import '@syncfusion/ej2-buttons/styles/bootstrap4.css';
import '@syncfusion/ej2-inputs/styles/bootstrap4.css';
import '@syncfusion/ej2-popups/styles/bootstrap4.css';
import '@syncfusion/ej2-react-calendars/styles/bootstrap.css';

export interface DatePickerProps {
    id: string;
    width?: 'auto' | string;
    allowEdit?: boolean;
    cssClass?: string;
    dayHeaderFormat?: DayHeaderFormats;
    depth?: CalendarView;
    enablePersistence?: boolean;
    firstDayOfWeek?: number;
    showTodayButton?: boolean;
    max?: Date;
    min?: Date;
    isReadOnly?: boolean;
    showClearButton?: boolean;
    value?: Date;
    onDateChanged: Function;
}

const defaultProps = {
    id: '',
    width: 'auto',
    allowEdit: false,
    cssClass: 'bootstrap4',
    dayHeaderFormat: 'Short' as DayHeaderFormats,
    depth: 'Month' as CalendarView,
    enablePersistence: false,
    firstDayOfWeek: 0 as number,
    showTodayButton: false,
    max: new Date('2099-11-31'),
    min: new Date('1999-00-01'),
    isReadOnly: false,
    showClearButton: false,
    value: new Date(),
    onDateChanged: () => {
        console.log('hello');
    }
};

const DatePicker: FunctionComponent<DatePickerProps> = ({
    id,
    width,
    allowEdit,
    cssClass,
    dayHeaderFormat,
    depth,
    enablePersistence,
    showTodayButton,
    firstDayOfWeek,
    max,
    min,
    isReadOnly,
    showClearButton,
    value,
    onDateChanged
}) => {
    const datePickerRef = useRef(null);

    const onChange = (args: ChangedEventArgs) => {
        onDateChanged(args.value);
    };

    return (
        <DatePickerComponent
            id={id}
            change={onChange}
            width={width}
            allowEdit={allowEdit}
            cssClass={cssClass}
            dayHeaderFormat={dayHeaderFormat}
            depth={depth}
            enablePersistence={enablePersistence}
            firstDayOfWeek={firstDayOfWeek as number}
            max={max}
            min={min}
            ref={datePickerRef}
            showTodayButton={showTodayButton}
            readOnly={isReadOnly}
            showClearButton={showClearButton}
            value={value}
        />
    );
};
DatePicker.defaultProps = defaultProps;

export default DatePicker;
