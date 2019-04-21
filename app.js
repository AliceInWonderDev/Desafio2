let cards = document.getElementById("cards");
const movies = ["0304141", "0330373", "0373889", "0417741", "0926084", "1201607", "3183660", "4123430"];
let prevMovies = [];

function searchByName(){
    if (text.value.length > 0){
        
    }
        let name = searchContent.value;
        
    };

    for (i = 0; i < movies.length; i++) {
        let url = `https://www.omdbapi.com/?i=tt${movies[i]}&apikey=c6c08c99`

        fetch(url)
            .then(res => res.json())
            .then((out) => {
                
                if (out.Response === "True") {
                    prevMovies.push(out);
                cards.innerHTML += 
                `
                <div class="accordion" id="accordionExample">
                <div class="card">
                <div class="card-header" id="headingOne">
                    <h2 class="mb-0">
                    <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapse${out.imdbID}" aria-expanded="true" aria-controls="collapseOne">
                    <img class="imgPoster" src="${out.Poster}"/> ${out.Title}
                    </button>
                    </h2>
                </div>
                <div id="collapse${out.imdbID}" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                    <div class="card-body">
                    <p>Plot: ${out.Plot}</p>
                    <p>Genre: ${out.Genre}</p>
                    <p>Year: ${out.Year} </p>
                    </div>
                </div>
                </div>
                `
                };
                
            })
            .catch(err => { throw err });
    }