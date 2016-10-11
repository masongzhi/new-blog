import React from 'react'
var $ = require('jquery');

export default React.createClass({
	getInitialState: function(){
		return {
			textValue: "dfdfd"
		};
	},

	componentDidMount: function(){
		var _this = this,
			jsonArr = [],
			articles = [];
		
		$.ajax({
			url:"http://localhost/blog2/php/bbb.php",
			type:"post",
			dataType:"json",
			data:{
				flag: 1
			},
			async:true,
			success:function(data){
				
				for(var i=0; i< 10; i++){
					if(i>=data.blog.length){
						break
					}
					jsonArr.push(data.blog[i]);
					
				}
				
				for(var x in jsonArr){
					articles.push(jsonArr[x].article)
				}
				
				// console.log(articles);
				_this.setState({textValue: articles[2]});
				
			
				
			},
			error:function(){
				console.log("更新博客不成功")
			},
		});
		
	},

	

	render() {
		var textValue = this.state.textValue;
		var showdown  = require('showdown'),
			converter = new showdown.Converter(),
			text      = textValue,
			html      = converter.makeHtml(text);
			
		return (
			<div className="article">
				<div dangerouslySetInnerHTML={{__html: html}} />
			</div>	
		)
	}
})