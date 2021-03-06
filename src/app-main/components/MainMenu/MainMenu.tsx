import React from 'react';
import { FunctionComponent } from 'react';
import SideBar from 'hs-components/sf-sidebar';
import IconBar from 'app-main/components/MainMenu/IconBar';
import { NavStruct } from 'app-main/utils/RootStructInterface';
import { MenuContent } from './MenuContent/MenuContent';
import { usePrevious } from 'hs-utils/hs-hooks';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from 'app-main/app/store';
import { selectById, updateMenu } from 'hs-components/sf-sidebar/menusSlice';
import { MAIN_MENU_ID } from 'hs-utils/constants/constants';

export const MainMenu: FunctionComponent<NavStruct> = ({ struct }) => {
    const menuState = useSelector((state: RootState) => selectById(state, MAIN_MENU_ID));
    const dispatch = useDispatch();

    const currentModule = menuState.currentModule;
    const prevModule = usePrevious(currentModule);

    const isShown = prevModule === currentModule && menuState.isShown === true ? false : menuState.isShown;

    const pinChangedHandler = () => {
        if (menuState.isPinned) {
            dispatch(
                updateMenu({
                    id: MAIN_MENU_ID,
                    changes: {
                        isPinned: !menuState.isPinned,
                        isShown: false,
                        currentModule: undefined
                    }
                })
            );
        } else {
            dispatch(
                updateMenu({
                    id: MAIN_MENU_ID,
                    changes: {
                        isPinned: !menuState.isPinned,
                        isShown: menuState.isShown
                    }
                })
            );
        }
    };

    return (
        <>
            <IconBar struct={struct}></IconBar>
            <SideBar
                id={MAIN_MENU_ID}
                isShown={menuState.isPinned ? false : isShown}
                showBackdrop={false}
                position={'Left'}
                type={menuState.isPinned ? 'Push' : 'Over'}
                isPinned={menuState.isPinned}
                onPinChanged={pinChangedHandler}
                closeOnDocumentClick={false}
                width={'250px'}>
                <MenuContent struct={struct} />
            </SideBar>
        </>
    );
};
