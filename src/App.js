import React, {Component} from 'react';
import axios from "axios";

class App extends Component {

    //상태값
    state = {
        isLoding : true,
        movies: []
    };

    getMovies = async() => {
        const movies = await axios.get("https://yts-proxy.now.sh/list_movies.json");
        console.log(movies);
    };

    //라이프사이클 함수
    componentDidMount() {
        setTimeout(() => {
            this.setState({isLoding: false})
        }, 3000);
        this.getMovies();
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
