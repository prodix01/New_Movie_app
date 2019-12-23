import React, {Component} from 'react';
import "./App.css";
import axios from "axios";
import Movie from "./Movie";

class App extends Component {

    //상태값
    state = {
        isLoding : true,
        movies: []
    };

    getMovies = async() => {
        const {
            data: {
                data: {movies}
            }
        } = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");

        this.setState({movies, isLoding : false})




        // const movies = await axios.get("https://yts-proxy.now.sh/list_movies.json");
        // console.log(movies);
    };

    //라이프사이클 함수
    componentDidMount() {
        this.getMovies();
    }

    render() {
        const {isLoding, movies} = this.state;
        return (
            <section class="container">
                {isLoding ? (
                    <div>
                        <span>Loding...</span>
                    </div>
                ) : (
                    <div>
                        {
                            movies.map(movie => (
                                <Movie
                                    key={movie.id}
                                    year={movie.year}
                                    summary={movie.summary}
                                    id={movie.id}
                                    title={movie.title}
                                    rating={movie.rating}
                                    poster={movie.medium_cover_image}
                                />
                            ))
                        }
                    </div>
                )}
            </section>

        );
  }
}

export default App;
