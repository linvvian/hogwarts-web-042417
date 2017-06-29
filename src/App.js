import React, { Component } from 'react';
import { Segment } from 'semantic-ui-react'

import './App.css';

import Nav from './components/Nav'
import Hogs from './porkers_data'
import HogList from './hogList'
import Filter from './filter'

class App extends Component {
  constructor(){
    super()
    this.state = {
      hogs: [],
      sorted: [],
      filters: {
        sortValue: '',
        isGreased: true,
        isUnGreased: true,
      },
    }
  }

  parseHog = () => {
    let hogs = Hogs.map((hog) => {
      return {
        name: hog.name,
        specialty: hog.specialty,
        greased: hog.greased,
        weight: hog['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'],
        medal: hog['highest medal achieved'],
      }
    })
    this.setState({
      hogs: hogs,
      sorted: hogs,
    })
  }

  getSorted = () => {
    let sortHogs = [...this.state.sorted]
    if (this.state.filters.sortValue === 'name') {
      sortHogs = sortHogs.sort(function(a, b) {
        var nameA = a.name.toUpperCase()
        var nameB = b.name.toUpperCase()
        if (nameA < nameB) {
          return -1
        }
        if (nameA > nameB) {
          return 1
        }

        return 0
      })
    } else if (this.state.filters.sortValue === 'weight') {
      sortHogs = sortHogs.sort(function(a, b) {
        if (a.weight < b.weight) {
          return -1
        }
        if (a.weight > b.weight) {
          return 1
        }

        return 0
      })
    }
    console.log(this.state.hogs)
    return this.filterGreased(sortHogs)
  }

  filterGreased = (arrayOfHogs) => {
    return arrayOfHogs.filter((hog) => {
      if (this.state.filters.isGreased === true && this.state.filters.isUnGreased === true) {
        return hog
      } else if (this.state.filters.isGreased === true){
        if (hog.greased === true) {
          return hog
        }
      } else if (this.state.filters.isUnGreased === true) {
        if (hog.greased === false ) {
            return hog
        }
      }
    })
  }

  componentWillMount = () => {
    this.parseHog()
  }

  handleFilterStates = (state) => {
    this.setState({
      filters: state,
    })
  }

  hideHogs = (hog) => {
    let shownHogs = [...this.state.sorted]
    shownHogs.splice(shownHogs.indexOf(hog), 1)
    this.setState({
      sorted: shownHogs
    })
  }

  render() {
    const orderedHogs = this.getSorted()
    return (
      <div className="App">
        < Nav />
        <Segment padded>
          <Filter handleFilterStates={this.handleFilterStates}/>
        </Segment>
        <div>
          <HogList hogs={orderedHogs} hideHogs={this.hideHogs}/>
        </div>
      </div>
    )
  }
}



export default App;
