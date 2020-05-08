import React, { useState } from 'react';
import { FunctionComponent } from 'react';
import { Col, Row, Badge, BadgeProps, FormControl } from 'react-bootstrap';
import 'react-table/react-table.css';
import { useTranslation } from 'react-i18next';

import { ConfirmModal } from 'hs-components/modals';
import './style.css';

type Requirement = {
    dayIndex: 0 | 1 | 2 | 3 | 4 | 5 | 6;
    dayName: string;
    requirement: number;
    utilization: number;
    assignedEmployeeIds: string[];
};

type RequirementCellProps = { requirement: Requirement };

const RequirementCell: FunctionComponent<RequirementCellProps> = ({ requirement }) => {
    const [t] = useTranslation();

    const [isShown, setIsShown] = useState(false);

    const getBadgeVariant = () => {
        if (requirement.utilization === requirement.requirement) return 'light';
        if (requirement.utilization > requirement.requirement) return 'danger';
        if (requirement.utilization < requirement.requirement) return 'primary';
    };

    const variant = getBadgeVariant();

    const confirmModalTexts = {
        headerText: t('confirmationModal.title'),
        confirmButtonText: t('buttons.yes'),
        cancelButtonText: t('buttons.no')
    };

    const modalConfirmHandler = () => {
        setIsShown(false);
    };
    const modalCloseHandler = () => {
        setIsShown(false);
    };

    return (
        <>
            <ConfirmModal
                isShown={isShown}
                displayTexts={confirmModalTexts}
                onConfirm={modalConfirmHandler}
                onHide={modalCloseHandler}
                onCancel={modalCloseHandler}>
                <span>da</span>
            </ConfirmModal>
            <div className="requirementCell">
                <h5>
                    <Badge
                        variant={(getBadgeVariant() as unknown) as BadgeProps['variant']}
                        onDoubleClick={() => setIsShown(true)}>
                        <Row className="align-items-center h-100" noGutters>
                            <Col className="mx-auto" md="4">
                                {requirement.utilization}
                            </Col>
                            <Col className="mx-auto" md="auto">
                                /
                            </Col>
                            <Col className="mx-auto" md="4">
                                <FormControl
                                    size="sm"
                                    type="text"
                                    placeholder={requirement.requirement.toString()}
                                    value={requirement.requirement}
                                />
                            </Col>
                        </Row>
                        <Row className=" align-items-center h-100">
                            <Col className=" name-display mx-auto" md="12">
                                Jean-Michel Laforge
                            </Col>
                        </Row>
                        <Row className="align-items-center h-100">
                            <Col className="name-display mx-auto" md="12">
                                Bill Gates
                            </Col>
                        </Row>
                        <Row className="align-items-center h-100">
                            <Col className="name-display mx-auto" md="12">
                                Mark Zuckerberg
                            </Col>
                        </Row>
                    </Badge>
                </h5>
            </div>
        </>
    );
};

export default RequirementCell;
