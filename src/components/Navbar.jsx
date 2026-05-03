function Navbar() {

  function Search() {
    const category = document.getElementById("category").value;
    const filter = document.getElementById("filter").value;
    const search = document.getElementById("search").value;
    

    alert("Search: " + search +" | Filter: " + filter + " | Category: " + category);
  }

  return (
    <nav className="bg-gray-800 p-4 flex justify-between items-center">
      
    
      <h1 className="text-white text-xl font-bold">Shopyfy</h1>

      <div className="flex border rounded-lg overflow-hidden bg-white">
        
     
        <select id="category" className="px-3 py-2 bg-gray-100">
          <option>Category</option>
          <option>All</option>
          <option>Electronics</option>
          <option>Clothing</option>
          <option>Toys</option>
        </select>
        <select id="filter" className="px-3 py-2 bg-gray-100">
          <option>Filter</option>
          <option>Low to High</option>
          <option>High to low</option>
          <option>Newest</option>
        </select>

        <input
          id="search"
          type="text"
          placeholder="Search..."
          className="px-3 py-2 outline-none"
        />

        <button
          onClick={Search}
          className="bg-blue-500 text-white px-4"
        >
          Search
        </button>

      </div>

      <div className="text-white">
        <a href="#" className="px-3">Home</a>
        <a href="#" className="px-3">About</a>
        <a href="#" className="px-3">Contact</a>
      </div>

    </nav>
  );
}

export default Navbar;