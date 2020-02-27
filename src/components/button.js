import React, { Component } from 'react';
import { Button } from 'antd';


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
        return (
                <div>
                 <Button>Create User</Button>
                    <h1>fdf</h1>
                </div>
               )
    }
}

export default users;