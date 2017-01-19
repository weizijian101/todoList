var React = require("react")
var ReactDom = require("react-dom")

var TodoFooter = React.createClass({
	getInitialState() {
		return ({
			todo:''
		})
	},
	handlerChange:function(e){
		var todo = e.target.value;
		this.setState({
			todo:todo
		})
	},
	handlerAdd:function(e){
			var todo = this.refs.todoValue.value;
			if(todo=='')return;
			var data={
				todo:todo,
				isDone:false
			}
			this.props.addClick(data)
			this.setState({
				todo:''
			})
		},
	render:function(){
		return (<div className="todoFooter">
					<input id="footerText" type="text" ref="todoValue" placeholder="请输入任务，点击添加" onChange={this.handlerChange} value={this.state.todo}/>
					<input id="footerBtn" type="button" value="添加" onClick={this.handlerAdd}/>
				</div>)
	}
})

module.exports = TodoFooter;