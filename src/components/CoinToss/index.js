import {Component} from 'react'
import './index.css'

class CoinToss extends Component {
  state = {
    heads: 0,
    tails: 0,
    coinImage: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
  }

  tossCoin = () => {
    const possibleOutcomesList = ['heads', 'tails']
    const randomIndex = Math.floor(Math.random() * 2)
    const result = possibleOutcomesList[randomIndex]
    if (result === 'heads') {
      this.setState(prevState => ({
        heads: prevState.heads + 1,
      }))
      this.setState({
        coinImage: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
      })
    } else {
      this.setState(prevState => ({
        tails: prevState.tails + 1,
      }))
      this.setState({
        coinImage: 'https://assets.ccbp.in/frontend/react-js/tails-img.png',
      })
    }
  }

  render() {
    const {heads, tails, coinImage} = this.state

    return (
      <>
        <div className="bg-container">
          <div className="coin-toss-card">
            <h1 className="title">Coin Toss Game</h1>
            <p className="title-description">Heads (or) tails</p>
            <img src={coinImage} className="coin-img" alt="toss result" />
            <button
              className="coin-toss-tbn"
              type="button"
              onClick={this.tossCoin}
            >
              Toss Coin
            </button>
            <div className="coin-toss-stats-container">
              <p className="coin-toss-stats-item-text">
                Total: {tails + heads}
              </p>
              <p className="coin-toss-stats-item-text">Heads: {heads}</p>
              <p className="coin-toss-stats-item-text">Tails: {tails}</p>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default CoinToss
