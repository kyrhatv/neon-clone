import React from 'react';
import { FunctionComponent } from 'react';

import { data, columns } from './mockData';
import ReactTable from 'react-table';
import 'react-table/react-table.css';

type QuartRequirementProps = {};

const QuartRequirements: FunctionComponent<QuartRequirementProps> = ({}) => {
    console.log(columns);
    return (
        <>
            <ReactTable
                data={data}
                columns={columns}
                defaultPageSize={5}
                className="-striped -highlight"
                SubComponent={(row) => {
                    return (
                        <div style={{ backgroundColor: '#f7f7f7' }}>
                            <div style={{ padding: '15px' }}>
                                <ReactTable
                                    data={data}
                                    columns={columns}
                                    defaultPageSize={10}
                                    className="-striped -highlight"
                                />
                            </div>
                        </div>
                    );
                }}
            />
        </>
    );
};

export default QuartRequirements;
