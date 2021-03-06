angular.module('batsservices', [])
.service('BatsServices', function ($http, Constants) {
    // var baseUrl = "http://220.227.124.134:8054/"; //dev server
    // var baseUrl = "http://45.114.245.79:8068/"; //test server
    var baseUrl = "http://45.114.245.79:8062/"; //faraz server

    this.login = function (inputData) {
        return $http.post(baseUrl + 'b2c/app/login', inputData);
    }
    
    this.logout = function (inputData) {
        return $http.post(baseUrl + 'b2c/app/logout', inputData);
    }

    this.changePassword = function (inputData) {
        return $http.post(baseUrl + 'b2capp/user/reset_pwd', inputData);
    }

    this.forgotPassword = function (inputData) {
        return $http.post(baseUrl + 'b2capp/user/forgot_pwd', inputData);
    }
    
    // TBD
    this.report = function (inputData) {
        return $http.post(baseUrl + 'b2capp/device/report_download', inputData,{responseType: 'arraybuffer' }); 
    }

    this.history = function (inputData) {
        return $http.post(baseUrl + 'b2capp/device/history', inputData);
    }

    this.historyExist= function (inputData) {
        return $http.post(baseUrl + 'b2capp/device/history_data_exist', inputData);
    }

    this.currentData = function (inputData) {
        return $http.post(baseUrl + 'b2capp/device/current_data', inputData);
    }

    this.vehicleStatistics = function (inputData) {
        return $http.post(baseUrl + 'b2capp/device/statistics', inputData);
    }

    this.register = function (inputData) {
        return $http.post(baseUrl + 'b2capp/user/register', inputData);
    }

    this.eventHistory=function(inputData){
        return $http.post(baseUrl+'b2capp/device/alarmhistory',inputData);
    }

    this.deviceList = function (inputData) {
        return $http.post(baseUrl + 'b2capp/device/list', inputData);
    }

    this.activeDeviceList = function (inputData) {
        return $http.post(baseUrl + 'b2capp/device/active_tracker_list', inputData);
    }

    this.modifyMarker = function (inputData) {
        return $http.post(baseUrl + 'b2capp/device/modify', inputData);
    }

    this.addnewdevices = function (inputData) {
        return $http.post(baseUrl + 'b2capp/user/addnewdevices', inputData);
    }  
    
    this.userList = function (inputData) {
        return $http.post(baseUrl + 'b2capp/user/list', inputData);
    }

    this.userInfo = function (inputData) {
        return $http.post(baseUrl + 'b2capp/user/info', inputData);
    }

    this.createUser = function (inputData) {
        return $http.post(baseUrl + 'b2capp/user/create', inputData);
    }

    this.updateUser = function (inputData) {
        return $http.post(baseUrl + 'b2capp/user/update', inputData);
    }

    this.deleteUser = function (inputData) {
        return $http.post(baseUrl + 'b2capp/user/delete', inputData);
    }
    
    this.activateDevice = function (inputData) {
        return $http.post(baseUrl + 'b2capp/device/activate', inputData);
    }
     this.notification = function (inputData) {
        return $http.post(baseUrl + 'b2capp/device/alarmnotifications', inputData);
    }

    this.editTracker = function (inputData) {
        return $http.post(baseUrl + 'b2capp/device/sim_update', inputData);
    }
   
     this.deviceInfo = function (inputData) {
        return $http.post(baseUrl + 'b2capp/device/info', inputData);
    }

    this.isUserNameExist = function(inputData){
        return $http.post(baseUrl + 'b2capp/user/contact_no_is_in_use', inputData);
    }

    this.isEmailExist = function(inputData){
        return $http.post(baseUrl + 'b2capp/user/email_is_in_use', inputData)
    }

    // eventHistory alarm maching
    this.matchAlarm=function(inputData){
        var eventType="";
		switch(inputData){
			case 0:
				eventType = 'Panic';
				break;
			case 1:
				eventType = 'Tamper Sim';
				break;
			case 2:
				eventType = 'Tamper Top';
				break;
			case 3:
				eventType = 'Battery Low';
				break;
			case 4:
				eventType = 'Overspeed';
				break;
			case 5:
				eventType = 'Geofence';
				break;
			case 6:
				eventType = 'Sanity alarm';
				break;
			case 7:
				eventType = 'Connection to tracker interrupted';
				break;
			case 8:
				eventType = 'Vehicle Moved / Theft';
				break;
			case 9:
				eventType = 'Tracker sim changed';
				break;
			case 10:
				eventType = 'Warning';
				break;
        }
            return eventType;
    }
})