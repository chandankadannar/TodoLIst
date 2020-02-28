import React, { Component } from "react";
import "./App.css";
import Todo from "./components/todo";
import Users from "./components/users";
import "antd/dist/antd.css";
import "./index.css";
import { Layout, Menu } from "antd";

class App extends Component {
  constructor() {
    super();
    this.state = {
      step: 1,
      visible: false,
      name: "",
      email: "",
      items: [],
      confirmLoading: false,
      type: "add",
      index: ""
    };
  }

  handletodos = event => {
    this.setState({
      step: event.key
    });
  };

  delete = key => {
    var filtereditems = this.state.items.filter(function(items) {
      return items !== key;
    });

    this.setState({
      items: filtereditems
    });
  };

  edit = data => {
    var index1 = this.state.items.findIndex(x => x.name === data.name);
    this.setState({
      visible: true,
      name: data.name,
      email: data.email,
      type: "edit",
      index: index1
    });
  };
  wait = async (duration = 1000) => {
    await new Promise(resolve => setTimeout(resolve, duration));
    this.setState({
      visible: false,
      confirmLoading: false,
      name: "",
      email: ""
    });
  };
  savedata = e => {
    if (this.state.type === "add") {
      var newItem = {
        name: this.state.name,
        email: this.state.email,
        key: new Date().toISOString()
      };

      this.setState(prevState => {
        return {
          items: prevState.items.concat(newItem),

          confirmLoading: true
        };
      });

      this.wait(2000);

      //   setTimeout(() => {

      //   }, 2000);
    } else if (this.state.type === "edit") {
      var index = this.state.index;
      var filtereditems = this.state.items.map((item, index1) => {
        if (index1 == index) {
          return {
            name: this.state.name,
            email: this.state.email,
            key: new Date().toISOString()
          };
        }
        return item;
      });

      this.setState({
        items: filtereditems,
        // visible:false,
        confirmLoading: true
      });

      this.wait(2000);

      this.setState({
        type: "add"
      });
    }
  };

  handlename = e => {
    this.setState({
      name: e
    });
  };

  handlemail = e => {
    this.setState({
      email: e
    });
  };

  validate_data = () => {
    if (this.state.name && this.state.email) {
      return false;
    } else {
      return true;
    }
  };
  showModal = () => {
    this.setState({
      visible: true
    });
  };

  handleOk = e => {
    this.setState({
      visible: false
    });
  };

  handleCancel = e => {
    this.setState({
      visible: false
    });
  };

  render() {
    const { visible, confirmLoading } = this.state;
    return (
      <div>
        <Layout className="layout">
          <Menu
            mode="horizontal"
            defaultSelectedKeys={["2"]}
            style={{ lineHeight: "64px" }}
          >
            <Menu.Item onClick={this.handletodos} key="1" value="todo">
              Todos
            </Menu.Item>
            <Menu.Item onClick={this.handletodos} key="2">
              Users
            </Menu.Item>
          </Menu>
        </Layout>

        {this.state.step == 1 ? (
          <Todo
            items={this.state.items}
            name={this.state.name}
            email={this.state.email}
            savedata={this.savedata}
            delete={this.delete}
            edit={this.edit}
            handlename={this.handlename}
            handlemail={this.handlemail}
            handleCancel={this.handleCancel}
            validate_data={this.validate_data}
            showModal={this.showModal}
            visible={this.state.visible}
            confirmLoading={this.state.confirmLoading}
          />
        ) : this.state.step == 2 ? (
          <Users
            items={this.state.items}
            name={this.state.name}
            email={this.state.email}
            savedata={this.savedata}
            delete={this.delete}
            edit={this.edit}
            handlename={this.handlename}
            handlemail={this.handlemail}
            handleCancel={this.handleCancel}
            validate_data={this.validate_data}
            showModal={this.showModal}
            visible={this.state.visible}
            confirmLoading={this.state.confirmLoading}
          />
        ) : null}
      </div>
    );
  }
}

export default App;
