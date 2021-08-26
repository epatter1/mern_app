import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios';

export default class EditClient extends Component {

  constructor(props) {
    super(props)

    this.onChangeClientName = this.onChangeClientName.bind(this);
    this.onChangeClientEmail = this.onChangeClientEmail.bind(this);
    this.onChangeClientNum = this.onChangeClientNum.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    // State
    this.state = {
      name: '',
      email: '',
      clientNum: ''
    }
  }

  componentDidMount() {
    axios.get('http://localhost:4000/clients/edit-client/' + this.props.match.params.id)
      .then(res => {
        this.setState({
          name: res.data.name,
          email: res.data.email,
          clientNum: res.data.clientNum
        });
      })
      .catch((error) => {
        console.log(error);
      })
  }

  onChangeClientName(e) {
    this.setState({ name: e.target.value })
  }

  onChangeClientEmail(e) {
    this.setState({ email: e.target.value })
  }

  onChangeClientNum(e) {
    this.setState({ clientNum: e.target.value })
  }

  onSubmit(e) {
    e.preventDefault()

    const clientObject = {
      name: this.state.name,
      email: this.state.email,
      clientNum: this.state.clientNum
    };

    axios.put('http://localhost:4000/clients/update-client/' + this.props.match.params.id, clientObject)
      .then((res) => {
        console.log(res.data)
        console.log('Client successfully updated')
      }).catch((error) => {
        console.log(error)
      })

    // Redirect to Client List 
    this.props.history.push('/client-list')
  }


  render() {
    return (<div className="form-wrapper">
      <Form onSubmit={this.onSubmit}>
        <Form.Group controlId="Name">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" value={this.state.name} onChange={this.onChangeClientName} />
        </Form.Group>

        <Form.Group controlId="Email">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" value={this.state.email} onChange={this.onChangeClientEmail} />
        </Form.Group>

        <Form.Group controlId="Name">
          <Form.Label>Roll No</Form.Label>
          <Form.Control type="text" value={this.state.clientNum} onChange={this.onChangeClientNum} />
        </Form.Group>

        <Button variant="danger" size="lg" block="block" type="submit">
          Update Client
        </Button>
      </Form>
    </div>);
  }
}
