import React from "react";
import { Link, withRouter } from "react-router-dom";


const Storylist = ({ stories }) => {
  return (
    <div>
        <ul>
      {stories.map(({ data: story }) => (
        
          <li key={story.id}>
            <button  className="p-1.5 bg-black bg-opacity-10 shadow-lg w-full">
              <Link to={{pathname: '/details', state: story }}>{story.title}</Link>
            </button>
          </li>
       
      ))}
       </ul>
    </div>
  );
};

export default withRouter(Storylist);
