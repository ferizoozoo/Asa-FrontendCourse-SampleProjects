const movies = [
  {
    id: 1,
    title: "Die Hard",
    genre: "Action",
    inStock: 6,
    rate: 7.8,
  },
  {
    id: 2,
    title: "John Wick",
    genre: "Action",
    inStock: 4,
    rate: 7,
  },
  {
    id: 3,
    title: "Brave Heart",
    genre: "Drama",
    inStock: 10,
    rate: 9,
  },
  {
    id: 4,
    title: "Dead Pool",
    genre: "Comedy",
    inStock: 3,
    rate: 5.6,
  },
  {
    id: 5,
    title: "Shutter Island",
    genre: "Thriller",
    inStock: 8,
    rate: 3.7,
  },
];

const genreList = [
  {
    id: 1,
    name: "Action",
  },
  {
    id: 2,
    name: "Comedy",
  },
  {
    id: 3,
    name: "Thriller",
  },
];

export const getMovies = () => movies;
export const getGenreList = () => genreList;
