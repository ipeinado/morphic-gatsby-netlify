import React from "react"
import Header from "./header"
import Footer from "./footer"

import styled, { css } from "react-emotion"

import "./layout.css"

const Container = styled('div')`
	background-color: yellow;
`

export default ({ children }) => (
	<div>
		<Header />
		<Container>
			{ children }
		</Container>
		<Footer />
	</div>
)