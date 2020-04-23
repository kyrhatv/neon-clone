import React, { useState } from 'react';
import { FunctionComponent } from 'react';
import { FilteringEventArgs, CheckBoxSelection, Inject, MultiSelectComponent } from '@syncfusion/ej2-react-dropdowns';
import { Query } from '@syncfusion/ej2-data';

import { SortOrder } from '@syncfusion/ej2-lists';

import '@syncfusion/ej2-base/styles/bootstrap.css';
import '@syncfusion/ej2-buttons/styles/bootstrap.css';
import '@syncfusion/ej2-inputs/styles/bootstrap.css';
import '@syncfusion/ej2-react-dropdowns/styles/bootstrap.css';

type LinesProps = {};

const Lines: FunctionComponent<LinesProps> = ({}) => {
    const data: { [key: string]: Object }[] = [
        { name: 'Montréal', division: 'Timesphere', id: 'mtl', colorCode: '#75523C' },
        { name: 'Chicoutimi', division: 'Timesphere', id: 'item2', colorCode: '#FF843D' },
        { name: 'Abscence', division: 'Timesphere', id: 'item3', colorCode: '#75523C' },
        { name: 'NON DISPO', division: 'Timesphere', id: 'item4', colorCode: '#75523C' },
        { name: 'RH', division: 'Timesphere', id: 'item5', colorCode: '#FF843D' },
        { name: 'VACANCES', division: 'Timesphere', id: 'item6', colorCode: '#75523C' },
        { name: 'Développement', division: 'Montreal', id: 'item7', colorCode: '#75523C' },
        { name: 'Développement', division: 'Chicoutimi', id: 'itemjjj', colorCode: '#75523C' },
        { name: 'Implantation', division: 'Chicoutimi', id: 'item8', colorCode: '#75523C' },
        { name: 'Support', division: 'Chicoutimi', id: 'item9', colorCode: '#75523C' }
    ];
    const vegieFields = { groupBy: 'division', text: 'name', value: 'id' };

    
    const onFiltering = (args: FilteringEventArgs) => {
        let query = new Query();
        query = args.text !== '' ? query.where('name', 'contains', args.text, true) : query;
        args.updateData(data, query);
    };

    return (
        <>
            <MultiSelectComponent id="mtselement" fields={vegieFields} dataSource={data} />;
            <MultiSelectComponent
                // mode="CheckBox"
                mode="Box"
                enableGroupCheckBox={true}
                enableSelectionOrder={false}
                id="mtselement"
                popupHeight="400px"
                fields={vegieFields}
                filtering={onFiltering}
                allowFiltering={true}
                dataSource={data}
                placeholder="Select a country">
                <Inject services={[CheckBoxSelection]} />
            </MultiSelectComponent>{' '}
            <MultiSelectComponent
                mode="CheckBox"
                enableGroupCheckBox={true}
                enableSelectionOrder={false}
                id="mtselement"
                popupHeight="400px"
                fields={vegieFields}
                filtering={onFiltering}
                allowFiltering={true}
                dataSource={data}
                placeholder="Select a country">
                <Inject services={[CheckBoxSelection]} />
            </MultiSelectComponent>
        </>
    );
};

export default Lines;
