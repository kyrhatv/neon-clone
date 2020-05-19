import React, { useState } from 'react';
import { FunctionComponent } from 'react';
import MultiSelect from 'hs-components/sf-multiSelect';

type DivisionAffectationSelectorProps = {};

const DivisionAffectationSelector: FunctionComponent<DivisionAffectationSelectorProps> = ({}) => {
    const [selectedValues, setselectedValues] = useState([]);

    const data: { [key: string]: Object }[] = [
        { displayText: 'Montréal', division: 'Timesphere', id: 'mtl' },
        { displayText: 'Chicoutimi', division: 'Timesphere', id: 'item2' },
        { displayText: 'Abscence', division: 'Timesphere', id: 'item3' },
        { displayText: 'NON DISPO', division: 'Timesphere', id: 'item4' },
        { displayText: 'RH', division: 'Timesphere', id: 'item5' },
        { displayText: 'VACANCES', division: 'Timesphere', id: 'item6' },
        { displayText: 'Développement', division: 'Montreal', id: 'item7' },
        { displayText: 'Développement', division: 'Chicoutimi', id: 'itemjjj' },
        { displayText: 'Implantation', division: 'Chicoutimi', id: 'item8' },
        { displayText: 'Support', division: 'Chicoutimi', id: 'item9' }
    ];
 
    const onSelectionChange = (values) => {
        setselectedValues(values);
    };

    return (
        <MultiSelect
            id="division-affectation-Selector"
            data={data}
            groupBy="division"
            itemIds="id"
            displayText="displayText"
            onSelectionChange={onSelectionChange}></MultiSelect>
    );
};

export default DivisionAffectationSelector;
