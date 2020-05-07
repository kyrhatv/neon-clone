import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useToggle, useUpdateEffect } from 'react-use';

import StateSelector from 'app-main/components/stateSelector';

import {
    NON_APPROVED,
    PLANIFICATION,
    APPROVED,
    BIDDING_OPEN,
    BIDDING_CLOSED
} from 'hs-utils/constants/stateSelectorConstants';

import Toast from 'hs-components/st-Toast';
import { Button } from 'react-bootstrap';

export function Dashboard() {
    const [t] = useTranslation();

    const [showToast, setShowToast] = useState(false);
    const [on, toggleToast] = useToggle(false);

    useUpdateEffect(() => {
        setShowToast(true);
        const timer = setTimeout(() => {
            setShowToast(false);
        }, 5000);
        return () => clearTimeout(timer);
    }, [on]);

    const steps = [
        {
            id: NON_APPROVED,
            index: 1,
            displayText: t('stateSelector.planning.' + NON_APPROVED),
            allowedSteps: [PLANIFICATION],
            visible: true,
            irrevocable: false
        },
        {
            id: PLANIFICATION,
            index: 2,
            displayText: t('stateSelector.planning.' + PLANIFICATION),
            allowedSteps: [NON_APPROVED, APPROVED],
            visible: true,
            irrevocable: false
        },
        {
            id: APPROVED,
            index: 3,
            displayText: t('stateSelector.planning.' + APPROVED),
            allowedSteps: [PLANIFICATION, BIDDING_OPEN],
            visible: true,
            irrevocable: false
        },
        {
            id: BIDDING_OPEN,
            index: 4,
            displayText: t('stateSelector.planning.' + BIDDING_OPEN),
            allowedSteps: [APPROVED, BIDDING_CLOSED],
            visible: true,
            irrevocable: false
        },
        {
            id: BIDDING_CLOSED,
            index: 5,
            displayText: t('stateSelector.planning.' + BIDDING_CLOSED),
            allowedSteps: [],
            visible: true,
            irrevocable: false
        }
    ];

    return (
        <>
            <p>show : {showToast.toString()}</p>

            <Button onClick={toggleToast}>dsdsd</Button>

            {showToast && (
                <Toast type="warning" isShown={on} message={t('stateSelector.planning.' + BIDDING_CLOSED)}></Toast>
            )}

            <StateSelector featureId="planning" steps={steps} initialStepId={NON_APPROVED} />
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
                </p>{' '}
                <p>
                    <strong>Pellentesque habitant morbi tristique</strong> senectus et netus et malesuada fames ac
                    turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec
                    eu libero sit amet quam egestas semper. <em>Aenean ultricies mi vitae est.</em> Mauris placerat
                    eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum
                    sed, <code>commodo vitae</code>, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt
                    condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. in turpis pulvinar
                    facilisis. Ut felis.
                </p>{' '}
                <p>
                    <strong>Pellentesque habitant morbi tristique</strong> senectus et netus et malesuada fames ac
                    turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec
                    eu libero sit amet quam egestas semper. <em>Aenean ultricies mi vitae est.</em> Mauris placerat
                    eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum
                    sed, <code>commodo vitae</code>, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt
                    condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. in turpis pulvinar
                    facilisis. Ut felis.
                </p>{' '}
                <p>
                    <strong>Pellentesque habitant morbi tristique</strong> senectus et netus et malesuada fames ac
                    turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec
                    eu libero sit amet quam egestas semper. <em>Aenean ultricies mi vitae est.</em> Mauris placerat
                    eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum
                    sed, <code>commodo vitae</code>, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt
                    condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. in turpis pulvinar
                    facilisis. Ut felis.
                </p>{' '}
                <p>
                    <strong>Pellentesque habitant morbi tristique</strong> senectus et netus et malesuada fames ac
                    turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec
                    eu libero sit amet quam egestas semper. <em>Aenean ultricies mi vitae est.</em> Mauris placerat
                    eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum
                    sed, <code>commodo vitae</code>, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt
                    condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. in turpis pulvinar
                    facilisis. Ut felis.
                </p>{' '}
                <p>
                    <strong>Pellentesque habitant morbi tristique</strong> senectus et netus et malesuada fames ac
                    turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec
                    eu libero sit amet quam egestas semper. <em>Aenean ultricies mi vitae est.</em> Mauris placerat
                    eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum
                    sed, <code>commodo vitae</code>, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt
                    condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. in turpis pulvinar
                    facilisis. Ut felis.
                </p>{' '}
                <p>
                    <strong>Pellentesque habitant morbi tristique</strong> senectus et netus et malesuada fames ac
                    turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec
                    eu libero sit amet quam egestas semper. <em>Aenean ultricies mi vitae est.</em> Mauris placerat
                    eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum
                    sed, <code>commodo vitae</code>, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt
                    condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. in turpis pulvinar
                    facilisis. Ut felis.
                </p>{' '}
                <p>
                    <strong>Pellentesque habitant morbi tristique</strong> senectus et netus et malesuada fames ac
                    turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec
                    eu libero sit amet quam egestas semper. <em>Aenean ultricies mi vitae est.</em> Mauris placerat
                    eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum
                    sed, <code>commodo vitae</code>, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt
                    condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. in turpis pulvinar
                    facilisis. Ut felis.
                </p>{' '}
                <p>
                    <strong>Pellentesque habitant morbi tristique</strong> senectus et netus et malesuada fames ac
                    turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec
                    eu libero sit amet quam egestas semper. <em>Aenean ultricies mi vitae est.</em> Mauris placerat
                    eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum
                    sed, <code>commodo vitae</code>, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt
                    condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. in turpis pulvinar
                    facilisis. Ut felis.
                </p>{' '}
                <p>
                    <strong>Pellentesque habitant morbi tristique</strong> senectus et netus et malesuada fames ac
                    turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec
                    eu libero sit amet quam egestas semper. <em>Aenean ultricies mi vitae est.</em> Mauris placerat
                    eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum
                    sed, <code>commodo vitae</code>, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt
                    condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. in turpis pulvinar
                    facilisis. Ut felis.
                </p>{' '}
                <p>
                    <strong>Pellentesque habitant morbi tristique</strong> senectus et netus et malesuada fames ac
                    turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec
                    eu libero sit amet quam egestas semper. <em>Aenean ultricies mi vitae est.</em> Mauris placerat
                    eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum
                    sed, <code>commodo vitae</code>, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt
                    condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. in turpis pulvinar
                    facilisis. Ut felis.
                </p>{' '}
                <p>
                    <strong>Pellentesque habitant morbi tristique</strong> senectus et netus et malesuada fames ac
                    turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec
                    eu libero sit amet quam egestas semper. <em>Aenean ultricies mi vitae est.</em> Mauris placerat
                    eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum
                    sed, <code>commodo vitae</code>, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt
                    condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. in turpis pulvinar
                    facilisis. Ut felis.
                </p>{' '}
                <p>
                    <strong>Pellentesque habitant morbi tristique</strong> senectus et netus et malesuada fames ac
                    turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec
                    eu libero sit amet quam egestas semper. <em>Aenean ultricies mi vitae est.</em> Mauris placerat
                    eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum
                    sed, <code>commodo vitae</code>, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt
                    condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. in turpis pulvinar
                    facilisis. Ut felis.
                </p>{' '}
                <p>
                    <strong>Pellentesque habitant morbi tristique</strong> senectus et netus et malesuada fames ac
                    turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec
                    eu libero sit amet quam egestas semper. <em>Aenean ultricies mi vitae est.</em> Mauris placerat
                    eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum
                    sed, <code>commodo vitae</code>, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt
                    condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. in turpis pulvinar
                    facilisis. Ut felis.
                </p>{' '}
                <p>
                    <strong>Pellentesque habitant morbi tristique</strong> senectus et netus et malesuada fames ac
                    turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec
                    eu libero sit amet quam egestas semper. <em>Aenean ultricies mi vitae est.</em> Mauris placerat
                    eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum
                    sed, <code>commodo vitae</code>, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt
                    condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. in turpis pulvinar
                    facilisis. Ut felis.
                </p>{' '}
                <p>
                    <strong>Pellentesque habitant morbi tristique</strong> senectus et netus et malesuada fames ac
                    turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec
                    eu libero sit amet quam egestas semper. <em>Aenean ultricies mi vitae est.</em> Mauris placerat
                    eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum
                    sed, <code>commodo vitae</code>, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt
                    condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. in turpis pulvinar
                    facilisis. Ut felis.
                </p>{' '}
                <p>
                    <strong>Pellentesque habitant morbi tristique</strong> senectus et netus et malesuada fames ac
                    turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec
                    eu libero sit amet quam egestas semper. <em>Aenean ultricies mi vitae est.</em> Mauris placerat
                    eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum
                    sed, <code>commodo vitae</code>, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt
                    condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. in turpis pulvinar
                    facilisis. Ut felis.
                </p>{' '}
                <p>
                    <strong>Pellentesque habitant morbi tristique</strong> senectus et netus et malesuada fames ac
                    turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec
                    eu libero sit amet quam egestas semper. <em>Aenean ultricies mi vitae est.</em> Mauris placerat
                    eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum
                    sed, <code>commodo vitae</code>, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt
                    condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. in turpis pulvinar
                    facilisis. Ut felis.
                </p>{' '}
                <p>
                    <strong>Pellentesque habitant morbi tristique</strong> senectus et netus et malesuada fames ac
                    turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec
                    eu libero sit amet quam egestas semper. <em>Aenean ultricies mi vitae est.</em> Mauris placerat
                    eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum
                    sed, <code>commodo vitae</code>, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt
                    condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. in turpis pulvinar
                    facilisis. Ut felis.
                </p>{' '}
                <p>
                    <strong>Pellentesque habitant morbi tristique</strong> senectus et netus et malesuada fames ac
                    turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec
                    eu libero sit amet quam egestas semper. <em>Aenean ultricies mi vitae est.</em> Mauris placerat
                    eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum
                    sed, <code>commodo vitae</code>, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt
                    condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. in turpis pulvinar
                    facilisis. Ut felis.
                </p>{' '}
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
