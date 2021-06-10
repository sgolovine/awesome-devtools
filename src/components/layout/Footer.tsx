import React from "react"

const Footer: React.FC = () => (
  <div className="py-4 flex flex-col justify-center items-center">
    <p className="text-sm font-bold">
      Made with ❤️ by{" "}
      <a
        className="text-blue-600 hover:underline"
        href="https://sunny.gg/awesome-devtools"
      >
        Sunny Golovine
      </a>
    </p>
    <p className="text-sm font-bold">
      View the{" "}
      <a
        className="text-blue-600 hover:underline"
        href="https://github.com/sgolovine/awesome-devtools"
      >
        Source on Github
      </a>
    </p>
    <p className="text-sm font-bold">
      Copyright © 2021&nbsp;
      <a
        className="text-blue-600 hover:underline"
        href="https://awesomedevtools.com"
      >
        awesomedevtools.com
      </a>
    </p>
  </div>
)

export default Footer
