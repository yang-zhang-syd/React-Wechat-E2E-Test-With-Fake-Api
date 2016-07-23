import React from 'react';
import Page from '../../components/page/page';
import {Article,Button} from 'react-weui';
import {connect} from 'react-redux';

export class VoucherPage extends React.Component {

    constructor(props, context) {
        super(props, context);
    }

    render() {
        const {vm} = this.props;
        return (
            <Page className="article" title="Voucher" spacing>
            </Page>            
        );
    }
}

export default connect()(VoucherPage);