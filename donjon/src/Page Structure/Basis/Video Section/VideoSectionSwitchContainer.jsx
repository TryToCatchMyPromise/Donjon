import React from "react";
import {Route, Switch} from "react-router";
import VideoSection from "./VideoSection";
import vid1 from "../../../files/video_main.mp4";
import vid2 from "../../../files/video_hotel.mp4";
import vid3 from "../../../files/video_restaurant.mp4";
import vid4 from "../../../files/video_services.mp4";
import vid5 from "../../../files/video_contacts.mp4";


const VideoSectionSwitchContainer = (props) => {

  return (
      <Switch>
        <Route exact path={"/"}>
          <VideoSection vid = {vid1}/>
        </Route>
        <Route path={"/hotel"}>
          <VideoSection vid = {vid2}/>
        </Route>
        <Route path={"/restaurant"}>
          <VideoSection vid = {vid3}/>
        </Route>
        <Route path={"/services"}>
          <VideoSection vid = {vid4}/>
        </Route>
        <Route path={"/contacts"}>
          <VideoSection vid = {vid5}/>
        </Route>

      </Switch>

  );
};

export default VideoSectionSwitchContainer;