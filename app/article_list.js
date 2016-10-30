import React from 'react'
import { Link } from 'react-router'
var $ = require('jquery');

export default React.createClass({
	getInitialState: function(){
		return {
			textValue: "文章获取中...",
			timeline: "",
		};
	},
	componentDidMount: function(){
		var currentHref = window.location.hash,
			id = currentHref.match(/\d+/),
		    _this = this,
			article,
			timeline;
		
		$.ajax({
			url:"./php/bbb.php?flag=-1&&article_id=" + id,
			type: "get",
			dataType: "json",
			async:true,
			success:function(data){
				
				_this.setState({
					textValue: data.article[0].article,
					timeline: data.article[0].timeline
				})
			},
		})
	},
	
	// componentWillUpdate: function(){
		// console.log(1)
		// var currentHref = window.location.hash,
			// id = currentHref.match(/\d+/),
		    // _this = this,
			// article,
			// timeline;
		
		// $.ajax({
			// url:"http://localhost/blog2/php/bbb.php?flag=-1&&article_id=" + id,
			// type: "get",
			// dataType: "json",
			// async:true,
			// success:function(data){
				
				// _this.setState({
					// textValue: data.article[0].article,
					// timeline: data.article[0].timeline
				// })
			// },
		// })
	// },
	createMarkup: function(){
		var textValue = this.state.textValue;
		var showdown  = require('showdown'),
			converter = new showdown.Converter(),
			text      = textValue,
			html      = converter.makeHtml(text);
			
		
		return {__html: html};
		
	},
	
	render (){
		return (
			<div className="article_text">
				<p className="article_timeline">{this.state.timeline}</p>
				<div dangerouslySetInnerHTML={this.createMarkup()} />
			</div>
		)
	}
})