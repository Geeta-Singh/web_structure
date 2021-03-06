angular.module('changepassword', [])
    .controller('ChangePasswordCtrl', function ($scope, BatsServices, PageConfig, Constants, $state) {
    
    $scope.data = {};

    $scope.gotoChangePassword = function (data, form) {
        $scope.result = false;
        if(data.newPassword != data.confirmPass){
            ionicToast.show("New and Confirm passwords doesn\'t match", Constants.TOST_POSITION, false, Constants.TIME_INTERVAL);
        }else{
            // console.log("change data: "+angular.toJson(data));
            // var token = '6tmpVy4wk1FIIB7m';//localStorage.getItem('token');              
            var inputParam = { 'currentpassword': data.currentPass, 'newpassword': data.newPassword};
            BatsServices.changePassword(inputParam).success(function (response) {
                var alertPopup = $ionicPopup.alert({
                    title: 'Change Password',
                    template: '<div class="pwdSuccessPopup">Password changed successfully</div>'
                });
                alertPopup.then(function (res) {
                    $state.go(PageConfig.LIVE_TRACKING);
                });
            }).error(function (error) {
                if(error.err=='Origin Server returned 504 Status'){
                        ionicToast.show('Internet is very slow', Constants.TOST_POSITION, false, Constants.TIME_INTERVAL);
                    }
                    else{
                        ionicToast.show(error.err, Constants.TOST_POSITION, false, Constants.TIME_INTERVAL);
                    }
            //  ionicToast.show(error.err, Constants.TOST_POSITION, false, Constants.TIME_INTERVAL);
            })
        }
    }
    $scope.result = angular.equals($scope.currentPass, $scope.newPassword);
});
