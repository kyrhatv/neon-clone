import React, { FunctionComponent } from 'react';
import { Nav, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { useTranslation } from 'react-i18next';

import Icon from 'hs-components/Icon/Icon';
import logo from '../../../assets/TimeSphere_icon_30.svg';
import { NavStruct } from 'app-main/utils/RootStructInterface';
import { RootState } from 'app-main/app/store';
import { useLocation } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { selectById, updateMenu } from 'hs-components/sf-sidebar/menusSlice';
import { MAIN_MENU_ID } from 'hs-utils/constants/constants';
import { useCss } from 'react-use';

import './style.css';

const IconBar: FunctionComponent<NavStruct> = ({ struct }) => {
    const [t, i18n] = useTranslation();
    const dispatch = useDispatch();

    const location = useLocation();
    let currentPath = location.pathname;
    const menuState = useSelector((state: RootState) => selectById(state, MAIN_MENU_ID));
    const currentModule = menuState.currentModule;

    const changeLanguage = () => {
        i18n.language === 'en' ? i18n.changeLanguage('fr') : i18n.changeLanguage('en');
    };
    const nextLanguage = i18n.language === 'en' ? 'Fr' : 'En';

    const toggleMenuHandler = (moduleKey) => {
        if (menuState.isPinned) {
            dispatch(updateMenu({ id: MAIN_MENU_ID, changes: { currentModule: moduleKey } }));
        } else {
            const response = moduleKey !== currentModule && moduleKey !== null ? true : false;
            const module = response === false ? undefined : moduleKey;
            dispatch(updateMenu({ id: MAIN_MENU_ID, changes: { isShown: response, currentModule: module } }));
        }
    };

    const homeButton = useCss({
        backgroundColor: 'transparent',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '20px',
        height: '64px',
        '&:hover': {
            cursor: 'pointer'
        }
    });

    const currentmoduleStyle = useCss({ color: '#fff', backgroundColor: '#004085' });
    const moduleStyle = useCss({ color: '#fff', backgroundColor: '#282c34' });

    return (
        <div className="icon-bar-container">
            <Nav variant="pills" defaultActiveKey="/home" className="flex-column icon-bar">
                <LinkContainer to="/">
                    <div className={homeButton}>
                        <img src={logo} alt="" width="100%" className=" d-inline-block align-top logo" />
                    </div>
                </LinkContainer>
                {struct
                    .filter((module) => module.key !== 'parameters' && module.key !== 'profile')
                    .map((module) => {
                        const linkstyle = currentPath.includes(module.link) ? currentmoduleStyle : moduleStyle;
                        return (
                            <OverlayTrigger
                                key={module.key}
                                placement="right"
                                delay={{ show: 250, hide: 200 }}
                                overlay={<Tooltip id={module.key}>{t(module.key)}</Tooltip>}>
                                <Nav.Item className={linkstyle}>
                                    <Nav.Link onClick={() => toggleMenuHandler(module.key)}>
                                        <Icon iconName={module.iconName} size="2x" />
                                    </Nav.Link>
                                </Nav.Item>
                            </OverlayTrigger>
                        );
                    })}
                <div className="footer-settings ">
                    <Nav.Item className="footer-link">
                        <Nav.Link onClick={changeLanguage}>
                            <div>{nextLanguage}</div>
                        </Nav.Link>
                    </Nav.Item>
                    {struct
                        .filter((module) => module.key === 'parameters' || module.key === 'profile')
                        .map((module) => {
                            return (
                                <OverlayTrigger
                                    key={module.key}
                                    placement="right"
                                    delay={{ show: 250, hide: 200 }}
                                    overlay={<Tooltip id={module.key}>{t(module.key)}</Tooltip>}>
                                    <Nav.Item className="footer-link">
                                        <LinkContainer to={module.link}>
                                            <Nav.Link>
                                                <Icon iconName={module.iconName} size="2x" />
                                            </Nav.Link>
                                        </LinkContainer>
                                    </Nav.Item>
                                </OverlayTrigger>
                            );
                        })}
                </div>
            </Nav>
        </div>
    );
};

export default IconBar;
