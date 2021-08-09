import React from "react";
import DP from "../../Assets/Images/profile.jpg";
import CustomTimeline from "../CustomTimeline/CustomTimeline";
import ProfileDetails from "../ProfileDetails/ProfileDetails";
import "./Profile.css";

const Profile = () => {
  return (
    <div className="profile container_shadow">
      <div className="profile_header">
        <div className="name">Mehedi Hasan Rakib</div>
        <div className="title">Fullstack developer</div>
      </div>
      <div className="profile_image">
        <img src={DP} alt="" />
      </div>
      <div>
        <ProfileDetails></ProfileDetails>
      </div>
    </div>
  );
};

export default Profile;
