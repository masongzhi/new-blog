import React from 'react'
import { render } from 'react-dom'
import { Router,Route,hashHistory } from 'react-router'
import Main from './main' 
import Editor from './editor'
import Article from './article'
import Article_list from './article_list'

render((
	<Router history={hashHistory}>
		<Route path="/" component={Main} >
			<Route path="/editor" component={Editor} />
			<Route path="/article_list" component={Article_list} />
		</Route>
	</Router>
), document.getElementById('container'))