import Image from "next/image";

async function getMovie(movieId) {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.API_KEY}`
  );
  return await response.json();
}

export default async function MoviePage({ params: { id } }) {
  const movie = await getMovie(id);

  return (
    <div className="w-full">
      <div className="max-w-6xl mx-auto p-4 flex flex-col justify-center items-center md:pt-8 md:flex-row md:space-x-6">
        <Image
          src={`https://image.tmdb.org/t/p/original/${
            movie.backdrop_path || movie.poster_path
          }`}
          width={500}
          height={300}
          alt="movie poster"
          placeholder="blur"
          blurDataURL="/spinner.svg"
          style={{ maxWidth: "100%", height: "100%" }}
          className="rounded-lg"
        />
        <div className="p-2 space-y-3">
          <h2 className="text-lg font-bold">{movie.title || movie.name}</h2>
          <p className="text-lg">
            <span className="mr-1 font-semibold">Overview:</span>
            {movie.overview}
          </p>
          <p>
            <span className="mr-1 font-semibold">Date Released:</span>
            {movie.release_date || movie.first_air_date}
          </p>
          <p>
            <span className="mr-1 font-semibold">Rating:</span>
            {movie.vote_count}
          </p>
        </div>
      </div>
    </div>
  );
}
