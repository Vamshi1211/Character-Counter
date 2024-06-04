import {Component} from 'react'
import {v4 as uuidV4} from 'uuid'
import './App.css'

// Replace your code here
class App extends Component {
  state = {namesList: [], textInput: ''}

  onChangeText = event => {
    this.setState({textInput: event.target.value})
  }

  onClickAdd = event => {
    event.preventDefault()
    const {textInput} = this.state

    const eachNameText = {
      id: uuidV4(),
      text: textInput,
      length: textInput.length,
    }
    this.setState(prevState => ({
      namesList: [...prevState.namesList, eachNameText],
      textInput: '',
    }))
  }

  render() {
    const {namesList, textInput} = this.state
    return (
      <div className="bg-container">
        <div className="left-container">
          <div className="left-top-container">
            <h1 className="name-heading">
              Count the characters like a Boss...
            </h1>
          </div>
          <div className="left-body-container">
            {namesList.length > 0 ? (
              <ul className="list-container">
                {namesList.map(eachItem => (
                  <li className="each-list-item" key={eachItem.id}>
                    <p className="each-name">
                      {eachItem.text}:
                      <span className="each-length"> {eachItem.length} </span>
                    </p>
                  </li>
                ))}
              </ul>
            ) : (
              <div className="image-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
                  alt="no user inputs"
                  className="image"
                />
              </div>
            )}
          </div>
        </div>
        <form className="right-container" onSubmit={this.onClickAdd}>
          <h1 className="right-name">Character Counter</h1>
          <div className="input-container">
            <input
              className="input"
              placeholder="Enter the Characters here"
              onChange={this.onChangeText}
              value={textInput}
            />
            <button
              type="submit"
              className="add-button"
              onClick={this.onClickAdd}
            >
              Add
            </button>
          </div>
        </form>
      </div>
    )
  }
}

export default App
