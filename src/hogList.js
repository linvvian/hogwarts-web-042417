import React from 'react'
import Hog from './hog'
import { Card } from 'semantic-ui-react'

class HogList extends React.Component {
  render(){
    return (
      <Card.Group itemsPerRow={4}>
        {this.props.hogs.map((hog, index) => {
          return (
            <Hog key={index+hog} hog={hog} hideHogs={this.props.hideHogs}/>
          )
        })}
      </Card.Group>
    )
  }
}

export default HogList
