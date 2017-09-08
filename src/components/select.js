export default mobxReact.observer(class Select extends React.Component {
	@action
	setDefault = (title) => {
		this.props.items.default = title
	}
	render() {
		const items = this.props.items
		return (
			<div>
				<span 
					className="default-select-item"
				>items.default</span>
				<ul>
					{items.titles.map((title, index) => {
						return <li>title</li>
					})}
				</ul>
			</div>
		)
	}
})