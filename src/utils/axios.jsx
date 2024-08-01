import axios from "axios";

const instance = axios.create({
    baseURL:"https://api.themoviedb.org/3/",
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMTk1ZjA3OTczYzViZDU4YTE0NGE0MGU4MDAzZDQyOSIsIm5iZiI6MTcyMTA0Mjk5Ny43NjM1OTIsInN1YiI6IjY2OTUwNTk2MDBiMzFhNzA0YzUzNDliMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.gGYV-UCfonMJjHHt5U4CiI6iO6OoGiAqFUlmx_ReSv8'
      },
})

export default instance