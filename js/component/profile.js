"use strict";
const userProfile = {
  template: `
  
  <image src="grant.png">
  <div id="userprofile">
    <p id="profileName"> {{ $ctrl.userData.name}}</p>
    <p id="profileInfo">  {{ $ctrl.userData.info}}</p>
    <p id="profileBio">  {{ $ctrl.userData.bio}}</p>
    <div id="editbutton">
      <a href="#!/editProfile">Edit Profile </a>
    </div>
  <div>
  
  `,
  controller: ["ProfileService", function(ProfileService) {
    const vm = this;
    vm.userData = ProfileService.getUserProfile();
  }]
};

angular
  .module("app")
  .component("userProfile", userProfile);