import React from 'react'

type Props = {
  search: string
  placeholder: string
  setSearch: (inputText: string) => void;
}

const Search: React.FC<Props> = ({search, placeholder, setSearch}) => {

  return (
    <div>
      <input
        placeholder={placeholder}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  )
}

export default Search