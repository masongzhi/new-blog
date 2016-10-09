import React from 'react'
import Article from './article'
import Editor from './editor'
import { Link } from 'react-router'
import NavLink from './NavLink'



export default React.createClass({

  render() {
    return (
		<div>
			<header>
				<div className="wrap">
					<ul>
						<li>
							<a href="/">「MASONGZHI」</a>
						</li>
						<li>
							<NavLink to="/" className="wrapList" onlyActiveOnIndex={true}>博客正文</NavLink>
						</li>
						<li>
							<a href="" className="wrapList">留言板</a>
						</li>
						<li>
							<input type="text" placeholder="请输入关键字" style={{display: "inline-block"}}/>
						</li>
					</ul>	
				</div>
				<div className="transitionLayer"></div>
			</header>
			
			<div className="container">
				{this.props.children || <Article/>}		
			</div>
			
				
			<footer>
				<div>
					<div className="copyright">Power By MASONGZHI.CN</div>
					<div className="github-logo"></div>
				</div>
			</footer>
			
			<Link to="/editor" className="editorBtn" ref="editorBtn" ><img src="./img/bianji.png" alt="编辑" height="45" width="45" /></Link>
		</div>
	)
  }
})

