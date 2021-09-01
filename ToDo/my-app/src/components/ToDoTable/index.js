import React from "react"
import { ToDoInput } from "../ToDoInput";
import { ToDoRow } from "../ToDoRow";

export class ToDoTable extends React.Component {
    constructor() {
        super();
        this.handleData = this.handleData.bind(this);
        this.state = {
            fromChild: []
        };
    }

    handleData(data) {
        this.setState({
            fromChild: [
                data,
                ...this.state.fromChild
            ]
        });
    }

    render() {
        return (
            <div className="big_div">
                <ToDoInput handlerFromParant={this.handleData} />
                <h5>Received by parent:<br />{this.state.fromChild}</h5>

                <table>
                    {
                        this.state.fromChild.forEach((child) => {
                            <ToDoRow toDo={child} />
                        })
                    }
                </table>
            </div>
        );
    }
}