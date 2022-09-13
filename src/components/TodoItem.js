import React from "react";
import styles from "./TodoItem.module.css"
class TodoItem extends React.Component {
    state = {
        editing: false,
      }

      handleEditing = () => {
        this.setState({
          editing: true,
        })
      }
    render() {
        let viewMode = {}
let editMode = {}

if (this.state.editing) {
  viewMode.display = "none"
} else {
  editMode.display = "none"
}
        const completedStyle = {
            fontStyle: "italic",
            color: "#595959",
            opacity: 0.4,
            textDecoration: "line-through",
        }
        return (
            <li className={styles.item}>
                <div onDoubleClick={this.handleEditing} style={viewMode}>
                    <input type="checkbox"
                        checked={this.props.todo.completed}
                        onChange={() => this.props.handleChangeProp(this.props.todo.id)}
                    />
                    <span style={this.props.todo.completed ? completedStyle : null}>
                        {this.props.todo.title}
                    </span>
                    <button onClick={() => this.props.deleteTodoProps(this.props.todo.id)}>Delete</button>
                </div>
                <input type="text" className={styles.textInput} style={editMode}/>
            </li>
        )
    }
}

export default TodoItem;