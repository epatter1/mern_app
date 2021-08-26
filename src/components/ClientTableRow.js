import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Button from 'react-bootstrap/Button';

export default class ClientTableRow extends Component {

    constructor(props) {
        super(props);
        this.deleteClient = this.deleteClient.bind(this);
    }

    deleteClient() {
        axios.delete('http://localhost:4000/clients/delete-client/' + this.props.obj._id)
            .then((res) => {
                console.log('Client successfully deleted!')
            }).catch((error) => {
                console.log(error)
            })
    }

    render() {
        return (
            <tr>
                <td>{this.props.obj.name}</td>
                <td>{this.props.obj.email}</td>
                <td>{this.props.obj.clientNum}</td>
                <td>
                    <Link className="edit-link" to={"/edit-client/" + this.props.obj._id}>
                        Edit
                    </Link>
                    <Button onClick={this.deleteClient} size="sm" variant="danger">Delete</Button>
                </td>
            </tr>
        );
    }
}