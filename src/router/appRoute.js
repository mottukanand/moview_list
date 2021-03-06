import * as React from "react";
import { Routes, Route, Outlet, Link } from "react-router-dom";

const Moview = React.lazy(() => import("pages/movie"));

export default function AppRoute() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Moview />}>
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </div>
  );
}

function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}
