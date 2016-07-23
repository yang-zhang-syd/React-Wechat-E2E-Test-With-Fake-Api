import React, {PropTypes} from 'react';
import Page from '../../components/page/page';
import {
  SearchBar,
  Panel,
  PanelHeader,
  PanelBody,
  MediaBox,
  MediaBoxBody,
  MediaBoxTitle
} from 'react-weui';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as searchActions from '../../actions/searchActions';

class SearchPage extends React.Component {

  constructor(props, context) {
    super(props, context);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(text) {
    this.props.actions.searchText(text);
  }

  render() {
    const {vm} = this.props;
    return (
      <Page className="" title="">
        <SearchBar onChange={this.handleChange}/>
        <Panel access style={{marginTop: 0}}>
          <PanelHeader style={{display: vm.searchText == '' ? null: 'none', marginTop: 0}}>
            在上面对话框输入关键字查询(最少输入三个字符)
          </PanelHeader>
          <PanelBody style={{display: vm.searchText == '' ? 'none': null, marginTop: 0}}>
            {
              vm.results.length > 0 ?
                vm.results.map((item,i)=>{
                  return (
                    <MediaBox key={i} type="appmsg" href={'#list/' + item.Id}>
                      <MediaBoxBody>
                        <MediaBoxTitle>{item.Name + ', ' + item.State + ' ' + item.Postcode}</MediaBoxTitle>
                      </MediaBoxBody>
                    </MediaBox>
                  );
                })
                : <MediaBox>没有查询结果！</MediaBox>
            }
          </PanelBody>
        </Panel>
      </Page>
    );
  }
}

function mapStateToProps(state) {
  return {
    vm: state.searchVm
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(searchActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);
