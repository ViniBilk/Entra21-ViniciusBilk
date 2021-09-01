import React from "react"

export class ToDoInput extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.submitHandler = this.submitHandler.bind(this);
        this.state = {
          inputField: ''
        };
      }
      
      submitHandler(evt) {
        evt.preventDefault();
        this.props.handlerFromParant(this.state.inputField);
        
        this.setState({
          inputField: ''
        });
      }
      
      handleChange(event) {
        this.setState({
          inputField: event.target.value
        });
      }
    
      render() {
        return (
          <div>
            <form onSubmit={this.submitHandler}>
              <input type="text" 
                     id="theInput" 
                     value={this.state.inputField} 
                     onChange={this.handleChange} />
              <input type="submit" />
            </form>
          </div>
        );
      }
};