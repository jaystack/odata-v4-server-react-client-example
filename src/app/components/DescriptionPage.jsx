import React from "react";
import { switchPage } from "../actions";
import { Card, CardHeader, CardText, CardActions, CardTitle } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import RightArrow from 'material-ui/svg-icons/hardware/keyboard-arrow-right';

export default class DescriptionPage extends React.Component {

	render() {
		return (
			<div
				style={{
					display: "flex",
					flex: "1 1 auto",
					flexDirection: "column",
					alignItems: "center"
				}}
			>
				<Card
					style={{
						flex: "0 0 auto",
						margin: "3em auto",
						width: "50%",
						minWidth: "500px",
						maxWidth: "96%"
					}}
				>
					<CardTitle style={{fontSize: '150%'}}>React example client for JayStack OData v4 Server</CardTitle>
					<CardText style={{lineHeight: '1.5em'}}>
						<p>This example React.js client consumes JayStack OData v4 Server example service</p>
						<p><a href="http://jaydata.org/jaystack-odata-v4-server" target="_blank">http://jaydata.org/jaystack-odata-v4-server</a></p>
						<p>You can find the source of this client here (link). Build your own OData v4 Server step-by-step by following this tutorial</p>
						<p><a href="https://github.com/jaystack/odata-v4-server-react-client-example" target="_blank">https://github.com/jaystack/odata-v4-server-react-client-example</a></p>
					</CardText>
					<CardActions
						style={{
							display: "flex",
							justifyContent: "flex-end"
						}}
					>
						<RaisedButton 
							label="Go to Categories page"
							labelPosition="before"
							icon={<RightArrow />}
							primary={true}
							onClick={() => switchPage("categories")}
						/>
					</CardActions>
				</Card>
			</div>
		);
	}

}