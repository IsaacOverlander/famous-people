import React, { Component } from 'react';

class Stars extends Component {
    constructor() {
        super();
        this.state = {
            star: {
                name: 'Isaac',
                role: 'this app'
            }
        }
    }

    handleNameChange = event => {
        this.setState({ star: { name: event.target.value, role: this.state.star.role} });
        console.log(event.target.value);
    }

    handleRoleChange = event => {
        this.setState({ star: { name: this.state.star.name, role: event.target.value} });
        console.log(event.target.value);
    }

    logName = event => {
        console.log(this.state.star);
    }

    render() {
        return (
            <div>
                <label>Name</label>
                <input onChange={this.handleNameChange} />
                <label>Role</label>
                <input onChange={this.handleRoleChange} />
                <input type="submit" onClick={this.logName} />
                <p>{this.state.star.name} is famous for {this.state.star.role}</p>

            </div>
        )
    }
}

export default Stars;