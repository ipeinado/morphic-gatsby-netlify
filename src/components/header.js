import React from "react"
import { StaticQuery, graphql } from "gatsby"

export default () => (
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
			<h1>{ data.site.siteMetadata.title }</h1>
		)}
	/>
)