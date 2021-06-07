import React from 'react';
class HornedBeast extends React.Component{
    render(){
        return(<div>
            {this.props.title}
            <br></br>
            <img src={this.props.image} alt='logo'/>
            <br></br>
            {this.props.discription}


        </div>)
    }
}
export default HornedBeast;
    