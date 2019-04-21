var React = require("react")
var ReactDom = require("react-dom")
var TodoItem = require("../components/TodoItem.js")

var TodoList = React.createClass({
	handlerQDone:function(index){
		this.props.handlerDone(index);
	},
	render:function(){
		var datas = this.props.data;
		var hand = this.handlerQDone;  //不懂了？？？
		var todosList = datas.map(function(todoData,index){
			return(
				<li><TodoItem todo={todoData} index={index} handlerListDone={hand}/></li>
				)
		});
		var message = function(){
			var sum=datas.length;
			var con = 0;
			datas.map(function(data){if(data.isDone)con++});
			if(sum==0)
				return (<span>还没有任务哦，快来添加吧(抓紧！！！)</span>)
			}
			else if(sum!=con)
			{
				return (<span>已完成{con}/总数{sum}</span>)
			}
			else
			{
				return (<span>恭喜完成了全部任务!</span>)
			}

		}();
		return(
			<div style={{textAlign:"center"}}>
				<ul>
					{todosList}
					<li style={{height:"30px",lineHeight:"30px",backgroundColor:"#AAE1EE"}}>{message}</li>
				</ul>
			</div>
			)
	}
})


module.exports = TodoList;