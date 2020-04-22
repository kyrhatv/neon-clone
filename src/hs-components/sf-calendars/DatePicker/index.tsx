import React, { useRef, useEffect } from 'react';
import { FunctionComponent } from 'react';
import { DatePickerComponent } from '@syncfusion/ej2-react-calendars';

import '../style.css'; //pour fix le bug de syncfusion pour Bootstrp4

import { CalendarView, DayHeaderFormats } from '@syncfusion/ej2-calendars/src/calendar/calendar';
import '@syncfusion/ej2-base/styles/bootstrap4.css';
import '@syncfusion/ej2-buttons/styles/bootstrap4.css';
import '@syncfusion/ej2-inputs/styles/bootstrap4.css';
import '@syncfusion/ej2-popups/styles/bootstrap4.css';
import '@syncfusion/ej2-react-calendars/styles/bootstrap.css';

import { L10n } from '@syncfusion/ej2-base';
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
    // onValueChange:
}

const defaultProps = {
    id: '',
    width: 'auto',
    allowEdit: true,
    cssClass: 'bootstrap4',
    dayHeaderFormat: 'Short' as DayHeaderFormats,
    depth: 'Month' as CalendarView,
    enablePersistence: false,
    firstDayOfWeek: 0 as number,
    showTodayButton: false,
    max: new Date('2099-11-31'),
    min: new Date('1999-00-01'),
    isReadOnly: false,
    showClearButton: true,
    value: new Date()
    // onValueChange:
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
    value
}) => {
    const datePickerRef = useRef(null);
    
    //load the locale object to set the localized placeholder value
    L10n.load({
        'fr-CA': {
            datepicker: {
                placeholder: 'Prendre une date',
                today: "Aujourd'hui"
            }
        }
    });
    
    return (
        <DatePickerComponent
            id="datepicker"
            locale="fr-CA"
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
