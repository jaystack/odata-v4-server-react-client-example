import React from "react";
import { switchPage } from "../actions";
import { Card, CardHeader, CardText, CardActions } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import RightArrow from 'material-ui/svg-icons/hardware/keyboard-arrow-right';

export default class DescriptionPage extends React.Component {

	render() {
		return (
			<Card
				style={{
					margin: "3em auto",
					width: "800px",
					maxWidth: "96%"
				}}
				>
				<CardHeader
					title='React example client for JayStack OData v4 Server'
				>
					
				</CardHeader>
				<CardText>
					This example React.js client consumes JayStack OData v4 Server example service <a href="http://jaydata.org/jaystack-odata-v4-server">http://jaydata.org/jaystack-odata-v4-server</a>. You can find the source of this client here (link). Build your own OData v4 Server step-by-step by following this tutorial <a href="https://github.com/jaystack/odata-v4-server-react-client-example">https://github.com/jaystack/odata-v4-server-react-client-example</a>
				</CardText>
				<CardActions>
					<RaisedButton 
						label="Go to Categories page"
						labelPosition="before"
						fullWidth={true}
						icon={<RightArrow />}
						primary={true}
						onClick={() => switchPage("categories")} 
					/>
				</CardActions>
			</Card>
		);
	}

}