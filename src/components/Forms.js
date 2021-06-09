import React from 'react';
import Form from 'react-bootstrap/Form'

class Forms extends React.Component {

    
    
    render() {
        return (
            <Form  >
                <Form.Group controlId="exampleForm.SelectCustom">
                    <Form.Label>select number of horns</Form.Label>
                    <Form.Control as="select" custom onChange={this.props.changeNumOfHorns} style={{ width :'600px'} } >
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>100</option>
                        <option>all</option>
                    </Form.Control>
                </Form.Group>
            </Form>)
    }
}
export default Forms;
