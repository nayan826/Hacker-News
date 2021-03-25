import React from "react";
import { withRouter, RouteComponentProps } from "react-router-dom";

const Storydetail: React.FC<RouteComponentProps> = ({location}) => {
    const storyDetails: Object = location.state;
    const d: Date = new Date(storyDetails.time)
    const formattedDate: String = `${d.getDate()}/${d.getMonth()+1}/${d.getFullYear()}`
  return (
    <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3 ">
      <article className="overflow-hidden rounded-lg shadow-lg bg-green-700">
        <header className="flex items-center justify-between leading-tight p-2 md:p-4">
          <h1 className="text-lg">
              {storyDetails.title}
          </h1>
          <p className="text-grey-darker text-sm">{formattedDate}</p>
        </header>

        <footer className="flex items-center justify-between leading-none p-2 md:p-4">
            <p className="ml-2 text-sm">{storyDetails.by}</p>
            <span>UpVotes - {storyDetails.score}</span>
        </footer>
      </article>
    </div>
  );
};

export default withRouter(Storydetail);
