import React, {Component} from 'react';

class Stars extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            role: ''
        }
    }

    handleNameChange = event => {
        this.setState({name: event.target.value});
        console.log(event.target.value);
    }

    handleRoleChange = event => {
        this.setState({role: event.target.value});
        console.log(event.target.value);
    }

    render() {
        return(
            <div>
                <label>Name</label>
                <input onChange={this.handleNameChange}/>
                <label>Role</label>
                <input onChange={this.handleRoleChange}/>
            </div>
        )
    }
}

export default Stars;