import React from 'react';
import Card from 'react-bootstrap/Card'
// 
class HornedBeast extends React.Component{
    
    constructor(props){
        super(props);
        this.state = {
            lovePoints: 0
        }
    }

    increaseNumber=()=>{
        this.setState({
            lovePoints: this.state.lovePoints+1

        })
        this.props.OpenModel(this.props.title,this.props.image,this.props.discription);
    }
    render(){
        return(<div>
            {/* {this.props.title}
            <br></br>
            <img src={this.props.image} alt='logo'/>
            <br></br>
            {this.props.title} */}
            <Card style={{ width: '18rem',backgroundColor: 'black', height: '35rem', color: 'white' }}>
  <Card.Img src={this.props.image}  onClick={this.increaseNumber}  />
  <Card.Body>
    <Card.Title>{this.props.title}</Card.Title>
    <Card.Text>
    {this.props.discription}
    </Card.Text>
    <Card.Text>
    ❤️:{this.state.lovePoints}
    </Card.Text>
  </Card.Body>
</Card>


        </div>)
    }
}
export default HornedBeast;
    