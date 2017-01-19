var React = require("react")
var ReactDom = require("react-dom")

var TodoItem = React.createClass({
	handlerDone:function(){
		this.props.handlerListDone(this.props.index);
	},
	render:function(){
		var classNm = this.props.todo.isDone?"itemDone":"itemNoDone";
		return(
				<div className={classNm}>
					<div className="itemSpan">{this.props.todo.todo}</div>
					<div className="itemBtn"><input type="button" value="完成" onClick={this.handlerDone}/></div>
				</div>
			)
	}
})

module.exports = TodoItem;