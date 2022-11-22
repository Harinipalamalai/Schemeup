import "./Campsfront.css";
import back1 from "./back1.png";
import logo from "./logo.jpeg";
const Campsfront = () => {
  return (
    <div className="nat-schemes">
      <div className="flex-container">
      <a href ="#"><img src={back1}></img></a>
      <img id = "logo1" src={logo}></img>
      </div>
      <div className="rectangle-19">
        <a className="pragati-scholarship" href="/">
        Drug Awareness Campaign<br></br>
National Centre For Drug Abuse Prevention     
        </a>
      </div>
      <br>
      </br>
      <div className="rectangle-19">
        <a className="merit-cum-means-scho" href="/">
        Road Safety Awareness Camp<br></br>
        Ministry of Road Transport & Highways
        </a>
      </div>
      <br></br>
      <div className="rectangle-19">
        <a className="scholarships-for-top" href="/">
        Cyber Crime Awareness Programme<br></br>
   Cyber and Information Security (C&IS) Division
        </a>
      </div>
      <br></br>
        <div className="rectangle-19">
          <a className="prime-ministers-scho" href="/">
          Mental Health Awareness Camp<br></br>
          Ministry of Health and Family Welfare
          </a>
        </div>
        <br></br>
      <div className="rectangle-19">
        <a className="central-sector-schem" href="/">
        Polio drops Camp<br></br>
        Department of Health Research
        </a>
      </div>
      <br></br>
    </div>
  );
};
export default Campsfront;
