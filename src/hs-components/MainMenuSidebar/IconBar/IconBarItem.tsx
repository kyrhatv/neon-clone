import React, { FunctionComponent } from 'react';
import { Nav, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { IconName } from '@fortawesome/fontawesome-svg-core';

import Icon from 'hs-components/Icon/Icon';
import { RootState } from 'app-main/app/store';
import { useLocation } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { selectById, updateMenu } from 'hs-components/sf-sidebar/menusSlice';
import { MAIN_MENU_ID } from 'hs-utils/constants/constants';
import { useCss } from 'react-use';

type IconBarItemProps = {
    itemKey: string;
    displayText: string;
    iconName: IconName;
    link: string;
};

const IconBarItem: FunctionComponent<IconBarItemProps> = ({ itemKey, displayText, iconName, link }) => {
    const dispatch = useDispatch();

    const location = useLocation();
    let currentPath = location.pathname;
    const menuState = useSelector((state: RootState) => selectById(state, MAIN_MENU_ID));
    const currentModule = menuState.currentModule;

    const toggleMenuHandler = (moduleKey) => {
        if (menuState.isPinned) {
            dispatch(updateMenu({ id: MAIN_MENU_ID, changes: { currentModule: moduleKey } }));
        } else {
            const response = moduleKey !== currentModule && moduleKey !== null ? true : false;
            const module = response === false ? undefined : moduleKey;
            dispatch(updateMenu({ id: MAIN_MENU_ID, changes: { isShown: response, currentModule: module } }));
        }
    };
    const currentmoduleStyle = useCss({ color: '#fff', backgroundColor: '#004085' });
    const moduleStyle = useCss({ color: '#fff', backgroundColor: '#282c34' });

    const linkstyle = currentPath.includes(link) ? currentmoduleStyle : moduleStyle;

    return (
        <OverlayTrigger
            placement="right"
            delay={{ show: 250, hide: 200 }}
            overlay={<Tooltip id={itemKey}>{displayText}</Tooltip>}>
            <Nav.Item className={linkstyle}>
                <Nav.Link onClick={() => toggleMenuHandler(itemKey)}>
                    <Icon iconName={iconName} size="2x" />
                </Nav.Link>
            </Nav.Item>
        </OverlayTrigger>
    );
};

export default IconBarItem;
