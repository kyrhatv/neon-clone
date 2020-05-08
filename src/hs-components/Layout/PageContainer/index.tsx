import * as React from 'react';
import { FunctionComponent } from 'react';

import './style.css';

export interface PageContainerProps {
    children: JSX.Element;
}

const PageContainer: FunctionComponent<PageContainerProps> = ({ children }) => {
    return <div className="page-container">{children}</div>;
};

export default PageContainer;
