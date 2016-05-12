let ProfileController = function ProfileController ($stateParams) {
  let vm = this

  vm.profileId = $stateParams['profile_id']
}

export default ProfileController
