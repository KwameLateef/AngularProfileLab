"use strict";
function ProfileService($location) {
  let userInfo = {
    name: "Grant Chirpus",
    info: 313-222-3333,
    bio: "I am a student at Grand Circus, and I'm a chicken."
  };
//   How does this section work?
  const setUserProfile = (data) => {
    console.log(data);
    userInfo = data;
    $location.path("/profile");
  };

  const getUserProfile = () => {
    return userInfo;
  }

  return {
    setUserProfile,
    getUserProfile
  };
}
angular
  .module("app")
  .factory("ProfileService", ProfileService);