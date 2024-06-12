"use client";

import Image from "next/image";

const SearchBar = () => {
  return (
    <form
      className="flex items-center justify-between flex-1 gap-4 p-2 bg-gray-100 rounded-md"
      // onSubmit={handleSearch}
    >
      <input
        type="text"
        name="name"
        placeholder="Search"
        className="flex-1 bg-transparent outline-none"
      />
      <button className="cursor-pointer">
        <Image src="/search.png" alt="" width={16} height={16} />
      </button>
    </form>
  );
};

export default SearchBar;
