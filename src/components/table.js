import React, { Component } from "react";
import { Modal, Button, Input } from "antd";
import { Table, Divider, Tag } from "antd";

class table extends Component {
  constructor(props) {
    super(props);
  }

  delete(key) {
    this.props.delete(key);
  }

  edit(key) {
    this.props.edit(key);
  }

  render() {
    const { Column } = Table;
    console.log(this.props.items);
    console.log(this.props.type);
    return (
      <div>
        {this.props.type === "users" ? (
          <Table
            style={{
              margin: "1em"
            }}
            dataSource={this.props.items}
          >
            <Column title="Name" dataIndex="name" key="name" />
            <Column title="Email" dataIndex="email" key="email" />
          </Table>
        ) : this.props.type === "todo" ? (
          <Table
            style={{
              margin: "1em"
            }}
            dataSource={this.props.items}
          >
            <Column title="Name" dataIndex="name" key="name" />

            <Column
              title="Action"
              key="action"
              render={(text, record) => (
                <span>
                  <a onClick={() => this.edit(record)}>Edit</a>
                  <Divider type="vertical" />
                  <a onClick={() => this.delete(record)}>Delete</a>
                </span>
              )}
            />
            <Column
              title="Date"
              key="key"
              render={(text, record) => record.key.substring(0, 10)}
            />
          </Table>
        ) : null}
      </div>
    );
  }
}

export default table;
