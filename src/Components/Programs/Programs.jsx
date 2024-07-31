import Program1 from "../../assets/program-1.png";
import Program2 from "../../assets/program-2.png";
import Program3 from "../../assets/program-3.png";
import Program_icon1 from "../../assets/icon-1.png";
import Program_icon2 from "../../assets/icon-2.png";
import Program_icon3 from "../../assets/icon-3.png";
import "../Programs/Programs.css";
function Programs() {
  return (
    <div className="Programs">
      <div className="Program">
        <img src={Program1} alt=""></img>
        <div className="caption">
          <img src={Program_icon1} alt=""></img>
          <p>Graduation Degree</p>
        </div>
      </div>
      <div className="Program">
        <img src={Program2} alt=""></img>
        <div className="caption">
          <img src={Program_icon2} alt=""></img>
          <p>Master Degree</p>
        </div>
      </div>
      <div className="Program">
        <img src={Program3} alt=""></img>
        <div className="caption">
          <img src={Program_icon3} alt=""></img>
          <p>Post Degree</p>
        </div>
      </div>

    </div>
  );
}

export default Programs;
