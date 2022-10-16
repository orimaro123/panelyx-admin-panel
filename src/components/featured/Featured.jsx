import "./featured.scss";
import {CircularProgressbar} from "react-circular-progressbar" 
import "react-circular-progressbar/dist/styles.css"

const Featured = () => {
  return (
    <div className="featured">
      <div className="top">
        <h1 className="title">Top Revenue</h1>
      </div>

      <div className="bottom">
        <div className="featuredChart">
            <CircularProgressbar value={70} text={"70%"} strokeWidth={5}/>            
        </div>
        <p className="title">Total sales today</p>
        <p className="amount">420$</p>
        <p className="desc">Previous transactions. Last payments not included</p>
      </div>
    </div>
  );
};

export default Featured;
