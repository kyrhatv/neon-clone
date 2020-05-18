import React, { FunctionComponent } from 'react';
import { Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { useTranslation } from 'react-i18next';

import logo from 'assets/TimeSphere_icon_30.svg';
import { NavStruct } from 'app-main/utils/RootStructInterface';

import { useCss } from 'react-use';

import './style.css';
import IconBarItem from 'hs-components/MainMenuSidebar/IconBar/IconBarItem';
import IconBarFooterItem from 'hs-components/MainMenuSidebar/IconBar/IconBarFooterItem';

const IconBar: FunctionComponent<NavStruct> = ({ struct }) => {
    const [t, i18n] = useTranslation();

    const changeLanguage = () => {
        i18n.language === 'en' ? i18n.changeLanguage('fr') : i18n.changeLanguage('en');
    };
    const nextLanguage = i18n.language === 'en' ? 'Fr' : 'En';

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
                        return (
                            <IconBarItem
                                key={module.key}
                                displayText={t(module.key)}
                                itemKey={module.key}
                                link={module.link}
                                iconName={module.iconName}
                            />
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
                                <IconBarFooterItem
                                    key={module.key}
                                    displayText={t(module.key)}
                                    itemKey={module.key}
                                    link={module.link}
                                    iconName={module.iconName}
                                />
                            );
                        })}
                </div>
            </Nav>
        </div>
    );
};

export default IconBar;
