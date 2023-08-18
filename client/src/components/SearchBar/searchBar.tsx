import React, { ChangeEvent } from 'react';
import { SearchInput } from './styles';

interface SearchBarProps {
  onSearch: (query: string) => void;
}


const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value;
    onSearch(query);
  };

  return (
    <div>
      <SearchInput type="text" placeholder="Search..." onChange={handleSearch} />
    </div>
  );
};

export default SearchBar;