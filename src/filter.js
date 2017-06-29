import React from 'react'
import { Checkbox, Form } from 'semantic-ui-react'

class Filter extends React.Component {
  constructor(){
    super()
    this.state = {
      isGreased: true,
      isUnGreased: true,
      sortValue: ''
    }
  }

  handleChange = (event, data) => {
    const target = data
    const value = data.type === 'checkbox' ? target.checked : target.value
    const name = target.name
    this.setState({
      [name]: value
    })
    this.props.handleFilterStates({...this.state, [name]: value})
  }

  render(){
    const options = [
      { text: 'Name', value: 'name'},
      { text: 'Weight', value: 'weight'},
      { text: 'Clear', value: ''},
    ]
    return (
      <Form className='filters'>
        <Form.Group widths='equal'>
          <Form.Field>
            <strong>Sort By:</strong>
            <Form.Select name='sortValue' value={this.state.sortValue} onChange={this.handleChange} options={options} placeholder='Sort By...'/>
          </Form.Field>
          <Form.Group>
            <Form.Field >
              <label>Show Greased?:</label>
              <Checkbox name='isGreased' type='checkbox' checked={this.state.isGreased} onChange={this.handleChange} />
            </Form.Field>
            <Form.Field >
              <label>Show UnGreased?:</label>
              <Checkbox name='isUnGreased' type='checkbox' checked={this.state.isUnGreased} onChange={this.handleChange} />
            </Form.Field>
          </Form.Group>
        </Form.Group>
      </Form>
    )
  }
}

export default Filter
