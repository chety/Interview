window.movies = [];

function getAllCachedMovies(key) {
  const savedMovieDb = localStorage.getItem(key);
  let movies = null;
  if (savedMovieDb) {
    movies = JSON.parse(savedMovieDb);
  }
  return movies;
}

function getCachedMovieInfo(movieName) {
  const movies = getAllCachedMovies('movies-db');
  return movies ? movies.find(m => m.key === movieName) : null;
}

function renderCachedMovies() {
  const savedMovies = getAllCachedMovies('movies-db');
  window.movies = savedMovies;
  renderResult(savedMovies || []);
}

function renderResult(data) {
  $('.result').html(createMovieResultTable(data));
}

function getStyleByRating(imdbRating) {
  let style = '';
  if (imdbRating > 0 && imdbRating < 50) {
    style = 'full_red';
  } else if (imdbRating > 50) {
    style = 'full_green';
  } else {
    style = 'full_yellow';
  }
  return style;
}

function createMovieResultTable(data) {
  if (data == null || data.length == 0) {
    return null;
  }

  let resultDiv = ``;

  for (const movie of data) {
    const score = movie.imdbRating * 10;
    resultDiv += `<div class="movieframe">
        <div class="movie_left_image">
            <img src=${movie.poster} alt=${movie.title}/>
        </div>
        <div class="movie_right_info">
            <div><span>${movie.title}</span><span class="rating">${
      movie.imdbRating
    }/10</span></div>
            <div class="empty">
                <div class=${getStyleByRating(
                  score
                )} style="height:22px;width:${score}%">${score}
                </div>
            </div>
            <div class="remove"><button id="remove" key=${
              movie.key
            }>Remove</button></div>
        </div>
        </div>`;
  }
  return resultDiv;
}

$(document).ready(function() {
  renderCachedMovies();

  $('#search').click(function(e) {
    const movieName = $('#movie-name')[0].value;
    if (movieName) {
      getMovieInfoFromApi(movieName);
    }
  });

  function getMovieInfoFromApi(movieName) {
    const movie = getCachedMovieInfo(movieName);
    const movieToParse = movie
      ? { ...JSON.parse(movie), key: movieName }
      : null;
    if (movieToParse) {
      renderResult([movieToParse]);
      return;
    }
    $.ajax({
      url: `http://www.omdbapi.com/?apikey=63f944af&t=${movieName}`,
      method: 'POST',
      dataType: 'json',
      success: function(result) {
        console.log(result);
        const { Poster: poster, Title: title, imdbRating } = result;
        const savedMovies = getAllCachedMovies('movies-db') || [];
        if (savedMovies.length === 10) {
          savedMovies.pop();
        }

        const foundMovie = { poster, title, imdbRating, key: movieName };
        const movies = window.movies;
        if (!movies.some(m => m.key === movieName)) {
          movies.push(foundMovie);
        }
        savedMovies.unshift(foundMovie);
        localStorage.setItem('movies-db', JSON.stringify(savedMovies));
        renderResult([foundMovie]);
      },
      error: function(err) {
        console.log(err);
      }
    });

    $(document).ajaxStart(function() {
      $('.result').html(
        '<strong>Movie infos are loading. Please Wait...</strong>'
      );
    });
  }

  $(document).keypress(function(e) {
    if (e.which == 13) {
      const movieName = $('#movie-name')[0].value;
      if (movieName) {
        getMovieInfoFromApi(movieName);
      }
    }
  });

  $(document).on('click', 'button', function(e) {
    if (e.currentTarget.id !== 'remove') {
      return;
    }
    const movieToRemoveKey = $(e.currentTarget).attr('key');
    let cachedMovies = getAllCachedMovies('movies-db');
    cachedMovies = cachedMovies.filter(m => m.key !== movieToRemoveKey);
    localStorage.setItem('movies-db', JSON.stringify(cachedMovies));

    window.movies = window.movies.filter(m => m.key !== movieToRemoveKey);
    renderResult(window.movies);
    $('#movie-name')[0].value = '';
  });
});
