$(document).ready(function() {
    $('#search').click(function(e) {
        const movieName = $('#movie-name')[0].value;
        if (movieName) {
            getMovieInfoFromApi(movieName);
        }
    });

    function getMovieInfoFromApi(movieName) {
        const movie = localStorage.getItem(movieName);
        if (movie) {
            parseResult(JSON.parse(movie));
            return;
        }
        $.ajax({
            url: `http://www.omdbapi.com/?apikey=63f944af&t=${movieName}`,
            method: 'POST',
            dataType: 'json',
            success: function(result) {
                console.log(result);
                const {Poster: poster, Title: title, imdbRating} = result;
                localStorage.setItem(
                    movieName,
                    JSON.stringify({poster, title, imdbRating})
                );
                parseResult(result);
            },
            error: function(err) {
                console.log(err);
            }
        });
    }

    function parseResult(result) {
        const {poster, title, imdbRating} = result;
        $('.result').html(createMovieResultTable(poster, title, imdbRating));
    }

    function createMovieResultTable(poster, title, imdbRate) {
        const posterImage = `<img class='poster' src=${poster} alt=${title} movie poster/>`;
        let table = `<table><tr><th>Poster</th><th>Title</th><th>Rating</th></tr>`;
        table +=
            `<tr><td>${posterImage}</td>` +
            `<td>${title}</td>` +
            `<td class="status open">${imdbRate}</td>` +
            '</tr></table>';
        return table;
    }
});
