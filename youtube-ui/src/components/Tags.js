import "./Tags.css";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
export default function Tags() {
  return (
    <div className="tags">
      <ArrowBackIosNewIcon className="prev"></ArrowBackIosNewIcon>
      <div className="miniTag">All</div>
      <div className="miniTag">Music</div>
      <div className="miniTag">Live</div>
      <div className="miniTag">wedev</div>
      <div className="miniTag">Movies</div>
      <div className="miniTag">Gaming</div>
      <div className="miniTag">APIs</div>
      <div className="miniTag">DataStructure</div>
      <div className="miniTag">News</div>
      <div className="miniTag">AI</div>
      <div className="miniTag">Editing</div>
      <div className="miniTag">Sales</div>
      <div className="miniTag">All</div>
      <div className="miniTag">Music</div>
      <div className="miniTag">Live</div>
      <div className="miniTag">wedev</div>
      <div className="miniTag">Movies</div>
      <div className="miniTag">ALT</div>
      {/* <div className="miniTag">APIs</div> */}
      {/* <div className="miniTag">DataStructure</div> */}
      <ArrowForwardIosIcon className="next"></ArrowForwardIosIcon>
    </div>
  );
}
