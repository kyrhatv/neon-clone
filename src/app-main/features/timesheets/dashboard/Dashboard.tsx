import React from 'react';
import { useTranslation } from 'react-i18next';
import StateSelector from 'app-main/components/stateSelector';

import {
    PERIOD_OPEN,
    PERIOD_CLOSED,
    INTERPRET_PERIOD,
    APPROVE_PERIOD,
    TRANSFER_PERIOD
} from 'hs-utils/constants/stateSelectorConstants';

export function Dashboard() {
    const [t] = useTranslation();
    const allowUnapproved = true;

    const hasTransferToPayState = true;

    const getStepsForApproved = () => {
        const prev = allowUnapproved ? INTERPRET_PERIOD : APPROVE_PERIOD;
        const next = hasTransferToPayState ? TRANSFER_PERIOD : APPROVE_PERIOD;
        return [prev, next];
    };

    const steps = [
        {
            id: PERIOD_OPEN,
            index: 1,
            displayText: t('stateSelector.timesheets.' + PERIOD_OPEN),
            allowedSteps: [PERIOD_CLOSED],
            visible: true,
            irrevocable: false
        },
        {
            id: PERIOD_CLOSED,
            index: 2,
            displayText: t('stateSelector.timesheets.' + PERIOD_CLOSED),
            allowedSteps: [PERIOD_OPEN, INTERPRET_PERIOD],
            visible: true,
            irrevocable: false
        },
        {
            id: INTERPRET_PERIOD,
            index: 3,
            displayText: t('stateSelector.timesheets.' + INTERPRET_PERIOD),
            allowedSteps: [PERIOD_CLOSED, APPROVE_PERIOD],
            visible: true,
            irrevocable: false
        },
        {
            id: APPROVE_PERIOD,
            index: 4,
            displayText: t('stateSelector.timesheets.' + APPROVE_PERIOD),
            allowedSteps: getStepsForApproved(),
            visible: true,
            irrevocable: !allowUnapproved
        },
        {
            id: TRANSFER_PERIOD,
            index: 5,
            displayText: t('stateSelector.timesheets.' + TRANSFER_PERIOD),
            allowedSteps: [],
            visible: hasTransferToPayState,
            irrevocable: true
        }
    ];

    return (
        <>
            <StateSelector featureId="timesheets" steps={steps} initialStepId={PERIOD_OPEN} />
            <div className="col-lg-12">
                <p>
                    <strong>Pellentesque habitant morbi tristique</strong> senectus et netus et malesuada fames ac
                    turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec
                    eu libero sit amet quam egestas semper. <em>Aenean ultricies mi vitae est.</em> Mauris placerat
                    eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum
                    sed, <code>commodo vitae</code>, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt
                    condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. in turpis pulvinar
                    facilisis. Ut felis.
                </p>
                <h2>Header Level 2</h2>
                <ol>
                    <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
                    <li>Aliquam tincidunt mauris eu risus.</li>
                </ol>
                <h3>Header Level 3</h3>
                <ul>
                    <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
                    <li>Aliquam tincidunt mauris eu risus. </li>
                </ul>
            </div>
            <div className="col-lg-12">
                <p>
                    <strong>Pellentesque habitant morbi tristique</strong> senectus et netus et malesuada fames ac
                    turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec
                    eu libero sit amet quam egestas semper. <em>Aenean ultricies mi vitae est.</em> Mauris placerat
                    eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum
                    sed, <code>commodo vitae</code>, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt
                    condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. in turpis pulvinar
                    facilisis. Ut felis.
                </p>
                <h2>Header Level 2</h2>
                <ol>
                    <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
                    <li>Aliquam tincidunt mauris eu risus.</li>
                </ol>
                <h3>Header Level 3</h3>
                <ul>
                    <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
                    <li>Aliquam tincidunt mauris eu risus. </li>
                </ul>
            </div>
        </>
    );
}
