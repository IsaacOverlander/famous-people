import React, {Component} from 'react';

class Stars extends Component {
    constructor() {
        super();
        this.state = {
            name: 'Isaac',
            role: 'this app'
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
                <p>{this.state.name} is famous for {this.state.role}</p>
            </div>
        )
    }
}

export default Stars;