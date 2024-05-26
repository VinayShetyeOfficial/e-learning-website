import React from "react";
import "./Programs.css";
import { assets } from "../../assets/assets";

const Programs = () => {
  return (
    <div className="programs" id="">
      <div className="program">
        <img src={assets.program_1} alt="program1" />
        <div className="caption">
          <img src={assets.program_icon_1} alt="" />
          <p>Grduation Degree</p>
        </div>
      </div>
      <div className="program">
        <img src={assets.program_2} alt="program2" />
        <div className="caption">
          <img src={assets.program_icon_2} alt="" />
          <p>Master Degree</p>
        </div>
      </div>
      <div className="program">
        <img src={assets.program_3} alt="program3" />
        <div className="caption">
          <img src={assets.program_icon_3} alt="" />
          <p>Post Graduation</p>
        </div>
      </div>
    </div>
  );
};

export default Programs;
