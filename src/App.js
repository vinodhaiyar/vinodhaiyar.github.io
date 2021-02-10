import React from "react";
import { Container } from "react-bootstrap";

import TopNav from "./TopNav";
import Home from "./Home";
import About from "./About";
import Work from "./Work";
import Footer from "./Footer";

import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { info: { work: [] } };
  }

  componentDidMount() {
    const infoUrl =
      "https://gist.githubusercontent.com/vvinodhkumar/c993e64587b61c8e668a710af427b90f/raw/info.json";
    fetch(infoUrl)
      .then((response) => response.json())
      .then((info) => this.setState({ info }));
  }

  render() {
    return (
      <div className="App">
        <TopNav info={this.state.info} />
        <Container fluid>
          <Home info={this.state.info} />
          <About info={this.state.info} />
          <Work info={this.state.info} />
          <Footer info={this.state.info} />
        </Container>
      </div>
    );
  }
}

export default App;
