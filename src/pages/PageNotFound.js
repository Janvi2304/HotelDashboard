import React from "react";

const PageNotFound = () => {
  return (
    <div id="/pagenotfound">
      <h2>404 Page Not Found</h2>
      <label name="gender">Gender</label>
      <input type="radio" id="male" name="gender" />
      <label for="gender">Male</label>
      <input type="radio" id="female" name="gender" />
      <label for="gender">Female</label>
    </div>
  );
};

export default PageNotFound;
