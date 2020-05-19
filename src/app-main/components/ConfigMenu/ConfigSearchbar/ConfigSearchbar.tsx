import React, { FunctionComponent } from 'react';
import {
    AutoCompleteComponent,
    ChangeEventArgs,
    FilteringEventArgs,
    SelectEventArgs
} from '@syncfusion/ej2-react-dropdowns';

import '@syncfusion/ej2-base/styles/bootstrap4.css';
import '@syncfusion/ej2-react-inputs/styles/bootstrap4.css';
import '@syncfusion/ej2-react-dropdowns/styles/bootstrap4.css';

type ConfigSearchbarProps = {
    searchData: string[];
    placeHolder: string;
    onSearchChanged: Function;
};

const ConfigSearchbar: FunctionComponent<ConfigSearchbarProps> = ({ searchData, placeHolder, onSearchChanged }) => {
    const onSearchChangedHandler = (args: ChangeEventArgs) => {
        args.value === null ? onSearchChanged('') : onSearchChanged(args.value.toString());
    };

    const onFilter = (args: FilteringEventArgs) => {
        args.text === null ? onSearchChanged('') : onSearchChanged(args.text);
    };
    const onSelectionChanged = (args: SelectEventArgs) => {
        args.itemData.value === null ? onSearchChanged('') : onSearchChanged(args.itemData.value);
    };

    return (
        <AutoCompleteComponent
            id="atcelement"
            showPopupButton
            dataSource={searchData}
            autofill
            change={onSearchChangedHandler}
            select={onSelectionChanged}
            filtering={onFilter}
            placeholder={placeHolder}
        />
    );
};

export default ConfigSearchbar;
