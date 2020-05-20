import React from "react";

import MenuItem from "../../components/menu-item/menu-item";
import Directory from "../../components/directory/directory";

import "./homepage.scss";

const HomePage = () => (
  <div className="homepage">
    <Directory>
      <MenuItem title="HATS" />
      <MenuItem title="SNEAKERS" />
      <MenuItem title="BAGS" />
      <MenuItem title="WOMEN" />
      <MenuItem title="MEN" />
    </Directory>
  </div>
);

export default HomePage;
