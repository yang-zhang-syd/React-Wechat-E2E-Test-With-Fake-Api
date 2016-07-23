import React from 'react';
import {
  Panel,
  PanelHeader,
  PanelBody,
  PanelFooter,
  MediaBox,
  MediaBoxHeader,
  MediaBoxBody,
  MediaBoxTitle,
  MediaBoxDescription,
  MediaBoxInfo,
  MediaBoxInfoMeta,
  Cells,
  Cell,
  CellHeader,
  CellBody,
  CellFooter
} from 'react-weui';
import Page from '../../components/page/page';

export default class ListPage extends React.Component {
  render() {
    return (
      <Page className="panel" title="List"></Page>
    );
  }
}
