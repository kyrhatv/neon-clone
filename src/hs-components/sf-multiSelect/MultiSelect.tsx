import React from 'react';
import { FunctionComponent } from 'react';
import {
    FilteringEventArgs,
    CheckBoxSelection,
    Inject,
    MultiSelectComponent,
    MultiSelectChangeEventArgs
} from '@syncfusion/ej2-react-dropdowns';
import { Query } from '@syncfusion/ej2-data';

import '@syncfusion/ej2-base/styles/bootstrap.css';
import '@syncfusion/ej2-buttons/styles/bootstrap.css';
import '@syncfusion/ej2-inputs/styles/bootstrap.css';
import '@syncfusion/ej2-react-dropdowns/styles/bootstrap.css';

type MultiSelectProps = {
    id: string;
    mode?: 'Box' | 'Delimiter' | 'Default' | 'CheckBox';
    readOnly?: boolean;
    data: { [key: string]: Object }[];
    groupBy: string;
    itemIds: string;
    popupHeight?: string;
    displayText: string;
    placeHolderText?: string;
    onSelectionChange: Function;
};

const MultiSelect: FunctionComponent<MultiSelectProps> = ({
    id,
    mode = 'Box',
    readOnly = false,
    data,
    groupBy,
    itemIds,
    displayText,
    popupHeight = '400px',
    placeHolderText = 'Choose a value',
    onSelectionChange
}) => {
    const fields = { groupBy: groupBy, text: displayText, value: itemIds };

    const onFiltering = (args: FilteringEventArgs) => {
        let query = new Query();
        query = args.text !== '' ? query.where(displayText, 'contains', args.text, true) : query;
        args.updateData(data, query);
    };

    const onSelectionChanged = (args: MultiSelectChangeEventArgs) => {
        onSelectionChange(args.value);
    };

    return (
        <MultiSelectComponent
            mode={mode}
            enableGroupCheckBox={true}
            enableSelectionOrder={false}
            id={id}
            readonly={readOnly}
            ignoreAccent={true}
            changeOnBlur={false}
            popupHeight={popupHeight}
            fields={fields}
            filtering={onFiltering}
            allowFiltering={true}
            dataSource={data}
            placeholder={placeHolderText}
            change={onSelectionChanged}>
            <Inject services={[CheckBoxSelection]} />
        </MultiSelectComponent>
    );
};

export default MultiSelect;
