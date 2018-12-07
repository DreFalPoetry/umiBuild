import React,{PureComponent} from 'react';
import { Table, Popconfirm, Button } from 'antd';

export default class ProductList extends PureComponent {
  constructor(props){
    super(props);
    this.columns = [{
      title: 'Name',
      dataIndex: 'name',
    },{
      title: 'Actions',
      render: (text, record) => {
        return (
          <Popconfirm title="Delete?" onConfirm={() => this.props.onDelete(record.id)}>
            <Button>Delete</Button>
          </Popconfirm>
        );
      },
    }];
  }

  render(){
    const { productsList } = this.props;
    return (
      <Table
        dataSource={productsList}
        columns={this.columns}
        rowKey="uniqueKey"
    />
    )
  }
};