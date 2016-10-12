import React from 'react'
var $ = require('jquery');
import { Link } from 'react-router'

export default React.createClass({
	getInitialState: function(){
		
		return {
			textValue: "",
			timeline: ""
		};
	},

	componentDidMount: function(){
		var _this = this,
			jsonArr = [],
			articles = [],
			timelines = [];
		
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
					timelines.push(jsonArr[x].timeline)
				}
				
				_this.setState({textValue: articles,timeline: timelines});
				
			
				
			},
			error:function(){
				console.log("更新博客不成功")
			},
		});
		
	},
	
	createMarkup: function(){
		var textValue = this.state.textValue;
		var showdown  = require('showdown'),
			converter = new showdown.Converter(),
			text      = textValue,
			newText   = [],
			html;
			
		for(var x in text){
			html = converter.makeHtml(text[x]);
			newText.push(html);
		}
		return newText;
		
	},
	

	render() {
		var timeline = this.state.timeline,
			i = 0,
			name;
		return (
			<div className="article">
				{
					this.createMarkup().map(function(text){
						name = timeline[i];
						i++;
						return (
							<div className="article_blog" >
								<div name={name} dangerouslySetInnerHTML={{__html:text}} />
							</div>
						)
					})
				}
			</div>	
		)
	}
})