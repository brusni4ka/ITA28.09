
export  const fetchMovies = () => {
    fetch('http://reactjs-cdp.herokuapp.com/movies')
    .then(res => res.json())
    .then((res) => console.log(res)) 

}