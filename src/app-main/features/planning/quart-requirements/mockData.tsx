import React from 'react';

import Quart from 'hs-components/Quarts';

import RequirementCell from './RequirementCell';

export const columns = [
    {
        id: 'quart',
        Header: 'Shifts',
        width: 400,
        filterable: true,
        accessor: (props) => <Quart />
    },
    {
        id: 'monday',
        Header: 'Monday',
        accessor: (props) => <RequirementCell requirement={props.Requirement[0]} />
    },
    {
        id: 'tuesday',
        Header: 'Tuesday',
        accessor: (props) => <RequirementCell requirement={props.Requirement[1]} />
    },
    {
        id: 'wednesday',
        Header: 'Wednesday',
        accessor: (props) => <RequirementCell requirement={props.Requirement[2]} />
    },
    {
        id: 'thursday',
        Header: 'Thursday',
        accessor: (props) => <RequirementCell requirement={props.Requirement[3]} />
    },
    {
        id: 'friday',
        Header: 'Friday',
        accessor: (props) => <RequirementCell requirement={props.Requirement[4]} />
    },
    {
        id: 'saturday',
        Header: 'Saturday',
        accessor: (props) => <RequirementCell requirement={props.Requirement[5]} />
    },
    {
        id: 'sunday',
        Header: 'Sunday',
        accessor: (props) => <RequirementCell requirement={props.Requirement[6]} />
    }
];

export const data = [
    {
        Requirement: [
            { dayIndex: 0, dayName: 'Monday', requirement: 3, utilization: 4, assignedEmployeeIds: ['1', '2'] },
            { dayIndex: 1, dayName: 'Tuesday', requirement: 3, utilization: 3, assignedEmployeeIds: ['1', '2', '3'] },
            { dayIndex: 2, dayName: 'Wednesday', requirement: 3, utilization: 0, assignedEmployeeIds: [] },
            { dayIndex: 3, dayName: 'Thursday', requirement: 3, utilization: 1, assignedEmployeeIds: ['2'] },
            { dayIndex: 4, dayName: 'Friday', requirement: 1, utilization: 1, assignedEmployeeIds: ['1'] },
            { dayIndex: 5, dayName: 'Saturday', requirement: 0, utilization: 0, assignedEmployeeIds: [] },
            { dayIndex: 6, dayName: 'Sunday', requirement: 0, utilization: 0, assignedEmployeeIds: [] }
        ],
        age: 13
    },
    {
        Requirement: [
            { dayIndex: 0, dayName: 'Monday', requirement: 3, utilization: 4, assignedEmployeeIds: ['1', '2'] },
            { dayIndex: 1, dayName: 'Tuesday', requirement: 3, utilization: 3, assignedEmployeeIds: ['1', '2', '3'] },
            { dayIndex: 2, dayName: 'Wednesday', requirement: 3, utilization: 0, assignedEmployeeIds: [] },
            { dayIndex: 3, dayName: 'Thursday', requirement: 3, utilization: 1, assignedEmployeeIds: ['2'] },
            { dayIndex: 4, dayName: 'Friday', requirement: 1, utilization: 1, assignedEmployeeIds: ['1'] },
            { dayIndex: 5, dayName: 'Saturday', requirement: 0, utilization: 0, assignedEmployeeIds: [] },
            { dayIndex: 6, dayName: 'Sunday', requirement: 0, utilization: 0, assignedEmployeeIds: [] }
        ],
        age: 13
    }
];

export const ASSIGNED_QUART_LIST = [
    {
        code: 'plannedmovement|12|approved_101',
        requirementId: 'workspace0|2|4',
        horizonRequirementId: 'workspace0|4',
        quartDTO: {
            code: 'work|2|Horasphere|Développement|55800000|86400000~PONCTUAL|PONCTUAL',
            sourceDTO: { code: 'PONCTUAL', type: 'PONCTUAL', description: 'PONCTUAL' },
            assignationDTOs: [
                {
                    periodDTO: { start: 55800000, end: 86400000 },
                    divisionAffectationDTO: {
                        code: '2|Développement',
                        divisionDTO: {
                            companyCode: 'Horasphere',
                            longCode: 'Timesphere|Montreal',
                            code: 'Montreal',
                            divisionId: 2,
                            parentId: 1,
                            color: '#ba759c',
                            skills: ['MONTREAL'],
                            extraField1: null,
                            extraField2: null,
                            extraField3: null,
                            inactive: false,
                            deleted: false,
                            colorCode: '',
                            labels: [],
                            exclusions: [],
                            operateByManager: false,
                            certificateIds: [],
                            exportValueDTOs: [],
                            pointOfSale: false
                        },
                        affectationDTO: {
                            companyCode: 'Horasphere',
                            code: 'Développement',
                            affectationType: 'WORK',
                            remunerationType: 'PAID',
                            skills: ['DEV'],
                            color: '#3e230f',
                            rate: 0.0,
                            inactive: false,
                            deleted: false,
                            exportValueDTOs: [],
                            colorCode: '',
                            ratio: 0.0,
                            level: 0.0,
                            minimumWorkedHours: 0.0,
                            labels: [],
                            exclusions: [],
                            displayText: 'Développement',
                            certificateIds: [],
                            modified: true,
                            showInRequirements: true,
                            showInRequest: true
                        },
                        companyCode: 'Horasphere',
                        inactive: false,
                        impacted: false
                    }
                }
            ],
            tags: []
        },
        sourceDTO: { code: 'approved_101', type: 'PLANNED_MOVEMENT', description: 'approved_101' },
        dayIndex: 2,
        overrideDTO: null,
        ownerId: '12',
        ownerType: 'EMPLOYEE',
        quartCode: null,
        sourceScenarioDTO: {
            workspaceName: 'approved',
            companyCode: 'Horasphere',
            noVersion: 0,
            noPeriod: 0,
            year: 2020
        },
        userLogDTO: { user: 'superadmin', timeStamp: 1581456515000 },
        assignedTaskDTOs: [],
        accessible: true,
        haveResponse: false,
        plannedMovementSourceDTO: { code: 'PONCTUAL', type: 'PONCTUAL', description: 'PONCTUAL' }
    },
    {
        code: 'plannedmovement|12|approved_102',
        requirementId: 'workspace0|2|4',
        horizonRequirementId: 'workspace0|4',
        quartDTO: {
            code: 'work|2|Horasphere|Développement|55800000|86400000~PONCTUAL|PONCTUAL',
            sourceDTO: { code: 'PONCTUAL', type: 'PONCTUAL', description: 'PONCTUAL' },
            assignationDTOs: [
                {
                    periodDTO: { start: 55800000, end: 86400000 },
                    divisionAffectationDTO: {
                        code: '2|Développement',
                        divisionDTO: {
                            companyCode: 'Horasphere',
                            longCode: 'Timesphere|Montreal',
                            code: 'Montreal',
                            divisionId: 2,
                            parentId: 1,
                            color: '#ba759c',
                            skills: ['MONTREAL'],
                            extraField1: null,
                            extraField2: null,
                            extraField3: null,
                            inactive: false,
                            deleted: false,
                            colorCode: '',
                            labels: [],
                            exclusions: [],
                            operateByManager: false,
                            certificateIds: [],
                            exportValueDTOs: [],
                            pointOfSale: false
                        },
                        affectationDTO: {
                            companyCode: 'Horasphere',
                            code: 'Développement',
                            affectationType: 'WORK',
                            remunerationType: 'PAID',
                            skills: ['DEV'],
                            color: '#3e230f',
                            rate: 0.0,
                            inactive: false,
                            deleted: false,
                            exportValueDTOs: [],
                            colorCode: '',
                            ratio: 0.0,
                            level: 0.0,
                            minimumWorkedHours: 0.0,
                            labels: [],
                            exclusions: [],
                            displayText: 'Développement',
                            certificateIds: [],
                            modified: true,
                            showInRequirements: true,
                            showInRequest: true
                        },
                        companyCode: 'Horasphere',
                        inactive: false,
                        impacted: false
                    }
                }
            ],
            tags: []
        },
        sourceDTO: { code: 'approved_102', type: 'PLANNED_MOVEMENT', description: 'approved_102' },
        dayIndex: 2,
        overrideDTO: null,
        ownerId: '12',
        ownerType: 'EMPLOYEE',
        quartCode: null,
        sourceScenarioDTO: {
            workspaceName: 'approved',
            companyCode: 'Horasphere',
            noVersion: 0,
            noPeriod: 0,
            year: 2020
        },
        userLogDTO: { user: 'superadmin', timeStamp: 1581456515000 },
        assignedTaskDTOs: [],
        accessible: true,
        haveResponse: false,
        plannedMovementSourceDTO: { code: 'PONCTUAL', type: 'PONCTUAL', description: 'PONCTUAL' }
    },
    {
        code: 'plannedmovement|12|approved_103',
        requirementId: 'workspace0|2|4',
        horizonRequirementId: 'workspace0|4',
        quartDTO: {
            code: 'work|2|Horasphere|Développement|55800000|86400000~PONCTUAL|PONCTUAL',
            sourceDTO: { code: 'PONCTUAL', type: 'PONCTUAL', description: 'PONCTUAL' },
            assignationDTOs: [
                {
                    periodDTO: { start: 55800000, end: 86400000 },
                    divisionAffectationDTO: {
                        code: '2|Développement',
                        divisionDTO: {
                            companyCode: 'Horasphere',
                            longCode: 'Timesphere|Montreal',
                            code: 'Montreal',
                            divisionId: 2,
                            parentId: 1,
                            color: '#ba759c',
                            skills: ['MONTREAL'],
                            extraField1: null,
                            extraField2: null,
                            extraField3: null,
                            inactive: false,
                            deleted: false,
                            colorCode: '',
                            labels: [],
                            exclusions: [],
                            operateByManager: false,
                            certificateIds: [],
                            exportValueDTOs: [],
                            pointOfSale: false
                        },
                        affectationDTO: {
                            companyCode: 'Horasphere',
                            code: 'Développement',
                            affectationType: 'WORK',
                            remunerationType: 'PAID',
                            skills: ['DEV'],
                            color: '#3e230f',
                            rate: 0.0,
                            inactive: false,
                            deleted: false,
                            exportValueDTOs: [],
                            colorCode: '',
                            ratio: 0.0,
                            level: 0.0,
                            minimumWorkedHours: 0.0,
                            labels: [],
                            exclusions: [],
                            displayText: 'Développement',
                            certificateIds: [],
                            modified: true,
                            showInRequirements: true,
                            showInRequest: true
                        },
                        companyCode: 'Horasphere',
                        inactive: false,
                        impacted: false
                    }
                }
            ],
            tags: []
        },
        sourceDTO: { code: 'approved_103', type: 'PLANNED_MOVEMENT', description: 'approved_103' },
        dayIndex: 2,
        overrideDTO: null,
        ownerId: '12',
        ownerType: 'EMPLOYEE',
        quartCode: null,
        sourceScenarioDTO: {
            workspaceName: 'approved',
            companyCode: 'Horasphere',
            noVersion: 0,
            noPeriod: 0,
            year: 2020
        },
        userLogDTO: { user: 'superadmin', timeStamp: 1581456515000 },
        assignedTaskDTOs: [],
        accessible: true,
        haveResponse: false,
        plannedMovementSourceDTO: { code: 'PONCTUAL', type: 'PONCTUAL', description: 'PONCTUAL' }
    }
];
