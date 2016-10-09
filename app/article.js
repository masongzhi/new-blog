import React from 'react'

export default React.createClass({
	getInitialState: function(){
		return {
			textValue: "dfdfd"
		};
	},

	componentDidMount: function(){
		
		setTimeout(function(){
			var textValue = this.state.textValue;
			textValue = "new text";
			this.setState({
				textValue: textValue
			});
		}.bind(this),100);
		
	},

	

	render() {
		return (
			<div>{this.state.textValue}</div>
		)
	}
})