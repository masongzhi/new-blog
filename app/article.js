import React from 'react'
var $ = require('jquery');
import { Link } from 'react-router'

export default React.createClass({
	getInitialState: function(){
		var currentPage = this.props.params?this.props.params.page.match(/\d+/).toString():1;
		
		
		
		return {
			textValue: "数据获取中",
			id: "",
			page: 1,
			currentPage: currentPage,
			
		};
	},

	componentDidMount: function(){
		
		var _this = this,
			jsonArr = [],
			articles = [],
			ids = [],
			page,
			currentPage = this.state.currentPage;
		
		
		$.ajax({
			url:"./php/bbb.php",
			type:"post",
			dataType:"json",
			data:{
				flag: 1,
				currentPage: currentPage
				
			},
			async:true,
			success:function(data){
				console.log(data)
				for(var i=0 ; i<data.blog.length ; i++){
					articles.push(data.blog[i].article);
					ids.push(+data.blog[i].id)
				}
				
				
				page = Math.ceil(data.pageNumber/10);
				_this.setState({textValue: articles,id: ids,page: page});
	
			},
			error:function(){
				console.log("更新博客不成功")
			},
		});
		
	},
	


	
	
	
	createMarkup: function(){
		var currentPage = this.state.currentPage;
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
	createPageArr: function(){
		var page = this.state.page,
			pageArr = [],
			i = 1;
		
		while(i<=page){
			pageArr.push(i);
			i++;
		}
		return pageArr;
	},
	changePage: function(e){
		var currentPage = e.target.innerHTML;
		// console.log(e.target.innerHTML)
		
		this.setState({currentPage: +currentPage});
		
		var articles = [],
			ids = [],
			_this = this,
			page;
		
		$.ajax({
			url:"http://localhost/blog2/php/bbb.php",
			type:"post",
			dataType:"json",
			data:{
				flag: 1,
				currentPage: currentPage
				
			},
			async:true,
			success:function(data){
				data = data.replace(/\\\'/g,"\'");
				console.log(data)
				for(var i=0 ; i<data.blog.length ; i++){
					articles.push(data.blog[i].article);
					ids.push(+data.blog[i].id)
				}
				
				
				page = Math.ceil(data.pageNumber/10);
				_this.setState({textValue: articles,id: ids,page: page});
	
			},
			error:function(){
				console.log("更新博客不成功")
			},
		});
		
	},
	

	render() {
		
		var id = this.state.id,
			
			currentId,
			pageArr = this.createPageArr(),
			_this = this;
		var hashPage = window.location.hash;
		hashPage = hashPage.match(/page[\d+]/);
		var i = 0;
		
	
			
		return (
			<div className="article">
				{
					this.createMarkup().map(function(text){
						
						currentId = id[i];
						i++;
						return (
							<div className="article_blog" >
								<Link to={"/article_list/"+currentId} >
									<div name={currentId} dangerouslySetInnerHTML={{__html:text}} />
								</Link>
							</div>
						)
					})
					
				}
				
				
			</div>	
		)
	}
})