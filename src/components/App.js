
import React, { Component } from "react";
import {
    Navbar,
    Button,
    NavbarBrand,
    Alert,
    Card,
    CardBody,
    CardHeader
} from "reactstrap";
import JSONTree from "react-json-tree";

import TestComponent from "./TestComponent";

import renderToTree from "../renderToTree";

const Styles = {
    Content: {
        marginTop: 10,
        marginLeft: 10
    },
    Alert: {
        marginTop: 10
    },
    TreeTheme: {
        scheme: 'monokai',
        author: 'wimer hazenberg (http://www.monokai.nl)',
        base00: '#272822',
        base01: '#383830',
        base02: '#49483e',
        base03: '#75715e',
        base04: '#a59f85',
        base05: '#f8f8f2',
        base06: '#f5f4f1',
        base07: '#f9f8f5',
        base08: '#f92672',
        base09: '#fd971f',
        base0A: '#f4bf75',
        base0B: '#a6e22e',
        base0C: '#a1efe4',
        base0D: '#66d9ef',
        base0E: '#ae81ff',
        base0F: '#cc6633'
      }
};

class App extends Component {
    constructor (props) {
        super();
        this.state = {
            displayResult: "none",
            tree: {},
            alertColor: null,
            msg: null
        };
    }
    
    clickRender () {
        const tree = renderToTree(TestComponent);

        this.setState({
            displayResult: "block",
            tree: tree,
            alertColor: "success",
            msg: "Success!"
        });
    }
    
    render () {
        return (
            <div>
                <Navbar color="light" light expand="md">
                    <NavbarBrand> React Elements Tree </NavbarBrand>
                </Navbar>
                <div style={Styles.Content}>
                    <Button color="primary" onClick={this.clickRender.bind(this)}> Render now </Button>
                    <div style={{ display: this.state.displayResult }}>
                        <Alert style={Styles.Alert} color={this.state.alertColor}> {this.state.msg} </Alert>
                        <Card>
                            <CardHeader> Rendered </CardHeader>
                            <CardBody>
                                {(new TestComponent()).render()}
                            </CardBody>
                        </Card>
                        <Card>
                            <CardHeader> Tree </CardHeader>
                            <CardBody> <JSONTree data={this.state.tree} theme={Styles.TreeTheme} invertTheme={true} /> </CardBody>
                        </Card>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;