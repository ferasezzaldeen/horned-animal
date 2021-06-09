import React from 'react';
import HornedBeast from './HornedBeast';
// import Animals from './data.json';
import CardGroup from 'react-bootstrap/CardGroup';
class Main extends React.Component {





    render() {
        return (<div>
            <CardGroup>

                {
                this.props.Animals.map((index) => {
                    if(this.props.numberOfHorns===''||this.props.numberOfHorns==='all'){
                        return (<HornedBeast title={index.title}
                            image={index.image_url}
                            discription={index.description}
                            OpenModel={this.props.OpenModel} 
                     />)

                    }
                    if(index.horns==this.props.numberOfHorns){
                        return (<HornedBeast title={index.title}
                            image={index.image_url}
                            discription={index.description}
                            OpenModel={this.props.OpenModel} 
                     />)

                    }
                  
                })}
            </CardGroup>

        </div>)
    }
}
export default Main;
