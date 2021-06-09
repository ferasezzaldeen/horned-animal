import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'

class SelectedBeast extends React.Component {




  render() {
    console.log('hello there');

    return (<div>
      <Modal show={this.props.show} onHide={this.props.CloseModal} centered  >
        <Modal.Header closeButton>
          <Modal.Title >
            {this.props.title}
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
        <Card.Img src={this.props.imgurl}   />
          <p>{this.props.description}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.props.CloseModal} variant="info">Close</Button>
        </Modal.Footer>
      </Modal>
    </div>)
  }
}
export default SelectedBeast;
