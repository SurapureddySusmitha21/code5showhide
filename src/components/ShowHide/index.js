// Write your code here
import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {firstName: false, lastName: false}

  clickFirstName = () => {
    this.setState(prevsState => ({firstName: !prevsState.firstName}))
  }

  clickLastName = () => {
    this.setState(prevsState => ({lastName: !prevsState.lastName}))
  }

  render() {
    const {firstName} = this.state
    const {lastName} = this.state
    return (
      <div className="bg-container">
        <div>
          <h1 className="heading">Show/Hide</h1>
          <div className="btn-container">
            <div>
              <button
                type="button"
                className="show-btn"
                onClick={this.clickFirstName}
              >
                Show/Hide FirstName
              </button>
              {firstName && <p className="name">Joe</p>}
            </div>
            <div>
              <button
                type="button"
                className="show-btn"
                onClick={this.clickLastName}
              >
                Show/Hide LastName
              </button>
              {lastName && <p className="name">Jonas</p>}
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default ShowHide
