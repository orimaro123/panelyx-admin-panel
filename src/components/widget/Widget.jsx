import "./widget.scss";
import ExpandLessOutlinedIcon from '@mui/icons-material/ExpandLessOutlined';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';

const Widget = () => {
  return (
    <div className="widget">
      <div className="left">
        <span className="title">USERS</span>
        <span className="counter">2222</span>
        <span className="link">See all users</span>
      </div>
      <div className="right">
      <div className="percentage positive">
        <ExpandLessOutlinedIcon/>
        20%
      </div>
      <PersonRoundedIcon className="icon"/>
      </div>
    </div>
  );
};

export default Widget;
