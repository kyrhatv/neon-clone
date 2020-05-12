import React, { FunctionComponent } from 'react';
import SideBar from 'hs-components/sf-sidebar';
import { useSelector, useDispatch } from 'react-redux';
import { selectById, updateMenu } from 'hs-components/sf-sidebar/menusSlice';
import { RootState } from '../../app-main/app/store';

import { OPTIONS_MENU_ID } from 'hs-utils/constants/constants';

type ConfigSidebarProps = { children: JSX.Element };

const ConfigSidebar: FunctionComponent<ConfigSidebarProps> = ({ children }) => {
    const menuState = useSelector((state: RootState) => selectById(state, OPTIONS_MENU_ID));
    const dispatch = useDispatch();

    const closeOnDocumentClick = menuState.isPinned ? false : true;

    const isShown = menuState.isShown;
    const pinChangedHandler = () => {
        dispatch(updateMenu({ id: OPTIONS_MENU_ID, changes: { isPinned: !menuState.isPinned, isShown: false } }));
    };

    return (
        <SideBar
            id={OPTIONS_MENU_ID}
            isShown={isShown}
            showBackdrop={false}
            position={'Right'}
            type={menuState.isPinned ? 'Push' : 'Over'}
            isPinned={menuState.isPinned}
            onPinChanged={pinChangedHandler}
            closeOnDocumentClick={closeOnDocumentClick}
            width={'250px'}>
            <>{children}</>
        </SideBar>
    );
};

export default ConfigSidebar;
