"use client"

function SearchBar() {
    function handleSubmit(){

    }
  return (
    <form className='flex flex-wrap mt-12 gap-4'
    onSubmit={handleSubmit}
    >
        <input
        type="text"
        placeholder="Enter product link"
        className="searchbar-input"
        />
        
        <button type="submit" className="searchbar-btn">Search</button>
    </form>
  )
}

export default SearchBar