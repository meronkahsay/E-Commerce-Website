"use client";

import React, { useState } from "react";
import Input from "../Input";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

const SearchInput = () => {
  const [term, setTerm] = useState("");

  const handleSearch = () => {
    alert(`Searching for: ${term}`);
  };

  return (
    <Input
      placeholder="What are you looking for?"
      value={term}
      onChange={(e) => setTerm(e.target.value)}
      Icon={MagnifyingGlassIcon}
      onIconClick={handleSearch}
      className="w-64"
    />
  );
};

export default SearchInput;
