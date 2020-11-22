
export  const fetchMovies = async () => {
    try {
        const getMovies =  await fetch('http://reactjs-cdp.herokuapp.com/movies')
        const movies = await getMovies.json()
        const moviesDefault = await movies.data // only movies ок
        console.log(moviesDefault)
        console.log("action work")

    }catch(error){
         console.log(error)
        }
}

fetchMovies()




