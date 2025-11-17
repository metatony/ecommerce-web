import React, { useState } from "react";
import productList from "../constants/productList";
import { CiSearch } from "react-icons/ci";
import { FaSearch } from "react-icons/fa";
import { IoCloseOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

function SearchBar() {
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  // Toggle the visibility of the search bar container
  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  // Update searchQuery with user's input
  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  // Filter products based on search input (case-insensitive)
  const filteredSearchResults = productList.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section className="flex items-center space-x-5">
      {/* Search Icon toggles the search bar */}
      <FaSearch onClick={toggleSearch} className="lg:h-10 cursor-pointer" />

      {isSearchOpen && (
        <section className="fixed top-[110px] left-0 right-0 w-full bg-white shadow-lg p-4 z-50">
          {/* Input row: search icon, text input, and close ("X") button */}
          <div className="flex items-center container px-4 mx-auto ">
            <CiSearch className="h-5 w-5 mr-5" />
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearch}
              className="w-full border-none p-2 focus:outline-none"
              placeholder="Search..."
            />
            <IoCloseOutline
              onClick={toggleSearch}
              className="h-5 w-5 ml-3 cursor-pointer"
            />
          </div>

          {/* Render filtered results only if there is a search query */}
          {searchQuery &&
            (filteredSearchResults.length ? (
              <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 bg-white max-h-[460px] overflow-y-auto p-4 mx-auto container scrollbar-hidden">
                {filteredSearchResults.map((item) => (
                  <section key={item.id} className="cursor-pointer">
                    <Link to={`/product/${item.id}`}>
                      <img
                        onClick={toggleSearch}
                        className="w-full rounded-lg h-52 lg:h-96"
                        src={item.desktopImage}
                        alt={item.name}
                        loading="lazy"
                      />
                    </Link>
                    <div className="paragraph-text mt-2">
                      <p>{item.name}</p>
                      <p>£{item.price}</p>
                    </div>
                  </section>
                ))}
              </section>
            ) : (
              <p className="text-center paragraph-text">No products found.</p>
            ))}
        </section>
      )}
      {/* <p className="hidden lg:block paragraph-text">Stores</p> */}
    </section>
  );
}

export default SearchBar;
