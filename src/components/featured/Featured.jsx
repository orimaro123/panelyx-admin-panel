import "./featured.scss";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import KeyboardArrowUpRoundedIcon from "@mui/icons-material/KeyboardArrowUpRounded";
import MoreVertRoundedIcon from "@mui/icons-material/MoreVertRounded";

const Featured = () => {
  return (
    <div className="featured">
      <div className="top">
        <h1 className="title">Total Revenue</h1>
        <MoreVertRoundedIcon fontSize="small" />
      </div>

      <div className="bottom">
        <div className="featuredChart">
          <CircularProgressbar value={70} text={"70%"} strokeWidth={5} />
        </div>
        <p className="title">Total sales today</p>
        <p className="amount">420$</p>
        <p className="desc">Previous transactions. Last payments not included</p>
        <div className="summary">
          <div className="item">
            <div className="itemTitle">Last Year</div>
            <div className="itemResult negative">
              <KeyboardArrowDownRoundedIcon fontSize="small" />
              <div className="resultAmount">$12.4</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">Last Month</div>
            <div className="itemResult negative">
              <KeyboardArrowDownRoundedIcon fontSize="small" />
              <div className="resultAmount">$12.4</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">Last Week</div>
            <div className="itemResult positive">
              <KeyboardArrowUpRoundedIcon fontSize="small" />
              <div className="resultAmount">$12.4</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
