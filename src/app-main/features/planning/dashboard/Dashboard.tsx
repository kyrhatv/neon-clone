import React from 'react';
import { useTranslation } from 'react-i18next';

import { StateSelector } from 'app-main/components/stateSelector';

export function Dashboard() {
    const [t] = useTranslation();
    const steps = [
        {
            id: 'NON_APPROVED',
            index: 1,
            displayText: t('stateSelector.planning.NON_APPROVED')
        },
        {
            id: 'PLANIFICATION',
            index: 2,
            displayText: t('stateSelector.planning.PLANIFICATION')
        },
        {
            id: 'APPROVED',
            index: 3,
            displayText: t('stateSelector.planning.APPROVED')
        },
        {
            id: 'BIDDING_OPEN',
            index: 4,
            displayText: t('stateSelector.planning.BIDDING_OPEN')
        },
        {
            id: 'BIDDING_CLOSED',
            index: 5,
            displayText: t('stateSelector.planning.BIDDING_CLOSED')
        }
    ];

    const initialStep = 'NON_APPROVED';

    return (
        <>
            <StateSelector steps={steps} initialStepId={initialStep} />
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
