import React from 'react'
import { render } from 'react-dom'
import { Router,Route,hashHistory } from 'react-router'
import Main from './main' 
import Editor from './editor'
import Article from './article'
render((
	<Router history={hashHistory}>
		<Route path="/" component={Main} >
			<Route path="/editor" component={Editor} />
			
		</Route>
	</Router>
), document.getElementById('container'))