import React from "react";
import { Link } from "react-router-dom";

import Main from "../components/Main";

const Index = () => (
  <Main description={"Angela's personal website."}>
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2>
            <Link to="/">About this site</Link>
          </h2>
          <p>
            A beautiful, responsive, statically-generated, react application
            written with modern Javascript.
          </p>
          <h2 data-testid="heading">
            <Link to="/">About this site</Link>
          </h2>
        </div>
      </header>
      <p> Welcome to my website. Please feel free to read more</p>
    </article>
  </Main>
);

export default Index;
