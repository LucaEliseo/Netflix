import React, { Component } from "react";
import { Container, Row, Col, Image, Carousel } from "react-bootstrap";

class NowReleases extends Component {
  state = {
    movies: [],
    isLoading: true,
    hasError: false,
    errorMessage: ""
  };

  fetchMovies = async () => {
    try {
      const response = await fetch("http://www.omdbapi.com/?i=tt3896198&apikey=deef9e9f&s=harry%20potter");

      if (response.ok) {
        const data = await response.json();

        this.setState({
          movies: data.Search,
          isLoading: false
        });
      } else {
        this.setState({
          isLoading: false,
          hasError: true,
          errorMessage: `Error loading content. ERROR: ${response.status}`
        });
      }
    } catch (error) {
      this.setState({
        isLoading: false,
        hasError: true,
        errorMessage: `FATAL ERROR: ${error.message}`
      });
    }
  };

  componentDidMount = () => {
    this.fetchMovies();
  };

  render() {
    const { movies, isLoading, hasError, errorMessage } = this.state;

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (hasError) {
      return <div>{errorMessage}</div>;
    }

    return (
      <Container fluid style={{ backgroundColor: "transparent" }} className="mt-3">
      <h4 className="mt-4 text-start text-light">
        Harry Potter - Collection
      </h4>
      <Carousel
        pause={false}
        interval={10000}
        touch={true}
        slide={true}
        indicators={false}
        controls={true}
      >
        <Carousel.Item>
          <Row>
            {movies.slice(0, 5).map((dish) => (
              <Col key={dish.imdbID}>
                <Image id="cardImg" src={dish.Poster} />
              </Col>
            ))}
          </Row>
        </Carousel.Item>
        <Carousel.Item>
          <Row>
            {movies.slice(5, 10).map((dish) => (
              <Col key={dish.imdbID}>
                <Image id="cardImg" src={dish.Poster} />
              </Col>
            ))}
          </Row>
        </Carousel.Item>
      </Carousel>
    </Container>
    );
  }
}

export default NowReleases;
