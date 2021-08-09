import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ListSubheader from "@material-ui/core/ListSubheader";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import DraftsIcon from "@material-ui/icons/Drafts";
import SendIcon from "@material-ui/icons/Send";
import CakeIcon from "@material-ui/icons/Cake";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import StarBorder from "@material-ui/icons/StarBorder";
import WorkIcon from "@material-ui/icons/Work";
import { Typography } from "@material-ui/core";
import FavoriteIcon from "@material-ui/icons/Favorite";
import PersonPinIcon from "@material-ui/icons/PersonPin";
import Button from "@material-ui/core/Button";
import GetAppIcon from "@material-ui/icons/GetApp";
import "./ProfileDetails.css";
import CustomButton from "../Button/CustomButton";

const ProfileDetails = () => {
  return (
    <div className="profile_details">
      <List>
        <ListItem button>
          <ListItemIcon>
            <WorkIcon style={{ color: "FF4848" }} />
          </ListItemIcon>
          <h2 className="profile_name">MERN Stack Developer</h2>
          <ListItemText />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <SendIcon style={{ color: "FF4848" }} />
          </ListItemIcon>
          <h2 className="profile_name">mehedi.hasan4846</h2>
          <ListItemText />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <PersonPinIcon style={{ color: "FF4848" }} />
          </ListItemIcon>
          <h2 className="profile_name">Dhaka, Bangladesh</h2>
          <ListItemText />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <CakeIcon style={{ color: "FF4848" }} />
          </ListItemIcon>
          <h2 className="profile_name">17 August, 1996</h2>
          <ListItemText />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <FavoriteIcon style={{ color: "FF4848" }} />
          </ListItemIcon>
          <h2 className="profile_name">Playing Football</h2>
          <ListItemText />
        </ListItem>
      </List>
      <div className="downloadCV">
        {/* <Button variant="contained" color="primary">
          <h2 className="profile_button">Download CV</h2> &nbsp; &nbsp;
          <GetAppIcon></GetAppIcon>
        </Button> */}
        <CustomButton
          text={"Download CV"}
          icon={<GetAppIcon style={{ color: "#fff" }} />}
        ></CustomButton>
      </div>
    </div>
  );
};

export default ProfileDetails;
