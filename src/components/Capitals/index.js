import {Component} from 'react'
import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

class Capitals extends Component {
  state = {activeCountryId: countryAndCapitalsList[0].id}

  handleChange = event => {
    this.setState({activeCountryId: event.target.value})
  }

  getCountry = () => {
    const {activeCountryId} = this.state
    const countryName = countryAndCapitalsList.find(
      eachCapital => eachCapital.id === activeCountryId,
    )

    return countryName.country
  }

  render() {
    const {activeCountryId} = this.state
    const answer = this.getCountry(activeCountryId)
    return (
      <div className="main-container">
        <div className="inner-container">
          <h1 className="heading"> Countries And Capitals </h1>
          <select
            value={activeCountryId}
            className="select-element"
            onChange={this.handleChange}
          >
            {countryAndCapitalsList.map(eachCountry => (
              <option
                key={eachCountry.id}
                value={eachCountry.id}
                className="option-element"
              >
                {eachCountry.capitalDisplayText}
              </option>
            ))}
          </select>
          <span className="span-name"> is capital of which country </span>
        </div>
        <h1 className="answer"> {answer} </h1>
      </div>
    )
  }
}

export default Capitals
