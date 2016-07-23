import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Article} from 'react-weui';
import Page from '../../components/page/page';
import * as authActions from '../../actions/authActions';
import {auth} from '../../services/auth.js';

export class AuthPage extends React.Component {

    constructor(props, context) {
        super(props, context);

        this.token = this.props.token;
        this.getUserAccessToken();
        this.getUserInfo = this.getUserInfo.bind(this);
    }

    getUserAccessToken() {
        if(this.token === null) {
            // Wechat does not support http://hostname/#/auth as
            // redirect uri. Here I use regex to retrieve code parameter.
            this.code = location.href.match(/[?&]code=([^&]*)?/)[1];
            this.stateStr = this.props.location.query.state;
            this.props.actions.getUserAccessToken(this.code);
        }
    }

    getUserInfo() {
        this.props.actions.getUserInfo(this.token);
    }

    shouldComponentUpdate(nextProps, nextState) {

        const {token, userInfo} = nextProps;

        var changed = false;
        
        if(token != this.token) {
            changed = true;
            this.token = token;
            auth.accessToken = token;

            // Get user information on token changed.
            this.getUserInfo();
        }

        if(userInfo != this.userInfo) {
            changed = true;
            this.userInfo = userInfo;
            auth.userInfo = userInfo;
            if(userInfo.openid) {
                this.context.router.replace('/');
            }
        }

        return changed;
    }

    render() {

        return (
            <Page className="article" title="" spacing>
                <Article>
                    <h1>Retrieving User Information ...</h1>
                    {
                        (() => {
                            if(this.token) {
                                return <p>Wechat login successful!</p>;
                            }
                        })()
                    }
                    {
                        (() => {
                            if(this.userInfo) {
                                return <p>User Information Received!</p>;
                            }
                        })()
                    }
                </Article>
            </Page>
        )
    }
}

AuthPage.contextTypes = {
    router: React.PropTypes.object.isRequired
}

function mapStateToProps(state) {
  return {
    token: state.authVm.token,
    userInfo: state.authVm.userInfo
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(authActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthPage);