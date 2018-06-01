"use strict";
const editProfile = {
  template: `
  <form ng-submit="$ctrl.fillOut($ctrl.data);">
    <h4>Use the form below to update your profile</h4>
    <p id="inputval">Name</p>
    <input type="text" ng-model="$ctrl.data.name">
    <p id="inputval">Contact Info</p>
    <input type="text"  ng-model="$ctrl.data.info">
    <p id="inputval">Bio</p>
    <input type="text"  ng-model="$ctrl.data.bio">
    <button>Update</button>
  </form>
    `,
  controller: ["ProfileService", function (ProfileService) {
    const vm = this;
    vm.data = angular.copy(ProfileService.getUserProfile());
    vm.fillOut = (data) =>{
      ProfileService.setUserProfile(data);
    };
  }]
};

angular
  .module("app")
.component("editProfile", editProfile);