import { useCss } from 'react-use';
import React, { FunctionComponent } from 'react';

export interface InlineSpaceProps {
    width?: String;
}

const InlineSpace: FunctionComponent<InlineSpaceProps> = ({ width = '0.5' }) => {
    const style = useCss({
        width: width + 'em',
        display: 'inline-block'
    });

    return <span className={style} />;
};

export default InlineSpace;
