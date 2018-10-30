import React from "react"
import { StaticQuery, graphql } from "gatsby"

import { FaBars } from 'react-icons/fa'

class Header extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			expanded: false,
			minified: false,
		}
		this.handleClick = this.handleClick.bind(this)
	}

	componentDidMount() {
		console.log("Component Did Mount")
	}

	handleClick = (e) => {
		e.preventDefault()
		console.log("Someone clicked the button")
	}

	render() {
		return (
			<StaticQuery
				query={graphql`
					query HeadingQuery {
						site {
							siteMetadata {
								title
							}
						}
					}
				`}
				render={data => (
					<header>
						<h1>{ data.site.siteMetadata.title }</h1>
						<button type="button" data-toggle="collapse" onClick={ this.handleClick }>
							<FaBars style={{ color: `red` }} />
						</button>
					</header>
				)}
			/>
		)
	}
}

export default Header