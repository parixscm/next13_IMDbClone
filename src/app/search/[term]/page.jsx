import Results from "@/components/Results";

export default async function SearchPage({ params: { term } }) {
  const response = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&query=${term}&language=en-US&include_adult=false`
  );
  if (!response.ok) throw new Error("Error fetching data");
  const { results } = await response.json();

  return (
    <div>
      {results && results.length === 0 && (
        <h1 className="pt-6 text-center">No Results Found</h1>
      )}
      {results && <Results results={results} />}
    </div>
  );
}
