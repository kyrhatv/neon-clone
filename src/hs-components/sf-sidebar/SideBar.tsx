import React, { useRef, useEffect } from 'react';
import { FunctionComponent } from 'react';
import { SidebarComponent } from '@syncfusion/ej2-react-navigations';
import { Button, Row, Col, Container } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

import Icon from 'hs-components/Icon';
import InlineSpace from 'hs-components/hs-component-space';
import './sidebar-menu.css';

export interface SidebarProps {
    id?: string;
    isShown: boolean;
    type?: 'Over' | 'Push' | 'Slide' | 'Auto';
    position?: 'Left' | 'Right';
    width?: 'auto' | string;
    styleVariant?: string;
    showBackdrop?: boolean;
    isPinned: boolean;
    closeOnDocumentClick?: boolean;
    children: JSX.Element;
    footerContent?: undefined | JSX.Element;
    onPinChanged: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const defaultProps: SidebarProps = {
    id: 'default-sidebar',
    isShown: false,
    type: 'Over',
    position: 'Left',
    width: '220px',
    styleVariant: undefined,
    showBackdrop: false,
    isPinned: false,
    closeOnDocumentClick: true,
    children: <h1>hello</h1>,
    footerContent: undefined,
    onPinChanged: () => {
        console.log('hello');
    }
};

export const SideBar: FunctionComponent<SidebarProps> = ({
    id,
    isShown,
    type,
    position,
    width,
    styleVariant = undefined,
    showBackdrop,
    isPinned,
    closeOnDocumentClick,
    onPinChanged,
    children,
    footerContent = undefined
}) => {
    const sidebarRef = useRef(null);
    const [t] = useTranslation();

    useEffect(() => {
        if (sidebarRef.current !== null && sidebarRef.current.isRendered) {
            sidebarRef.current.toggle();
        }
    }, [isShown]);

    useEffect(() => {
        if (sidebarRef.current !== null && sidebarRef.current.isRendered) {
            sidebarRef.current.properties.type = type;
            sidebarRef.current.toggle();
        }
    }, [type]);

    useEffect(() => {
        if (sidebarRef.current !== null && sidebarRef.current.isRendered) {
            sidebarRef.current.properties.closeOnDocumentClick = closeOnDocumentClick;
        }
    }, [closeOnDocumentClick]);

    const onCreate = () => {
        sidebarRef.current.element.style.visibility = '';
    };

    return (
        <SidebarComponent
            id={id}
            created={onCreate}
            style={{ visibility: 'hidden' }}
            className={styleVariant === undefined ? 'sidebar' : styleVariant}
            // className={'sidebar'}
            type={type}
            position={position}
            enableGestures={false}
            closeOnDocumentClick={closeOnDocumentClick}
            showBackdrop={showBackdrop}
            ref={sidebarRef}
            width={width}
            target={'.content'}>
            <div className="noselect">
                {children}

                <Container fluid className="footer">
                    {footerContent}
                    <Row>
                        <Col md={12}>
                            <Button variant="primary" size="sm" onClick={onPinChanged} block>
                                <Icon iconName="thumbtack" />
                                <InlineSpace />
                                {isPinned ? t('menus.unpin') : t('menus.pin')}
                            </Button>
                        </Col>
                    </Row>
                </Container>
            </div>
        </SidebarComponent>
    );
};

SideBar.defaultProps = defaultProps;
