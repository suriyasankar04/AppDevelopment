import React from "react";
import "../../css/Metric.css"
import Navbar from "./Navbar";
import DailyMetric from "./DailyMetric";
import TargetAudience from "./TargeetAudience";
import MusicMetric from "./OverallCount";


function Metrics() {
  return (
   

    <div className=''>
    <div className='metrics'>

      <Navbar />
      <div className="grid-one">
        <DailyMetric />
      </div>
      <div className="grid-two">
        <TargetAudience />
        {/* <TrendingTracks /> */}
        {/* <TrendingUsers /> */}
        {/* <UserActivity /> */}
      </div>
      <div className="grid-three">
        <MusicMetric />

      </div>
      
    </div>
  </div>
   
  );
}

export default Metrics;