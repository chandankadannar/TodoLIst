import React, { Component } from 'react';
import { Modal, Button, Input } from 'antd';
import { Table, Divider, Tag } from 'antd';
import Datatable from "./table";


class users extends Component 
{
    constructor(props) 
    {
        super(props);
        this.state={          
        }
    }
    componentDidMount() 
    {
        console.log("users");
    }
    render() 
    {
        const { visible, confirmLoading } = this.state;
        const { Column, ColumnGroup } = Table;
        return (
                <div>
                <Datatable items={this.state.items}
                    delete={this.delete}
                    edit={this.edit}
                />
                </div>
               )
    }
}

export default users;