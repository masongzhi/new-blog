import React from 'react'
var $ = require('jquery');



export default React.createClass({
	getInitialState: function() {
		return {value: '##Hello World!'};
	},
	preChange: function(event){
		this.setState({value: event.target.value || '##Hello World!'});
	},
	
	
	render (){
		var value = this.state.value;
		var showdown  = require('showdown'),
			converter = new showdown.Converter(),
			text      = value,
			html      = converter.makeHtml(text),
			_this     = this;
				
		function dataSubmit(){
			
			html = html.replace(/\'/g,"\\\'");
			
			$.ajax({
				url:"./php/aaa.php",
				type:"post",
				// dataType:"json",
				data:{
					html: html
				},
				async:true,
				success:function(data){
					console.log(data);
					_this.setState({value: '##Hello World!'});
					_this.refs.editor_textarea.value = '';
					alert('提交成功');
				},
				error:function(){
					console.log("不成功")
				}
			})
		};
		return (
			<div className="editor">
				<div className="previousText"><textarea name="previousText" id="previousText" onChange={this.preChange} placeholder="写下markdown语法" ref="editor_textarea"></textarea></div>
				<div className="nextText" dangerouslySetInnerHTML={{__html: html}} />
				<button id="submitBtn" onClick={dataSubmit}>Submit</button>
			</div>
		)
	}
})