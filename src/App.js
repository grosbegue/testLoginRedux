import React from "react";

import Login from "./components/Login";

//

function App() {
  return (
    <section className="container  ">
      <div className="row-100 justify-content-center d-flex">
        <div
          className="col-md-6 col-sm-8 col-xl-3 col-lg-4  d-flex align-items-center "
          style={{ height: "100vh" }}
        >
          <Login />
        </div>
      </div>
    </section>
  );
}

export default App;
