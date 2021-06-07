import React from 'react';
import HornedBeast from './HornedBeast';
import Animals from './data.json';
import CardGroup from 'react-bootstrap/CardGroup';
class Main extends React.Component{
    
    constructor(props){
        super(props);
        this.state= {
            data: Animals

        }
    }


    render(){
        return(<div>
            <CardGroup>
                {Animals.map((index)=>{
                  return(<HornedBeast title={index.title} image={index.image_url} discription={index.description} />)
              })}
            </CardGroup>
           
        </div>)
    }
}
export default Main;
    