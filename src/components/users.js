import React, { Component } from "react";
import { Modal, Button, Input } from "antd";
import { Table, Divider, Tag } from "antd";
import Datatable from "./table";
import Createbutton from "./button";
class users extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Createbutton
          name={this.props.name}
          email={this.props.email}
          savedata={this.props.savedata}
          delete={this.props.delete}
          edit={this.props.edit}
          handlename={this.props.handlename}
          handlemail={this.props.handlemail}
          validate_data={this.props.validate_data}
          showModal={this.props.showModal}
          visible={this.props.visible}
          confirmLoading={this.props.confirmLoading}
          handleCancel={this.props.handleCancel}
        />

        <Datatable
          items={this.props.items}
          delete={this.props.delete}
          edit={this.props.edit}
        />
      </div>
    );
  }
}

export default users;
