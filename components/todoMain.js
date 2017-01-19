import React from 'react'
//var React = require("react")
var ReactDom = require("react-dom")
var TodoList = require("../components/todoList.js")
var TodoFooter = require("../components/todoFooter.js")


var TodoMain = React.createClass({
	getInitialState:function() {
		return({
			todos:[]
		})
	},
	handlerAdd:function(todo){
		var todos = this.state.todos;
		todos.push(todo);
		this.setState({
			todos:todos
		})
		console.log(this.state.todos[this.state.todos.length-1].todo)
	},
	handlerMainDone:function(index){
		var todos = this.state.todos;
		todos[index].isDone = true;
		this.setState({
			todos:todos
		})
	},
	render:function(){
		return(
			<div className="main">
				<div id="mainTitle">React Todo</div>
				<br />
				<TodoList data={this.state.todos} handlerDone={this.handlerMainDone}/>
				<div style={{width:"75%",margin:"15px auto"}}><hr /></div>
				<TodoFooter addClick={this.handlerAdd}/>
			</div>
			)
	}
})

module.exports = TodoMain;