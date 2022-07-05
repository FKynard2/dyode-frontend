import { Component } from 'react';

class App extends Component<{}, {matches: boolean}> {
  constructor(props) {
    super(props)
    this.state = { matches: window.matchMedia("(min-width: 768px)").matches };
  }

  componentDidMount() {
    const handler = e => this.setState({matches: e.matches});
    window.matchMedia("(min-width: 768px)").addEventListener('change', handler);
  }
  render() {
    return (
      <div className='header'>
      {this.state.matches &&  (<div>New Arrivals</div>)}
      {!this.state.matches && (<div>Shop New Arrivals</div>)}
      </div>
    );
  }
}

export default App;
