import React from 'react';

import CosmeticsListItem from '../cosmetics-list-item';

import './index.scss';

class CosmeticsList extends React.PureComponent {
    render() {
        const { cosmetics = [] } = this.props;

        return cosmetics.map(item => {
            return (
                <CosmeticsListItem item={item} />
            );
        })
    }
}

export default CosmeticsList;
