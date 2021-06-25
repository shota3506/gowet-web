import React from "react";
import "./App.css";

import { Top } from "./pages/Top.js";
import { Header } from "./components/Header.js";
import { Loading } from "./components/Loading.js";

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleLoading = this.handleLoading.bind(this);
    this.handleLoad = this.handleLoad.bind(this);

    this.state = { loading: false };
  }

  handleLoading() {
    this.setState({ loading: true });
  }

  handleLoad() {
    this.setState({ loading: false });
  }

  render() {
    const loading = this.state.loading;

    return (
      <div className="App">
        {loading && <Loading />}
        <Header className="App-header" title={"Go Vet"} />
        <Top
          loading={loading}
          onLoading={this.handleLoading}
          onLoad={this.handleLoad}
        />
      </div>
    );
  }
}

export default App;
