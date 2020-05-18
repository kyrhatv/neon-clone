import React, { FunctionComponent } from 'react';
import { LinkContainer } from 'react-router-bootstrap';

import { Nav, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { IconName } from '@fortawesome/fontawesome-svg-core';

import Icon from 'hs-components/Icon/Icon';
import { useLocation } from 'react-router-dom';

import { useCss } from 'react-use';

type IconBarFooterItemProps = {
    itemKey: string;
    displayText: string;
    iconName: IconName;
    link: string;
};

const IconBarFooterItem: FunctionComponent<IconBarFooterItemProps> = ({ itemKey, displayText, iconName, link }) => {
    const location = useLocation();
    let currentPath = location.pathname;

    const currentmoduleStyle = useCss({ color: '#fff', backgroundColor: '#004085' });
    const moduleStyle = useCss({ color: '#fff', backgroundColor: '#282c34' });

    const linkstyle = currentPath.includes(link) ? currentmoduleStyle : moduleStyle;

    return (
        <OverlayTrigger
            placement="right"
            delay={{ show: 250, hide: 200 }}
            overlay={<Tooltip id={itemKey}>{displayText}</Tooltip>}>
            <Nav.Item className={linkstyle}>
                <LinkContainer to={link}>
                    <Nav.Link>
                        <Icon iconName={iconName} size="2x" />
                    </Nav.Link>
                </LinkContainer>
            </Nav.Item>
        </OverlayTrigger>
    );
};

export default IconBarFooterItem;
