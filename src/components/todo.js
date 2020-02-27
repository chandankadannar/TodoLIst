import React, { Component } from 'react';
import { Modal, Button, Input } from 'antd';
import { Table, Divider, Tag } from 'antd';
import Datatable from "./table";

class todo extends Component {
    constructor(props) {
        super(props);
        this.state={
            visible: false,
            name:"",
            email:"",
            items:[],
            confirmLoading: false,
            type:"add",
            index:""
        }
    }

    showModal = () => {
        this.setState({
          visible: true,
        });
      };
    
      handleOk = e => {
        console.log(e);
        this.setState({
          visible: false,
        });
      };
    
      handleCancel = e => {
        console.log(e);
        this.setState({
          visible: false,
        });
      };

      handlename=e=>{
        this.setState({
            name: e.target.value,
          });
      }

      handlemail=e=>{
        this.setState({
            email: e.target.value,
          });
      }

      validate_data()
      {
        if(this.state.name && this.state.email){
          return false;
        }else{
            return true
        }
      }

     


      delete=(key)=>{
      var filtereditems=this.state.items.filter(function(items){
        console.log(items);
        return (items!==key)
      })

      console.log(filtereditems);
      this.setState({
          items:filtereditems
      })
    }

    edit=(data)=>{
      console.log(data);
      console.log(this.state.items)
      var index1 = this.state.items.findIndex(x => x.name ===data.name);
      console.log(index1);
      this.setState({
        visible: true,
        name:data.name,
        email:data.email,
        type:"edit",
        index:index1
      });
    }
    savedata=e=>{
      console.log(this.state.type);
      if(this.state.type==="add"){
      this.setState({
        name:"",
        email:""
      })
        console.log("jajs")
        console.log(this.state.items)
      var newItem={
          name:this.state.name,
          email:this.state.email,
          key:Date.now(),
          
      };

      this.setState((prevState)=>{
          return{
              items:prevState.items.concat(newItem),
              
              confirmLoading: true,
          };
      })

        setTimeout(() => {
          this.setState({
            visible: false,
            confirmLoading: false,
          });
        }, 2000);
      }
      else if(this.state.type==="edit"){
          console.log(this.state.type)
          console.log(this.state.index);
          var index=this.state.index;
          var filtereditems=this.state.items.map((item,index1)=>
          {
            if(index1==index){
              return {name:this.state.name,email:this.state.email,key:Date.now()}
            }
            return item
          })

          console.log(filtereditems);

    
          console.log(filtereditems);
          this.setState({
              items:filtereditems,
              visible:false
          })

          setTimeout(() => {
            this.setState({
              visible: false,
              confirmLoading: false,
            });
          }, 2000);

         console.log(this.state.items);

            this.setState({
              type:"add"
            })
      }
    }
    componentDidMount() {
        console.log("toodo");
    }
    
    render()
     {  
        const { visible, confirmLoading } = this.state;
        const { Column, ColumnGroup } = Table;
        return (
            <div>
             <Button onClick={this.showModal}>Create User</Button>
             <Modal
                title="Basic Modal"
                visible={this.state.visible}
                onOk={this.handleOk}
                confirmLoading={confirmLoading}
                onCancel={this.handleCancel}
                okButtonProps={{ disabled:this.validate_data(),onClick:()=>this.savedata()} }
                cancelButtonProps={{disabled:false}}
                >
                <Input size="large" placeholder="Enter Name"
                style={{width:'100%',margin:10}}
                value={this.state.name}
                onChange={this.handlename} />

                <Input size="large" placeholder="Enter Email" 
                style={{width:'100%',margin:10}}
                value={this.state.email}
                onChange={this.handlemail}
                />
               
        </Modal>
        {/* <Table dataSource={this.state.items}>

            <Column title="Name" dataIndex="name" key="name" />
            <Column title="Email" dataIndex="email" key="email" />
            <Column
              title="Action"
              key="action"
              render={(text, record) => (
                <span>
                  <a onClick={()=>this.edit(record)}>Edit</a>
                  <Divider type="vertical" />
                  <a onClick={()=>this.delete(record)} 
                  >Delete</a>
                </span>
              )}
            />
       </Table> */}

       <Datatable items={this.state.items}
         delete={this.delete}
         edit={this.edit}
       />
            </div>

                )
             }
    }

export default todo;