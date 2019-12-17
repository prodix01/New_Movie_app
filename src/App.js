import React, {Component} from 'react';

class App extends Component {

    //상태값
    state = {
        isLoding : true,
        movies: []
    };

    //라이프사이클 함수
    componentDidMount() {
        setTimeout(() => {
            this.setState({isLoding: false})
        }, 6000);
    }

    render() {
        const {isLoding} = this.state;
        return (
            <div>
                {isLoding ? "Loding..." : "We are ready"}
            </div>
        );
  }
}

export default App;
