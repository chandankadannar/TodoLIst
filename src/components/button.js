import React, { Component } from "react";
import { Modal, Button, Input } from "antd";

class users extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { visible, confirmLoading } = this.props;
    return (
      <div>
        {this.props.buttontype === "users" ? (
          <Button
            style={{
              margin: "1em"
            }}
            onClick={() => this.props.showModal()}
          >
            Create User
          </Button>
        ) : this.props.buttontype === "todo" ? (
          <Button
            style={{
              margin: "1em"
            }}
            onClick={() => this.props.showModal()}
          >
            Create Todo
          </Button>
        ) : null}
        <Modal
          title="Basic Modal"
          visible={this.props.visible}
          onOk={this.props.handleOk}
          confirmLoading={confirmLoading}
          onCancel={this.props.handleCancel}
          okButtonProps={{
            disabled: this.props.validate_data(),
            onClick: () => this.props.savedata()
          }}
          cancelButtonProps={{ disabled: false }}
        >
          <Input
            size="large"
            placeholder="Enter Name"
            style={{ width: "100%", margin: 10 }}
            value={this.props.name}
            onChange={e => this.props.handlename(e.target.value)}
          />

          <Input
            size="large"
            placeholder="Enter Email"
            style={{ width: "100%", margin: 10 }}
            value={this.props.email}
            onChange={e => this.props.handlemail(e.target.value)}
          />
        </Modal>
      </div>
    );
  }
}

export default users;
