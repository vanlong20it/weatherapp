import React from 'react'
import styled from 'styled-components'
import CurrentTimeNew from './CurrentTimeNew'
const HeadingHeader = styled.header`
	text-align:center;
	padding:10px 0px;
	color:white;
	a{
		text-transform:uppercase;
		font-size:40px;
		font-weight:bold;
		color:green;
		text-decoration:none;
	}
	#current-time{
		font-size:32px;
		color:white;
		text-transform:uppercase;
	}
`;

const Header = () => {
	return (
		<React.Fragment>
			<HeadingHeader>
				<a href="/">Weather App</a>
				{/* use hook */}
				<CurrentTimeNew/>
			</HeadingHeader>
		</React.Fragment>
	);
}

export default Header;