import React, { Component } from 'react';
import './App.css';
import Todo from "./components/todo";
import Users from "./components/users";
import 'antd/dist/antd.css';
import './index.css';
import { Layout, Menu } from 'antd';

class App extends Component {
  constructor(){
      super();
      this.state = {
        step: 2,
      }
  }

  handletodos = (event) => {

    console.log(event.key);
    this.setState({
      step:event.key
    });
};


  render() {
    console.log(this.state.step);
 return (
    <div>
          <Layout className="layout">
          <Menu
         
            mode="horizontal"
            defaultSelectedKeys={['2']}
            style={{ lineHeight: '64px' }}
          >
                <Menu.Item onClick={this.handletodos} key="1" value="todo">Todos</Menu.Item>
                <Menu.Item onClick={this.handletodos} key="2">Users</Menu.Item>
          </Menu>
          </Layout>
          
          {
          this.state.step==1?
          (     
                <Todo />
          ) 
          :this.state.step==2 ? 
          ( 
              <Users/>        
          )
          : null
          }
    </div>
      );
  }
}

export default App;