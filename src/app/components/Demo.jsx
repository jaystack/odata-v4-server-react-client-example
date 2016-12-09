import React from "react";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import { Tabs, Tab } from 'material-ui/Tabs';
import RaisedButton from 'material-ui/RaisedButton';
import CategoriesPage from "./CategoriesPage";
import ProductsPage from "./ProductsPage";
import { getCategories, getProducts, initDb } from "../actions";

export default class Demo extends React.Component {

	componentDidMount() {
		getCategories();
		getProducts();
	}

	render() {
		return (
			<MuiThemeProvider>
				<div style={{
					display: "flex",
					flexDirection: "column",
					width: "100%",
					height: "100%",
					overflow: "hidden"
				}}>
					<AppBar
						style={{ flex: "0 0 auto" }}
						title={<h1><span style={{
							display: "inline-block",
							position: "relative",
							marginRight: "35px",
							top: "14px",
							width: "202px",
							height: "40px",
							background: "url(/logo.png) center no-repeat"
						}}></span>React example client for JayStack OData v4 Server</h1>}
						showMenuIconButton={false}
						iconElementRight={<RaisedButton label="Init DB" onTouchTap={initDb} />}
						iconStyleRight={{ margin: 0, display: "flex", alignItems: "center" }}
						>
					
						</AppBar>
					<Tabs
						style={{ display: "flex", flexGrow: 1, flexDirection: "column" }}
						contentContainerStyle={{ flexGrow: 1, position: "relative" }}
						tabTemplateStyle={{ display: "flex", position: "absolute", top: 0, bottom: 0, left: 0, right: 0 }}
						tabItemContainerStyle={{ flex: "0 0 auto" }}
						>
						<Tab label="Categories">
							<CategoriesPage
								categories={this.props.state.categories}
								products={this.props.state.products}
								categoryFilter={this.props.state.categoryFilter}
								selectedCategory={this.props.state.selectedCategory}
								/>
						</Tab>
						<Tab label="Products">
							<ProductsPage
								products={this.props.state.products}
								productFilter={this.props.state.productFilter}
								productOrder={this.props.state.productOrder}
								selectedProduct={this.props.state.selectedProduct}
								categories={this.props.state.categories}
								/>
						</Tab>
					</Tabs>
				</div>
			</MuiThemeProvider>
		)
	}
}