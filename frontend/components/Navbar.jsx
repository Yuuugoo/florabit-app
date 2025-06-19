export default function Navbar() {
  return (
    <div className="navbar bg-neutral text-neutral-content border-b-4 border-black shadow-none font-mono px-4">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-square btn-sm bg-white text-black border border-black font-bold rounded-none hover:bg-gray-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-white text-black border border-black rounded-none w-40"
          >
            <li><a className="hover:bg-gray-200">Home</a></li>
            <li><a className="hover:bg-gray-200">Garden</a></li>
            <li><a className="hover:bg-gray-200">About</a></li>
          </ul>
        </div>
      </div>

      <div className="navbar-center">
        <a className="text-xl font-pixel font-extrabold tracking-normal bg-green-300 text-black px-3 py-1 border-2 border-black rounded-none shadow-none">Florabit</a>
      </div>

      <div className="navbar-end space-x-2">
        <button className="btn btn-square btn-sm bg-white text-black border border-black font-bold rounded-none hover:bg-gray-200">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </button>
        <button className="btn btn-square btn-sm bg-white text-black border border-black font-bold rounded-none hover:bg-gray-200 relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.4-1.4A2 2 0 0118 14.2V11a6 6 0 00-4-5.7V5a2 2 0 10-4 0v.3C7.7 6.2 6 8.4 6 11v3.2a2 2 0 01-.6 1.4L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
          </svg>
          <span className="absolute top-0 right-0 badge badge-xs bg-red-500 border-black rounded-full"></span>
        </button>
      </div>
    </div>
  );
}
