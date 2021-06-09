import React from 'react';
import HornedBeast from './HornedBeast';
// import Animals from './data.json';
import CardGroup from 'react-bootstrap/CardGroup';
class Main extends React.Component {





    render() {
        return (<div>
            <CardGroup>
                {this.props.Animals.map((index) => {
                    return (<HornedBeast title={index.title}
                        image={index.image_url}
                        discription={index.description}
                        OpenModel={this.props.OpenModel} 
                        changeTitle={this.props.changeTitle}
                        changeImgurl={this.props.changeImgurl}
                        changeDescription={this.props.changeDescription} />)
                })}
            </CardGroup>

        </div>)
    }
}
export default Main;
