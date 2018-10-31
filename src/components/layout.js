import React from "react"
import Header from "./header"
import Footer from "./footer"

import "./layout.css"

export default ({ children }) => (
	<div>
		<Header />
		<div style={{ margin: `0 auto`, maxWidth: 650, padding: `0 1rem` }}>
			{ children }
		</div>
		<Footer />
	</div>
)