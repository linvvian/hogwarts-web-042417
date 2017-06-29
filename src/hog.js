import React from 'react'

import { Card, Image, Button } from 'semantic-ui-react'

class Hog extends React.Component {
  constructor(){
    super()
    this.state = {
      isShowDetail: false,
    }
  }

  slugName = () => {
    const imgPath = './hog-imgs/'
    return require(imgPath + this.props.hog.name.toLowerCase().replace(/ /g, '_') + '.jpg')
  }

  onClick = () => {
    this.setState({
      isShowDetail: !this.state.isShowDetail,
    })
  }

  hogDetails = () => {
    if (this.state.isShowDetail) {
      return (
        <div className='pigDetails' style={{textAlign: 'left'}}>
          <p>Specialty: {this.props.hog.specialty}</p>
          <p>Weight: {this.props.hog.weight}</p>
          <p>Highest Medal: {this.props.hog.medal}</p>
        </div>
      )
    } else {
      return (
        <div style={({visibility: 'hidden'})}>
          <p>..</p>
          <p>..</p>
          <p>..</p>
        </div>
      )
    }
  }

  hideHog = (event, data) => {
    this.props.hideHogs(data.value)
  }

  render(){
    return (
      <Card onClick={this.onClick}>
        <Image src={this.slugName()} />
        <Card.Content>
          <Card.Header>{this.props.hog.name}</Card.Header>
          <Card.Description>{this.hogDetails()}</Card.Description>
          <Button value={this.props.hog} size='mini' color='pink' floated='right' onClick={this.hideHog}>Hide</Button>
        </Card.Content>
      </Card>
    )
  }
}

export default Hog
