import React from 'react';
import { FunctionComponent } from 'react';
import { Button } from 'react-bootstrap';

import ReactTable from 'react-table';
import 'react-table/react-table.css';
import { useTranslation } from 'react-i18next';

import Quart from 'hs-components/Quarts';
import RequirementCell from './RequirementCell';
import InlineSpace from 'hs-components/hs-component-space';
import Icon from 'hs-components/Icon';

import { RootState } from 'app-main/app/store';
import { useSelector } from 'react-redux';

import { selectById } from 'app-main/components/configSidebarMenus/planning/QuartRequirements/QuartRequirementsConfigsSlice';

type QuartRequirementProps = {};

const QuartRequirements: FunctionComponent<QuartRequirementProps> = () => {
    const [t] = useTranslation();

    const QuartRequirementsConfigs = useSelector((state: RootState) => selectById(state, 'requirementsConfigs'));

    const {
        // id,
        // filterByOrderSearch,
        // filterCriteria,
        // SortCriteria,
        // showSubDivs,
        // showUnderAndOver,
        // showNonWork,
        // countOnlyEmployees,
        // filterByAffDivSelection,
        showDetailledRequirementCell
    } = QuartRequirementsConfigs;

    const addShiftClickHandler = () => {
        console.log('add clicked ');
    };

    const columns = [
        {
            id: 'quart',
            Header: (
                <div>
                    {t('ShiftRequirements.shifts')} <InlineSpace width="1.5" />
                    <Button variant="primary" onClick={addShiftClickHandler}>
                        <Icon iconName="plus" />
                        <InlineSpace />
                        {t('buttons.add')}
                    </Button>
                </div>
            ),
            sortable: false,
            width: 400,
            accessor: () => <Quart />
        },
        {
            id: 'monday',
            Header: t('simpledate.days.mon'),
            accessor: (props) => (
                <RequirementCell isDetailedView={showDetailledRequirementCell} requirement={props.Requirement[0]} />
            )
        },
        {
            id: 'tuesday',
            Header: t('simpledate.days.tue'),
            accessor: (props) => (
                <RequirementCell isDetailedView={showDetailledRequirementCell} requirement={props.Requirement[1]} />
            )
        },
        {
            id: 'wednesday',
            Header: t('simpledate.days.wed'),
            accessor: (props) => (
                <RequirementCell isDetailedView={showDetailledRequirementCell} requirement={props.Requirement[2]} />
            )
        },
        {
            id: 'thursday',
            Header: t('simpledate.days.thu'),
            accessor: (props) => (
                <RequirementCell isDetailedView={showDetailledRequirementCell} requirement={props.Requirement[3]} />
            )
        },
        {
            id: 'friday',
            Header: t('simpledate.days.fri'),
            accessor: (props) => (
                <RequirementCell isDetailedView={showDetailledRequirementCell} requirement={props.Requirement[4]} />
            )
        },
        {
            id: 'saturday',
            Header: t('simpledate.days.sat'),
            accessor: (props) => (
                <RequirementCell isDetailedView={showDetailledRequirementCell} requirement={props.Requirement[5]} />
            )
        },
        {
            id: 'sunday',
            Header: t('simpledate.days.sun'),
            accessor: (props) => (
                <RequirementCell isDetailedView={showDetailledRequirementCell} requirement={props.Requirement[6]} />
            )
        }
    ];

    const data = [
        {
            Requirement: [
                { dayIndex: 0, dayName: 'Monday', requirement: 3, utilization: 4, assignedEmployeeIds: ['1', '2'] },
                {
                    dayIndex: 1,
                    dayName: 'Tuesday',
                    requirement: 3,
                    utilization: 3,
                    assignedEmployeeIds: ['1', '2', '3']
                },
                { dayIndex: 2, dayName: 'Wednesday', requirement: 3, utilization: 0, assignedEmployeeIds: [] },
                { dayIndex: 3, dayName: 'Thursday', requirement: 3, utilization: 1, assignedEmployeeIds: ['2'] },
                { dayIndex: 4, dayName: 'Friday', requirement: 1, utilization: 1, assignedEmployeeIds: ['1'] },
                { dayIndex: 5, dayName: 'Saturday', requirement: 0, utilization: 0, assignedEmployeeIds: [] },
                { dayIndex: 6, dayName: 'Sunday', requirement: 0, utilization: 0, assignedEmployeeIds: [] }
            ],
            iscovered: true
        },
        {
            Requirement: [
                { dayIndex: 0, dayName: 'Monday', requirement: 3, utilization: 4, assignedEmployeeIds: ['1', '2'] },
                {
                    dayIndex: 1,
                    dayName: 'Tuesday',
                    requirement: 3,
                    utilization: 3,
                    assignedEmployeeIds: ['1', '2', '3']
                },
                { dayIndex: 2, dayName: 'Wednesday', requirement: 3, utilization: 0, assignedEmployeeIds: [] },
                { dayIndex: 3, dayName: 'Thursday', requirement: 3, utilization: 1, assignedEmployeeIds: ['2'] },
                { dayIndex: 4, dayName: 'Friday', requirement: 1, utilization: 1, assignedEmployeeIds: ['1'] },
                { dayIndex: 5, dayName: 'Saturday', requirement: 0, utilization: 0, assignedEmployeeIds: [] },
                { dayIndex: 6, dayName: 'Sunday', requirement: 0, utilization: 0, assignedEmployeeIds: [] }
            ],
            iscovered: false
        }
    ];

    // const getfilteredData = () => {
    //     if (showUnderAndOver) {
    //         return data.filter((data) => data.iscovered === true);
    //     }
    //     return data;
    // };

    return (
        <>
            {JSON.stringify(QuartRequirementsConfigs)}
            <ReactTable
                data={data}
                columns={columns}
                defaultPageSize={5}
                className="-striped -highlight"
                // SubComponent={(row) => {
                //     return (
                //         <div style={{ backgroundColor: '#f7f7f7' }}>
                //             <div style={{ padding: '15px' }}>
                //                 <ReactTable
                //                     data={data}
                //                     columns={columns}
                //                     defaultPageSize={10}
                //                     className="-striped -highlight"
                //                 />
                //             </div>
                //         </div>
                //     );
                // }}
            />
        </>
    );
};

export default QuartRequirements;
