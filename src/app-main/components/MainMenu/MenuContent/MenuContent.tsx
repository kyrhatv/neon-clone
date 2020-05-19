import React from 'react';
import { RootState } from 'app-main/app/store';
import { FunctionComponent } from 'react';
import { NavStruct } from 'app-main/utils/RootStructInterface';
import { useTranslation } from 'react-i18next';
import { useSelector, useDispatch } from 'react-redux';
import { Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { MultipleCategoriesMenuContent } from './MultipleCategoriesMenuContent';

import { selectById, updateMenu } from 'hs-components/sf-sidebar/menusSlice';
import { MAIN_MENU_ID } from 'hs-utils/constants/constants';
import './style.css';

export const MenuContent: FunctionComponent<NavStruct> = ({ struct }) => {
    const [t] = useTranslation();
    const dispatch = useDispatch();

    const menuState = useSelector((state: RootState) => selectById(state, MAIN_MENU_ID));

    const currentModule = menuState.currentModule;

    const menu = struct.find((module) => module.key === currentModule);
    if (menu === undefined) {
        return null;
    }

    const clickHandler = () => {
        if (!menuState.isPinned) {
            dispatch(
                updateMenu({ id: MAIN_MENU_ID, changes: { isShown: !menuState.isShown, currentModule: undefined } })
            );
        }
    };

    return (
        <div style={{ width: '100%' }} className="hs-main-menu">
            {menu.hasSubCategories ? (
                <>
                    {menu.subCategories.map((category) => {
                        return (
                            <MultipleCategoriesMenuContent
                                key={category.categoryId}
                                clickHandler={clickHandler}
                                category={category}
                                menu={menu}
                            />
                        );
                    })}
                </>
            ) : (
                <>
                    <div className="non-collapse-menu-header card-header">
                        <div className="d-flex align-items-center" style={{ height: '100%', paddingLeft: '7px' }}>
                            <span style={{ fontSize: 'large', fontWeight: 'bolder', marginBottom: '0' }}>
                                {t(menu.key)}
                            </span>
                        </div>
                    </div>
                    <Nav defaultActiveKey="/home" className="flex-column">
                        {menu.children.map((menuItem) => {
                            if (menu.children == null) {
                                return (
                                    <LinkContainer key={menuItem.key} to={menuItem.link} onClick={clickHandler}>
                                        <Nav.Link className="menu-item-link">
                                            <h6>{t(menuItem.key)}</h6>
                                        </Nav.Link>
                                    </LinkContainer>
                                );
                            } else {
                                return (
                                    <LinkContainer
                                        key={menu.key + menuItem.key}
                                        to={menu.link + menuItem.link}
                                        onClick={clickHandler}>
                                        <Nav.Link className="menu-item-link">
                                            <h6>{t(menuItem.key)}</h6>
                                        </Nav.Link>
                                    </LinkContainer>
                                );
                            }
                        })}
                    </Nav>
                </>
            )}
        </div>
    );
};
