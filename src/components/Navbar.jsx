import NavbarItem from "./NavbarItem";

export default function Navbar() {
  return (
    <div className="py-4 mt-10 space-x-10 flex justify-center bg-amber-100 dark:bg-gray-600 lg:space-x-40 lg:text-lg">
      <NavbarItem title="Trending" param="fetchTrending" />
      <NavbarItem title="Top Rated" param="fetchTopRated" />
    </div>
  );
}
