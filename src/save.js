
var App = React.createClass({
  movieClicked: function(movie) {
    this.setState({
      currentMovie: movie
    })
  },
  movieWatched: function(movie) {
    var existingMovies = this.state.movies
    var moviesWithWatchedMovieRemoved = existingMovies.filter(function(existingMovie) {
      return existingMovie.id !== movie.id
    })
    this.setState({
      movies: moviesWithWatchedMovieRemoved,
      currentMovie: null
    })
  },
  resetMovieListClicked: function() {
    this.setState({
      movies: movieData.sort(this.movieCompareByReleased)
    })
  },
  viewChanged: function(view) {
    // View is either "latest" (movies sorted by release), "alpha" (movies
    // sorted A-Z), or "map" (the data visualized)
    // We should probably do the sorting and setting of movies in state here.
    // You should really look at https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
    this.setState({
        currentView: view,
        latest: movieData.sort(this.movieCompareByReleased),
        alpha: movieData.sort(this.movieCompareByTitle),
        map: theatres.sort()
      })
    },

    viewChanged: function(view) {
      // View is either "latest" (movies sorted by release), "alpha" (movies
      // sorted A-Z), or "map" (the data visualized)
      // We should probably do the sorting and setting of movies in state here.
      // You should really look at https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
      var latest = movieData.sort(this.movieCompareByReleased)
      var alpha = movieData.sort(this.movieCompareByTitle)
      var map = theatres.sort()
      if (this.state.currentView == latest) {
        return latest}
        else {
          return
      this.setState({
      movies: alpha
        })
      }
    },
