import React from 'react';
import {Article, Grids} from 'react-weui';
import Page from '../../components/page/page';
import './HomePage.css';
import {persistor} from '../../store';
import * as homeActions from '../../actions/homeActions';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {auth} from '../../services/auth.js';

class HomePage extends React.Component {

  constructor(props, context) {
    super(props, context);

    this.state = {
      components: [{
        icon: <img src='images/icon_nav_search_bar.png'/>,
        label: 'search',
        href: '#search'
      }, {
        icon: <img src='images/icon_nav_article.png'/>,
        label: 'article',
        href: '#voucher/1'
      }, {
        icon: <img src='images/icon_nav_dialog.png'/>,
        label: 'discuss',
        href: '#list/1'
      }]
    };

    this.props.actions.clearSearchResults();
    persistor.purge();
  }

  render() {
    return (
      <Page className="home" title="8sapp">
        <Grids data={this.state.components}/>
        <Article>
          {
            (() => {
              if(auth.userInfo.nickname) {
                return <p id="greeting">{auth.userInfo.nickname} welcome!</p>;
              }
            })()
          }
        </Article>
      </Page>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(homeActions, dispatch)
  };
}

export default connect(null, mapDispatchToProps)(HomePage);
