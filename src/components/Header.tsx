import React from "react"

const Header: React.FC = () => (
  <div className="flex flex-col md:flex-row justify-between items-center sm:px-2 md:px-12">
    <div className="py-12">
      <h1 className="text-5xl font-bold">Awesome Devtools</h1>
      <p className="text-lg py-2">
        A collection of awesome devtools and developer resources from around the
        internet.
      </p>
    </div>
    <button className="p-4 rounded shadow bg-blue-500 text-white font-bold text-lg">
      Submit a Devtool
    </button>
  </div>
)

export default Header
