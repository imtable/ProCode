// import style from "./style.module.css";
// import { PageHeader } from "antd";
// import "antd/dist/antd.css";
import { useEffect } from "react";
// import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
// import axios from 'axios';

import * as planetsActions from '../../actions/planets';

function Component() {
  const id = 1;
  const planet = useSelector(state => state.planets.items.find(item => item.id === id));
  // console.log(planet)
  const dispatch = useDispatch();

  useEffect(() => {
    if (planet) {
      return;
    }
    planetsActions.getById(id, dispatch);
  }, []);

  const isLoading = !planet || (planet && planet.status !== 'ok');
  
  return (
    // <>
      <div className="task">
        <h1>Films</h1>
        {isLoading ? 
          <div>loading...</div>
          :
          <div>
            Planet: {planet.id}, {planet.item.name}
          </div>
        }
      </div>
    // </>
  );
}

export default Component;
