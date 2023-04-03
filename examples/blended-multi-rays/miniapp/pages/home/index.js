require('./../../runtime.js');
require('./../../ray-vendors.js');
require('./../../ray-styles.js');
(wx["webpackChunkblended"] = wx["webpackChunkblended"] || []).push([["pages/home/index"],{

/***/ "./node_modules/@ray-js/api/lib/BaseKit-3.3.10.js":
/*!********************************************************!*\
  !*** ./node_modules/@ray-js/api/lib/BaseKit-3.3.10.js ***!
  \********************************************************/
/* istanbul ignore next */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "authorize": () => (/* binding */ authorize),
/* harmony export */   "authorizeStatus": () => (/* binding */ authorizeStatus),
/* harmony export */   "chooseCropImage": () => (/* binding */ chooseCropImage),
/* harmony export */   "chooseImage": () => (/* binding */ chooseImage),
/* harmony export */   "chooseMedia": () => (/* binding */ chooseMedia),
/* harmony export */   "clearStorage": () => (/* binding */ clearStorage),
/* harmony export */   "clearStorageSync": () => (/* binding */ clearStorageSync),
/* harmony export */   "createInnerAudioContext": () => (/* binding */ createInnerAudioContext),
/* harmony export */   "downloadFile": () => (/* binding */ downloadFile),
/* harmony export */   "getAudioFileDuration": () => (/* binding */ getAudioFileDuration),
/* harmony export */   "getClipboardData": () => (/* binding */ getClipboardData),
/* harmony export */   "getConnectedWifi": () => (/* binding */ getConnectedWifi),
/* harmony export */   "getCurrentVolume": () => (/* binding */ getCurrentVolume),
/* harmony export */   "getCurrentVolumeByMode": () => (/* binding */ getCurrentVolumeByMode),
/* harmony export */   "getFileSystemManager": () => (/* binding */ getFileSystemManager),
/* harmony export */   "getImageInfo": () => (/* binding */ getImageInfo),
/* harmony export */   "getMobileDeviceInfo": () => (/* binding */ getMobileDeviceInfo),
/* harmony export */   "getNetworkType": () => (/* binding */ getNetworkType),
/* harmony export */   "getRecorderManager": () => (/* binding */ getRecorderManager),
/* harmony export */   "getScreenBrightness": () => (/* binding */ getScreenBrightness),
/* harmony export */   "getStorage": () => (/* binding */ getStorage),
/* harmony export */   "getStorageSync": () => (/* binding */ getStorageSync),
/* harmony export */   "getSystemInfo": () => (/* binding */ getSystemInfo),
/* harmony export */   "getSystemInfoSync": () => (/* binding */ getSystemInfoSync),
/* harmony export */   "getSystemSetting": () => (/* binding */ getSystemSetting),
/* harmony export */   "getVideoInfo": () => (/* binding */ getVideoInfo),
/* harmony export */   "getWifiList": () => (/* binding */ getWifiList),
/* harmony export */   "hideLoading": () => (/* binding */ hideLoading),
/* harmony export */   "hideToast": () => (/* binding */ hideToast),
/* harmony export */   "makePhoneCall": () => (/* binding */ makePhoneCall),
/* harmony export */   "navigateToMiniProgram": () => (/* binding */ navigateToMiniProgram),
/* harmony export */   "offAccelerometerChange": () => (/* binding */ offAccelerometerChange),
/* harmony export */   "offBluetoothAdapterStateChange": () => (/* binding */ offBluetoothAdapterStateChange),
/* harmony export */   "offCompassChange": () => (/* binding */ offCompassChange),
/* harmony export */   "offDeviceMotionChange": () => (/* binding */ offDeviceMotionChange),
/* harmony export */   "offGetWifiList": () => (/* binding */ offGetWifiList),
/* harmony export */   "offGyroscopeChange": () => (/* binding */ offGyroscopeChange),
/* harmony export */   "offMemoryWarning": () => (/* binding */ offMemoryWarning),
/* harmony export */   "offNetworkStatusChange": () => (/* binding */ offNetworkStatusChange),
/* harmony export */   "offRecordingEvent": () => (/* binding */ offRecordingEvent),
/* harmony export */   "offSystemVolumeChangeEvent": () => (/* binding */ offSystemVolumeChangeEvent),
/* harmony export */   "onAccelerometerChange": () => (/* binding */ onAccelerometerChange),
/* harmony export */   "onBluetoothAdapterStateChange": () => (/* binding */ onBluetoothAdapterStateChange),
/* harmony export */   "onCompassChange": () => (/* binding */ onCompassChange),
/* harmony export */   "onDeviceMotionChange": () => (/* binding */ onDeviceMotionChange),
/* harmony export */   "onGetWifiList": () => (/* binding */ onGetWifiList),
/* harmony export */   "onGyroscopeChange": () => (/* binding */ onGyroscopeChange),
/* harmony export */   "onMemoryWarning": () => (/* binding */ onMemoryWarning),
/* harmony export */   "onNetworkStatusChange": () => (/* binding */ onNetworkStatusChange),
/* harmony export */   "onRecordingEvent": () => (/* binding */ onRecordingEvent),
/* harmony export */   "onSystemVolumeChangeEvent": () => (/* binding */ onSystemVolumeChangeEvent),
/* harmony export */   "openMiniWidget": () => (/* binding */ openMiniWidget),
/* harmony export */   "openSystemBluetoothSetting": () => (/* binding */ openSystemBluetoothSetting),
/* harmony export */   "previewImage": () => (/* binding */ previewImage),
/* harmony export */   "registerSystemVolumeChange": () => (/* binding */ registerSystemVolumeChange),
/* harmony export */   "removeStorage": () => (/* binding */ removeStorage),
/* harmony export */   "removeStorageSync": () => (/* binding */ removeStorageSync),
/* harmony export */   "request": () => (/* binding */ request),
/* harmony export */   "saveVideoToPhotosAlbum": () => (/* binding */ saveVideoToPhotosAlbum),
/* harmony export */   "scanCode": () => (/* binding */ scanCode),
/* harmony export */   "setClipboardData": () => (/* binding */ setClipboardData),
/* harmony export */   "setKeepScreenOn": () => (/* binding */ setKeepScreenOn),
/* harmony export */   "setScreenBrightness": () => (/* binding */ setScreenBrightness),
/* harmony export */   "setStorage": () => (/* binding */ setStorage),
/* harmony export */   "setStorageSync": () => (/* binding */ setStorageSync),
/* harmony export */   "showActionSheet": () => (/* binding */ showActionSheet),
/* harmony export */   "showLoading": () => (/* binding */ showLoading),
/* harmony export */   "showModal": () => (/* binding */ showModal),
/* harmony export */   "showToast": () => (/* binding */ showToast),
/* harmony export */   "startAccelerometer": () => (/* binding */ startAccelerometer),
/* harmony export */   "startCompass": () => (/* binding */ startCompass),
/* harmony export */   "startDeviceMotionListening": () => (/* binding */ startDeviceMotionListening),
/* harmony export */   "startGyroscope": () => (/* binding */ startGyroscope),
/* harmony export */   "stopAccelerometer": () => (/* binding */ stopAccelerometer),
/* harmony export */   "stopCompass": () => (/* binding */ stopCompass),
/* harmony export */   "stopDeviceMotionListening": () => (/* binding */ stopDeviceMotionListening),
/* harmony export */   "stopGyroscope": () => (/* binding */ stopGyroscope),
/* harmony export */   "unRegisterSystemVolumeChange": () => (/* binding */ unRegisterSystemVolumeChange),
/* harmony export */   "updateVolume": () => (/* binding */ updateVolume),
/* harmony export */   "uploadFile": () => (/* binding */ uploadFile),
/* harmony export */   "vibrateLong": () => (/* binding */ vibrateLong),
/* harmony export */   "vibrateShort": () => (/* binding */ vibrateShort)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./node_modules/@ray-js/api/lib/utils.wechat.js");
/// <reference path="../@types/BaseKit.d.ts" />

var stopAccelerometer = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.factory)('stopAccelerometer');
var startAccelerometer = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.factory)('startAccelerometer');
var getAudioFileDuration = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.factory)('getAudioFileDuration');
var authorize = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.factory)('authorize');
var authorizeStatus = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.factory)('authorizeStatus');
var navigateToMiniProgram = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.factory)('navigateToMiniProgram');
var startCompass = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.factory)('startCompass');
var stopCompass = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.factory)('stopCompass');
var startDeviceMotionListening = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.factory)('startDeviceMotionListening');
var stopDeviceMotionListening = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.factory)('stopDeviceMotionListening');
var startGyroscope = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.factory)('startGyroscope');
var stopGyroscope = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.factory)('stopGyroscope');
var chooseImage = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.factory)('chooseImage');
var chooseMedia = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.factory)('chooseMedia');
var chooseCropImage = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.factory)('chooseCropImage');
var previewImage = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.factory)('previewImage');
var getImageInfo = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.factory)('getImageInfo');
var getVideoInfo = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.factory)('getVideoInfo');
var saveVideoToPhotosAlbum = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.factory)('saveVideoToPhotosAlbum');
var showToast = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.factory)('showToast');
var showModal = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.factory)('showModal');
var showLoading = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.factory)('showLoading');
var showActionSheet = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.factory)('showActionSheet');
var hideToast = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.factory)('hideToast');
var hideLoading = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.factory)('hideLoading');
var makePhoneCall = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.factory)('makePhoneCall');
var setClipboardData = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.factory)('setClipboardData');
var getClipboardData = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.factory)('getClipboardData');
var updateVolume = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.factory)('updateVolume');
var getCurrentVolume = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.factory)('getCurrentVolume');
var registerSystemVolumeChange = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.factory)('registerSystemVolumeChange');
var unRegisterSystemVolumeChange = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.factory)('unRegisterSystemVolumeChange');
var getSystemSetting = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.factory)('getSystemSetting');
var getMobileDeviceInfo = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.factory)('getDeviceInfo');
var getSystemInfo = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.factory)('getSystemInfo');
var getSystemInfoSync = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.factory)('getSystemInfoSync');
var getWifiList = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.factory)('getWifiList');
var getConnectedWifi = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.factory)('getConnectedWifi');
var openSystemBluetoothSetting = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.factory)('openSystemBluetoothSetting');
var getNetworkType = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.factory)('getNetworkType');
var setScreenBrightness = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.factory)('setScreenBrightness');
var getScreenBrightness = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.factory)('getScreenBrightness');
var setKeepScreenOn = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.factory)('setKeepScreenOn');
var vibrateShort = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.factory)('vibrateShort');
var vibrateLong = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.factory)('vibrateLong');
var scanCode = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.factory)('scanCode');
var setStorage = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.factory)('setStorage');
var setStorageSync = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.factory)('setStorageSync');
var getStorage = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.factory)('getStorage');
var getStorageSync = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.factory)('getStorageSync');
var removeStorage = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.factory)('removeStorage');
var removeStorageSync = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.factory)('removeStorageSync');
var clearStorage = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.factory)('clearStorage');
var clearStorageSync = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.factory)('clearStorageSync');
var onSystemVolumeChangeEvent = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.factory)('onSystemVolumeChangeEvent');
var offSystemVolumeChangeEvent = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.factory)('offSystemVolumeChangeEvent');
var onGetWifiList = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.factory)('onGetWifiList');
var offGetWifiList = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.factory)('offGetWifiList');
var onRecordingEvent = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.factory)('onRecordingEvent');
var offRecordingEvent = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.factory)('offRecordingEvent');
var onAccelerometerChange = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.factory)('onAccelerometerChange');
var offAccelerometerChange = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.factory)('offAccelerometerChange');
var onCompassChange = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.factory)('onCompassChange');
var offCompassChange = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.factory)('offCompassChange');
var onDeviceMotionChange = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.factory)('onDeviceMotionChange');
var offDeviceMotionChange = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.factory)('offDeviceMotionChange');
var onGyroscopeChange = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.factory)('onGyroscopeChange');
var offGyroscopeChange = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.factory)('offGyroscopeChange');
var onMemoryWarning = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.factory)('onMemoryWarning');
var offMemoryWarning = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.factory)('offMemoryWarning');
var onBluetoothAdapterStateChange = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.factory)('onBluetoothAdapterStateChange');
var offBluetoothAdapterStateChange = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.factory)('offBluetoothAdapterStateChange');
var onNetworkStatusChange = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.factory)('onNetworkStatusChange');
var offNetworkStatusChange = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.factory)('offNetworkStatusChange');
var createInnerAudioContext = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.factory)('createInnerAudioContext');
var downloadFile = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.factory)('downloadFile');
var getFileSystemManager = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.factory)('getFileSystemManager');
var request = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.factory)('request');
var getRecorderManager = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.factory)('getRecorderManager');
var uploadFile = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.factory)('uploadFile'); // 3.2.1 新增 - 4.7.0 容器

var openMiniWidget = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.factory)('openMiniWidget'); // 3.3.10 新增 - 4.8.0 容器

var getCurrentVolumeByMode = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.factory)('getCurrentVolumeByMode');

/***/ }),

/***/ "./node_modules/@ray-js/api/lib/BizKit-3.2.7.js":
/*!******************************************************!*\
  !*** ./node_modules/@ray-js/api/lib/BizKit-3.2.7.js ***!
  \******************************************************/
/* istanbul ignore next */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "apiRequestByAtop": () => (/* binding */ apiRequestByAtop),
/* harmony export */   "backToHomeAndOpenPanel": () => (/* binding */ backToHomeAndOpenPanel),
/* harmony export */   "beginEvent": () => (/* binding */ beginEvent),
/* harmony export */   "canIUseRouter": () => (/* binding */ canIUseRouter),
/* harmony export */   "emitChannel": () => (/* binding */ emitChannel),
/* harmony export */   "endEvent": () => (/* binding */ endEvent),
/* harmony export */   "event": () => (/* binding */ event),
/* harmony export */   "getAppInfo": () => (/* binding */ getAppInfo),
/* harmony export */   "getCurrentWifiSSID": () => (/* binding */ getCurrentWifiSSID),
/* harmony export */   "getIconfontInfo": () => (/* binding */ getIconfontInfo),
/* harmony export */   "getLangContent": () => (/* binding */ getLangContent),
/* harmony export */   "getLangKey": () => (/* binding */ getLangKey),
/* harmony export */   "getShareChannelList": () => (/* binding */ getShareChannelList),
/* harmony export */   "getTempDirectory": () => (/* binding */ getTempDirectory),
/* harmony export */   "getUserInfo": () => (/* binding */ getUserInfo),
/* harmony export */   "goDeviceAlarm": () => (/* binding */ goDeviceAlarm),
/* harmony export */   "goDeviceDetail": () => (/* binding */ goDeviceDetail),
/* harmony export */   "handleShortcut": () => (/* binding */ handleShortcut),
/* harmony export */   "isAssociatedShortcut": () => (/* binding */ isAssociatedShortcut),
/* harmony export */   "isSupportedShortcut": () => (/* binding */ isSupportedShortcut),
/* harmony export */   "offCountrySelectResult": () => (/* binding */ offCountrySelectResult),
/* harmony export */   "offReceiveMessage": () => (/* binding */ offReceiveMessage),
/* harmony export */   "offRouterEvent": () => (/* binding */ offRouterEvent),
/* harmony export */   "offRouterResult": () => (/* binding */ offRouterResult),
/* harmony export */   "offUploadProgressUpdate": () => (/* binding */ offUploadProgressUpdate),
/* harmony export */   "onCountrySelectResult": () => (/* binding */ onCountrySelectResult),
/* harmony export */   "onReceiveMessage": () => (/* binding */ onReceiveMessage),
/* harmony export */   "onRouterEvent": () => (/* binding */ onRouterEvent),
/* harmony export */   "onRouterResult": () => (/* binding */ onRouterResult),
/* harmony export */   "onUploadProgressUpdate": () => (/* binding */ onUploadProgressUpdate),
/* harmony export */   "openAppSystemSettingPage": () => (/* binding */ openAppSystemSettingPage),
/* harmony export */   "openCountrySelectPage": () => (/* binding */ openCountrySelectPage),
/* harmony export */   "openInnerH5": () => (/* binding */ openInnerH5),
/* harmony export */   "openPanel": () => (/* binding */ openPanel),
/* harmony export */   "openRNPanel": () => (/* binding */ openRNPanel),
/* harmony export */   "openSystemSettingPage": () => (/* binding */ openSystemSettingPage),
/* harmony export */   "preloadPanel": () => (/* binding */ preloadPanel),
/* harmony export */   "registerChannel": () => (/* binding */ registerChannel),
/* harmony export */   "resizeImage": () => (/* binding */ resizeImage),
/* harmony export */   "rotateImage": () => (/* binding */ rotateImage),
/* harmony export */   "router": () => (/* binding */ router),
/* harmony export */   "saveToAlbum": () => (/* binding */ saveToAlbum),
/* harmony export */   "share": () => (/* binding */ share),
/* harmony export */   "trackEvent": () => (/* binding */ trackEvent),
/* harmony export */   "uploadImage": () => (/* binding */ uploadImage)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./node_modules/@ray-js/api/lib/utils.wechat.js");
/// <reference path="../@types/BizKit.d.ts" />

var apiRequestByAtop = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.factory)('apiRequestByAtop');
var event = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.factory)('event');
var beginEvent = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.factory)('beginEvent');
var trackEvent = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.factory)('trackEvent');
var endEvent = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.factory)('endEvent');
var getAppInfo = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.factory)('getAppInfo');
var getCurrentWifiSSID = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.factory)('getCurrentWifiSSID');
var openCountrySelectPage = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.factory)('openCountrySelectPage');
var getIconfontInfo = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.factory)('getIconfontInfo');
var uploadImage = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.factory)('uploadImage');
var getLangKey = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.factory)('getLangKey');
var getLangContent = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.factory)('getLangContent');
var openRNPanel = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.factory)('openRNPanel', {
  "deprecated": true
});
var openPanel = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.factory)('openPanel');
var preloadPanel = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.factory)('preloadPanel');
var openInnerH5 = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.factory)('openInnerH5');
var openAppSystemSettingPage = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.factory)('openAppSystemSettingPage', {
  "deprecated": true
});
var openSystemSettingPage = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.factory)('openSystemSettingPage', {
  "deprecated": true
});
var emitChannel = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.factory)('emitChannel');
var router = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.factory)('router');
var canIUseRouter = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.factory)('canIUseRouter');
var goDeviceDetail = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.factory)('goDeviceDetail', {
  "deprecated": true
});
var goDeviceAlarm = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.factory)('goDeviceAlarm', {
  "deprecated": true
});
var share = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.factory)('share');
var getShareChannelList = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.factory)('getShareChannelList');
var getUserInfo = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.factory)('getUserInfo');
var resizeImage = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.factory)('resizeImage');
var rotateImage = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.factory)('rotateImage');
var saveToAlbum = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.factory)('saveToAlbum', {
  "deprecated": true
});
var onCountrySelectResult = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.factory)('onCountrySelectResult');
var offCountrySelectResult = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.factory)('offCountrySelectResult');
var onUploadProgressUpdate = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.factory)('onUploadProgressUpdate');
var offUploadProgressUpdate = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.factory)('offUploadProgressUpdate');
var onReceiveMessage = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.factory)('onReceiveMessage');
var offReceiveMessage = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.factory)('offReceiveMessage');
var onRouterEvent = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.factory)('onRouterEvent');
var offRouterEvent = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.factory)('offRouterEvent');
var onRouterResult = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.factory)('onRouterResult');
var offRouterResult = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.factory)('offRouterResult');
var registerChannel = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.factory)('registerChannel'); // 3.1.1 新增 - 4.7.0 容器

var getTempDirectory = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.factory)('getTempDirectory');
var handleShortcut = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.factory)('handleShortcut');
var isAssociatedShortcut = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.factory)('isAssociatedShortcut');
var isSupportedShortcut = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.factory)('isSupportedShortcut'); // 3.2.7 新增 - 4.8.0 容器

var backToHomeAndOpenPanel = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.factory)('backToHomeAndOpenPanel');

/***/ }),

/***/ "./node_modules/@ray-js/api/lib/DeviceKit-3.3.1.js":
/*!*********************************************************!*\
  !*** ./node_modules/@ray-js/api/lib/DeviceKit-3.3.1.js ***!
  \*********************************************************/
/* istanbul ignore next */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addDeviceToDesk": () => (/* binding */ addDeviceToDesk),
/* harmony export */   "addTimer": () => (/* binding */ addTimer),
/* harmony export */   "bluetoothCapabilityIsSupport": () => (/* binding */ bluetoothCapabilityIsSupport),
/* harmony export */   "bluetoothCapabilityOfBLEBeacon": () => (/* binding */ bluetoothCapabilityOfBLEBeacon),
/* harmony export */   "bluetoothIsPowerOn": () => (/* binding */ bluetoothIsPowerOn),
/* harmony export */   "cancelBLEFileTransfer": () => (/* binding */ cancelBLEFileTransfer),
/* harmony export */   "checkOTAUpdateInfo": () => (/* binding */ checkOTAUpdateInfo),
/* harmony export */   "checkOTAUpgradeStatus": () => (/* binding */ checkOTAUpgradeStatus),
/* harmony export */   "connectBLEDevice": () => (/* binding */ connectBLEDevice),
/* harmony export */   "connectBTBond": () => (/* binding */ connectBTBond),
/* harmony export */   "connectBluetoothDevice": () => (/* binding */ connectBluetoothDevice),
/* harmony export */   "createAction": () => (/* binding */ createAction),
/* harmony export */   "createCondition": () => (/* binding */ createCondition),
/* harmony export */   "deviceIsSupportThingModel": () => (/* binding */ deviceIsSupportThingModel),
/* harmony export */   "directConnectBLEDevice": () => (/* binding */ directConnectBLEDevice),
/* harmony export */   "disconnectBLEDevice": () => (/* binding */ disconnectBLEDevice),
/* harmony export */   "disconnectBTBond": () => (/* binding */ disconnectBTBond),
/* harmony export */   "disconnectBluetoothDevice": () => (/* binding */ disconnectBluetoothDevice),
/* harmony export */   "editAction": () => (/* binding */ editAction),
/* harmony export */   "editCondition": () => (/* binding */ editCondition),
/* harmony export */   "getBLEDeviceRSSI": () => (/* binding */ getBLEDeviceRSSI),
/* harmony export */   "getBLEOnlineState": () => (/* binding */ getBLEOnlineState),
/* harmony export */   "getBTDeviceInfo": () => (/* binding */ getBTDeviceInfo),
/* harmony export */   "getDeviceInfo": () => (/* binding */ getDeviceInfo),
/* harmony export */   "getDeviceListByDevIds": () => (/* binding */ getDeviceListByDevIds),
/* harmony export */   "getDeviceNumWithDpCode": () => (/* binding */ getDeviceNumWithDpCode),
/* harmony export */   "getDeviceOfflineReminderState": () => (/* binding */ getDeviceOfflineReminderState),
/* harmony export */   "getDeviceOfflineReminderWarningText": () => (/* binding */ getDeviceOfflineReminderWarningText),
/* harmony export */   "getDeviceOnlineType": () => (/* binding */ getDeviceOnlineType),
/* harmony export */   "getDeviceProperty": () => (/* binding */ getDeviceProperty),
/* harmony export */   "getDeviceThingModelInfo": () => (/* binding */ getDeviceThingModelInfo),
/* harmony export */   "getDeviceWifiActivatorStatus": () => (/* binding */ getDeviceWifiActivatorStatus),
/* harmony export */   "getDpDataByMesh": () => (/* binding */ getDpDataByMesh),
/* harmony export */   "getEncryptLocalKeyWithData": () => (/* binding */ getEncryptLocalKeyWithData),
/* harmony export */   "getGroupDeviceList": () => (/* binding */ getGroupDeviceList),
/* harmony export */   "getGroupDeviceNum": () => (/* binding */ getGroupDeviceNum),
/* harmony export */   "getGroupInfo": () => (/* binding */ getGroupInfo),
/* harmony export */   "getGroupProperty": () => (/* binding */ getGroupProperty),
/* harmony export */   "getMeshDeviceId": () => (/* binding */ getMeshDeviceId),
/* harmony export */   "getMqttConnectState": () => (/* binding */ getMqttConnectState),
/* harmony export */   "getProductInfo": () => (/* binding */ getProductInfo),
/* harmony export */   "getShareDeviceInfo": () => (/* binding */ getShareDeviceInfo),
/* harmony export */   "getSubDeviceInfoList": () => (/* binding */ getSubDeviceInfoList),
/* harmony export */   "getSupportedThirdPartyServices": () => (/* binding */ getSupportedThirdPartyServices),
/* harmony export */   "isDeviceSupportOfflineReminder": () => (/* binding */ isDeviceSupportOfflineReminder),
/* harmony export */   "offBLEBigDataChannelDeviceToAppSuccess": () => (/* binding */ offBLEBigDataChannelDeviceToAppSuccess),
/* harmony export */   "offBLEBigDataChannelProgressEvent": () => (/* binding */ offBLEBigDataChannelProgressEvent),
/* harmony export */   "offBLEBigDataChannelUploadCloudProgress": () => (/* binding */ offBLEBigDataChannelUploadCloudProgress),
/* harmony export */   "offBLEConnectStatusChange": () => (/* binding */ offBLEConnectStatusChange),
/* harmony export */   "offBLEScanBindDevice": () => (/* binding */ offBLEScanBindDevice),
/* harmony export */   "offBLETransparentDataReport": () => (/* binding */ offBLETransparentDataReport),
/* harmony export */   "offDeviceInfoUpdated": () => (/* binding */ offDeviceInfoUpdated),
/* harmony export */   "offDeviceOnlineStatusUpdate": () => (/* binding */ offDeviceOnlineStatusUpdate),
/* harmony export */   "offDeviceRemoved": () => (/* binding */ offDeviceRemoved),
/* harmony export */   "offDirectlyConnectedSearchDeviceEvent": () => (/* binding */ offDirectlyConnectedSearchDeviceEvent),
/* harmony export */   "offDpDataChange": () => (/* binding */ offDpDataChange),
/* harmony export */   "offFileTransferProgress": () => (/* binding */ offFileTransferProgress),
/* harmony export */   "offGroupDpCodeChange": () => (/* binding */ offGroupDpCodeChange),
/* harmony export */   "offGroupDpDataChangeEvent": () => (/* binding */ offGroupDpDataChangeEvent),
/* harmony export */   "offGroupInfoChange": () => (/* binding */ offGroupInfoChange),
/* harmony export */   "offGroupRemovedEvent": () => (/* binding */ offGroupRemovedEvent),
/* harmony export */   "offLeaveBeaconFence": () => (/* binding */ offLeaveBeaconFence),
/* harmony export */   "offMqttConnectState": () => (/* binding */ offMqttConnectState),
/* harmony export */   "offMqttMessageReceived": () => (/* binding */ offMqttMessageReceived),
/* harmony export */   "offReceivedThingModelMessage": () => (/* binding */ offReceivedThingModelMessage),
/* harmony export */   "offSocketMessageReceived": () => (/* binding */ offSocketMessageReceived),
/* harmony export */   "offSubDeviceAdded": () => (/* binding */ offSubDeviceAdded),
/* harmony export */   "offSubDeviceDpUpdate": () => (/* binding */ offSubDeviceDpUpdate),
/* harmony export */   "offSubDeviceInfoUpdate": () => (/* binding */ offSubDeviceInfoUpdate),
/* harmony export */   "offSubDeviceInfoUpdateEvent": () => (/* binding */ offSubDeviceInfoUpdateEvent),
/* harmony export */   "offSubDeviceRemoved": () => (/* binding */ offSubDeviceRemoved),
/* harmony export */   "offTimerUpdate": () => (/* binding */ offTimerUpdate),
/* harmony export */   "onBLEBigDataChannelDeviceToAppSuccess": () => (/* binding */ onBLEBigDataChannelDeviceToAppSuccess),
/* harmony export */   "onBLEBigDataChannelProgressEvent": () => (/* binding */ onBLEBigDataChannelProgressEvent),
/* harmony export */   "onBLEBigDataChannelUploadCloudProgress": () => (/* binding */ onBLEBigDataChannelUploadCloudProgress),
/* harmony export */   "onBLEConnectStatusChange": () => (/* binding */ onBLEConnectStatusChange),
/* harmony export */   "onBLEScanBindDevice": () => (/* binding */ onBLEScanBindDevice),
/* harmony export */   "onBLETransparentDataReport": () => (/* binding */ onBLETransparentDataReport),
/* harmony export */   "onDeviceInfoUpdated": () => (/* binding */ onDeviceInfoUpdated),
/* harmony export */   "onDeviceOnlineStatusUpdate": () => (/* binding */ onDeviceOnlineStatusUpdate),
/* harmony export */   "onDeviceRemoved": () => (/* binding */ onDeviceRemoved),
/* harmony export */   "onDirectlyConnectedSearchDeviceEvent": () => (/* binding */ onDirectlyConnectedSearchDeviceEvent),
/* harmony export */   "onDpDataChange": () => (/* binding */ onDpDataChange),
/* harmony export */   "onFileTransferProgress": () => (/* binding */ onFileTransferProgress),
/* harmony export */   "onGroupDpCodeChange": () => (/* binding */ onGroupDpCodeChange),
/* harmony export */   "onGroupDpDataChangeEvent": () => (/* binding */ onGroupDpDataChangeEvent),
/* harmony export */   "onGroupInfoChange": () => (/* binding */ onGroupInfoChange),
/* harmony export */   "onGroupRemovedEvent": () => (/* binding */ onGroupRemovedEvent),
/* harmony export */   "onLeaveBeaconFence": () => (/* binding */ onLeaveBeaconFence),
/* harmony export */   "onMqttConnectState": () => (/* binding */ onMqttConnectState),
/* harmony export */   "onMqttMessageReceived": () => (/* binding */ onMqttMessageReceived),
/* harmony export */   "onReceivedThingModelMessage": () => (/* binding */ onReceivedThingModelMessage),
/* harmony export */   "onSocketMessageReceived": () => (/* binding */ onSocketMessageReceived),
/* harmony export */   "onSubDeviceAdded": () => (/* binding */ onSubDeviceAdded),
/* harmony export */   "onSubDeviceDpUpdate": () => (/* binding */ onSubDeviceDpUpdate),
/* harmony export */   "onSubDeviceInfoUpdate": () => (/* binding */ onSubDeviceInfoUpdate),
/* harmony export */   "onSubDeviceInfoUpdateEvent": () => (/* binding */ onSubDeviceInfoUpdateEvent),
/* harmony export */   "onSubDeviceRemoved": () => (/* binding */ onSubDeviceRemoved),
/* harmony export */   "onTimerUpdate": () => (/* binding */ onTimerUpdate),
/* harmony export */   "openCategoryActivatorPage": () => (/* binding */ openCategoryActivatorPage),
/* harmony export */   "openDeviceDetailPage": () => (/* binding */ openDeviceDetailPage),
/* harmony export */   "openDeviceEdit": () => (/* binding */ openDeviceEdit),
/* harmony export */   "openDeviceExecutionAndAnutomation": () => (/* binding */ openDeviceExecutionAndAnutomation),
/* harmony export */   "openDeviceInfo": () => (/* binding */ openDeviceInfo),
/* harmony export */   "openDeviceQuestionsAndFeedback": () => (/* binding */ openDeviceQuestionsAndFeedback),
/* harmony export */   "openDeviceWifiNetworkMonitorPage": () => (/* binding */ openDeviceWifiNetworkMonitorPage),
/* harmony export */   "openGroupDetailPage": () => (/* binding */ openGroupDetailPage),
/* harmony export */   "openGroupEdit": () => (/* binding */ openGroupEdit),
/* harmony export */   "openGroupTimerPage": () => (/* binding */ openGroupTimerPage),
/* harmony export */   "openMeshLocalGroup": () => (/* binding */ openMeshLocalGroup),
/* harmony export */   "openOTAUpgrade": () => (/* binding */ openOTAUpgrade),
/* harmony export */   "openPreConditionPage": () => (/* binding */ openPreConditionPage),
/* harmony export */   "openRecommendSceneDetail": () => (/* binding */ openRecommendSceneDetail),
/* harmony export */   "openReconnectPage": () => (/* binding */ openReconnectPage),
/* harmony export */   "openShareDevice": () => (/* binding */ openShareDevice),
/* harmony export */   "openTimerPage": () => (/* binding */ openTimerPage),
/* harmony export */   "postBLEBigDataChannelWithProgress": () => (/* binding */ postBLEBigDataChannelWithProgress),
/* harmony export */   "postBLEFileTransfer": () => (/* binding */ postBLEFileTransfer),
/* harmony export */   "publishBLETransparentData": () => (/* binding */ publishBLETransparentData),
/* harmony export */   "publishCommands": () => (/* binding */ publishCommands),
/* harmony export */   "publishDps": () => (/* binding */ publishDps),
/* harmony export */   "publishDpsWithPipeType": () => (/* binding */ publishDpsWithPipeType),
/* harmony export */   "publishGroupDpCodes": () => (/* binding */ publishGroupDpCodes),
/* harmony export */   "publishGroupDps": () => (/* binding */ publishGroupDps),
/* harmony export */   "publishLanMessage": () => (/* binding */ publishLanMessage),
/* harmony export */   "publishMqttMessage": () => (/* binding */ publishMqttMessage),
/* harmony export */   "publishSigMeshMultiDps": () => (/* binding */ publishSigMeshMultiDps),
/* harmony export */   "publishSocketMessage": () => (/* binding */ publishSocketMessage),
/* harmony export */   "publishThingModelMessage": () => (/* binding */ publishThingModelMessage),
/* harmony export */   "queryDps": () => (/* binding */ queryDps),
/* harmony export */   "readBeaconFenceConfig": () => (/* binding */ readBeaconFenceConfig),
/* harmony export */   "registerDeviceListListener": () => (/* binding */ registerDeviceListListener),
/* harmony export */   "registerGateWaySubDeviceListener": () => (/* binding */ registerGateWaySubDeviceListener),
/* harmony export */   "registerGroupChange": () => (/* binding */ registerGroupChange),
/* harmony export */   "registerLeaveBeaconFenceEvent": () => (/* binding */ registerLeaveBeaconFenceEvent),
/* harmony export */   "registerMQTTDeviceListener": () => (/* binding */ registerMQTTDeviceListener),
/* harmony export */   "registerMQTTProtocolListener": () => (/* binding */ registerMQTTProtocolListener),
/* harmony export */   "registerTopicListListener": () => (/* binding */ registerTopicListListener),
/* harmony export */   "registerZigbeeGateWaySubDeviceListener": () => (/* binding */ registerZigbeeGateWaySubDeviceListener),
/* harmony export */   "removeDevice": () => (/* binding */ removeDevice),
/* harmony export */   "removeShareDevice": () => (/* binding */ removeShareDevice),
/* harmony export */   "removeTimer": () => (/* binding */ removeTimer),
/* harmony export */   "renameDeviceName": () => (/* binding */ renameDeviceName),
/* harmony export */   "resetFactory": () => (/* binding */ resetFactory),
/* harmony export */   "saveSceneAction": () => (/* binding */ saveSceneAction),
/* harmony export */   "sendMqttMessage": () => (/* binding */ sendMqttMessage),
/* harmony export */   "setDeviceProperty": () => (/* binding */ setDeviceProperty),
/* harmony export */   "setGroupProperty": () => (/* binding */ setGroupProperty),
/* harmony export */   "showSceneDialog": () => (/* binding */ showSceneDialog),
/* harmony export */   "startBLEMeshLowPowerConnection": () => (/* binding */ startBLEMeshLowPowerConnection),
/* harmony export */   "startBLEScan": () => (/* binding */ startBLEScan),
/* harmony export */   "startBLEScanBeacon": () => (/* binding */ startBLEScanBeacon),
/* harmony export */   "startBLEScanBindDevice": () => (/* binding */ startBLEScanBindDevice),
/* harmony export */   "startBLEScanSync": () => (/* binding */ startBLEScanSync),
/* harmony export */   "startDeviceWifiActivator": () => (/* binding */ startDeviceWifiActivator),
/* harmony export */   "startDirectlyConnectedDeviceActivator": () => (/* binding */ startDirectlyConnectedDeviceActivator),
/* harmony export */   "startDirectlyConnectedSearchDevice": () => (/* binding */ startDirectlyConnectedSearchDevice),
/* harmony export */   "startGWActivation": () => (/* binding */ startGWActivation),
/* harmony export */   "stopBLEMeshLowPowerConnection": () => (/* binding */ stopBLEMeshLowPowerConnection),
/* harmony export */   "stopBLEScan": () => (/* binding */ stopBLEScan),
/* harmony export */   "stopBLEScanBeacon": () => (/* binding */ stopBLEScanBeacon),
/* harmony export */   "stopBLEScanSync": () => (/* binding */ stopBLEScanSync),
/* harmony export */   "stopDirectlyConnectedDeviceActivator": () => (/* binding */ stopDirectlyConnectedDeviceActivator),
/* harmony export */   "stopDirectlyConnectedSearchDevice": () => (/* binding */ stopDirectlyConnectedSearchDevice),
/* harmony export */   "stopGWActivation": () => (/* binding */ stopGWActivation),
/* harmony export */   "subscribeBLEConnectStatus": () => (/* binding */ subscribeBLEConnectStatus),
/* harmony export */   "subscribeBLETransparentDataReport": () => (/* binding */ subscribeBLETransparentDataReport),
/* harmony export */   "subscribeDeviceRemoved": () => (/* binding */ subscribeDeviceRemoved),
/* harmony export */   "subscribeReceivedThingModelMessage": () => (/* binding */ subscribeReceivedThingModelMessage),
/* harmony export */   "syncDeviceInfo": () => (/* binding */ syncDeviceInfo),
/* harmony export */   "syncTimerTask": () => (/* binding */ syncTimerTask),
/* harmony export */   "toggleDeviceOfflineReminder": () => (/* binding */ toggleDeviceOfflineReminder),
/* harmony export */   "unRegisterGroupChange": () => (/* binding */ unRegisterGroupChange),
/* harmony export */   "unSubscribeDeviceRemoved": () => (/* binding */ unSubscribeDeviceRemoved),
/* harmony export */   "unSubscribeReceivedThingModelMessage": () => (/* binding */ unSubscribeReceivedThingModelMessage),
/* harmony export */   "unregisterDeviceListListener": () => (/* binding */ unregisterDeviceListListener),
/* harmony export */   "unregisterGateWaySubDeviceListener": () => (/* binding */ unregisterGateWaySubDeviceListener),
/* harmony export */   "unregisterLeaveBeaconFenceEvent": () => (/* binding */ unregisterLeaveBeaconFenceEvent),
/* harmony export */   "unregisterMQTTDeviceListener": () => (/* binding */ unregisterMQTTDeviceListener),
/* harmony export */   "unregisterMQTTProtocolListener": () => (/* binding */ unregisterMQTTProtocolListener),
/* harmony export */   "unregisterTopicListListener": () => (/* binding */ unregisterTopicListListener),
/* harmony export */   "unregisterZigbeeGateWaySubDeviceListener": () => (/* binding */ unregisterZigbeeGateWaySubDeviceListener),
/* harmony export */   "unsubscribeBLEConnectStatus": () => (/* binding */ unsubscribeBLEConnectStatus),
/* harmony export */   "unsubscribeBLETransparentDataReport": () => (/* binding */ unsubscribeBLETransparentDataReport),
/* harmony export */   "updateDeviceThingModelInfo": () => (/* binding */ updateDeviceThingModelInfo),
/* harmony export */   "updateTimer": () => (/* binding */ updateTimer),
/* harmony export */   "updateTimerStatus": () => (/* binding */ updateTimerStatus),
/* harmony export */   "validDeviceOnlineType": () => (/* binding */ validDeviceOnlineType),
/* harmony export */   "writeBeaconFenceConfig": () => (/* binding */ writeBeaconFenceConfig)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./node_modules/@ray-js/api/lib/utils.wechat.js");
/// <reference path="../@types/DeviceKit.d.ts" />

var unregisterLeaveBeaconFenceEvent = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.factory)('unregisterLeaveBeaconFenceEvent', {
  "namespace": "device"
});
var registerLeaveBeaconFenceEvent = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.factory)('registerLeaveBeaconFenceEvent', {
  "namespace": "device"
});
var writeBeaconFenceConfig = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.factory)('writeBeaconFenceConfig', {
  "namespace": "device"
});
var readBeaconFenceConfig = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.factory)('readBeaconFenceConfig', {
  "namespace": "device"
});
var disconnectBTBond = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.factory)('disconnectBTBond', {
  "namespace": "device"
});
var connectBTBond = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.factory)('connectBTBond', {
  "namespace": "device"
});
var cancelBLEFileTransfer = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.factory)('cancelBLEFileTransfer', {
  "namespace": "device"
});
var postBLEFileTransfer = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.factory)('postBLEFileTransfer', {
  "namespace": "device"
});
var getBLEDeviceRSSI = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.factory)('getBLEDeviceRSSI', {
  "namespace": "device"
});
var subscribeBLEConnectStatus = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.factory)('subscribeBLEConnectStatus', {
  "namespace": "device"
});
var unsubscribeBLEConnectStatus = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.factory)('unsubscribeBLEConnectStatus', {
  "namespace": "device"
});
var connectBLEDevice = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.factory)('connectBLEDevice', {
  "namespace": "device"
});
var directConnectBLEDevice = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.factory)('directConnectBLEDevice', {
  "namespace": "device"
});
var disconnectBLEDevice = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.factory)('disconnectBLEDevice', {
  "namespace": "device"
});
var getBLEOnlineState = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.factory)('getBLEOnlineState', {
  "namespace": "device"
});
var subscribeBLETransparentDataReport = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.factory)('subscribeBLETransparentDataReport', {
  "namespace": "device"
});
var unsubscribeBLETransparentDataReport = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.factory)('unsubscribeBLETransparentDataReport', {
  "namespace": "device"
});
var publishBLETransparentData = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.factory)('publishBLETransparentData', {
  "namespace": "device"
});
var getEncryptLocalKeyWithData = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.factory)('getEncryptLocalKeyWithData', {
  "namespace": "device"
});
var postBLEBigDataChannelWithProgress = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.factory)('postBLEBigDataChannelWithProgress', {
  "namespace": "device"
});
var startBLEMeshLowPowerConnection = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.factory)('startBLEMeshLowPowerConnection', {
  "namespace": "device"
});
var stopBLEMeshLowPowerConnection = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.factory)('stopBLEMeshLowPowerConnection', {
  "namespace": "device"
});
var startBLEScanBeacon = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.factory)('startBLEScanBeacon', {
  "namespace": "device"
});
var stopBLEScanBeacon = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.factory)('stopBLEScanBeacon', {
  "namespace": "device"
});
var bluetoothCapabilityOfBLEBeacon = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.factory)('bluetoothCapabilityOfBLEBeacon', {
  "namespace": "device"
});
var bluetoothIsPowerOn = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.factory)('bluetoothIsPowerOn', {
  "namespace": "device"
});
var startBLEScanBindDevice = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.factory)('startBLEScanBindDevice', {
  "namespace": "device"
});
var startBLEScan = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.factory)('startBLEScan', {
  "namespace": "device"
});
var startBLEScanSync = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.factory)('startBLEScanSync', {
  "namespace": "device"
});
var stopBLEScan = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.factory)('stopBLEScan', {
  "namespace": "device"
});
var stopBLEScanSync = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.factory)('stopBLEScanSync', {
  "namespace": "device"
});
var bluetoothCapabilityIsSupport = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.factory)('bluetoothCapabilityIsSupport', {
  "namespace": "device"
});
var getBTDeviceInfo = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.factory)('getBTDeviceInfo', {
  "namespace": "device"
});
var startGWActivation = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.factory)('startGWActivation', {
  "namespace": "device"
});
var stopGWActivation = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.factory)('stopGWActivation', {
  "namespace": "device"
});
var openReconnectPage = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.factory)('openReconnectPage', {
  "namespace": "device"
});
var startDirectlyConnectedDeviceActivator = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.factory)('startDirectlyConnectedDeviceActivator', {
  "namespace": "device"
});
var stopDirectlyConnectedDeviceActivator = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.factory)('stopDirectlyConnectedDeviceActivator', {
  "namespace": "device"
});
var openCategoryActivatorPage = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.factory)('openCategoryActivatorPage', {
  "namespace": "device"
});
var startDirectlyConnectedSearchDevice = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.factory)('startDirectlyConnectedSearchDevice', {
  "namespace": "device"
});
var stopDirectlyConnectedSearchDevice = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.factory)('stopDirectlyConnectedSearchDevice', {
  "namespace": "device"
});
var getDeviceWifiActivatorStatus = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.factory)('getDeviceWifiActivatorStatus', {
  "namespace": "device"
});
var startDeviceWifiActivator = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.factory)('startDeviceWifiActivator', {
  "namespace": "device"
});
var renameDeviceName = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.factory)('renameDeviceName', {
  "namespace": "device"
});
var resetFactory = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.factory)('resetFactory', {
  "namespace": "device"
});
var removeDevice = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.factory)('removeDevice', {
  "namespace": "device"
});
var registerZigbeeGateWaySubDeviceListener = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.factory)('registerZigbeeGateWaySubDeviceListener', {
  "namespace": "device"
});
var unregisterZigbeeGateWaySubDeviceListener = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.factory)('unregisterZigbeeGateWaySubDeviceListener', {
  "namespace": "device"
});
var getDeviceOnlineType = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.factory)('getDeviceOnlineType', {
  "namespace": "device"
});
var getDeviceInfo = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.factory)('getDeviceInfo', {
  "namespace": "device"
});
var getProductInfo = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.factory)('getProductInfo', {
  "namespace": "device"
});
var getSubDeviceInfoList = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.factory)('getSubDeviceInfoList', {
  "namespace": "device"
});
var validDeviceOnlineType = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.factory)('validDeviceOnlineType', {
  "namespace": "device"
});
var publishDps = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.factory)('publishDps', {
  "namespace": "device"
});
var publishCommands = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.factory)('publishCommands', {
  "namespace": "device"
});
var publishDpsWithPipeType = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.factory)('publishDpsWithPipeType', {
  "namespace": "device"
});
var queryDps = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.factory)('queryDps', {
  "namespace": "device"
});
var publishMqttMessage = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.factory)('publishMqttMessage', {
  "namespace": "device"
});
var publishLanMessage = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.factory)('publishLanMessage', {
  "namespace": "device"
});
var publishSocketMessage = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.factory)('publishSocketMessage', {
  "namespace": "device"
});
var getDeviceProperty = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.factory)('getDeviceProperty', {
  "namespace": "device"
});
var setDeviceProperty = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.factory)('setDeviceProperty', {
  "namespace": "device"
});
var syncDeviceInfo = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.factory)('syncDeviceInfo', {
  "namespace": "device"
});
var subscribeDeviceRemoved = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.factory)('subscribeDeviceRemoved', {
  "namespace": "device"
});
var unSubscribeDeviceRemoved = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.factory)('unSubscribeDeviceRemoved', {
  "namespace": "device"
});
var registerMQTTDeviceListener = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.factory)('registerMQTTDeviceListener', {
  "namespace": "device"
});
var unregisterMQTTDeviceListener = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.factory)('unregisterMQTTDeviceListener', {
  "namespace": "device"
});
var registerMQTTProtocolListener = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.factory)('registerMQTTProtocolListener', {
  "namespace": "device"
});
var unregisterMQTTProtocolListener = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.factory)('unregisterMQTTProtocolListener', {
  "namespace": "device"
});
var registerDeviceListListener = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.factory)('registerDeviceListListener', {
  "namespace": "device"
});
var unregisterDeviceListListener = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.factory)('unregisterDeviceListListener', {
  "namespace": "device"
});
var registerTopicListListener = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.factory)('registerTopicListListener', {
  "namespace": "device"
});
var unregisterTopicListListener = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.factory)('unregisterTopicListListener', {
  "namespace": "device"
});
var getMqttConnectState = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.factory)('getMqttConnectState', {
  "namespace": "device"
});
var checkOTAUpdateInfo = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.factory)('checkOTAUpdateInfo', {
  "namespace": "device"
});
var openDeviceDetailPage = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.factory)('openDeviceDetailPage', {
  "namespace": "device"
});
var openGroupDetailPage = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.factory)('openGroupDetailPage', {
  "namespace": "device"
});
var openTimerPage = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.factory)('openTimerPage', {
  "namespace": "device"
});
var openGroupTimerPage = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.factory)('openGroupTimerPage', {
  "namespace": "device"
});
var openDeviceWifiNetworkMonitorPage = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.factory)('openDeviceWifiNetworkMonitorPage', {
  "namespace": "device"
});
var syncTimerTask = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.factory)('syncTimerTask', {
  "namespace": "device"
});
var addTimer = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.factory)('addTimer', {
  "namespace": "device"
});
var updateTimer = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.factory)('updateTimer', {
  "namespace": "device"
});
var updateTimerStatus = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.factory)('updateTimerStatus', {
  "namespace": "device"
});
var removeTimer = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.factory)('removeTimer', {
  "namespace": "device"
});
var getShareDeviceInfo = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.factory)('getShareDeviceInfo', {
  "namespace": "device"
});
var openDeviceEdit = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.factory)('openDeviceEdit', {
  "namespace": "device"
});
var openGroupEdit = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.factory)('openGroupEdit', {
  "namespace": "device"
});
var openDeviceInfo = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.factory)('openDeviceInfo', {
  "namespace": "device"
});
var isDeviceSupportOfflineReminder = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.factory)('isDeviceSupportOfflineReminder', {
  "namespace": "device"
});
var getDeviceOfflineReminderState = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.factory)('getDeviceOfflineReminderState', {
  "namespace": "device"
});
var toggleDeviceOfflineReminder = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.factory)('toggleDeviceOfflineReminder', {
  "namespace": "device"
});
var getDeviceOfflineReminderWarningText = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.factory)('getDeviceOfflineReminderWarningText', {
  "namespace": "device"
});
var openDeviceQuestionsAndFeedback = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.factory)('openDeviceQuestionsAndFeedback', {
  "namespace": "device"
});
var openShareDevice = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.factory)('openShareDevice', {
  "namespace": "device"
});
var addDeviceToDesk = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.factory)('addDeviceToDesk', {
  "namespace": "device"
});
var removeShareDevice = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.factory)('removeShareDevice', {
  "namespace": "device"
});
var getSupportedThirdPartyServices = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.factory)('getSupportedThirdPartyServices', {
  "namespace": "device"
});
var openRecommendSceneDetail = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.factory)('openRecommendSceneDetail', {
  "namespace": "device"
});
var openDeviceExecutionAndAnutomation = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.factory)('openDeviceExecutionAndAnutomation', {
  "namespace": "device"
});
var saveSceneAction = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.factory)('saveSceneAction', {
  "namespace": "device"
});
var createAction = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.factory)('createAction', {
  "namespace": "device"
});
var editAction = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.factory)('editAction', {
  "namespace": "device"
});
var showSceneDialog = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.factory)('showSceneDialog', {
  "namespace": "device"
});
var openPreConditionPage = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.factory)('openPreConditionPage', {
  "namespace": "device"
});
var createCondition = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.factory)('createCondition', {
  "namespace": "device"
});
var editCondition = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.factory)('editCondition', {
  "namespace": "device"
});
var getGroupDeviceList = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.factory)('getGroupDeviceList', {
  "namespace": "device"
});
var getGroupDeviceNum = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.factory)('getGroupDeviceNum', {
  "namespace": "device"
});
var getDeviceNumWithDpCode = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.factory)('getDeviceNumWithDpCode', {
  "namespace": "device"
});
var publishGroupDpCodes = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.factory)('publishGroupDpCodes', {
  "namespace": "device"
});
var publishSigMeshMultiDps = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.factory)('publishSigMeshMultiDps', {
  "namespace": "device"
});
var openMeshLocalGroup = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.factory)('openMeshLocalGroup', {
  "namespace": "device"
});
var getGroupInfo = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.factory)('getGroupInfo', {
  "namespace": "device"
});
var publishGroupDps = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.factory)('publishGroupDps', {
  "namespace": "device"
});
var getGroupProperty = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.factory)('getGroupProperty', {
  "namespace": "device"
});
var setGroupProperty = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.factory)('setGroupProperty', {
  "namespace": "device"
});
var registerGroupChange = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.factory)('registerGroupChange', {
  "namespace": "device"
});
var unRegisterGroupChange = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.factory)('unRegisterGroupChange', {
  "namespace": "device"
});
var getMeshDeviceId = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.factory)('getMeshDeviceId', {
  "namespace": "device"
});
var getDpDataByMesh = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.factory)('getDpDataByMesh', {
  "namespace": "device"
});
var checkOTAUpgradeStatus = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.factory)('checkOTAUpgradeStatus', {
  "namespace": "device"
});
var openOTAUpgrade = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.factory)('openOTAUpgrade', {
  "namespace": "device"
});
var deviceIsSupportThingModel = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.factory)('deviceIsSupportThingModel', {
  "namespace": "device"
});
var updateDeviceThingModelInfo = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.factory)('updateDeviceThingModelInfo', {
  "namespace": "device"
});
var getDeviceThingModelInfo = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.factory)('getDeviceThingModelInfo', {
  "namespace": "device"
});
var publishThingModelMessage = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.factory)('publishThingModelMessage', {
  "namespace": "device"
});
var subscribeReceivedThingModelMessage = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.factory)('subscribeReceivedThingModelMessage', {
  "namespace": "device"
});
var unSubscribeReceivedThingModelMessage = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.factory)('unSubscribeReceivedThingModelMessage', {
  "namespace": "device"
});
var onLeaveBeaconFence = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.factory)('onLeaveBeaconFence', {
  "namespace": "device"
});
var offLeaveBeaconFence = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.factory)('offLeaveBeaconFence', {
  "namespace": "device"
});
var onFileTransferProgress = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.factory)('onFileTransferProgress', {
  "namespace": "device"
});
var offFileTransferProgress = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.factory)('offFileTransferProgress', {
  "namespace": "device"
});
var onBLEConnectStatusChange = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.factory)('onBLEConnectStatusChange', {
  "namespace": "device"
});
var offBLEConnectStatusChange = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.factory)('offBLEConnectStatusChange', {
  "namespace": "device"
});
var onBLETransparentDataReport = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.factory)('onBLETransparentDataReport', {
  "namespace": "device"
});
var offBLETransparentDataReport = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.factory)('offBLETransparentDataReport', {
  "namespace": "device"
});
var onBLEBigDataChannelProgressEvent = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.factory)('onBLEBigDataChannelProgressEvent', {
  "namespace": "device"
});
var offBLEBigDataChannelProgressEvent = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.factory)('offBLEBigDataChannelProgressEvent', {
  "namespace": "device"
});
var onBLEScanBindDevice = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.factory)('onBLEScanBindDevice', {
  "namespace": "device"
});
var offBLEScanBindDevice = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.factory)('offBLEScanBindDevice', {
  "namespace": "device"
});
var onBLEBigDataChannelDeviceToAppSuccess = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.factory)('onBLEBigDataChannelDeviceToAppSuccess', {
  "namespace": "device"
});
var offBLEBigDataChannelDeviceToAppSuccess = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.factory)('offBLEBigDataChannelDeviceToAppSuccess', {
  "namespace": "device"
});
var onBLEBigDataChannelUploadCloudProgress = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.factory)('onBLEBigDataChannelUploadCloudProgress', {
  "namespace": "device"
});
var offBLEBigDataChannelUploadCloudProgress = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.factory)('offBLEBigDataChannelUploadCloudProgress', {
  "namespace": "device"
});
var onSubDeviceInfoUpdateEvent = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.factory)('onSubDeviceInfoUpdateEvent', {
  "namespace": "device"
});
var offSubDeviceInfoUpdateEvent = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.factory)('offSubDeviceInfoUpdateEvent', {
  "namespace": "device"
});
var onDirectlyConnectedSearchDeviceEvent = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.factory)('onDirectlyConnectedSearchDeviceEvent', {
  "namespace": "device"
});
var offDirectlyConnectedSearchDeviceEvent = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.factory)('offDirectlyConnectedSearchDeviceEvent', {
  "namespace": "device"
});
var onDpDataChange = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.factory)('onDpDataChange', {
  "namespace": "device"
});
var offDpDataChange = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.factory)('offDpDataChange', {
  "namespace": "device"
});
var onMqttMessageReceived = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.factory)('onMqttMessageReceived', {
  "namespace": "device"
});
var offMqttMessageReceived = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.factory)('offMqttMessageReceived', {
  "namespace": "device"
});
var onSocketMessageReceived = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.factory)('onSocketMessageReceived', {
  "namespace": "device"
});
var offSocketMessageReceived = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.factory)('offSocketMessageReceived', {
  "namespace": "device"
});
var onDeviceOnlineStatusUpdate = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.factory)('onDeviceOnlineStatusUpdate', {
  "namespace": "device"
});
var offDeviceOnlineStatusUpdate = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.factory)('offDeviceOnlineStatusUpdate', {
  "namespace": "device"
});
var onDeviceInfoUpdated = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.factory)('onDeviceInfoUpdated', {
  "namespace": "device"
});
var offDeviceInfoUpdated = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.factory)('offDeviceInfoUpdated', {
  "namespace": "device"
});
var onDeviceRemoved = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.factory)('onDeviceRemoved', {
  "namespace": "device"
});
var offDeviceRemoved = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.factory)('offDeviceRemoved', {
  "namespace": "device"
});
var onMqttConnectState = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.factory)('onMqttConnectState', {
  "namespace": "device"
});
var offMqttConnectState = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.factory)('offMqttConnectState', {
  "namespace": "device"
});
var onTimerUpdate = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.factory)('onTimerUpdate', {
  "namespace": "device"
});
var offTimerUpdate = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.factory)('offTimerUpdate', {
  "namespace": "device"
});
var onGroupInfoChange = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.factory)('onGroupInfoChange', {
  "namespace": "device"
});
var offGroupInfoChange = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.factory)('offGroupInfoChange', {
  "namespace": "device"
});
var onGroupDpCodeChange = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.factory)('onGroupDpCodeChange', {
  "namespace": "device"
});
var offGroupDpCodeChange = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.factory)('offGroupDpCodeChange', {
  "namespace": "device"
});
var onGroupRemovedEvent = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.factory)('onGroupRemovedEvent', {
  "namespace": "device"
});
var offGroupRemovedEvent = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.factory)('offGroupRemovedEvent', {
  "namespace": "device"
});
var onGroupDpDataChangeEvent = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.factory)('onGroupDpDataChangeEvent', {
  "namespace": "device"
});
var offGroupDpDataChangeEvent = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.factory)('offGroupDpDataChangeEvent', {
  "namespace": "device"
});
var onReceivedThingModelMessage = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.factory)('onReceivedThingModelMessage', {
  "namespace": "device"
});
var offReceivedThingModelMessage = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.factory)('offReceivedThingModelMessage', {
  "namespace": "device"
}); // 3.2.0 新增 - 4.7.0 容器

var connectBluetoothDevice = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.factory)('connectBluetoothDevice', {
  "namespace": "device"
});
var disconnectBluetoothDevice = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.factory)('disconnectBluetoothDevice', {
  "namespace": "device"
});
var onSubDeviceAdded = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.factory)('onSubDeviceAdded', {
  "namespace": "device"
});
var offSubDeviceAdded = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.factory)('offSubDeviceAdded', {
  "namespace": "device"
});
var onSubDeviceDpUpdate = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.factory)('onSubDeviceDpUpdate', {
  "namespace": "device"
});
var offSubDeviceDpUpdate = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.factory)('offSubDeviceDpUpdate', {
  "namespace": "device"
});
var onSubDeviceInfoUpdate = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.factory)('onSubDeviceInfoUpdate', {
  "namespace": "device"
});
var offSubDeviceInfoUpdate = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.factory)('offSubDeviceInfoUpdate', {
  "namespace": "device"
});
var onSubDeviceRemoved = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.factory)('onSubDeviceRemoved', {
  "namespace": "device"
});
var offSubDeviceRemoved = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.factory)('offSubDeviceRemoved', {
  "namespace": "device"
});
var registerGateWaySubDeviceListener = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.factory)('registerGateWaySubDeviceListener', {
  "namespace": "device"
});
var unregisterGateWaySubDeviceListener = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.factory)('unregisterGateWaySubDeviceListener', {
  "namespace": "device"
}); // 3.3.1 新增 - 4.8.0 容器

var getDeviceListByDevIds = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.factory)('getDeviceListByDevIds', {
  "namespace": "device"
});
var sendMqttMessage = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.factory)('sendMqttMessage', {
  "namespace": "device"
});

/***/ }),

/***/ "./node_modules/@ray-js/api/lib/PlayNetKit-1.1.3.js":
/*!**********************************************************!*\
  !*** ./node_modules/@ray-js/api/lib/PlayNetKit-1.1.3.js ***!
  \**********************************************************/
/* istanbul ignore next */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "playnet": () => (/* binding */ playnet)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./node_modules/@ray-js/api/lib/utils.wechat.js");
/// <reference path="../@types/PlayNetKit.d.ts" />

var playnet = {
  autoConnectToAp: (0,_utils__WEBPACK_IMPORTED_MODULE_0__.factory)('autoConnectToAp'),
  getDeviceSecurityConfigs: (0,_utils__WEBPACK_IMPORTED_MODULE_0__.factory)('getDeviceSecurityConfigs'),
  getPairConfigToken: (0,_utils__WEBPACK_IMPORTED_MODULE_0__.factory)('getPairConfigToken'),
  hasBlePermission: (0,_utils__WEBPACK_IMPORTED_MODULE_0__.factory)('hasBlePermission'),
  hasLocalNetworkPermission: (0,_utils__WEBPACK_IMPORTED_MODULE_0__.factory)('hasLocalNetworkPermission'),
  hasPermission: (0,_utils__WEBPACK_IMPORTED_MODULE_0__.factory)('hasPermission'),
  isSystemPopupInAutoConnectAp: (0,_utils__WEBPACK_IMPORTED_MODULE_0__.factory)('isSystemPopupInAutoConnectAp'),
  offBLEScanDevice: (0,_utils__WEBPACK_IMPORTED_MODULE_0__.factory)('offBLEScanDevice'),
  offBLEStateChange: (0,_utils__WEBPACK_IMPORTED_MODULE_0__.factory)('offBLEStateChange'),
  offBlePermissionChange: (0,_utils__WEBPACK_IMPORTED_MODULE_0__.factory)('offBlePermissionChange'),
  offWifiStateChange: (0,_utils__WEBPACK_IMPORTED_MODULE_0__.factory)('offWifiStateChange'),
  offlocalNetWorkPermissionChange: (0,_utils__WEBPACK_IMPORTED_MODULE_0__.factory)('offlocalNetWorkPermissionChange'),
  onBLEScanDevice: (0,_utils__WEBPACK_IMPORTED_MODULE_0__.factory)('onBLEScanDevice'),
  onBLEStateChange: (0,_utils__WEBPACK_IMPORTED_MODULE_0__.factory)('onBLEStateChange'),
  onBlePermissionChange: (0,_utils__WEBPACK_IMPORTED_MODULE_0__.factory)('onBlePermissionChange'),
  onWifiStateChange: (0,_utils__WEBPACK_IMPORTED_MODULE_0__.factory)('onWifiStateChange'),
  onlocalNetWorkPermissionChange: (0,_utils__WEBPACK_IMPORTED_MODULE_0__.factory)('onlocalNetWorkPermissionChange'),
  queryDeviceConfigState: (0,_utils__WEBPACK_IMPORTED_MODULE_0__.factory)('queryDeviceConfigState'),
  requestPermission: (0,_utils__WEBPACK_IMPORTED_MODULE_0__.factory)('requestPermission'),
  resetDevice: (0,_utils__WEBPACK_IMPORTED_MODULE_0__.factory)('resetDevice'),
  startActivator: (0,_utils__WEBPACK_IMPORTED_MODULE_0__.factory)('startActivator'),
  startBLEScanDevice: (0,_utils__WEBPACK_IMPORTED_MODULE_0__.factory)('startBLEScanDevice'),
  stopActivator: (0,_utils__WEBPACK_IMPORTED_MODULE_0__.factory)('stopActivator'),
  stopBLEScan: (0,_utils__WEBPACK_IMPORTED_MODULE_0__.factory)('stopBLEScan')
};

/***/ }),

/***/ "./node_modules/@ray-js/api/lib/all-kits.js":
/*!**************************************************!*\
  !*** ./node_modules/@ray-js/api/lib/all-kits.js ***!
  \**************************************************/
/* istanbul ignore next */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addDeviceToDesk": () => (/* reexport safe */ _DeviceKit_3_3_1__WEBPACK_IMPORTED_MODULE_2__.addDeviceToDesk),
/* harmony export */   "addTimer": () => (/* reexport safe */ _DeviceKit_3_3_1__WEBPACK_IMPORTED_MODULE_2__.addTimer),
/* harmony export */   "apiRequestByAtop": () => (/* reexport safe */ _BizKit_3_2_7__WEBPACK_IMPORTED_MODULE_1__.apiRequestByAtop),
/* harmony export */   "apiRequestByHighway": () => (/* reexport safe */ _MiniKit_3_1_0__WEBPACK_IMPORTED_MODULE_3__.apiRequestByHighway),
/* harmony export */   "authorize": () => (/* reexport safe */ _BaseKit_3_3_10__WEBPACK_IMPORTED_MODULE_0__.authorize),
/* harmony export */   "authorizeStatus": () => (/* reexport safe */ _BaseKit_3_3_10__WEBPACK_IMPORTED_MODULE_0__.authorizeStatus),
/* harmony export */   "backToHomeAndOpenPanel": () => (/* reexport safe */ _BizKit_3_2_7__WEBPACK_IMPORTED_MODULE_1__.backToHomeAndOpenPanel),
/* harmony export */   "beginEvent": () => (/* reexport safe */ _BizKit_3_2_7__WEBPACK_IMPORTED_MODULE_1__.beginEvent),
/* harmony export */   "bluetoothCapabilityIsSupport": () => (/* reexport safe */ _DeviceKit_3_3_1__WEBPACK_IMPORTED_MODULE_2__.bluetoothCapabilityIsSupport),
/* harmony export */   "bluetoothCapabilityOfBLEBeacon": () => (/* reexport safe */ _DeviceKit_3_3_1__WEBPACK_IMPORTED_MODULE_2__.bluetoothCapabilityOfBLEBeacon),
/* harmony export */   "bluetoothIsPowerOn": () => (/* reexport safe */ _DeviceKit_3_3_1__WEBPACK_IMPORTED_MODULE_2__.bluetoothIsPowerOn),
/* harmony export */   "canIUseRouter": () => (/* reexport safe */ _BizKit_3_2_7__WEBPACK_IMPORTED_MODULE_1__.canIUseRouter),
/* harmony export */   "canOpenURL": () => (/* reexport safe */ _MiniKit_3_1_0__WEBPACK_IMPORTED_MODULE_3__.canOpenURL),
/* harmony export */   "canOpenURLSync": () => (/* reexport safe */ _MiniKit_3_1_0__WEBPACK_IMPORTED_MODULE_3__.canOpenURLSync),
/* harmony export */   "cancelBLEFileTransfer": () => (/* reexport safe */ _DeviceKit_3_3_1__WEBPACK_IMPORTED_MODULE_2__.cancelBLEFileTransfer),
/* harmony export */   "changeDebugMode": () => (/* reexport safe */ _MiniKit_3_1_0__WEBPACK_IMPORTED_MODULE_3__.changeDebugMode),
/* harmony export */   "checkOTAUpdateInfo": () => (/* reexport safe */ _DeviceKit_3_3_1__WEBPACK_IMPORTED_MODULE_2__.checkOTAUpdateInfo),
/* harmony export */   "checkOTAUpgradeStatus": () => (/* reexport safe */ _DeviceKit_3_3_1__WEBPACK_IMPORTED_MODULE_2__.checkOTAUpgradeStatus),
/* harmony export */   "chooseCropImage": () => (/* reexport safe */ _BaseKit_3_3_10__WEBPACK_IMPORTED_MODULE_0__.chooseCropImage),
/* harmony export */   "chooseImage": () => (/* reexport safe */ _BaseKit_3_3_10__WEBPACK_IMPORTED_MODULE_0__.chooseImage),
/* harmony export */   "chooseMedia": () => (/* reexport safe */ _BaseKit_3_3_10__WEBPACK_IMPORTED_MODULE_0__.chooseMedia),
/* harmony export */   "clearStorage": () => (/* reexport safe */ _BaseKit_3_3_10__WEBPACK_IMPORTED_MODULE_0__.clearStorage),
/* harmony export */   "clearStorageSync": () => (/* reexport safe */ _BaseKit_3_3_10__WEBPACK_IMPORTED_MODULE_0__.clearStorageSync),
/* harmony export */   "connectBLEDevice": () => (/* reexport safe */ _DeviceKit_3_3_1__WEBPACK_IMPORTED_MODULE_2__.connectBLEDevice),
/* harmony export */   "connectBTBond": () => (/* reexport safe */ _DeviceKit_3_3_1__WEBPACK_IMPORTED_MODULE_2__.connectBTBond),
/* harmony export */   "connectBluetoothDevice": () => (/* reexport safe */ _DeviceKit_3_3_1__WEBPACK_IMPORTED_MODULE_2__.connectBluetoothDevice),
/* harmony export */   "createAction": () => (/* reexport safe */ _DeviceKit_3_3_1__WEBPACK_IMPORTED_MODULE_2__.createAction),
/* harmony export */   "createCondition": () => (/* reexport safe */ _DeviceKit_3_3_1__WEBPACK_IMPORTED_MODULE_2__.createCondition),
/* harmony export */   "createInnerAudioContext": () => (/* reexport safe */ _BaseKit_3_3_10__WEBPACK_IMPORTED_MODULE_0__.createInnerAudioContext),
/* harmony export */   "device": () => (/* reexport module object */ _DeviceKit_3_3_1__WEBPACK_IMPORTED_MODULE_2__),
/* harmony export */   "deviceIsSupportThingModel": () => (/* reexport safe */ _DeviceKit_3_3_1__WEBPACK_IMPORTED_MODULE_2__.deviceIsSupportThingModel),
/* harmony export */   "directConnectBLEDevice": () => (/* reexport safe */ _DeviceKit_3_3_1__WEBPACK_IMPORTED_MODULE_2__.directConnectBLEDevice),
/* harmony export */   "disconnectBLEDevice": () => (/* reexport safe */ _DeviceKit_3_3_1__WEBPACK_IMPORTED_MODULE_2__.disconnectBLEDevice),
/* harmony export */   "disconnectBTBond": () => (/* reexport safe */ _DeviceKit_3_3_1__WEBPACK_IMPORTED_MODULE_2__.disconnectBTBond),
/* harmony export */   "disconnectBluetoothDevice": () => (/* reexport safe */ _DeviceKit_3_3_1__WEBPACK_IMPORTED_MODULE_2__.disconnectBluetoothDevice),
/* harmony export */   "downloadFile": () => (/* reexport safe */ _BaseKit_3_3_10__WEBPACK_IMPORTED_MODULE_0__.downloadFile),
/* harmony export */   "editAction": () => (/* reexport safe */ _DeviceKit_3_3_1__WEBPACK_IMPORTED_MODULE_2__.editAction),
/* harmony export */   "editCondition": () => (/* reexport safe */ _DeviceKit_3_3_1__WEBPACK_IMPORTED_MODULE_2__.editCondition),
/* harmony export */   "emitChannel": () => (/* reexport safe */ _BizKit_3_2_7__WEBPACK_IMPORTED_MODULE_1__.emitChannel),
/* harmony export */   "endEvent": () => (/* reexport safe */ _BizKit_3_2_7__WEBPACK_IMPORTED_MODULE_1__.endEvent),
/* harmony export */   "event": () => (/* reexport safe */ _BizKit_3_2_7__WEBPACK_IMPORTED_MODULE_1__.event),
/* harmony export */   "exitMiniProgram": () => (/* reexport safe */ _MiniKit_3_1_0__WEBPACK_IMPORTED_MODULE_3__.exitMiniProgram),
/* harmony export */   "exitMiniWidget": () => (/* reexport safe */ _MiniKit_3_1_0__WEBPACK_IMPORTED_MODULE_3__.exitMiniWidget),
/* harmony export */   "extApiCanIUse": () => (/* reexport safe */ _MiniKit_3_1_0__WEBPACK_IMPORTED_MODULE_3__.extApiCanIUse),
/* harmony export */   "extApiCanIUseSync": () => (/* reexport safe */ _MiniKit_3_1_0__WEBPACK_IMPORTED_MODULE_3__.extApiCanIUseSync),
/* harmony export */   "extApiInvoke": () => (/* reexport safe */ _MiniKit_3_1_0__WEBPACK_IMPORTED_MODULE_3__.extApiInvoke),
/* harmony export */   "extApiInvokeSync": () => (/* reexport safe */ _MiniKit_3_1_0__WEBPACK_IMPORTED_MODULE_3__.extApiInvokeSync),
/* harmony export */   "getAccountInfo": () => (/* reexport safe */ _MiniKit_3_1_0__WEBPACK_IMPORTED_MODULE_3__.getAccountInfo),
/* harmony export */   "getAccountInfoSync": () => (/* reexport safe */ _MiniKit_3_1_0__WEBPACK_IMPORTED_MODULE_3__.getAccountInfoSync),
/* harmony export */   "getAppInfo": () => (/* reexport safe */ _BizKit_3_2_7__WEBPACK_IMPORTED_MODULE_1__.getAppInfo),
/* harmony export */   "getAudioFileDuration": () => (/* reexport safe */ _BaseKit_3_3_10__WEBPACK_IMPORTED_MODULE_0__.getAudioFileDuration),
/* harmony export */   "getBLEDeviceRSSI": () => (/* reexport safe */ _DeviceKit_3_3_1__WEBPACK_IMPORTED_MODULE_2__.getBLEDeviceRSSI),
/* harmony export */   "getBLEOnlineState": () => (/* reexport safe */ _DeviceKit_3_3_1__WEBPACK_IMPORTED_MODULE_2__.getBLEOnlineState),
/* harmony export */   "getBTDeviceInfo": () => (/* reexport safe */ _DeviceKit_3_3_1__WEBPACK_IMPORTED_MODULE_2__.getBTDeviceInfo),
/* harmony export */   "getClipboardData": () => (/* reexport safe */ _BaseKit_3_3_10__WEBPACK_IMPORTED_MODULE_0__.getClipboardData),
/* harmony export */   "getConnectedWifi": () => (/* reexport safe */ _BaseKit_3_3_10__WEBPACK_IMPORTED_MODULE_0__.getConnectedWifi),
/* harmony export */   "getCurrentVolume": () => (/* reexport safe */ _BaseKit_3_3_10__WEBPACK_IMPORTED_MODULE_0__.getCurrentVolume),
/* harmony export */   "getCurrentVolumeByMode": () => (/* reexport safe */ _BaseKit_3_3_10__WEBPACK_IMPORTED_MODULE_0__.getCurrentVolumeByMode),
/* harmony export */   "getCurrentWifiSSID": () => (/* reexport safe */ _BizKit_3_2_7__WEBPACK_IMPORTED_MODULE_1__.getCurrentWifiSSID),
/* harmony export */   "getDeviceInfo": () => (/* reexport safe */ _DeviceKit_3_3_1__WEBPACK_IMPORTED_MODULE_2__.getDeviceInfo),
/* harmony export */   "getDeviceListByDevIds": () => (/* reexport safe */ _DeviceKit_3_3_1__WEBPACK_IMPORTED_MODULE_2__.getDeviceListByDevIds),
/* harmony export */   "getDeviceNumWithDpCode": () => (/* reexport safe */ _DeviceKit_3_3_1__WEBPACK_IMPORTED_MODULE_2__.getDeviceNumWithDpCode),
/* harmony export */   "getDeviceOfflineReminderState": () => (/* reexport safe */ _DeviceKit_3_3_1__WEBPACK_IMPORTED_MODULE_2__.getDeviceOfflineReminderState),
/* harmony export */   "getDeviceOfflineReminderWarningText": () => (/* reexport safe */ _DeviceKit_3_3_1__WEBPACK_IMPORTED_MODULE_2__.getDeviceOfflineReminderWarningText),
/* harmony export */   "getDeviceOnlineType": () => (/* reexport safe */ _DeviceKit_3_3_1__WEBPACK_IMPORTED_MODULE_2__.getDeviceOnlineType),
/* harmony export */   "getDeviceProperty": () => (/* reexport safe */ _DeviceKit_3_3_1__WEBPACK_IMPORTED_MODULE_2__.getDeviceProperty),
/* harmony export */   "getDeviceThingModelInfo": () => (/* reexport safe */ _DeviceKit_3_3_1__WEBPACK_IMPORTED_MODULE_2__.getDeviceThingModelInfo),
/* harmony export */   "getDeviceWifiActivatorStatus": () => (/* reexport safe */ _DeviceKit_3_3_1__WEBPACK_IMPORTED_MODULE_2__.getDeviceWifiActivatorStatus),
/* harmony export */   "getDpDataByMesh": () => (/* reexport safe */ _DeviceKit_3_3_1__WEBPACK_IMPORTED_MODULE_2__.getDpDataByMesh),
/* harmony export */   "getEncryptLocalKeyWithData": () => (/* reexport safe */ _DeviceKit_3_3_1__WEBPACK_IMPORTED_MODULE_2__.getEncryptLocalKeyWithData),
/* harmony export */   "getEnterOptions": () => (/* reexport safe */ _MiniKit_3_1_0__WEBPACK_IMPORTED_MODULE_3__.getEnterOptions),
/* harmony export */   "getEnterOptionsSync": () => (/* reexport safe */ _MiniKit_3_1_0__WEBPACK_IMPORTED_MODULE_3__.getEnterOptionsSync),
/* harmony export */   "getFileSystemManager": () => (/* reexport safe */ _BaseKit_3_3_10__WEBPACK_IMPORTED_MODULE_0__.getFileSystemManager),
/* harmony export */   "getGroupDeviceList": () => (/* reexport safe */ _DeviceKit_3_3_1__WEBPACK_IMPORTED_MODULE_2__.getGroupDeviceList),
/* harmony export */   "getGroupDeviceNum": () => (/* reexport safe */ _DeviceKit_3_3_1__WEBPACK_IMPORTED_MODULE_2__.getGroupDeviceNum),
/* harmony export */   "getGroupInfo": () => (/* reexport safe */ _DeviceKit_3_3_1__WEBPACK_IMPORTED_MODULE_2__.getGroupInfo),
/* harmony export */   "getGroupProperty": () => (/* reexport safe */ _DeviceKit_3_3_1__WEBPACK_IMPORTED_MODULE_2__.getGroupProperty),
/* harmony export */   "getIconfontInfo": () => (/* reexport safe */ _BizKit_3_2_7__WEBPACK_IMPORTED_MODULE_1__.getIconfontInfo),
/* harmony export */   "getImageInfo": () => (/* reexport safe */ _BaseKit_3_3_10__WEBPACK_IMPORTED_MODULE_0__.getImageInfo),
/* harmony export */   "getLangContent": () => (/* reexport safe */ _BizKit_3_2_7__WEBPACK_IMPORTED_MODULE_1__.getLangContent),
/* harmony export */   "getLangKey": () => (/* reexport safe */ _BizKit_3_2_7__WEBPACK_IMPORTED_MODULE_1__.getLangKey),
/* harmony export */   "getLaunchOptions": () => (/* reexport safe */ _MiniKit_3_1_0__WEBPACK_IMPORTED_MODULE_3__.getLaunchOptions),
/* harmony export */   "getLaunchOptionsSync": () => (/* reexport safe */ _MiniKit_3_1_0__WEBPACK_IMPORTED_MODULE_3__.getLaunchOptionsSync),
/* harmony export */   "getMenuButtonBoundingClientRect": () => (/* reexport safe */ _MiniKit_3_1_0__WEBPACK_IMPORTED_MODULE_3__.getMenuButtonBoundingClientRect),
/* harmony export */   "getMenuButtonBoundingClientRectSync": () => (/* reexport safe */ _MiniKit_3_1_0__WEBPACK_IMPORTED_MODULE_3__.getMenuButtonBoundingClientRectSync),
/* harmony export */   "getMeshDeviceId": () => (/* reexport safe */ _DeviceKit_3_3_1__WEBPACK_IMPORTED_MODULE_2__.getMeshDeviceId),
/* harmony export */   "getMobileDeviceInfo": () => (/* reexport safe */ _BaseKit_3_3_10__WEBPACK_IMPORTED_MODULE_0__.getMobileDeviceInfo),
/* harmony export */   "getMqttConnectState": () => (/* reexport safe */ _DeviceKit_3_3_1__WEBPACK_IMPORTED_MODULE_2__.getMqttConnectState),
/* harmony export */   "getNetworkType": () => (/* reexport safe */ _BaseKit_3_3_10__WEBPACK_IMPORTED_MODULE_0__.getNetworkType),
/* harmony export */   "getPermissionConfig": () => (/* reexport safe */ _MiniKit_3_1_0__WEBPACK_IMPORTED_MODULE_3__.getPermissionConfig),
/* harmony export */   "getPermissionConfigSync": () => (/* reexport safe */ _MiniKit_3_1_0__WEBPACK_IMPORTED_MODULE_3__.getPermissionConfigSync),
/* harmony export */   "getProductInfo": () => (/* reexport safe */ _DeviceKit_3_3_1__WEBPACK_IMPORTED_MODULE_2__.getProductInfo),
/* harmony export */   "getRecorderManager": () => (/* reexport safe */ _BaseKit_3_3_10__WEBPACK_IMPORTED_MODULE_0__.getRecorderManager),
/* harmony export */   "getScreenBrightness": () => (/* reexport safe */ _BaseKit_3_3_10__WEBPACK_IMPORTED_MODULE_0__.getScreenBrightness),
/* harmony export */   "getShareChannelList": () => (/* reexport safe */ _BizKit_3_2_7__WEBPACK_IMPORTED_MODULE_1__.getShareChannelList),
/* harmony export */   "getShareDeviceInfo": () => (/* reexport safe */ _DeviceKit_3_3_1__WEBPACK_IMPORTED_MODULE_2__.getShareDeviceInfo),
/* harmony export */   "getStorage": () => (/* reexport safe */ _BaseKit_3_3_10__WEBPACK_IMPORTED_MODULE_0__.getStorage),
/* harmony export */   "getStorageSync": () => (/* reexport safe */ _BaseKit_3_3_10__WEBPACK_IMPORTED_MODULE_0__.getStorageSync),
/* harmony export */   "getSubDeviceInfoList": () => (/* reexport safe */ _DeviceKit_3_3_1__WEBPACK_IMPORTED_MODULE_2__.getSubDeviceInfoList),
/* harmony export */   "getSupportedThirdPartyServices": () => (/* reexport safe */ _DeviceKit_3_3_1__WEBPACK_IMPORTED_MODULE_2__.getSupportedThirdPartyServices),
/* harmony export */   "getSystemInfo": () => (/* reexport safe */ _BaseKit_3_3_10__WEBPACK_IMPORTED_MODULE_0__.getSystemInfo),
/* harmony export */   "getSystemInfoSync": () => (/* reexport safe */ _BaseKit_3_3_10__WEBPACK_IMPORTED_MODULE_0__.getSystemInfoSync),
/* harmony export */   "getSystemSetting": () => (/* reexport safe */ _BaseKit_3_3_10__WEBPACK_IMPORTED_MODULE_0__.getSystemSetting),
/* harmony export */   "getTempDirectory": () => (/* reexport safe */ _BizKit_3_2_7__WEBPACK_IMPORTED_MODULE_1__.getTempDirectory),
/* harmony export */   "getUserInfo": () => (/* reexport safe */ _BizKit_3_2_7__WEBPACK_IMPORTED_MODULE_1__.getUserInfo),
/* harmony export */   "getVideoInfo": () => (/* reexport safe */ _BaseKit_3_3_10__WEBPACK_IMPORTED_MODULE_0__.getVideoInfo),
/* harmony export */   "getWifiList": () => (/* reexport safe */ _BaseKit_3_3_10__WEBPACK_IMPORTED_MODULE_0__.getWifiList),
/* harmony export */   "goDeviceAlarm": () => (/* reexport safe */ _BizKit_3_2_7__WEBPACK_IMPORTED_MODULE_1__.goDeviceAlarm),
/* harmony export */   "goDeviceDetail": () => (/* reexport safe */ _BizKit_3_2_7__WEBPACK_IMPORTED_MODULE_1__.goDeviceDetail),
/* harmony export */   "handleShortcut": () => (/* reexport safe */ _BizKit_3_2_7__WEBPACK_IMPORTED_MODULE_1__.handleShortcut),
/* harmony export */   "hideBoardTitleIcon": () => (/* reexport safe */ _MiniKit_3_1_0__WEBPACK_IMPORTED_MODULE_3__.hideBoardTitleIcon),
/* harmony export */   "hideBoardTitleIconSync": () => (/* reexport safe */ _MiniKit_3_1_0__WEBPACK_IMPORTED_MODULE_3__.hideBoardTitleIconSync),
/* harmony export */   "hideHomeButton": () => (/* reexport safe */ _MiniKit_3_1_0__WEBPACK_IMPORTED_MODULE_3__.hideHomeButton),
/* harmony export */   "hideLoading": () => (/* reexport safe */ _BaseKit_3_3_10__WEBPACK_IMPORTED_MODULE_0__.hideLoading),
/* harmony export */   "hideMenuButton": () => (/* reexport safe */ _MiniKit_3_1_0__WEBPACK_IMPORTED_MODULE_3__.hideMenuButton),
/* harmony export */   "hideNavigationBarLoading": () => (/* reexport safe */ _MiniKit_3_1_0__WEBPACK_IMPORTED_MODULE_3__.hideNavigationBarLoading),
/* harmony export */   "hideStatusBar": () => (/* reexport safe */ _MiniKit_3_1_0__WEBPACK_IMPORTED_MODULE_3__.hideStatusBar),
/* harmony export */   "hideTabBar": () => (/* reexport safe */ _MiniKit_3_1_0__WEBPACK_IMPORTED_MODULE_3__.hideTabBar),
/* harmony export */   "hideTabBarRedDot": () => (/* reexport safe */ _MiniKit_3_1_0__WEBPACK_IMPORTED_MODULE_3__.hideTabBarRedDot),
/* harmony export */   "hideToast": () => (/* reexport safe */ _BaseKit_3_3_10__WEBPACK_IMPORTED_MODULE_0__.hideToast),
/* harmony export */   "isAssociatedShortcut": () => (/* reexport safe */ _BizKit_3_2_7__WEBPACK_IMPORTED_MODULE_1__.isAssociatedShortcut),
/* harmony export */   "isDeviceSupportOfflineReminder": () => (/* reexport safe */ _DeviceKit_3_3_1__WEBPACK_IMPORTED_MODULE_2__.isDeviceSupportOfflineReminder),
/* harmony export */   "isSupportedShortcut": () => (/* reexport safe */ _BizKit_3_2_7__WEBPACK_IMPORTED_MODULE_1__.isSupportedShortcut),
/* harmony export */   "login": () => (/* reexport safe */ _MiniKit_3_1_0__WEBPACK_IMPORTED_MODULE_3__.login),
/* harmony export */   "makePhoneCall": () => (/* reexport safe */ _BaseKit_3_3_10__WEBPACK_IMPORTED_MODULE_0__.makePhoneCall),
/* harmony export */   "nativeDisabled": () => (/* reexport safe */ _MiniKit_3_1_0__WEBPACK_IMPORTED_MODULE_3__.nativeDisabled),
/* harmony export */   "nativeInovke": () => (/* reexport safe */ _MiniKit_3_1_0__WEBPACK_IMPORTED_MODULE_3__.nativeInovke),
/* harmony export */   "navigateBack": () => (/* reexport safe */ _MiniKit_3_1_0__WEBPACK_IMPORTED_MODULE_3__.navigateBack),
/* harmony export */   "navigateBackMiniProgram": () => (/* reexport safe */ _MiniKit_3_1_0__WEBPACK_IMPORTED_MODULE_3__.navigateBackMiniProgram),
/* harmony export */   "navigateTo": () => (/* reexport safe */ _MiniKit_3_1_0__WEBPACK_IMPORTED_MODULE_3__.navigateTo),
/* harmony export */   "navigateToMiniProgram": () => (/* reexport safe */ _BaseKit_3_3_10__WEBPACK_IMPORTED_MODULE_0__.navigateToMiniProgram),
/* harmony export */   "offAccelerometerChange": () => (/* reexport safe */ _BaseKit_3_3_10__WEBPACK_IMPORTED_MODULE_0__.offAccelerometerChange),
/* harmony export */   "offBLEBigDataChannelDeviceToAppSuccess": () => (/* reexport safe */ _DeviceKit_3_3_1__WEBPACK_IMPORTED_MODULE_2__.offBLEBigDataChannelDeviceToAppSuccess),
/* harmony export */   "offBLEBigDataChannelProgressEvent": () => (/* reexport safe */ _DeviceKit_3_3_1__WEBPACK_IMPORTED_MODULE_2__.offBLEBigDataChannelProgressEvent),
/* harmony export */   "offBLEBigDataChannelUploadCloudProgress": () => (/* reexport safe */ _DeviceKit_3_3_1__WEBPACK_IMPORTED_MODULE_2__.offBLEBigDataChannelUploadCloudProgress),
/* harmony export */   "offBLEConnectStatusChange": () => (/* reexport safe */ _DeviceKit_3_3_1__WEBPACK_IMPORTED_MODULE_2__.offBLEConnectStatusChange),
/* harmony export */   "offBLEScanBindDevice": () => (/* reexport safe */ _DeviceKit_3_3_1__WEBPACK_IMPORTED_MODULE_2__.offBLEScanBindDevice),
/* harmony export */   "offBLETransparentDataReport": () => (/* reexport safe */ _DeviceKit_3_3_1__WEBPACK_IMPORTED_MODULE_2__.offBLETransparentDataReport),
/* harmony export */   "offBluetoothAdapterStateChange": () => (/* reexport safe */ _BaseKit_3_3_10__WEBPACK_IMPORTED_MODULE_0__.offBluetoothAdapterStateChange),
/* harmony export */   "offCompassChange": () => (/* reexport safe */ _BaseKit_3_3_10__WEBPACK_IMPORTED_MODULE_0__.offCompassChange),
/* harmony export */   "offCountrySelectResult": () => (/* reexport safe */ _BizKit_3_2_7__WEBPACK_IMPORTED_MODULE_1__.offCountrySelectResult),
/* harmony export */   "offDeviceInfoUpdated": () => (/* reexport safe */ _DeviceKit_3_3_1__WEBPACK_IMPORTED_MODULE_2__.offDeviceInfoUpdated),
/* harmony export */   "offDeviceMotionChange": () => (/* reexport safe */ _BaseKit_3_3_10__WEBPACK_IMPORTED_MODULE_0__.offDeviceMotionChange),
/* harmony export */   "offDeviceOnlineStatusUpdate": () => (/* reexport safe */ _DeviceKit_3_3_1__WEBPACK_IMPORTED_MODULE_2__.offDeviceOnlineStatusUpdate),
/* harmony export */   "offDeviceRemoved": () => (/* reexport safe */ _DeviceKit_3_3_1__WEBPACK_IMPORTED_MODULE_2__.offDeviceRemoved),
/* harmony export */   "offDirectlyConnectedSearchDeviceEvent": () => (/* reexport safe */ _DeviceKit_3_3_1__WEBPACK_IMPORTED_MODULE_2__.offDirectlyConnectedSearchDeviceEvent),
/* harmony export */   "offDpDataChange": () => (/* reexport safe */ _DeviceKit_3_3_1__WEBPACK_IMPORTED_MODULE_2__.offDpDataChange),
/* harmony export */   "offFileTransferProgress": () => (/* reexport safe */ _DeviceKit_3_3_1__WEBPACK_IMPORTED_MODULE_2__.offFileTransferProgress),
/* harmony export */   "offGetWifiList": () => (/* reexport safe */ _BaseKit_3_3_10__WEBPACK_IMPORTED_MODULE_0__.offGetWifiList),
/* harmony export */   "offGroupDpCodeChange": () => (/* reexport safe */ _DeviceKit_3_3_1__WEBPACK_IMPORTED_MODULE_2__.offGroupDpCodeChange),
/* harmony export */   "offGroupDpDataChangeEvent": () => (/* reexport safe */ _DeviceKit_3_3_1__WEBPACK_IMPORTED_MODULE_2__.offGroupDpDataChangeEvent),
/* harmony export */   "offGroupInfoChange": () => (/* reexport safe */ _DeviceKit_3_3_1__WEBPACK_IMPORTED_MODULE_2__.offGroupInfoChange),
/* harmony export */   "offGroupRemovedEvent": () => (/* reexport safe */ _DeviceKit_3_3_1__WEBPACK_IMPORTED_MODULE_2__.offGroupRemovedEvent),
/* harmony export */   "offGyroscopeChange": () => (/* reexport safe */ _BaseKit_3_3_10__WEBPACK_IMPORTED_MODULE_0__.offGyroscopeChange),
/* harmony export */   "offLeaveBeaconFence": () => (/* reexport safe */ _DeviceKit_3_3_1__WEBPACK_IMPORTED_MODULE_2__.offLeaveBeaconFence),
/* harmony export */   "offMemoryWarning": () => (/* reexport safe */ _BaseKit_3_3_10__WEBPACK_IMPORTED_MODULE_0__.offMemoryWarning),
/* harmony export */   "offMqttConnectState": () => (/* reexport safe */ _DeviceKit_3_3_1__WEBPACK_IMPORTED_MODULE_2__.offMqttConnectState),
/* harmony export */   "offMqttMessageReceived": () => (/* reexport safe */ _DeviceKit_3_3_1__WEBPACK_IMPORTED_MODULE_2__.offMqttMessageReceived),
/* harmony export */   "offNativeEvent": () => (/* reexport safe */ _MiniKit_3_1_0__WEBPACK_IMPORTED_MODULE_3__.offNativeEvent),
/* harmony export */   "offNetworkStatusChange": () => (/* reexport safe */ _BaseKit_3_3_10__WEBPACK_IMPORTED_MODULE_0__.offNetworkStatusChange),
/* harmony export */   "offReceiveMessage": () => (/* reexport safe */ _BizKit_3_2_7__WEBPACK_IMPORTED_MODULE_1__.offReceiveMessage),
/* harmony export */   "offReceivedThingModelMessage": () => (/* reexport safe */ _DeviceKit_3_3_1__WEBPACK_IMPORTED_MODULE_2__.offReceivedThingModelMessage),
/* harmony export */   "offRecordingEvent": () => (/* reexport safe */ _BaseKit_3_3_10__WEBPACK_IMPORTED_MODULE_0__.offRecordingEvent),
/* harmony export */   "offRouterEvent": () => (/* reexport safe */ _BizKit_3_2_7__WEBPACK_IMPORTED_MODULE_1__.offRouterEvent),
/* harmony export */   "offRouterResult": () => (/* reexport safe */ _BizKit_3_2_7__WEBPACK_IMPORTED_MODULE_1__.offRouterResult),
/* harmony export */   "offSocketMessageReceived": () => (/* reexport safe */ _DeviceKit_3_3_1__WEBPACK_IMPORTED_MODULE_2__.offSocketMessageReceived),
/* harmony export */   "offSubDeviceAdded": () => (/* reexport safe */ _DeviceKit_3_3_1__WEBPACK_IMPORTED_MODULE_2__.offSubDeviceAdded),
/* harmony export */   "offSubDeviceDpUpdate": () => (/* reexport safe */ _DeviceKit_3_3_1__WEBPACK_IMPORTED_MODULE_2__.offSubDeviceDpUpdate),
/* harmony export */   "offSubDeviceInfoUpdate": () => (/* reexport safe */ _DeviceKit_3_3_1__WEBPACK_IMPORTED_MODULE_2__.offSubDeviceInfoUpdate),
/* harmony export */   "offSubDeviceInfoUpdateEvent": () => (/* reexport safe */ _DeviceKit_3_3_1__WEBPACK_IMPORTED_MODULE_2__.offSubDeviceInfoUpdateEvent),
/* harmony export */   "offSubDeviceRemoved": () => (/* reexport safe */ _DeviceKit_3_3_1__WEBPACK_IMPORTED_MODULE_2__.offSubDeviceRemoved),
/* harmony export */   "offSystemVolumeChangeEvent": () => (/* reexport safe */ _BaseKit_3_3_10__WEBPACK_IMPORTED_MODULE_0__.offSystemVolumeChangeEvent),
/* harmony export */   "offTimerUpdate": () => (/* reexport safe */ _DeviceKit_3_3_1__WEBPACK_IMPORTED_MODULE_2__.offTimerUpdate),
/* harmony export */   "offUploadProgressUpdate": () => (/* reexport safe */ _BizKit_3_2_7__WEBPACK_IMPORTED_MODULE_1__.offUploadProgressUpdate),
/* harmony export */   "onAccelerometerChange": () => (/* reexport safe */ _BaseKit_3_3_10__WEBPACK_IMPORTED_MODULE_0__.onAccelerometerChange),
/* harmony export */   "onBLEBigDataChannelDeviceToAppSuccess": () => (/* reexport safe */ _DeviceKit_3_3_1__WEBPACK_IMPORTED_MODULE_2__.onBLEBigDataChannelDeviceToAppSuccess),
/* harmony export */   "onBLEBigDataChannelProgressEvent": () => (/* reexport safe */ _DeviceKit_3_3_1__WEBPACK_IMPORTED_MODULE_2__.onBLEBigDataChannelProgressEvent),
/* harmony export */   "onBLEBigDataChannelUploadCloudProgress": () => (/* reexport safe */ _DeviceKit_3_3_1__WEBPACK_IMPORTED_MODULE_2__.onBLEBigDataChannelUploadCloudProgress),
/* harmony export */   "onBLEConnectStatusChange": () => (/* reexport safe */ _DeviceKit_3_3_1__WEBPACK_IMPORTED_MODULE_2__.onBLEConnectStatusChange),
/* harmony export */   "onBLEScanBindDevice": () => (/* reexport safe */ _DeviceKit_3_3_1__WEBPACK_IMPORTED_MODULE_2__.onBLEScanBindDevice),
/* harmony export */   "onBLETransparentDataReport": () => (/* reexport safe */ _DeviceKit_3_3_1__WEBPACK_IMPORTED_MODULE_2__.onBLETransparentDataReport),
/* harmony export */   "onBluetoothAdapterStateChange": () => (/* reexport safe */ _BaseKit_3_3_10__WEBPACK_IMPORTED_MODULE_0__.onBluetoothAdapterStateChange),
/* harmony export */   "onCompassChange": () => (/* reexport safe */ _BaseKit_3_3_10__WEBPACK_IMPORTED_MODULE_0__.onCompassChange),
/* harmony export */   "onCountrySelectResult": () => (/* reexport safe */ _BizKit_3_2_7__WEBPACK_IMPORTED_MODULE_1__.onCountrySelectResult),
/* harmony export */   "onDeviceInfoUpdated": () => (/* reexport safe */ _DeviceKit_3_3_1__WEBPACK_IMPORTED_MODULE_2__.onDeviceInfoUpdated),
/* harmony export */   "onDeviceMotionChange": () => (/* reexport safe */ _BaseKit_3_3_10__WEBPACK_IMPORTED_MODULE_0__.onDeviceMotionChange),
/* harmony export */   "onDeviceOnlineStatusUpdate": () => (/* reexport safe */ _DeviceKit_3_3_1__WEBPACK_IMPORTED_MODULE_2__.onDeviceOnlineStatusUpdate),
/* harmony export */   "onDeviceRemoved": () => (/* reexport safe */ _DeviceKit_3_3_1__WEBPACK_IMPORTED_MODULE_2__.onDeviceRemoved),
/* harmony export */   "onDirectlyConnectedSearchDeviceEvent": () => (/* reexport safe */ _DeviceKit_3_3_1__WEBPACK_IMPORTED_MODULE_2__.onDirectlyConnectedSearchDeviceEvent),
/* harmony export */   "onDpDataChange": () => (/* reexport safe */ _DeviceKit_3_3_1__WEBPACK_IMPORTED_MODULE_2__.onDpDataChange),
/* harmony export */   "onFileTransferProgress": () => (/* reexport safe */ _DeviceKit_3_3_1__WEBPACK_IMPORTED_MODULE_2__.onFileTransferProgress),
/* harmony export */   "onGetWifiList": () => (/* reexport safe */ _BaseKit_3_3_10__WEBPACK_IMPORTED_MODULE_0__.onGetWifiList),
/* harmony export */   "onGroupDpCodeChange": () => (/* reexport safe */ _DeviceKit_3_3_1__WEBPACK_IMPORTED_MODULE_2__.onGroupDpCodeChange),
/* harmony export */   "onGroupDpDataChangeEvent": () => (/* reexport safe */ _DeviceKit_3_3_1__WEBPACK_IMPORTED_MODULE_2__.onGroupDpDataChangeEvent),
/* harmony export */   "onGroupInfoChange": () => (/* reexport safe */ _DeviceKit_3_3_1__WEBPACK_IMPORTED_MODULE_2__.onGroupInfoChange),
/* harmony export */   "onGroupRemovedEvent": () => (/* reexport safe */ _DeviceKit_3_3_1__WEBPACK_IMPORTED_MODULE_2__.onGroupRemovedEvent),
/* harmony export */   "onGyroscopeChange": () => (/* reexport safe */ _BaseKit_3_3_10__WEBPACK_IMPORTED_MODULE_0__.onGyroscopeChange),
/* harmony export */   "onLeaveBeaconFence": () => (/* reexport safe */ _DeviceKit_3_3_1__WEBPACK_IMPORTED_MODULE_2__.onLeaveBeaconFence),
/* harmony export */   "onMemoryWarning": () => (/* reexport safe */ _BaseKit_3_3_10__WEBPACK_IMPORTED_MODULE_0__.onMemoryWarning),
/* harmony export */   "onMqttConnectState": () => (/* reexport safe */ _DeviceKit_3_3_1__WEBPACK_IMPORTED_MODULE_2__.onMqttConnectState),
/* harmony export */   "onMqttMessageReceived": () => (/* reexport safe */ _DeviceKit_3_3_1__WEBPACK_IMPORTED_MODULE_2__.onMqttMessageReceived),
/* harmony export */   "onNativeEvent": () => (/* reexport safe */ _MiniKit_3_1_0__WEBPACK_IMPORTED_MODULE_3__.onNativeEvent),
/* harmony export */   "onNetworkStatusChange": () => (/* reexport safe */ _BaseKit_3_3_10__WEBPACK_IMPORTED_MODULE_0__.onNetworkStatusChange),
/* harmony export */   "onReceiveMessage": () => (/* reexport safe */ _BizKit_3_2_7__WEBPACK_IMPORTED_MODULE_1__.onReceiveMessage),
/* harmony export */   "onReceivedThingModelMessage": () => (/* reexport safe */ _DeviceKit_3_3_1__WEBPACK_IMPORTED_MODULE_2__.onReceivedThingModelMessage),
/* harmony export */   "onRecordingEvent": () => (/* reexport safe */ _BaseKit_3_3_10__WEBPACK_IMPORTED_MODULE_0__.onRecordingEvent),
/* harmony export */   "onRouterEvent": () => (/* reexport safe */ _BizKit_3_2_7__WEBPACK_IMPORTED_MODULE_1__.onRouterEvent),
/* harmony export */   "onRouterResult": () => (/* reexport safe */ _BizKit_3_2_7__WEBPACK_IMPORTED_MODULE_1__.onRouterResult),
/* harmony export */   "onSocketMessageReceived": () => (/* reexport safe */ _DeviceKit_3_3_1__WEBPACK_IMPORTED_MODULE_2__.onSocketMessageReceived),
/* harmony export */   "onSubDeviceAdded": () => (/* reexport safe */ _DeviceKit_3_3_1__WEBPACK_IMPORTED_MODULE_2__.onSubDeviceAdded),
/* harmony export */   "onSubDeviceDpUpdate": () => (/* reexport safe */ _DeviceKit_3_3_1__WEBPACK_IMPORTED_MODULE_2__.onSubDeviceDpUpdate),
/* harmony export */   "onSubDeviceInfoUpdate": () => (/* reexport safe */ _DeviceKit_3_3_1__WEBPACK_IMPORTED_MODULE_2__.onSubDeviceInfoUpdate),
/* harmony export */   "onSubDeviceInfoUpdateEvent": () => (/* reexport safe */ _DeviceKit_3_3_1__WEBPACK_IMPORTED_MODULE_2__.onSubDeviceInfoUpdateEvent),
/* harmony export */   "onSubDeviceRemoved": () => (/* reexport safe */ _DeviceKit_3_3_1__WEBPACK_IMPORTED_MODULE_2__.onSubDeviceRemoved),
/* harmony export */   "onSystemVolumeChangeEvent": () => (/* reexport safe */ _BaseKit_3_3_10__WEBPACK_IMPORTED_MODULE_0__.onSystemVolumeChangeEvent),
/* harmony export */   "onTimerUpdate": () => (/* reexport safe */ _DeviceKit_3_3_1__WEBPACK_IMPORTED_MODULE_2__.onTimerUpdate),
/* harmony export */   "onUploadProgressUpdate": () => (/* reexport safe */ _BizKit_3_2_7__WEBPACK_IMPORTED_MODULE_1__.onUploadProgressUpdate),
/* harmony export */   "openAppSystemSettingPage": () => (/* reexport safe */ _BizKit_3_2_7__WEBPACK_IMPORTED_MODULE_1__.openAppSystemSettingPage),
/* harmony export */   "openCategoryActivatorPage": () => (/* reexport safe */ _DeviceKit_3_3_1__WEBPACK_IMPORTED_MODULE_2__.openCategoryActivatorPage),
/* harmony export */   "openCountrySelectPage": () => (/* reexport safe */ _BizKit_3_2_7__WEBPACK_IMPORTED_MODULE_1__.openCountrySelectPage),
/* harmony export */   "openDeviceDetailPage": () => (/* reexport safe */ _DeviceKit_3_3_1__WEBPACK_IMPORTED_MODULE_2__.openDeviceDetailPage),
/* harmony export */   "openDeviceEdit": () => (/* reexport safe */ _DeviceKit_3_3_1__WEBPACK_IMPORTED_MODULE_2__.openDeviceEdit),
/* harmony export */   "openDeviceExecutionAndAnutomation": () => (/* reexport safe */ _DeviceKit_3_3_1__WEBPACK_IMPORTED_MODULE_2__.openDeviceExecutionAndAnutomation),
/* harmony export */   "openDeviceInfo": () => (/* reexport safe */ _DeviceKit_3_3_1__WEBPACK_IMPORTED_MODULE_2__.openDeviceInfo),
/* harmony export */   "openDeviceQuestionsAndFeedback": () => (/* reexport safe */ _DeviceKit_3_3_1__WEBPACK_IMPORTED_MODULE_2__.openDeviceQuestionsAndFeedback),
/* harmony export */   "openDeviceWifiNetworkMonitorPage": () => (/* reexport safe */ _DeviceKit_3_3_1__WEBPACK_IMPORTED_MODULE_2__.openDeviceWifiNetworkMonitorPage),
/* harmony export */   "openGroupDetailPage": () => (/* reexport safe */ _DeviceKit_3_3_1__WEBPACK_IMPORTED_MODULE_2__.openGroupDetailPage),
/* harmony export */   "openGroupEdit": () => (/* reexport safe */ _DeviceKit_3_3_1__WEBPACK_IMPORTED_MODULE_2__.openGroupEdit),
/* harmony export */   "openGroupTimerPage": () => (/* reexport safe */ _DeviceKit_3_3_1__WEBPACK_IMPORTED_MODULE_2__.openGroupTimerPage),
/* harmony export */   "openHelpCenter": () => (/* reexport safe */ _MiniKit_3_1_0__WEBPACK_IMPORTED_MODULE_3__.openHelpCenter),
/* harmony export */   "openInnerH5": () => (/* reexport safe */ _BizKit_3_2_7__WEBPACK_IMPORTED_MODULE_1__.openInnerH5),
/* harmony export */   "openMeshLocalGroup": () => (/* reexport safe */ _DeviceKit_3_3_1__WEBPACK_IMPORTED_MODULE_2__.openMeshLocalGroup),
/* harmony export */   "openMiniWidget": () => (/* reexport safe */ _BaseKit_3_3_10__WEBPACK_IMPORTED_MODULE_0__.openMiniWidget),
/* harmony export */   "openOTAUpgrade": () => (/* reexport safe */ _DeviceKit_3_3_1__WEBPACK_IMPORTED_MODULE_2__.openOTAUpgrade),
/* harmony export */   "openPanel": () => (/* reexport safe */ _BizKit_3_2_7__WEBPACK_IMPORTED_MODULE_1__.openPanel),
/* harmony export */   "openPreConditionPage": () => (/* reexport safe */ _DeviceKit_3_3_1__WEBPACK_IMPORTED_MODULE_2__.openPreConditionPage),
/* harmony export */   "openRNPanel": () => (/* reexport safe */ _BizKit_3_2_7__WEBPACK_IMPORTED_MODULE_1__.openRNPanel),
/* harmony export */   "openRecommendSceneDetail": () => (/* reexport safe */ _DeviceKit_3_3_1__WEBPACK_IMPORTED_MODULE_2__.openRecommendSceneDetail),
/* harmony export */   "openReconnectPage": () => (/* reexport safe */ _DeviceKit_3_3_1__WEBPACK_IMPORTED_MODULE_2__.openReconnectPage),
/* harmony export */   "openSetting": () => (/* reexport safe */ _MiniKit_3_1_0__WEBPACK_IMPORTED_MODULE_3__.openSetting),
/* harmony export */   "openShareDevice": () => (/* reexport safe */ _DeviceKit_3_3_1__WEBPACK_IMPORTED_MODULE_2__.openShareDevice),
/* harmony export */   "openSystemBluetoothSetting": () => (/* reexport safe */ _BaseKit_3_3_10__WEBPACK_IMPORTED_MODULE_0__.openSystemBluetoothSetting),
/* harmony export */   "openSystemSettingPage": () => (/* reexport safe */ _BizKit_3_2_7__WEBPACK_IMPORTED_MODULE_1__.openSystemSettingPage),
/* harmony export */   "openTimerPage": () => (/* reexport safe */ _DeviceKit_3_3_1__WEBPACK_IMPORTED_MODULE_2__.openTimerPage),
/* harmony export */   "openURL": () => (/* reexport safe */ _MiniKit_3_1_0__WEBPACK_IMPORTED_MODULE_3__.openURL),
/* harmony export */   "playnet": () => (/* reexport safe */ _PlayNetKit_1_1_3__WEBPACK_IMPORTED_MODULE_4__.playnet),
/* harmony export */   "postBLEBigDataChannelWithProgress": () => (/* reexport safe */ _DeviceKit_3_3_1__WEBPACK_IMPORTED_MODULE_2__.postBLEBigDataChannelWithProgress),
/* harmony export */   "postBLEFileTransfer": () => (/* reexport safe */ _DeviceKit_3_3_1__WEBPACK_IMPORTED_MODULE_2__.postBLEFileTransfer),
/* harmony export */   "preDownloadMiniApp": () => (/* reexport safe */ _MiniKit_3_1_0__WEBPACK_IMPORTED_MODULE_3__.preDownloadMiniApp),
/* harmony export */   "preloadPanel": () => (/* reexport safe */ _BizKit_3_2_7__WEBPACK_IMPORTED_MODULE_1__.preloadPanel),
/* harmony export */   "previewImage": () => (/* reexport safe */ _BaseKit_3_3_10__WEBPACK_IMPORTED_MODULE_0__.previewImage),
/* harmony export */   "publishBLETransparentData": () => (/* reexport safe */ _DeviceKit_3_3_1__WEBPACK_IMPORTED_MODULE_2__.publishBLETransparentData),
/* harmony export */   "publishCommands": () => (/* reexport safe */ _DeviceKit_3_3_1__WEBPACK_IMPORTED_MODULE_2__.publishCommands),
/* harmony export */   "publishDps": () => (/* reexport safe */ _DeviceKit_3_3_1__WEBPACK_IMPORTED_MODULE_2__.publishDps),
/* harmony export */   "publishDpsWithPipeType": () => (/* reexport safe */ _DeviceKit_3_3_1__WEBPACK_IMPORTED_MODULE_2__.publishDpsWithPipeType),
/* harmony export */   "publishGroupDpCodes": () => (/* reexport safe */ _DeviceKit_3_3_1__WEBPACK_IMPORTED_MODULE_2__.publishGroupDpCodes),
/* harmony export */   "publishGroupDps": () => (/* reexport safe */ _DeviceKit_3_3_1__WEBPACK_IMPORTED_MODULE_2__.publishGroupDps),
/* harmony export */   "publishLanMessage": () => (/* reexport safe */ _DeviceKit_3_3_1__WEBPACK_IMPORTED_MODULE_2__.publishLanMessage),
/* harmony export */   "publishMqttMessage": () => (/* reexport safe */ _DeviceKit_3_3_1__WEBPACK_IMPORTED_MODULE_2__.publishMqttMessage),
/* harmony export */   "publishSigMeshMultiDps": () => (/* reexport safe */ _DeviceKit_3_3_1__WEBPACK_IMPORTED_MODULE_2__.publishSigMeshMultiDps),
/* harmony export */   "publishSocketMessage": () => (/* reexport safe */ _DeviceKit_3_3_1__WEBPACK_IMPORTED_MODULE_2__.publishSocketMessage),
/* harmony export */   "publishThingModelMessage": () => (/* reexport safe */ _DeviceKit_3_3_1__WEBPACK_IMPORTED_MODULE_2__.publishThingModelMessage),
/* harmony export */   "queryDps": () => (/* reexport safe */ _DeviceKit_3_3_1__WEBPACK_IMPORTED_MODULE_2__.queryDps),
/* harmony export */   "reLaunch": () => (/* reexport safe */ _MiniKit_3_1_0__WEBPACK_IMPORTED_MODULE_3__.reLaunch),
/* harmony export */   "readBeaconFenceConfig": () => (/* reexport safe */ _DeviceKit_3_3_1__WEBPACK_IMPORTED_MODULE_2__.readBeaconFenceConfig),
/* harmony export */   "redirectTo": () => (/* reexport safe */ _MiniKit_3_1_0__WEBPACK_IMPORTED_MODULE_3__.redirectTo),
/* harmony export */   "registerChannel": () => (/* reexport safe */ _BizKit_3_2_7__WEBPACK_IMPORTED_MODULE_1__.registerChannel),
/* harmony export */   "registerDeviceListListener": () => (/* reexport safe */ _DeviceKit_3_3_1__WEBPACK_IMPORTED_MODULE_2__.registerDeviceListListener),
/* harmony export */   "registerGateWaySubDeviceListener": () => (/* reexport safe */ _DeviceKit_3_3_1__WEBPACK_IMPORTED_MODULE_2__.registerGateWaySubDeviceListener),
/* harmony export */   "registerGroupChange": () => (/* reexport safe */ _DeviceKit_3_3_1__WEBPACK_IMPORTED_MODULE_2__.registerGroupChange),
/* harmony export */   "registerLeaveBeaconFenceEvent": () => (/* reexport safe */ _DeviceKit_3_3_1__WEBPACK_IMPORTED_MODULE_2__.registerLeaveBeaconFenceEvent),
/* harmony export */   "registerMQTTDeviceListener": () => (/* reexport safe */ _DeviceKit_3_3_1__WEBPACK_IMPORTED_MODULE_2__.registerMQTTDeviceListener),
/* harmony export */   "registerMQTTProtocolListener": () => (/* reexport safe */ _DeviceKit_3_3_1__WEBPACK_IMPORTED_MODULE_2__.registerMQTTProtocolListener),
/* harmony export */   "registerSystemVolumeChange": () => (/* reexport safe */ _BaseKit_3_3_10__WEBPACK_IMPORTED_MODULE_0__.registerSystemVolumeChange),
/* harmony export */   "registerTopicListListener": () => (/* reexport safe */ _DeviceKit_3_3_1__WEBPACK_IMPORTED_MODULE_2__.registerTopicListListener),
/* harmony export */   "registerZigbeeGateWaySubDeviceListener": () => (/* reexport safe */ _DeviceKit_3_3_1__WEBPACK_IMPORTED_MODULE_2__.registerZigbeeGateWaySubDeviceListener),
/* harmony export */   "removeDevice": () => (/* reexport safe */ _DeviceKit_3_3_1__WEBPACK_IMPORTED_MODULE_2__.removeDevice),
/* harmony export */   "removeShareDevice": () => (/* reexport safe */ _DeviceKit_3_3_1__WEBPACK_IMPORTED_MODULE_2__.removeShareDevice),
/* harmony export */   "removeStorage": () => (/* reexport safe */ _BaseKit_3_3_10__WEBPACK_IMPORTED_MODULE_0__.removeStorage),
/* harmony export */   "removeStorageSync": () => (/* reexport safe */ _BaseKit_3_3_10__WEBPACK_IMPORTED_MODULE_0__.removeStorageSync),
/* harmony export */   "removeTabBarBadge": () => (/* reexport safe */ _MiniKit_3_1_0__WEBPACK_IMPORTED_MODULE_3__.removeTabBarBadge),
/* harmony export */   "removeTimer": () => (/* reexport safe */ _DeviceKit_3_3_1__WEBPACK_IMPORTED_MODULE_2__.removeTimer),
/* harmony export */   "renameDeviceName": () => (/* reexport safe */ _DeviceKit_3_3_1__WEBPACK_IMPORTED_MODULE_2__.renameDeviceName),
/* harmony export */   "request": () => (/* reexport safe */ _BaseKit_3_3_10__WEBPACK_IMPORTED_MODULE_0__.request),
/* harmony export */   "resetFactory": () => (/* reexport safe */ _DeviceKit_3_3_1__WEBPACK_IMPORTED_MODULE_2__.resetFactory),
/* harmony export */   "resizeImage": () => (/* reexport safe */ _BizKit_3_2_7__WEBPACK_IMPORTED_MODULE_1__.resizeImage),
/* harmony export */   "rotateImage": () => (/* reexport safe */ _BizKit_3_2_7__WEBPACK_IMPORTED_MODULE_1__.rotateImage),
/* harmony export */   "router": () => (/* reexport safe */ _BizKit_3_2_7__WEBPACK_IMPORTED_MODULE_1__.router),
/* harmony export */   "saveSceneAction": () => (/* reexport safe */ _DeviceKit_3_3_1__WEBPACK_IMPORTED_MODULE_2__.saveSceneAction),
/* harmony export */   "saveToAlbum": () => (/* reexport safe */ _BizKit_3_2_7__WEBPACK_IMPORTED_MODULE_1__.saveToAlbum),
/* harmony export */   "saveVideoToPhotosAlbum": () => (/* reexport safe */ _BaseKit_3_3_10__WEBPACK_IMPORTED_MODULE_0__.saveVideoToPhotosAlbum),
/* harmony export */   "scanCode": () => (/* reexport safe */ _BaseKit_3_3_10__WEBPACK_IMPORTED_MODULE_0__.scanCode),
/* harmony export */   "sendMqttMessage": () => (/* reexport safe */ _DeviceKit_3_3_1__WEBPACK_IMPORTED_MODULE_2__.sendMqttMessage),
/* harmony export */   "setBoardIcon": () => (/* reexport safe */ _MiniKit_3_1_0__WEBPACK_IMPORTED_MODULE_3__.setBoardIcon),
/* harmony export */   "setBoardIconSync": () => (/* reexport safe */ _MiniKit_3_1_0__WEBPACK_IMPORTED_MODULE_3__.setBoardIconSync),
/* harmony export */   "setBoardTitle": () => (/* reexport safe */ _MiniKit_3_1_0__WEBPACK_IMPORTED_MODULE_3__.setBoardTitle),
/* harmony export */   "setBoardTitleSync": () => (/* reexport safe */ _MiniKit_3_1_0__WEBPACK_IMPORTED_MODULE_3__.setBoardTitleSync),
/* harmony export */   "setClipboardData": () => (/* reexport safe */ _BaseKit_3_3_10__WEBPACK_IMPORTED_MODULE_0__.setClipboardData),
/* harmony export */   "setDeviceProperty": () => (/* reexport safe */ _DeviceKit_3_3_1__WEBPACK_IMPORTED_MODULE_2__.setDeviceProperty),
/* harmony export */   "setGroupProperty": () => (/* reexport safe */ _DeviceKit_3_3_1__WEBPACK_IMPORTED_MODULE_2__.setGroupProperty),
/* harmony export */   "setKeepScreenOn": () => (/* reexport safe */ _BaseKit_3_3_10__WEBPACK_IMPORTED_MODULE_0__.setKeepScreenOn),
/* harmony export */   "setNavigationBarColor": () => (/* reexport safe */ _MiniKit_3_1_0__WEBPACK_IMPORTED_MODULE_3__.setNavigationBarColor),
/* harmony export */   "setNavigationBarTitle": () => (/* reexport safe */ _MiniKit_3_1_0__WEBPACK_IMPORTED_MODULE_3__.setNavigationBarTitle),
/* harmony export */   "setPageOrientation": () => (/* reexport safe */ _MiniKit_3_1_0__WEBPACK_IMPORTED_MODULE_3__.setPageOrientation),
/* harmony export */   "setScreenBrightness": () => (/* reexport safe */ _BaseKit_3_3_10__WEBPACK_IMPORTED_MODULE_0__.setScreenBrightness),
/* harmony export */   "setStorage": () => (/* reexport safe */ _BaseKit_3_3_10__WEBPACK_IMPORTED_MODULE_0__.setStorage),
/* harmony export */   "setStorageSync": () => (/* reexport safe */ _BaseKit_3_3_10__WEBPACK_IMPORTED_MODULE_0__.setStorageSync),
/* harmony export */   "setTabBarBadge": () => (/* reexport safe */ _MiniKit_3_1_0__WEBPACK_IMPORTED_MODULE_3__.setTabBarBadge),
/* harmony export */   "setTabBarItem": () => (/* reexport safe */ _MiniKit_3_1_0__WEBPACK_IMPORTED_MODULE_3__.setTabBarItem),
/* harmony export */   "setTabBarStyle": () => (/* reexport safe */ _MiniKit_3_1_0__WEBPACK_IMPORTED_MODULE_3__.setTabBarStyle),
/* harmony export */   "share": () => (/* reexport safe */ _BizKit_3_2_7__WEBPACK_IMPORTED_MODULE_1__.share),
/* harmony export */   "showActionSheet": () => (/* reexport safe */ _BaseKit_3_3_10__WEBPACK_IMPORTED_MODULE_0__.showActionSheet),
/* harmony export */   "showBoardTitleIcon": () => (/* reexport safe */ _MiniKit_3_1_0__WEBPACK_IMPORTED_MODULE_3__.showBoardTitleIcon),
/* harmony export */   "showBoardTitleIconSync": () => (/* reexport safe */ _MiniKit_3_1_0__WEBPACK_IMPORTED_MODULE_3__.showBoardTitleIconSync),
/* harmony export */   "showLoading": () => (/* reexport safe */ _BaseKit_3_3_10__WEBPACK_IMPORTED_MODULE_0__.showLoading),
/* harmony export */   "showMenuButton": () => (/* reexport safe */ _MiniKit_3_1_0__WEBPACK_IMPORTED_MODULE_3__.showMenuButton),
/* harmony export */   "showModal": () => (/* reexport safe */ _BaseKit_3_3_10__WEBPACK_IMPORTED_MODULE_0__.showModal),
/* harmony export */   "showNavigationBarLoading": () => (/* reexport safe */ _MiniKit_3_1_0__WEBPACK_IMPORTED_MODULE_3__.showNavigationBarLoading),
/* harmony export */   "showSceneDialog": () => (/* reexport safe */ _DeviceKit_3_3_1__WEBPACK_IMPORTED_MODULE_2__.showSceneDialog),
/* harmony export */   "showStatusBar": () => (/* reexport safe */ _MiniKit_3_1_0__WEBPACK_IMPORTED_MODULE_3__.showStatusBar),
/* harmony export */   "showTabBar": () => (/* reexport safe */ _MiniKit_3_1_0__WEBPACK_IMPORTED_MODULE_3__.showTabBar),
/* harmony export */   "showTabBarRedDot": () => (/* reexport safe */ _MiniKit_3_1_0__WEBPACK_IMPORTED_MODULE_3__.showTabBarRedDot),
/* harmony export */   "showToast": () => (/* reexport safe */ _BaseKit_3_3_10__WEBPACK_IMPORTED_MODULE_0__.showToast),
/* harmony export */   "startAccelerometer": () => (/* reexport safe */ _BaseKit_3_3_10__WEBPACK_IMPORTED_MODULE_0__.startAccelerometer),
/* harmony export */   "startBLEMeshLowPowerConnection": () => (/* reexport safe */ _DeviceKit_3_3_1__WEBPACK_IMPORTED_MODULE_2__.startBLEMeshLowPowerConnection),
/* harmony export */   "startBLEScan": () => (/* reexport safe */ _DeviceKit_3_3_1__WEBPACK_IMPORTED_MODULE_2__.startBLEScan),
/* harmony export */   "startBLEScanBeacon": () => (/* reexport safe */ _DeviceKit_3_3_1__WEBPACK_IMPORTED_MODULE_2__.startBLEScanBeacon),
/* harmony export */   "startBLEScanBindDevice": () => (/* reexport safe */ _DeviceKit_3_3_1__WEBPACK_IMPORTED_MODULE_2__.startBLEScanBindDevice),
/* harmony export */   "startBLEScanSync": () => (/* reexport safe */ _DeviceKit_3_3_1__WEBPACK_IMPORTED_MODULE_2__.startBLEScanSync),
/* harmony export */   "startCompass": () => (/* reexport safe */ _BaseKit_3_3_10__WEBPACK_IMPORTED_MODULE_0__.startCompass),
/* harmony export */   "startDeviceMotionListening": () => (/* reexport safe */ _BaseKit_3_3_10__WEBPACK_IMPORTED_MODULE_0__.startDeviceMotionListening),
/* harmony export */   "startDeviceWifiActivator": () => (/* reexport safe */ _DeviceKit_3_3_1__WEBPACK_IMPORTED_MODULE_2__.startDeviceWifiActivator),
/* harmony export */   "startDirectlyConnectedDeviceActivator": () => (/* reexport safe */ _DeviceKit_3_3_1__WEBPACK_IMPORTED_MODULE_2__.startDirectlyConnectedDeviceActivator),
/* harmony export */   "startDirectlyConnectedSearchDevice": () => (/* reexport safe */ _DeviceKit_3_3_1__WEBPACK_IMPORTED_MODULE_2__.startDirectlyConnectedSearchDevice),
/* harmony export */   "startGWActivation": () => (/* reexport safe */ _DeviceKit_3_3_1__WEBPACK_IMPORTED_MODULE_2__.startGWActivation),
/* harmony export */   "startGyroscope": () => (/* reexport safe */ _BaseKit_3_3_10__WEBPACK_IMPORTED_MODULE_0__.startGyroscope),
/* harmony export */   "startPullDownRefresh": () => (/* reexport safe */ _MiniKit_3_1_0__WEBPACK_IMPORTED_MODULE_3__.startPullDownRefresh),
/* harmony export */   "stopAccelerometer": () => (/* reexport safe */ _BaseKit_3_3_10__WEBPACK_IMPORTED_MODULE_0__.stopAccelerometer),
/* harmony export */   "stopBLEMeshLowPowerConnection": () => (/* reexport safe */ _DeviceKit_3_3_1__WEBPACK_IMPORTED_MODULE_2__.stopBLEMeshLowPowerConnection),
/* harmony export */   "stopBLEScan": () => (/* reexport safe */ _DeviceKit_3_3_1__WEBPACK_IMPORTED_MODULE_2__.stopBLEScan),
/* harmony export */   "stopBLEScanBeacon": () => (/* reexport safe */ _DeviceKit_3_3_1__WEBPACK_IMPORTED_MODULE_2__.stopBLEScanBeacon),
/* harmony export */   "stopBLEScanSync": () => (/* reexport safe */ _DeviceKit_3_3_1__WEBPACK_IMPORTED_MODULE_2__.stopBLEScanSync),
/* harmony export */   "stopCompass": () => (/* reexport safe */ _BaseKit_3_3_10__WEBPACK_IMPORTED_MODULE_0__.stopCompass),
/* harmony export */   "stopDeviceMotionListening": () => (/* reexport safe */ _BaseKit_3_3_10__WEBPACK_IMPORTED_MODULE_0__.stopDeviceMotionListening),
/* harmony export */   "stopDirectlyConnectedDeviceActivator": () => (/* reexport safe */ _DeviceKit_3_3_1__WEBPACK_IMPORTED_MODULE_2__.stopDirectlyConnectedDeviceActivator),
/* harmony export */   "stopDirectlyConnectedSearchDevice": () => (/* reexport safe */ _DeviceKit_3_3_1__WEBPACK_IMPORTED_MODULE_2__.stopDirectlyConnectedSearchDevice),
/* harmony export */   "stopGWActivation": () => (/* reexport safe */ _DeviceKit_3_3_1__WEBPACK_IMPORTED_MODULE_2__.stopGWActivation),
/* harmony export */   "stopGyroscope": () => (/* reexport safe */ _BaseKit_3_3_10__WEBPACK_IMPORTED_MODULE_0__.stopGyroscope),
/* harmony export */   "stopPullDownRefresh": () => (/* reexport safe */ _MiniKit_3_1_0__WEBPACK_IMPORTED_MODULE_3__.stopPullDownRefresh),
/* harmony export */   "subscribeBLEConnectStatus": () => (/* reexport safe */ _DeviceKit_3_3_1__WEBPACK_IMPORTED_MODULE_2__.subscribeBLEConnectStatus),
/* harmony export */   "subscribeBLETransparentDataReport": () => (/* reexport safe */ _DeviceKit_3_3_1__WEBPACK_IMPORTED_MODULE_2__.subscribeBLETransparentDataReport),
/* harmony export */   "subscribeDeviceRemoved": () => (/* reexport safe */ _DeviceKit_3_3_1__WEBPACK_IMPORTED_MODULE_2__.subscribeDeviceRemoved),
/* harmony export */   "subscribeReceivedThingModelMessage": () => (/* reexport safe */ _DeviceKit_3_3_1__WEBPACK_IMPORTED_MODULE_2__.subscribeReceivedThingModelMessage),
/* harmony export */   "switchTab": () => (/* reexport safe */ _MiniKit_3_1_0__WEBPACK_IMPORTED_MODULE_3__.switchTab),
/* harmony export */   "syncDeviceInfo": () => (/* reexport safe */ _DeviceKit_3_3_1__WEBPACK_IMPORTED_MODULE_2__.syncDeviceInfo),
/* harmony export */   "syncTimerTask": () => (/* reexport safe */ _DeviceKit_3_3_1__WEBPACK_IMPORTED_MODULE_2__.syncTimerTask),
/* harmony export */   "toggleDeviceOfflineReminder": () => (/* reexport safe */ _DeviceKit_3_3_1__WEBPACK_IMPORTED_MODULE_2__.toggleDeviceOfflineReminder),
/* harmony export */   "trackEvent": () => (/* reexport safe */ _BizKit_3_2_7__WEBPACK_IMPORTED_MODULE_1__.trackEvent),
/* harmony export */   "unRegisterGroupChange": () => (/* reexport safe */ _DeviceKit_3_3_1__WEBPACK_IMPORTED_MODULE_2__.unRegisterGroupChange),
/* harmony export */   "unRegisterSystemVolumeChange": () => (/* reexport safe */ _BaseKit_3_3_10__WEBPACK_IMPORTED_MODULE_0__.unRegisterSystemVolumeChange),
/* harmony export */   "unSubscribeDeviceRemoved": () => (/* reexport safe */ _DeviceKit_3_3_1__WEBPACK_IMPORTED_MODULE_2__.unSubscribeDeviceRemoved),
/* harmony export */   "unSubscribeReceivedThingModelMessage": () => (/* reexport safe */ _DeviceKit_3_3_1__WEBPACK_IMPORTED_MODULE_2__.unSubscribeReceivedThingModelMessage),
/* harmony export */   "unregisterDeviceListListener": () => (/* reexport safe */ _DeviceKit_3_3_1__WEBPACK_IMPORTED_MODULE_2__.unregisterDeviceListListener),
/* harmony export */   "unregisterGateWaySubDeviceListener": () => (/* reexport safe */ _DeviceKit_3_3_1__WEBPACK_IMPORTED_MODULE_2__.unregisterGateWaySubDeviceListener),
/* harmony export */   "unregisterLeaveBeaconFenceEvent": () => (/* reexport safe */ _DeviceKit_3_3_1__WEBPACK_IMPORTED_MODULE_2__.unregisterLeaveBeaconFenceEvent),
/* harmony export */   "unregisterMQTTDeviceListener": () => (/* reexport safe */ _DeviceKit_3_3_1__WEBPACK_IMPORTED_MODULE_2__.unregisterMQTTDeviceListener),
/* harmony export */   "unregisterMQTTProtocolListener": () => (/* reexport safe */ _DeviceKit_3_3_1__WEBPACK_IMPORTED_MODULE_2__.unregisterMQTTProtocolListener),
/* harmony export */   "unregisterTopicListListener": () => (/* reexport safe */ _DeviceKit_3_3_1__WEBPACK_IMPORTED_MODULE_2__.unregisterTopicListListener),
/* harmony export */   "unregisterZigbeeGateWaySubDeviceListener": () => (/* reexport safe */ _DeviceKit_3_3_1__WEBPACK_IMPORTED_MODULE_2__.unregisterZigbeeGateWaySubDeviceListener),
/* harmony export */   "unsubscribeBLEConnectStatus": () => (/* reexport safe */ _DeviceKit_3_3_1__WEBPACK_IMPORTED_MODULE_2__.unsubscribeBLEConnectStatus),
/* harmony export */   "unsubscribeBLETransparentDataReport": () => (/* reexport safe */ _DeviceKit_3_3_1__WEBPACK_IMPORTED_MODULE_2__.unsubscribeBLETransparentDataReport),
/* harmony export */   "updateDeviceThingModelInfo": () => (/* reexport safe */ _DeviceKit_3_3_1__WEBPACK_IMPORTED_MODULE_2__.updateDeviceThingModelInfo),
/* harmony export */   "updateTimer": () => (/* reexport safe */ _DeviceKit_3_3_1__WEBPACK_IMPORTED_MODULE_2__.updateTimer),
/* harmony export */   "updateTimerStatus": () => (/* reexport safe */ _DeviceKit_3_3_1__WEBPACK_IMPORTED_MODULE_2__.updateTimerStatus),
/* harmony export */   "updateVolume": () => (/* reexport safe */ _BaseKit_3_3_10__WEBPACK_IMPORTED_MODULE_0__.updateVolume),
/* harmony export */   "uploadFile": () => (/* reexport safe */ _BaseKit_3_3_10__WEBPACK_IMPORTED_MODULE_0__.uploadFile),
/* harmony export */   "uploadImage": () => (/* reexport safe */ _BizKit_3_2_7__WEBPACK_IMPORTED_MODULE_1__.uploadImage),
/* harmony export */   "validDeviceOnlineType": () => (/* reexport safe */ _DeviceKit_3_3_1__WEBPACK_IMPORTED_MODULE_2__.validDeviceOnlineType),
/* harmony export */   "vibrateLong": () => (/* reexport safe */ _BaseKit_3_3_10__WEBPACK_IMPORTED_MODULE_0__.vibrateLong),
/* harmony export */   "vibrateShort": () => (/* reexport safe */ _BaseKit_3_3_10__WEBPACK_IMPORTED_MODULE_0__.vibrateShort),
/* harmony export */   "writeBeaconFenceConfig": () => (/* reexport safe */ _DeviceKit_3_3_1__WEBPACK_IMPORTED_MODULE_2__.writeBeaconFenceConfig)
/* harmony export */ });
/* harmony import */ var _BaseKit_3_3_10__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BaseKit-3.3.10 */ "./node_modules/@ray-js/api/lib/BaseKit-3.3.10.js");
/* harmony import */ var _BizKit_3_2_7__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BizKit-3.2.7 */ "./node_modules/@ray-js/api/lib/BizKit-3.2.7.js");
/* harmony import */ var _DeviceKit_3_3_1__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DeviceKit-3.3.1 */ "./node_modules/@ray-js/api/lib/DeviceKit-3.3.1.js");
/* harmony import */ var _MiniKit_3_1_0__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MiniKit-3.1.0 */ "./node_modules/@ray-js/api/lib/MiniKit-3.1.0.js");
/* harmony import */ var _PlayNetKit_1_1_3__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./PlayNetKit-1.1.3 */ "./node_modules/@ray-js/api/lib/PlayNetKit-1.1.3.js");








/***/ }),

/***/ "./node_modules/@ray-js/api/lib/cloud/alarm.js":
/*!*****************************************************!*\
  !*** ./node_modules/@ray-js/api/lib/cloud/alarm.js ***!
  \*****************************************************/
/* istanbul ignore next */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getDevAlarmList": () => (/* binding */ getDevAlarmList),
/* harmony export */   "setAlarmSwitch": () => (/* binding */ setAlarmSwitch)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ */ "./node_modules/@ray-js/api/lib/requestCloud/index.wechat.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants */ "./node_modules/@ray-js/api/lib/constants.js");

// 告警相关接口



/**
 * 根据设备 ID 查询告警列表信息
 * @param {string} devId 设备Id
 */
var getDevAlarmList = function (devId) {
  return (0,___WEBPACK_IMPORTED_MODULE_1__["default"])({
    api: "".concat(_constants__WEBPACK_IMPORTED_MODULE_2__.THING, ".m.linkage.rule.product.query"),
    version: '1.0',
    data: {
      devId: devId
    }
  });
};
/**
 * 启用或者禁用设备的告警
 * @param {string} devId 设备Id
 * @param {string} ruleIds 要开启或关闭的告警id, 用","隔开
 * @param {bool} disabled 是否禁用
 */

var setAlarmSwitch = function (params) {
  return (0,___WEBPACK_IMPORTED_MODULE_1__["default"])({
    api: "".concat(_constants__WEBPACK_IMPORTED_MODULE_2__.THING, ".m.linkage.dev.warn.set"),
    version: '1.0',
    data: (0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, params)
  });
};


/***/ }),

/***/ "./node_modules/@ray-js/api/lib/cloud/core.js":
/*!****************************************************!*\
  !*** ./node_modules/@ray-js/api/lib/cloud/core.js ***!
  \****************************************************/
/* istanbul ignore next */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getAssetHostname": () => (/* binding */ getAssetHostname)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ */ "./node_modules/@ray-js/api/lib/requestCloud/index.wechat.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ "./node_modules/@ray-js/api/lib/constants.js");
// 通用核心接口


/**
 * 获取 App 面板内静态资源地址
 */

var getAssetHostname = function () {
  return (0,___WEBPACK_IMPORTED_MODULE_0__["default"])({
    api: "".concat(_constants__WEBPACK_IMPORTED_MODULE_1__.THING, ".m.app.panel.url.get"),
    version: '1.0',
    data: {}
  });
};


/***/ }),

/***/ "./node_modules/@ray-js/api/lib/cloud/device.js":
/*!******************************************************!*\
  !*** ./node_modules/@ray-js/api/lib/cloud/device.js ***!
  \******************************************************/
/* istanbul ignore next */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getCustomizePosition": () => (/* binding */ getCustomizePosition),
/* harmony export */   "getDevProperty": () => (/* binding */ getDevProperty),
/* harmony export */   "getDpsInfos": () => (/* binding */ getDpsInfos),
/* harmony export */   "getGroupDpsInfos": () => (/* binding */ getGroupDpsInfos),
/* harmony export */   "getWeatherQuality": () => (/* binding */ getWeatherQuality),
/* harmony export */   "getWeathers": () => (/* binding */ getWeathers),
/* harmony export */   "saveCustomizePosition": () => (/* binding */ saveCustomizePosition),
/* harmony export */   "saveDevProperty": () => (/* binding */ saveDevProperty),
/* harmony export */   "updateDpName": () => (/* binding */ updateDpName),
/* harmony export */   "updateGroupDpName": () => (/* binding */ updateGroupDpName)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ */ "./node_modules/@ray-js/api/lib/requestCloud/index.wechat.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants */ "./node_modules/@ray-js/api/lib/constants.js");

// 设备接口



/**
 * 获取设备所有 DP 信息
 * @param {string} gwId 设备Id
 * @param {string} devId 设备Id
 */
var getDpsInfos = function (params) {
  return (0,___WEBPACK_IMPORTED_MODULE_1__["default"])({
    api: 's.m.dev.dp.get',
    version: '2.0',
    data: (0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, params)
  });
};
/**
 * 更新设备 DP 名称
 * @param {string} gwId 设备Id
 * @param {string} devId 设备Id
 * @param {string} dpId dpId
 * @param {string} name dp自定义名称
 */

var updateDpName = function (params) {
  return (0,___WEBPACK_IMPORTED_MODULE_1__["default"])({
    api: 's.m.dev.dp.name.update',
    version: '1.0',
    data: (0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, params)
  });
};
/**
 * 获取群组设备所有 DP 信息
 * @param {string} groupId 群组id
 */

var getGroupDpsInfos = function (groupId) {
  return (0,___WEBPACK_IMPORTED_MODULE_1__["default"])({
    api: 's.m.dev.group.dp.get',
    version: '2.0',
    data: {
      groupId: groupId
    }
  });
};
/**
 * 更新群组设备 DP 名称
 * @param {string} groupId 群组id
 * @param {string} dpId dpId
 * @param {string} name dp自定义名称
 */

var updateGroupDpName = function (params) {
  return (0,___WEBPACK_IMPORTED_MODULE_1__["default"])({
    api: "".concat(_constants__WEBPACK_IMPORTED_MODULE_2__.THING, ".m.group.dpname.update"),
    version: '1.0',
    data: (0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, params)
  });
};
/**
 * 通过设备 ID 获取当天天气
 * @param {string} devId 设备Id
 * @param {boolean} isLocal 要查询的信息
 */

var getWeatherQuality = function (params) {
  return (0,___WEBPACK_IMPORTED_MODULE_1__["default"])({
    api: "".concat(_constants__WEBPACK_IMPORTED_MODULE_2__.THING, ".m.public.weather.get"),
    version: '2.0',
    data: (0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, params)
  });
};
/**
 * 天气预报接口
 * @param {string} devId 设备Id
 * @param {number} dataRange 预报天数（默认值为 7，最大可预报天数为 7）
 */

var getWeathers = function (params) {
  return (0,___WEBPACK_IMPORTED_MODULE_1__["default"])({
    api: "".concat(_constants__WEBPACK_IMPORTED_MODULE_2__.THING, ".m.public.weathers.get"),
    version: '2.0',
    data: (0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, params)
  });
};
/**
 * 创建设备自定义位置信息
 * @param {string} devId 设备Id
 * @param {string} lon 经度
 * @param {string} lat 纬度
 * @param {string} locationName 位置名称（目前没用，不影响天气返回结果）
 */

var saveCustomizePosition = function (params) {
  return (0,___WEBPACK_IMPORTED_MODULE_1__["default"])({
    api: "".concat(_constants__WEBPACK_IMPORTED_MODULE_2__.THING, ".m.device.customize.position.save"),
    version: '1.0',
    data: (0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, params)
  });
};
/**
 * 设备自定义位置信息获取
 * @param {string} devId 设备Id
 */

var getCustomizePosition = function (params) {
  return (0,___WEBPACK_IMPORTED_MODULE_1__["default"])({
    api: "".concat(_constants__WEBPACK_IMPORTED_MODULE_2__.THING, ".m.device.customize.position.get"),
    version: '1.0',
    data: (0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, params)
  });
};
/**
 * 获取设备属性
 * @param {string} devId 设备Id
 */

var getDevProperty = function (params) {
  return (0,___WEBPACK_IMPORTED_MODULE_1__["default"])({
    api: 's.m.dev.property.get',
    version: '3.2',
    data: (0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, params)
  });
};
/**
 * 保存设备属性
 * @param {string} devId 设备Id
 */

var saveDevProperty = function (params) {
  return (0,___WEBPACK_IMPORTED_MODULE_1__["default"])({
    api: 's.m.dev.property.save',
    version: '5.1',
    data: (0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, params)
  });
};


/***/ }),

/***/ "./node_modules/@ray-js/api/lib/cloud/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/@ray-js/api/lib/cloud/index.js ***!
  \*****************************************************/
/* istanbul ignore next */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addAstronomical": () => (/* reexport safe */ _timer__WEBPACK_IMPORTED_MODULE_1__.addAstronomical),
/* harmony export */   "addGroupTimer": () => (/* reexport safe */ _timer__WEBPACK_IMPORTED_MODULE_1__.addGroupTimer),
/* harmony export */   "addSingleTimer": () => (/* reexport safe */ _timer__WEBPACK_IMPORTED_MODULE_1__.addSingleTimer),
/* harmony export */   "bindRule": () => (/* reexport safe */ _linkage__WEBPACK_IMPORTED_MODULE_5__.bindRule),
/* harmony export */   "disableRule": () => (/* reexport safe */ _linkage__WEBPACK_IMPORTED_MODULE_5__.disableRule),
/* harmony export */   "enableRule": () => (/* reexport safe */ _linkage__WEBPACK_IMPORTED_MODULE_5__.enableRule),
/* harmony export */   "getAssetHostname": () => (/* reexport safe */ _core__WEBPACK_IMPORTED_MODULE_0__.getAssetHostname),
/* harmony export */   "getAstronomicalList": () => (/* reexport safe */ _timer__WEBPACK_IMPORTED_MODULE_1__.getAstronomicalList),
/* harmony export */   "getBindRuleList": () => (/* reexport safe */ _linkage__WEBPACK_IMPORTED_MODULE_5__.getBindRuleList),
/* harmony export */   "getCustomizePosition": () => (/* reexport safe */ _device__WEBPACK_IMPORTED_MODULE_4__.getCustomizePosition),
/* harmony export */   "getDataWithSpecified": () => (/* reexport safe */ _statistic__WEBPACK_IMPORTED_MODULE_3__.getDataWithSpecified),
/* harmony export */   "getDevAlarmList": () => (/* reexport safe */ _alarm__WEBPACK_IMPORTED_MODULE_2__.getDevAlarmList),
/* harmony export */   "getDevProperty": () => (/* reexport safe */ _device__WEBPACK_IMPORTED_MODULE_4__.getDevProperty),
/* harmony export */   "getDpAllStatistResult": () => (/* reexport safe */ _statistic__WEBPACK_IMPORTED_MODULE_3__.getDpAllStatistResult),
/* harmony export */   "getDpLastTimer": () => (/* reexport safe */ _timer__WEBPACK_IMPORTED_MODULE_1__.getDpLastTimer),
/* harmony export */   "getDpLogDays": () => (/* reexport safe */ _statistic__WEBPACK_IMPORTED_MODULE_3__.getDpLogDays),
/* harmony export */   "getDpReportLog": () => (/* reexport safe */ _statistic__WEBPACK_IMPORTED_MODULE_3__.getDpReportLog),
/* harmony export */   "getDpResultByHour": () => (/* reexport safe */ _statistic__WEBPACK_IMPORTED_MODULE_3__.getDpResultByHour),
/* harmony export */   "getDpResultByMonth": () => (/* reexport safe */ _statistic__WEBPACK_IMPORTED_MODULE_3__.getDpResultByMonth),
/* harmony export */   "getDpsInfos": () => (/* reexport safe */ _device__WEBPACK_IMPORTED_MODULE_4__.getDpsInfos),
/* harmony export */   "getDpsLastTimer": () => (/* reexport safe */ _timer__WEBPACK_IMPORTED_MODULE_1__.getDpsLastTimer),
/* harmony export */   "getGroupDpsInfos": () => (/* reexport safe */ _device__WEBPACK_IMPORTED_MODULE_4__.getGroupDpsInfos),
/* harmony export */   "getLastTimerPeriod": () => (/* reexport safe */ _timer__WEBPACK_IMPORTED_MODULE_1__.getLastTimerPeriod),
/* harmony export */   "getLinkageDeviceList": () => (/* reexport safe */ _linkage__WEBPACK_IMPORTED_MODULE_5__.getLinkageDeviceList),
/* harmony export */   "getLogInSpecifiedTime": () => (/* reexport safe */ _statistic__WEBPACK_IMPORTED_MODULE_3__.getLogInSpecifiedTime),
/* harmony export */   "getLogUserAction": () => (/* reexport safe */ _statistic__WEBPACK_IMPORTED_MODULE_3__.getLogUserAction),
/* harmony export */   "getMonthWithSpecified": () => (/* reexport safe */ _statistic__WEBPACK_IMPORTED_MODULE_3__.getMonthWithSpecified),
/* harmony export */   "getMultiDpsAllResult": () => (/* reexport safe */ _statistic__WEBPACK_IMPORTED_MODULE_3__.getMultiDpsAllResult),
/* harmony export */   "getSceneList": () => (/* reexport safe */ _linkage__WEBPACK_IMPORTED_MODULE_5__.getSceneList),
/* harmony export */   "getWeatherQuality": () => (/* reexport safe */ _device__WEBPACK_IMPORTED_MODULE_4__.getWeatherQuality),
/* harmony export */   "getWeathers": () => (/* reexport safe */ _device__WEBPACK_IMPORTED_MODULE_4__.getWeathers),
/* harmony export */   "getWeekWithSpecified": () => (/* reexport safe */ _statistic__WEBPACK_IMPORTED_MODULE_3__.getWeekWithSpecified),
/* harmony export */   "modDeleteTaskByCategory": () => (/* reexport safe */ _timer__WEBPACK_IMPORTED_MODULE_1__.modDeleteTaskByCategory),
/* harmony export */   "modDeleteTaskByIds": () => (/* reexport safe */ _timer__WEBPACK_IMPORTED_MODULE_1__.modDeleteTaskByIds),
/* harmony export */   "modifyGroupTimer": () => (/* reexport safe */ _timer__WEBPACK_IMPORTED_MODULE_1__.modifyGroupTimer),
/* harmony export */   "modifySingleTimer": () => (/* reexport safe */ _timer__WEBPACK_IMPORTED_MODULE_1__.modifySingleTimer),
/* harmony export */   "queryGroupTimerTasks": () => (/* reexport safe */ _timer__WEBPACK_IMPORTED_MODULE_1__.queryGroupTimerTasks),
/* harmony export */   "queryTimerTasks": () => (/* reexport safe */ _timer__WEBPACK_IMPORTED_MODULE_1__.queryTimerTasks),
/* harmony export */   "removeAstronomical": () => (/* reexport safe */ _timer__WEBPACK_IMPORTED_MODULE_1__.removeAstronomical),
/* harmony export */   "removeRule": () => (/* reexport safe */ _linkage__WEBPACK_IMPORTED_MODULE_5__.removeRule),
/* harmony export */   "saveCustomizePosition": () => (/* reexport safe */ _device__WEBPACK_IMPORTED_MODULE_4__.saveCustomizePosition),
/* harmony export */   "saveDevProperty": () => (/* reexport safe */ _device__WEBPACK_IMPORTED_MODULE_4__.saveDevProperty),
/* harmony export */   "setAlarmSwitch": () => (/* reexport safe */ _alarm__WEBPACK_IMPORTED_MODULE_2__.setAlarmSwitch),
/* harmony export */   "triggerRule": () => (/* reexport safe */ _linkage__WEBPACK_IMPORTED_MODULE_5__.triggerRule),
/* harmony export */   "updateAstronomical": () => (/* reexport safe */ _timer__WEBPACK_IMPORTED_MODULE_1__.updateAstronomical),
/* harmony export */   "updateAstronomicalStatus": () => (/* reexport safe */ _timer__WEBPACK_IMPORTED_MODULE_1__.updateAstronomicalStatus),
/* harmony export */   "updateDpName": () => (/* reexport safe */ _device__WEBPACK_IMPORTED_MODULE_4__.updateDpName),
/* harmony export */   "updateGroupDpName": () => (/* reexport safe */ _device__WEBPACK_IMPORTED_MODULE_4__.updateGroupDpName)
/* harmony export */ });
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core */ "./node_modules/@ray-js/api/lib/cloud/core.js");
/* harmony import */ var _timer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./timer */ "./node_modules/@ray-js/api/lib/cloud/timer.js");
/* harmony import */ var _alarm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./alarm */ "./node_modules/@ray-js/api/lib/cloud/alarm.js");
/* harmony import */ var _statistic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./statistic */ "./node_modules/@ray-js/api/lib/cloud/statistic.js");
/* harmony import */ var _device__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./device */ "./node_modules/@ray-js/api/lib/cloud/device.js");
/* harmony import */ var _linkage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./linkage */ "./node_modules/@ray-js/api/lib/cloud/linkage.js");







/***/ }),

/***/ "./node_modules/@ray-js/api/lib/cloud/linkage.js":
/*!*******************************************************!*\
  !*** ./node_modules/@ray-js/api/lib/cloud/linkage.js ***!
  \*******************************************************/
/* istanbul ignore next */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "bindRule": () => (/* binding */ bindRule),
/* harmony export */   "disableRule": () => (/* binding */ disableRule),
/* harmony export */   "enableRule": () => (/* binding */ enableRule),
/* harmony export */   "getBindRuleList": () => (/* binding */ getBindRuleList),
/* harmony export */   "getLinkageDeviceList": () => (/* binding */ getLinkageDeviceList),
/* harmony export */   "getSceneList": () => (/* binding */ getSceneList),
/* harmony export */   "removeRule": () => (/* binding */ removeRule),
/* harmony export */   "triggerRule": () => (/* binding */ triggerRule)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ */ "./node_modules/@ray-js/api/lib/requestCloud/index.wechat.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants */ "./node_modules/@ray-js/api/lib/constants.js");




/**
 * 获取家庭下支持联动的设备列表
 * @param {number} gid 家庭id
 * @param {string} sourceType 业务范围
 */
var getLinkageDeviceList = function (params) {
  return (0,___WEBPACK_IMPORTED_MODULE_1__["default"])({
    api: "".concat(_constants__WEBPACK_IMPORTED_MODULE_2__.THING, ".m.linkage.dev.list"),
    version: '3.0',
    data: (0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, params)
  });
};
/**
 * 查询一键执行场景列表
 * @param {number} devId 设备id
 */

var getSceneList = function (_ref) {
  var devId = _ref.devId;
  return (0,___WEBPACK_IMPORTED_MODULE_1__["default"])({
    api: "".concat(_constants__WEBPACK_IMPORTED_MODULE_2__.THING, ".m.linkage.rule.brief.query"),
    version: '1.0',
    data: {
      devId: devId
    }
  });
};
/**
 * 查询已绑定的列表
 * @param {string} bizDomain 业务范围
 * @param {string} sourceEntityId 设备id
 * @param {number} entityType 实体类型
 */

var getBindRuleList = function (params) {
  return (0,___WEBPACK_IMPORTED_MODULE_1__["default"])({
    api: "".concat(_constants__WEBPACK_IMPORTED_MODULE_2__.THING, ".m.linkage.associative.entity.id.category.query"),
    version: '1.0',
    data: (0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, params)
  });
};
/**
 * 绑定联动
 * @param {string} devId 设备 ID
 * @param {string} associativeEntityId 关联DP点和DP点值的组合
 * @param {string} ruleId 关联场景 ID
 * @param {string} entitySubIds 关联 DP 点
 * @param {Array} expr 关联DP点、动作组合
 * @param {string} bizDomain 业务域
 */

var bindRule = function (_ref2) {
  var devId = _ref2.devId,
    associativeEntityId = _ref2.associativeEntityId,
    ruleId = _ref2.ruleId,
    entitySubIds = _ref2.entitySubIds,
    expr = _ref2.expr,
    bizDomain = _ref2.bizDomain;
  return (0,___WEBPACK_IMPORTED_MODULE_1__["default"])({
    api: "".concat(_constants__WEBPACK_IMPORTED_MODULE_2__.THING, ".m.linkage.associative.entity.bind"),
    version: '1.0',
    data: {
      relationExpr: {
        sourceEntityId: devId,
        associativeEntityId: associativeEntityId,
        associativeEntityValue: ruleId,
        triggerRuleVO: {
          conditions: [{
            entityId: devId,
            entityType: 1,
            condType: 1,
            entitySubIds: entitySubIds,
            expr: expr
          }],
          actions: [{
            entityId: ruleId,
            actionStrategy: 'repeat',
            actionExecutor: 'ruleTrigger'
          }]
        },
        bizDomain: bizDomain,
        uniqueType: 3
      }
    }
  });
};
/**
 * 解除联动
 * @param {string} bizDomain 业务范围
 * @param {string} sourceEntityId 设备id
 * @param {string} associativeEntityId 关联dp组合
 * @param {string} associativeEntityValue 规则id
 */

var removeRule = function (params) {
  return (0,___WEBPACK_IMPORTED_MODULE_1__["default"])({
    api: "".concat(_constants__WEBPACK_IMPORTED_MODULE_2__.THING, ".m.linkage.associative.entity.remove"),
    version: '1.0',
    data: (0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, params)
  });
};
/**
 * 触发联动
 * @param {string} ruleId 规则id
 */

var triggerRule = function (_ref3) {
  var ruleId = _ref3.ruleId;
  return (0,___WEBPACK_IMPORTED_MODULE_1__["default"])({
    api: "".concat(_constants__WEBPACK_IMPORTED_MODULE_2__.THING, ".m.linkage.rule.trigger"),
    version: '1.0',
    data: {
      ruleId: ruleId
    }
  });
};
/**
 *  启用联动
 * @param {string} ruleId 规则id
 */

var enableRule = function (_ref4) {
  var ruleId = _ref4.ruleId;
  return (0,___WEBPACK_IMPORTED_MODULE_1__["default"])({
    api: "".concat(_constants__WEBPACK_IMPORTED_MODULE_2__.THING, ".m.linkage.rule.enable"),
    version: '1.0',
    data: {
      ruleId: ruleId
    }
  });
};
/**
 * 停用联动
 * @param {string} ruleId 规则id
 */

var disableRule = function (_ref5) {
  var ruleId = _ref5.ruleId;
  return (0,___WEBPACK_IMPORTED_MODULE_1__["default"])({
    api: "".concat(_constants__WEBPACK_IMPORTED_MODULE_2__.THING, ".m.linkage.rule.disable"),
    version: '1.0',
    data: {
      ruleId: ruleId
    }
  });
};


/***/ }),

/***/ "./node_modules/@ray-js/api/lib/cloud/statistic.js":
/*!*********************************************************!*\
  !*** ./node_modules/@ray-js/api/lib/cloud/statistic.js ***!
  \*********************************************************/
/* istanbul ignore next */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getDataWithSpecified": () => (/* binding */ getDataWithSpecified),
/* harmony export */   "getDpAllStatistResult": () => (/* binding */ getDpAllStatistResult),
/* harmony export */   "getDpLogDays": () => (/* binding */ getDpLogDays),
/* harmony export */   "getDpReportLog": () => (/* binding */ getDpReportLog),
/* harmony export */   "getDpResultByHour": () => (/* binding */ getDpResultByHour),
/* harmony export */   "getDpResultByMonth": () => (/* binding */ getDpResultByMonth),
/* harmony export */   "getLogInSpecifiedTime": () => (/* binding */ getLogInSpecifiedTime),
/* harmony export */   "getLogUserAction": () => (/* binding */ getLogUserAction),
/* harmony export */   "getMonthWithSpecified": () => (/* binding */ getMonthWithSpecified),
/* harmony export */   "getMultiDpsAllResult": () => (/* binding */ getMultiDpsAllResult),
/* harmony export */   "getWeekWithSpecified": () => (/* binding */ getWeekWithSpecified)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ */ "./node_modules/@ray-js/api/lib/requestCloud/index.wechat.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants */ "./node_modules/@ray-js/api/lib/constants.js");

// 数据统计接口



/**
 * 获取 DP 点指定时间段上报日志
 * @param {string} devId 设备Id
 * @param {string} dpIds dpId
 * @param {number} offset 偏离值
 * @param {number} limit 最大值, 最大值上限为 1000,
 * @param {string} startTime 设备上报的时间, 查询起始时间，单位为毫秒
 * @param {string} endTime 设备上报的时间，查询结束时间，单位为毫秒
 * @param {string} sortType DESC 倒序 或 ASC 顺序, 默认为 DESC
 */
var getLogInSpecifiedTime = function (params) {
  return (0,___WEBPACK_IMPORTED_MODULE_1__["default"])({
    api: "".concat(_constants__WEBPACK_IMPORTED_MODULE_2__.THING, ".m.smart.operate.all.log"),
    version: '1.0',
    data: (0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, params)
  });
};
/**
 * 获取 DP 点上报日志
 * @param {string} devId 设备Id
 * @param {string} dpIds dpId
 * @param {number} offset 偏离值
 * @param {number} limit 最大值, 最大值上限为 1000,
 * @param {string} sortType 'DESC' 倒序 或 'ASC' 顺序, 默认为 'DESC'
 */

var getDpReportLog = function (params) {
  return (0,___WEBPACK_IMPORTED_MODULE_1__["default"])({
    api: 'm.smart.operate.log',
    version: '2.0',
    data: (0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, params)
  });
};
/**
 * 获取用户操作的下发日志
 * @param {string} devId 设备Id
 * @param {string} dpIds dpId
 * @param {number} offset 偏离值
 * @param {number} limit 最大值, 最大值上限为 1000,
 * @param {string} sortType 'DESC' 倒序 或 'ASC' 顺序, 默认为 'DESC'
 */

var getLogUserAction = function (params) {
  return (0,___WEBPACK_IMPORTED_MODULE_1__["default"])({
    api: 'm.smart.operate.publish.log',
    version: '1.0',
    data: (0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, params)
  });
};
/**
 * 获取设备月的每日上报的数据统计
 * @param {string} devId 设备Id
 * @param {string} dpId dpId
 * @param {string} startDay 开始日期，例如20180529
 * @param {string} endDay 结束日期，例如20180531
 * @param {string} type 统计的类型，sum、minux 或 max
 */

var getDpLogDays = function (params) {
  return (0,___WEBPACK_IMPORTED_MODULE_1__["default"])({
    api: "".concat(_constants__WEBPACK_IMPORTED_MODULE_2__.THING, ".m.dp.stat.days.list"),
    version: '1.0',
    data: (0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, params)
  });
};
/**
 * 按月（一年）获取 DP 点的统计结果
 * @param {string} devId 设备Id
 * @param {string} dpId dpId
 * @param {string} type 统计的类型，sum、minux 或 max
 */

var getDpResultByMonth = function (params) {
  return (0,___WEBPACK_IMPORTED_MODULE_1__["default"])({
    api: "".concat(_constants__WEBPACK_IMPORTED_MODULE_2__.THING, ".m.dp.stat.month.list"),
    version: '1.0',
    data: (0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, params)
  });
};
/**
 * 按小时获取 DP 点的统计数据
 * @param {string} devId 设备Id
 * @param {string} dpId dpId
 * @param {string} date 日期
 * @param {string} type 统计的类型，sum、minux 或 avg
 * @param {string} uid 用户id
 * @param {number} auto auto=1 ：中间数据缺失时，使用上一时段的数据补充。auto=2 ：中间数据缺失时，使用#补充
 */

var getDpResultByHour = function (params) {
  return (0,___WEBPACK_IMPORTED_MODULE_1__["default"])({
    api: "".concat(_constants__WEBPACK_IMPORTED_MODULE_2__.THING, ".m.dp.rang.stat.hour.list"),
    version: '1.0',
    data: (0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, params)
  });
};
/**
 * 获取指定天数范围内的数据
 * @param {string} devId 设备Id
 * @param {string} dpId dpId
 * @param {string} startDay 开始日期，例如20180529
 * @param {string} endDay 结束日期，例如20180531
 * @param {string} type 统计的类型，sum、minux 或 avg
 * @param {string} uid 用户id
 * @param {number} auto auto=1 ：中间数据缺失时，使用上一时段的数据补充。auto=2 ：中间数据缺失时，使用#补充
 */

var getDataWithSpecified = function (params) {
  return (0,___WEBPACK_IMPORTED_MODULE_1__["default"])({
    api: "".concat(_constants__WEBPACK_IMPORTED_MODULE_2__.THING, ".m.dp.rang.stat.day.list"),
    version: '2.0',
    data: (0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, params)
  });
};
/**
 * 获取指定周范围内的数据
 * @param {string} devId 设备Id
 * @param {string} dpId dpId
 * @param {string} startWeek 开始周
 * @param {string} endWeek 结束周
 * @param {string} type 统计的类型，sum、minux 或 avg
 */

var getWeekWithSpecified = function (params) {
  return (0,___WEBPACK_IMPORTED_MODULE_1__["default"])({
    api: "".concat(_constants__WEBPACK_IMPORTED_MODULE_2__.THING, ".m.dp.rang.stat.week.list"),
    version: '1.0',
    data: (0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, params)
  });
};
/**
 * 获取指定月范围内的数据
 * @param {string} devId 设备Id
 * @param {string} dpId dpId
 * @param {string} startMonth 开始月
 * @param {string} endMonth 结束月
 * @param {string} type 统计的类型，sum、minux 或 avg
 * @param {string} uid 用户id
 * @param {number} auto auto=1 ：中间数据缺失时，使用上一时段的数据补充。auto=2 ：中间数据缺失时，使用#补充
 */

var getMonthWithSpecified = function (params) {
  return (0,___WEBPACK_IMPORTED_MODULE_1__["default"])({
    api: "".concat(_constants__WEBPACK_IMPORTED_MODULE_2__.THING, ".m.dp.rang.stat.month.list"),
    version: '2.0',
    data: (0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, params)
  });
};
/**
 * 获取单个 DP 点所有统计结果的聚合
 * @param {string} devId 设备Id
 * @param {string} dpId dpId
 * @param {string} type 统计的类型，sum、minux 或 avg
 */

var getDpAllStatistResult = function (params) {
  return (0,___WEBPACK_IMPORTED_MODULE_1__["default"])({
    api: "".concat(_constants__WEBPACK_IMPORTED_MODULE_2__.THING, ".m.dp.stat.total"),
    version: '1.0',
    data: (0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, params)
  });
};
/**
 * 获取多个 DP 点的统计结果的聚合（不限时长）
 * @param {string} devId 设备Id
 * @param {string} dpIds DP 点的 ID，多个 ID 使用逗号（,）分隔
 * @param {string} startTime 开始时间
 * @param {string} endTime 结束时间
 * @param {number} size 一条的页数
 * @param {number} reverse reverse=1: 正序 reverse=2: 倒序
 * @param {number} rowType 查询的类型 rowType=1: 下一页 rowType=-1: 上一页
 * @param {string} startRowKey 开始页索引
 * @param {string} endRowKey: 结束页索引
 */

var getMultiDpsAllResult = function (params) {
  return (0,___WEBPACK_IMPORTED_MODULE_1__["default"])({
    api: "".concat(_constants__WEBPACK_IMPORTED_MODULE_2__.THING, ".m.device.query.device.log"),
    version: '1.0',
    data: (0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, params)
  });
};


/***/ }),

/***/ "./node_modules/@ray-js/api/lib/cloud/timer.js":
/*!*****************************************************!*\
  !*** ./node_modules/@ray-js/api/lib/cloud/timer.js ***!
  \*****************************************************/
/* istanbul ignore next */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addAstronomical": () => (/* binding */ addAstronomical),
/* harmony export */   "addGroupTimer": () => (/* binding */ addGroupTimer),
/* harmony export */   "addSingleTimer": () => (/* binding */ addSingleTimer),
/* harmony export */   "getAstronomicalList": () => (/* binding */ getAstronomicalList),
/* harmony export */   "getDpLastTimer": () => (/* binding */ getDpLastTimer),
/* harmony export */   "getDpsLastTimer": () => (/* binding */ getDpsLastTimer),
/* harmony export */   "getLastTimerPeriod": () => (/* binding */ getLastTimerPeriod),
/* harmony export */   "modDeleteTaskByCategory": () => (/* binding */ modDeleteTaskByCategory),
/* harmony export */   "modDeleteTaskByIds": () => (/* binding */ modDeleteTaskByIds),
/* harmony export */   "modifyGroupTimer": () => (/* binding */ modifyGroupTimer),
/* harmony export */   "modifySingleTimer": () => (/* binding */ modifySingleTimer),
/* harmony export */   "queryGroupTimerTasks": () => (/* binding */ queryGroupTimerTasks),
/* harmony export */   "queryTimerTasks": () => (/* binding */ queryTimerTasks),
/* harmony export */   "removeAstronomical": () => (/* binding */ removeAstronomical),
/* harmony export */   "updateAstronomical": () => (/* binding */ updateAstronomical),
/* harmony export */   "updateAstronomicalStatus": () => (/* binding */ updateAstronomicalStatus)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ */ "./node_modules/@ray-js/api/lib/requestCloud/index.wechat.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants */ "./node_modules/@ray-js/api/lib/constants.js");

// 云端定时接口



/**
 * 添加单次定时
 * @param {string} bizId 单设备 ID（devId） 或者群组设备 ID（groupId)
 * @param {number} bizType 资源类型。0：单设备；1：群组设备。
 * @param {string} actions {/“dps/”:{},/“time/”:“”}
 * @param {string} loops 在0000000基础上，把所选择日期对应位置的 0 改成 1，第一位表示周日。
 * @param {string} category 分类类别
 * @param {number} status 初始化状态，0：关闭；1：开启。
 * @param {boolean} isAppPush 是否发送执行通知
 * @param {string} aliasName 定时备注
 */
var addSingleTimer = function (params) {
  return (0,___WEBPACK_IMPORTED_MODULE_1__["default"])({
    api: "".concat(_constants__WEBPACK_IMPORTED_MODULE_2__.THING, ".m.clock.dps.add"),
    version: '1.0',
    data: (0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, params)
  });
};
/**
 * 查询定时任务
 * @param {string} bizId 单设备 ID（devId） 或者群组设备 ID（groupId)
 * @param {number} bizType 资源类型。0：单设备；1：群组设备。
 * @param {string} category 定时分类
 */

var queryTimerTasks = function (params) {
  return (0,___WEBPACK_IMPORTED_MODULE_1__["default"])({
    api: "".concat(_constants__WEBPACK_IMPORTED_MODULE_2__.THING, ".m.clock.dps.list"),
    version: '1.0',
    data: (0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, params)
  });
};
/**
 * 修改单次定时
 * @param {string} bizId 单设备 ID（devId） 或者群组设备 ID（groupId)
 * @param {number} bizType 资源类型。0：单设备；1：群组设备。
 * @param {string} id 定时任务主键
 * @param {string} actions {/“dps/”:{},/“time/”:“”}
 * @param {string} loops 在0000000基础上，把所选择日期对应位置的 0 改成 1，第一位表示周日。
 * @param {number} status 初始化状态，0：关闭；1：开启。
 * @param {boolean} isAppPush 是否发送执行通知
 * @param {string} aliasName 定时备注
 */

var modifySingleTimer = function (params) {
  return (0,___WEBPACK_IMPORTED_MODULE_1__["default"])({
    api: "".concat(_constants__WEBPACK_IMPORTED_MODULE_2__.THING, ".m.clock.dps.update"),
    version: '1.0',
    data: (0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, params)
  });
};
/**
 * 添加分组定时
 * @param {string} bizId 单设备 ID（devId） 或者群组设备 ID（groupId)
 * @param {number} bizType 资源类型。0：单设备；1：群组设备。
 * @param {string} actions [{/“dps/”:{},/“time/”:“”}]，JSON 数据格式。
 * @param {string} loops 在0000000基础上，把所选择日期对应位置的 0 改成 1，第一位表示周日。
 * @param {string} category 分类类别
 * @param {number} status 初始化状态，0：关闭；1：开启。
 * @param {boolean} isAppPush 是否发送执行通知
 * @param {string} aliasName 定时备注
 */

var addGroupTimer = function (params) {
  return (0,___WEBPACK_IMPORTED_MODULE_1__["default"])({
    api: "".concat(_constants__WEBPACK_IMPORTED_MODULE_2__.THING, ".m.clock.dps.group.add"),
    version: '1.0',
    data: (0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, params)
  });
};
/**
 * 分组定时查询
 * @param {string} bizId 单设备 ID（devId） 或者群组设备 ID（groupId)
 * @param {number} bizType 资源类型。0：单设备；1：群组设备。
 * @param {string} category 定时分类
 */

var queryGroupTimerTasks = function (params) {
  return (0,___WEBPACK_IMPORTED_MODULE_1__["default"])({
    api: "".concat(_constants__WEBPACK_IMPORTED_MODULE_2__.THING, ".m.clock.dps.group.list"),
    version: '1.0',
    data: (0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, params)
  });
};
/**
 * 修改分组定时
 * @param {string} bizId 单设备 ID（devId） 或者群组设备 ID（groupId)
 * @param {number} bizType 资源类型。0：单设备；1：群组设备。
 * @param {string} actionsArray [{/“dps/”:{},/“time/”:“”,/“timerId/”:“”}]，JSON 数据格式。
 * @param {string} loops 在0000000基础上，把所选择日期对应位置的 0 改成 1，第一位表示周日。
 * @param {number} status 初始化状态，0：关闭；1：开启。
 * @param {boolean} isAppPush 是否发送执行通知
 * @param {string} aliasName 定时备注
 */

var modifyGroupTimer = function (params) {
  return (0,___WEBPACK_IMPORTED_MODULE_1__["default"])({
    api: "".concat(_constants__WEBPACK_IMPORTED_MODULE_2__.THING, ".m.clock.dps.group.update"),
    version: '1.0',
    data: (0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, params)
  });
};
/**
 * 根据 ids 修改（ 删除 ）任务状态
 * @param {string} bizId 单设备 ID（devId） 或者群组设备 ID（groupId)
 * @param {number} bizType 资源类型。0：单设备；1：群组设备。
 * @param {string} ids 定时任务的 ID。提交多任务时使用逗号（,）分隔。例如"1,2,3,4"。单次提交任务数量不得超过 168。
 * @param {number} status 初始化状态，0：关闭；1：开启；2：删除。
 */

var modDeleteTaskByIds = function (params) {
  return (0,___WEBPACK_IMPORTED_MODULE_1__["default"])({
    api: "".concat(_constants__WEBPACK_IMPORTED_MODULE_2__.THING, ".m.clock.batch.status.update"),
    version: '1.0',
    data: (0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, params)
  });
};
/**
 * 根据 category 修改（ 删除 ）定时任务状态
 * @param {string} bizId 单设备 ID（devId） 或者群组设备 ID（groupId)
 * @param {number} bizType 资源类型。0：单设备；1：群组设备。
 * @param {string} category 定时分类
 * @param {number} status 初始化状态，0：关闭；1：开启；2：删除。
 */

var modDeleteTaskByCategory = function (params) {
  return (0,___WEBPACK_IMPORTED_MODULE_1__["default"])({
    api: "".concat(_constants__WEBPACK_IMPORTED_MODULE_2__.THING, ".m.clock.category.status.update"),
    version: '1.0',
    data: (0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, params)
  });
};
/**
 * 获取某个DP点最近的定时
 * @param {string} bizId 单设备 ID（devId） 或者群组设备 ID（groupId）。
 * @param {string} type device_group 或者 device。
 * @param {string} instruct 格式为'{devId:"xxx",dpId:"1"}'。
 */

var getDpLastTimer = function (params) {
  return (0,___WEBPACK_IMPORTED_MODULE_1__["default"])({
    api: 's.m.linkage.timer.nearest.get',
    version: '1.0',
    data: (0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, params)
  });
};
/**
 * 获取多个 DP 点最近的定时
 * @param {string} bizId 单设备 ID（devId） 或者群组设备 ID（groupId）。
 * @param {string} type device_group 或者 device。
 * @param {string} instruct 格式为'{devId:"xxx",dpId:"1"}'。
 */

var getDpsLastTimer = function (params) {
  return (0,___WEBPACK_IMPORTED_MODULE_1__["default"])({
    api: 's.m.linkage.timer.nearest.bat.get',
    version: '1.0',
    data: (0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, params)
  });
};
/**
 * 获取最近的一条定时（包含时间段判断）
 * @param {string} devId 设备 ID。
 * @param {string} instruct 格式为'{devId:"xxx",dpId:"1"}'。
 */

var getLastTimerPeriod = function (params) {
  return (0,___WEBPACK_IMPORTED_MODULE_1__["default"])({
    api: "".concat(_constants__WEBPACK_IMPORTED_MODULE_2__.THING, ".m.timer.nearest.get"),
    version: '1.0',
    data: (0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, params)
  });
};
/**
 * 获取天文定时列表
 */

var getAstronomicalList = function (params) {
  return (0,___WEBPACK_IMPORTED_MODULE_1__["default"])({
    api: "".concat(_constants__WEBPACK_IMPORTED_MODULE_2__.THING, ".m.timer.astronomical.list"),
    version: '1.0',
    data: (0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, params)
  });
};
/**
 * 添加天文定时
 * @param {string} bizId 设备 ID 或群组 ID
 * @param {number} bizType 0:设备; 1:设备群组
 * @param {string} loops 周期
 * @param {any} dps dp 点，json 格式
 * @param {number} astronomicalType 天文类型， 0:日出; 1:日落
 * @param {string} timezone 时区
 * @param {string} date 日期 yyyyMMdd
 * @param {string} time 偏移时间，“HH:mm” 24 进制
 * @param {number} offsetType 偏移类型，-1 : 向前; 0 正常; 1 : 向后
 * @param {number} lat 纬度
 * @param {number} lon 经度
 */

var addAstronomical = function (params) {
  return (0,___WEBPACK_IMPORTED_MODULE_1__["default"])({
    api: "".concat(_constants__WEBPACK_IMPORTED_MODULE_2__.THING, ".m.timer.astronomical.add"),
    version: '1.0',
    data: (0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, params)
  });
};
/**
 * 修改天文定时
 * @param {string} bizId 设备 ID 或群组 ID
 * @param {number} bizType 0:设备; 1:设备群组
 * @param {string} loops 周期
 * @param {any} dps dp 点，json 格式
 * @param {number} astronomicalType 天文类型， 0:日出; 1:日落
 * @param {string} timezone 时区
 * @param {string} date 日期 yyyyMMdd
 * @param {string} time 偏移时间，“HH:mm” 24 进制
 * @param {number} offsetType 偏移类型，-1 : 向前; 0 正常; 1 : 向后
 * @param {number} lat 纬度
 * @param {number} lon 经度
 */

var updateAstronomical = function (params) {
  return (0,___WEBPACK_IMPORTED_MODULE_1__["default"])({
    api: "".concat(_constants__WEBPACK_IMPORTED_MODULE_2__.THING, ".m.timer.astronomical.update"),
    version: '1.0',
    data: (0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, params)
  });
};
/**
 * 修改天文定时使能
 * @param {string} id 定时任务id
 * @param {number} status 0:关闭；1开启
 */

var updateAstronomicalStatus = function (params) {
  return (0,___WEBPACK_IMPORTED_MODULE_1__["default"])({
    api: "".concat(_constants__WEBPACK_IMPORTED_MODULE_2__.THING, ".m.timer.astronomical.status.update"),
    version: '1.0',
    data: (0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, params)
  });
};
/**
 * 删除天文定时
 * @param {string} id 定时任务 id
 */

var removeAstronomical = function (params) {
  return (0,___WEBPACK_IMPORTED_MODULE_1__["default"])({
    api: "".concat(_constants__WEBPACK_IMPORTED_MODULE_2__.THING, ".m.timer.astronomical.remove"),
    version: '1.0',
    data: (0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, params)
  });
};


/***/ }),

/***/ "./node_modules/@ray-js/api/lib/constants.js":
/*!***************************************************!*\
  !*** ./node_modules/@ray-js/api/lib/constants.js ***!
  \***************************************************/
/* istanbul ignore next */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "THING": () => (/* binding */ THING)
/* harmony export */ });
/* harmony import */ var base64_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! base64-browser */ "./node_modules/base64-browser/index.js");
/* harmony import */ var base64_browser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(base64_browser__WEBPACK_IMPORTED_MODULE_0__);

var THING = (0,base64_browser__WEBPACK_IMPORTED_MODULE_0__.decode)('dHV5YQ==');


/***/ }),

/***/ "./node_modules/@ray-js/api/lib/getApp/index.wechat.js":
/*!*************************************************************!*\
  !*** ./node_modules/@ray-js/api/lib/getApp/index.wechat.js ***!
  \*************************************************************/
/* istanbul ignore next */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  return getApp();
}

/***/ }),

/***/ "./node_modules/@ray-js/api/lib/getBoundingClientRect/index.wechat.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@ray-js/api/lib/getBoundingClientRect/index.wechat.js ***!
  \****************************************************************************/
/* istanbul ignore next */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getBoundingClientRect)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_2__);



function getBoundingClientRect(ref) {
  return new Promise(function (resolve) {
    ref.boundingClientRect(function (rect) {
      var right = rect.right,
        left = rect.left,
        top = rect.top,
        bottom = rect.bottom,
        width = rect.width,
        height = rect.height;
      resolve({
        right: right,
        left: left,
        top: top,
        bottom: bottom,
        width: width,
        height: height
      });
    }).exec();
  });
}

/***/ }),

/***/ "./node_modules/@ray-js/api/lib/getCdnUrl/index.wechat.js":
/*!****************************************************************!*\
  !*** ./node_modules/@ray-js/api/lib/getCdnUrl/index.wechat.js ***!
  \****************************************************************/
/* istanbul ignore next */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getCdnUrl)
/* harmony export */ });
function getCdnUrl(path) {
  // 暂未实现获取cdn方法，将直接返回path
  return path;
}

/***/ }),

/***/ "./node_modules/@ray-js/api/lib/getCurrentPages/index.wechat.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@ray-js/api/lib/getCurrentPages/index.wechat.js ***!
  \**********************************************************************/
/* istanbul ignore next */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  return getCurrentPages();
}

/***/ }),

/***/ "./node_modules/@ray-js/api/lib/getElementById/index.wechat.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@ray-js/api/lib/getElementById/index.wechat.js ***!
  \*********************************************************************/
/* istanbul ignore next */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getElementById)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__);


function getElementById(id) {
  return new Promise(function (resolve) {
    var nodeRef = wx.createSelectorQuery().select("#".concat(id));
    resolve(nodeRef);
  });
}

/***/ }),

/***/ "./node_modules/@ray-js/api/lib/global-api/index.wechat.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@ray-js/api/lib/global-api/index.wechat.js ***!
  \*****************************************************************/
/* istanbul ignore next */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (wx);

/***/ }),

/***/ "./node_modules/@ray-js/api/lib/hideNotification/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/@ray-js/api/lib/hideNotification/index.js ***!
  \****************************************************************/
/* istanbul ignore next */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  console.warn('// TODO: 暂未实现方法 hideNotification');
}

/***/ }),

/***/ "./node_modules/@ray-js/api/lib/hideTabBar/index.wechat.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@ray-js/api/lib/hideTabBar/index.wechat.js ***!
  \*****************************************************************/
/* istanbul ignore next */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (wx.hideTabBar);

/***/ }),

/***/ "./node_modules/@ray-js/api/lib/index.js":
/*!***********************************************!*\
  !*** ./node_modules/@ray-js/api/lib/index.js ***!
  \***********************************************/
/* istanbul ignore next */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addAstronomical": () => (/* reexport safe */ _cloud__WEBPACK_IMPORTED_MODULE_22__.addAstronomical),
/* harmony export */   "addDeviceToDesk": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.addDeviceToDesk),
/* harmony export */   "addGroupTimer": () => (/* reexport safe */ _cloud__WEBPACK_IMPORTED_MODULE_22__.addGroupTimer),
/* harmony export */   "addSingleTimer": () => (/* reexport safe */ _cloud__WEBPACK_IMPORTED_MODULE_22__.addSingleTimer),
/* harmony export */   "addTimer": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.addTimer),
/* harmony export */   "apiRequestByAtop": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.apiRequestByAtop),
/* harmony export */   "apiRequestByHighway": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.apiRequestByHighway),
/* harmony export */   "authorize": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.authorize),
/* harmony export */   "authorizeStatus": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.authorizeStatus),
/* harmony export */   "backToHomeAndOpenPanel": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.backToHomeAndOpenPanel),
/* harmony export */   "beginEvent": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.beginEvent),
/* harmony export */   "bindRule": () => (/* reexport safe */ _cloud__WEBPACK_IMPORTED_MODULE_22__.bindRule),
/* harmony export */   "bluetoothCapabilityIsSupport": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.bluetoothCapabilityIsSupport),
/* harmony export */   "bluetoothCapabilityOfBLEBeacon": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.bluetoothCapabilityOfBLEBeacon),
/* harmony export */   "bluetoothIsPowerOn": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.bluetoothIsPowerOn),
/* harmony export */   "canIUseRouter": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.canIUseRouter),
/* harmony export */   "canOpenURL": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.canOpenURL),
/* harmony export */   "canOpenURLSync": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.canOpenURLSync),
/* harmony export */   "cancelBLEFileTransfer": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.cancelBLEFileTransfer),
/* harmony export */   "changeDebugMode": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.changeDebugMode),
/* harmony export */   "checkOTAUpdateInfo": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.checkOTAUpdateInfo),
/* harmony export */   "checkOTAUpgradeStatus": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.checkOTAUpgradeStatus),
/* harmony export */   "chooseCropImage": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.chooseCropImage),
/* harmony export */   "chooseImage": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.chooseImage),
/* harmony export */   "chooseMedia": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.chooseMedia),
/* harmony export */   "clearStorage": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.clearStorage),
/* harmony export */   "clearStorageSync": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.clearStorageSync),
/* harmony export */   "connectBLEDevice": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.connectBLEDevice),
/* harmony export */   "connectBTBond": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.connectBTBond),
/* harmony export */   "connectBluetoothDevice": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.connectBluetoothDevice),
/* harmony export */   "createAction": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.createAction),
/* harmony export */   "createCondition": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.createCondition),
/* harmony export */   "createInnerAudioContext": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.createInnerAudioContext),
/* harmony export */   "device": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.device),
/* harmony export */   "deviceIsSupportThingModel": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.deviceIsSupportThingModel),
/* harmony export */   "directConnectBLEDevice": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.directConnectBLEDevice),
/* harmony export */   "disableRule": () => (/* reexport safe */ _cloud__WEBPACK_IMPORTED_MODULE_22__.disableRule),
/* harmony export */   "disconnectBLEDevice": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.disconnectBLEDevice),
/* harmony export */   "disconnectBTBond": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.disconnectBTBond),
/* harmony export */   "disconnectBluetoothDevice": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.disconnectBluetoothDevice),
/* harmony export */   "downloadFile": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.downloadFile),
/* harmony export */   "editAction": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.editAction),
/* harmony export */   "editCondition": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.editCondition),
/* harmony export */   "emitChannel": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.emitChannel),
/* harmony export */   "enableRule": () => (/* reexport safe */ _cloud__WEBPACK_IMPORTED_MODULE_22__.enableRule),
/* harmony export */   "endEvent": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.endEvent),
/* harmony export */   "event": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.event),
/* harmony export */   "exitMiniProgram": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.exitMiniProgram),
/* harmony export */   "exitMiniWidget": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.exitMiniWidget),
/* harmony export */   "extApiCanIUse": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.extApiCanIUse),
/* harmony export */   "extApiCanIUseSync": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.extApiCanIUseSync),
/* harmony export */   "extApiInvoke": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.extApiInvoke),
/* harmony export */   "extApiInvokeSync": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.extApiInvokeSync),
/* harmony export */   "getAccountInfo": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.getAccountInfo),
/* harmony export */   "getAccountInfoSync": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.getAccountInfoSync),
/* harmony export */   "getApp": () => (/* reexport safe */ _getApp__WEBPACK_IMPORTED_MODULE_2__["default"]),
/* harmony export */   "getAppInfo": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.getAppInfo),
/* harmony export */   "getAssetHostname": () => (/* reexport safe */ _cloud__WEBPACK_IMPORTED_MODULE_22__.getAssetHostname),
/* harmony export */   "getAstronomicalList": () => (/* reexport safe */ _cloud__WEBPACK_IMPORTED_MODULE_22__.getAstronomicalList),
/* harmony export */   "getAudioFileDuration": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.getAudioFileDuration),
/* harmony export */   "getBLEDeviceRSSI": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.getBLEDeviceRSSI),
/* harmony export */   "getBLEOnlineState": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.getBLEOnlineState),
/* harmony export */   "getBTDeviceInfo": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.getBTDeviceInfo),
/* harmony export */   "getBindRuleList": () => (/* reexport safe */ _cloud__WEBPACK_IMPORTED_MODULE_22__.getBindRuleList),
/* harmony export */   "getBoundingClientRect": () => (/* reexport safe */ _getBoundingClientRect__WEBPACK_IMPORTED_MODULE_3__["default"]),
/* harmony export */   "getCdnUrl": () => (/* reexport safe */ _getCdnUrl__WEBPACK_IMPORTED_MODULE_20__["default"]),
/* harmony export */   "getClipboardData": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.getClipboardData),
/* harmony export */   "getConnectedWifi": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.getConnectedWifi),
/* harmony export */   "getCurrentPages": () => (/* reexport safe */ _getCurrentPages__WEBPACK_IMPORTED_MODULE_4__["default"]),
/* harmony export */   "getCurrentVolume": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.getCurrentVolume),
/* harmony export */   "getCurrentVolumeByMode": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.getCurrentVolumeByMode),
/* harmony export */   "getCurrentWifiSSID": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.getCurrentWifiSSID),
/* harmony export */   "getCustomizePosition": () => (/* reexport safe */ _cloud__WEBPACK_IMPORTED_MODULE_22__.getCustomizePosition),
/* harmony export */   "getDataWithSpecified": () => (/* reexport safe */ _cloud__WEBPACK_IMPORTED_MODULE_22__.getDataWithSpecified),
/* harmony export */   "getDevAlarmList": () => (/* reexport safe */ _cloud__WEBPACK_IMPORTED_MODULE_22__.getDevAlarmList),
/* harmony export */   "getDevProperty": () => (/* reexport safe */ _cloud__WEBPACK_IMPORTED_MODULE_22__.getDevProperty),
/* harmony export */   "getDeviceInfo": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.getDeviceInfo),
/* harmony export */   "getDeviceListByDevIds": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.getDeviceListByDevIds),
/* harmony export */   "getDeviceNumWithDpCode": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.getDeviceNumWithDpCode),
/* harmony export */   "getDeviceOfflineReminderState": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.getDeviceOfflineReminderState),
/* harmony export */   "getDeviceOfflineReminderWarningText": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.getDeviceOfflineReminderWarningText),
/* harmony export */   "getDeviceOnlineType": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.getDeviceOnlineType),
/* harmony export */   "getDeviceProperty": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.getDeviceProperty),
/* harmony export */   "getDeviceThingModelInfo": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.getDeviceThingModelInfo),
/* harmony export */   "getDeviceWifiActivatorStatus": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.getDeviceWifiActivatorStatus),
/* harmony export */   "getDpAllStatistResult": () => (/* reexport safe */ _cloud__WEBPACK_IMPORTED_MODULE_22__.getDpAllStatistResult),
/* harmony export */   "getDpDataByMesh": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.getDpDataByMesh),
/* harmony export */   "getDpLastTimer": () => (/* reexport safe */ _cloud__WEBPACK_IMPORTED_MODULE_22__.getDpLastTimer),
/* harmony export */   "getDpLogDays": () => (/* reexport safe */ _cloud__WEBPACK_IMPORTED_MODULE_22__.getDpLogDays),
/* harmony export */   "getDpReportLog": () => (/* reexport safe */ _cloud__WEBPACK_IMPORTED_MODULE_22__.getDpReportLog),
/* harmony export */   "getDpResultByHour": () => (/* reexport safe */ _cloud__WEBPACK_IMPORTED_MODULE_22__.getDpResultByHour),
/* harmony export */   "getDpResultByMonth": () => (/* reexport safe */ _cloud__WEBPACK_IMPORTED_MODULE_22__.getDpResultByMonth),
/* harmony export */   "getDpsInfos": () => (/* reexport safe */ _cloud__WEBPACK_IMPORTED_MODULE_22__.getDpsInfos),
/* harmony export */   "getDpsLastTimer": () => (/* reexport safe */ _cloud__WEBPACK_IMPORTED_MODULE_22__.getDpsLastTimer),
/* harmony export */   "getElementById": () => (/* reexport safe */ _getElementById__WEBPACK_IMPORTED_MODULE_5__["default"]),
/* harmony export */   "getEncryptLocalKeyWithData": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.getEncryptLocalKeyWithData),
/* harmony export */   "getEnterOptions": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.getEnterOptions),
/* harmony export */   "getEnterOptionsSync": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.getEnterOptionsSync),
/* harmony export */   "getFileSystemManager": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.getFileSystemManager),
/* harmony export */   "getGroupDeviceList": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.getGroupDeviceList),
/* harmony export */   "getGroupDeviceNum": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.getGroupDeviceNum),
/* harmony export */   "getGroupDpsInfos": () => (/* reexport safe */ _cloud__WEBPACK_IMPORTED_MODULE_22__.getGroupDpsInfos),
/* harmony export */   "getGroupInfo": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.getGroupInfo),
/* harmony export */   "getGroupProperty": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.getGroupProperty),
/* harmony export */   "getIconfontInfo": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.getIconfontInfo),
/* harmony export */   "getImageInfo": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.getImageInfo),
/* harmony export */   "getLangContent": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.getLangContent),
/* harmony export */   "getLangKey": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.getLangKey),
/* harmony export */   "getLastTimerPeriod": () => (/* reexport safe */ _cloud__WEBPACK_IMPORTED_MODULE_22__.getLastTimerPeriod),
/* harmony export */   "getLaunchOptions": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.getLaunchOptions),
/* harmony export */   "getLaunchOptionsSync": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.getLaunchOptionsSync),
/* harmony export */   "getLinkageDeviceList": () => (/* reexport safe */ _cloud__WEBPACK_IMPORTED_MODULE_22__.getLinkageDeviceList),
/* harmony export */   "getLogInSpecifiedTime": () => (/* reexport safe */ _cloud__WEBPACK_IMPORTED_MODULE_22__.getLogInSpecifiedTime),
/* harmony export */   "getLogUserAction": () => (/* reexport safe */ _cloud__WEBPACK_IMPORTED_MODULE_22__.getLogUserAction),
/* harmony export */   "getMenuButtonBoundingClientRect": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.getMenuButtonBoundingClientRect),
/* harmony export */   "getMenuButtonBoundingClientRectSync": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.getMenuButtonBoundingClientRectSync),
/* harmony export */   "getMeshDeviceId": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.getMeshDeviceId),
/* harmony export */   "getMobileDeviceInfo": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.getMobileDeviceInfo),
/* harmony export */   "getMonthWithSpecified": () => (/* reexport safe */ _cloud__WEBPACK_IMPORTED_MODULE_22__.getMonthWithSpecified),
/* harmony export */   "getMqttConnectState": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.getMqttConnectState),
/* harmony export */   "getMultiDpsAllResult": () => (/* reexport safe */ _cloud__WEBPACK_IMPORTED_MODULE_22__.getMultiDpsAllResult),
/* harmony export */   "getNetworkType": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.getNetworkType),
/* harmony export */   "getPermissionConfig": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.getPermissionConfig),
/* harmony export */   "getPermissionConfigSync": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.getPermissionConfigSync),
/* harmony export */   "getProductInfo": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.getProductInfo),
/* harmony export */   "getRecorderManager": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.getRecorderManager),
/* harmony export */   "getSceneList": () => (/* reexport safe */ _cloud__WEBPACK_IMPORTED_MODULE_22__.getSceneList),
/* harmony export */   "getScreenBrightness": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.getScreenBrightness),
/* harmony export */   "getShareChannelList": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.getShareChannelList),
/* harmony export */   "getShareDeviceInfo": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.getShareDeviceInfo),
/* harmony export */   "getStorage": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.getStorage),
/* harmony export */   "getStorageSync": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.getStorageSync),
/* harmony export */   "getSubDeviceInfoList": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.getSubDeviceInfoList),
/* harmony export */   "getSupportedThirdPartyServices": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.getSupportedThirdPartyServices),
/* harmony export */   "getSystemInfo": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.getSystemInfo),
/* harmony export */   "getSystemInfoSync": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.getSystemInfoSync),
/* harmony export */   "getSystemSetting": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.getSystemSetting),
/* harmony export */   "getTempDirectory": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.getTempDirectory),
/* harmony export */   "getUserInfo": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.getUserInfo),
/* harmony export */   "getVideoInfo": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.getVideoInfo),
/* harmony export */   "getWeatherQuality": () => (/* reexport safe */ _cloud__WEBPACK_IMPORTED_MODULE_22__.getWeatherQuality),
/* harmony export */   "getWeathers": () => (/* reexport safe */ _cloud__WEBPACK_IMPORTED_MODULE_22__.getWeathers),
/* harmony export */   "getWeekWithSpecified": () => (/* reexport safe */ _cloud__WEBPACK_IMPORTED_MODULE_22__.getWeekWithSpecified),
/* harmony export */   "getWifiList": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.getWifiList),
/* harmony export */   "globalApi": () => (/* reexport safe */ _global_api__WEBPACK_IMPORTED_MODULE_21__["default"]),
/* harmony export */   "goDeviceAlarm": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.goDeviceAlarm),
/* harmony export */   "goDeviceDetail": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.goDeviceDetail),
/* harmony export */   "handleShortcut": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.handleShortcut),
/* harmony export */   "hideBoardTitleIcon": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.hideBoardTitleIcon),
/* harmony export */   "hideBoardTitleIconSync": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.hideBoardTitleIconSync),
/* harmony export */   "hideHomeButton": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.hideHomeButton),
/* harmony export */   "hideLoading": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.hideLoading),
/* harmony export */   "hideMenuButton": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.hideMenuButton),
/* harmony export */   "hideNavigationBarLoading": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.hideNavigationBarLoading),
/* harmony export */   "hideNotification": () => (/* reexport safe */ _hideNotification__WEBPACK_IMPORTED_MODULE_6__["default"]),
/* harmony export */   "hideStatusBar": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.hideStatusBar),
/* harmony export */   "hideTabBar": () => (/* reexport safe */ _hideTabBar__WEBPACK_IMPORTED_MODULE_7__["default"]),
/* harmony export */   "hideTabBarRedDot": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.hideTabBarRedDot),
/* harmony export */   "hideToast": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.hideToast),
/* harmony export */   "isAssociatedShortcut": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.isAssociatedShortcut),
/* harmony export */   "isDeviceSupportOfflineReminder": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.isDeviceSupportOfflineReminder),
/* harmony export */   "isSupportedShortcut": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.isSupportedShortcut),
/* harmony export */   "login": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.login),
/* harmony export */   "makePhoneCall": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.makePhoneCall),
/* harmony export */   "modDeleteTaskByCategory": () => (/* reexport safe */ _cloud__WEBPACK_IMPORTED_MODULE_22__.modDeleteTaskByCategory),
/* harmony export */   "modDeleteTaskByIds": () => (/* reexport safe */ _cloud__WEBPACK_IMPORTED_MODULE_22__.modDeleteTaskByIds),
/* harmony export */   "modifyGroupTimer": () => (/* reexport safe */ _cloud__WEBPACK_IMPORTED_MODULE_22__.modifyGroupTimer),
/* harmony export */   "modifySingleTimer": () => (/* reexport safe */ _cloud__WEBPACK_IMPORTED_MODULE_22__.modifySingleTimer),
/* harmony export */   "nativeDisabled": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.nativeDisabled),
/* harmony export */   "nativeInovke": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.nativeInovke),
/* harmony export */   "navigateBack": () => (/* reexport safe */ _navigateBack__WEBPACK_IMPORTED_MODULE_8__["default"]),
/* harmony export */   "navigateBackMiniProgram": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.navigateBackMiniProgram),
/* harmony export */   "navigateTo": () => (/* reexport safe */ _navigateTo__WEBPACK_IMPORTED_MODULE_9__["default"]),
/* harmony export */   "navigateToMiniProgram": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.navigateToMiniProgram),
/* harmony export */   "offAccelerometerChange": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.offAccelerometerChange),
/* harmony export */   "offAppEvent": () => (/* reexport safe */ _lifecycles__WEBPACK_IMPORTED_MODULE_1__.offAppEvent),
/* harmony export */   "offAppHide": () => (/* reexport safe */ _lifecycles__WEBPACK_IMPORTED_MODULE_1__.offAppHide),
/* harmony export */   "offAppShow": () => (/* reexport safe */ _lifecycles__WEBPACK_IMPORTED_MODULE_1__.offAppShow),
/* harmony export */   "offBLEBigDataChannelDeviceToAppSuccess": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.offBLEBigDataChannelDeviceToAppSuccess),
/* harmony export */   "offBLEBigDataChannelProgressEvent": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.offBLEBigDataChannelProgressEvent),
/* harmony export */   "offBLEBigDataChannelUploadCloudProgress": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.offBLEBigDataChannelUploadCloudProgress),
/* harmony export */   "offBLEConnectStatusChange": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.offBLEConnectStatusChange),
/* harmony export */   "offBLEScanBindDevice": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.offBLEScanBindDevice),
/* harmony export */   "offBLETransparentDataReport": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.offBLETransparentDataReport),
/* harmony export */   "offBluetoothAdapterStateChange": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.offBluetoothAdapterStateChange),
/* harmony export */   "offCompassChange": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.offCompassChange),
/* harmony export */   "offCountrySelectResult": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.offCountrySelectResult),
/* harmony export */   "offDeviceInfoUpdated": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.offDeviceInfoUpdated),
/* harmony export */   "offDeviceMotionChange": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.offDeviceMotionChange),
/* harmony export */   "offDeviceOnlineStatusUpdate": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.offDeviceOnlineStatusUpdate),
/* harmony export */   "offDeviceRemoved": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.offDeviceRemoved),
/* harmony export */   "offDirectlyConnectedSearchDeviceEvent": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.offDirectlyConnectedSearchDeviceEvent),
/* harmony export */   "offDpDataChange": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.offDpDataChange),
/* harmony export */   "offError": () => (/* reexport safe */ _lifecycles__WEBPACK_IMPORTED_MODULE_1__.offError),
/* harmony export */   "offFileTransferProgress": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.offFileTransferProgress),
/* harmony export */   "offGetWifiList": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.offGetWifiList),
/* harmony export */   "offGroupDpCodeChange": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.offGroupDpCodeChange),
/* harmony export */   "offGroupDpDataChangeEvent": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.offGroupDpDataChangeEvent),
/* harmony export */   "offGroupInfoChange": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.offGroupInfoChange),
/* harmony export */   "offGroupRemovedEvent": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.offGroupRemovedEvent),
/* harmony export */   "offGyroscopeChange": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.offGyroscopeChange),
/* harmony export */   "offLeaveBeaconFence": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.offLeaveBeaconFence),
/* harmony export */   "offMemoryWarning": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.offMemoryWarning),
/* harmony export */   "offMqttConnectState": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.offMqttConnectState),
/* harmony export */   "offMqttMessageReceived": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.offMqttMessageReceived),
/* harmony export */   "offNativeEvent": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.offNativeEvent),
/* harmony export */   "offNetworkStatusChange": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.offNetworkStatusChange),
/* harmony export */   "offReceiveMessage": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.offReceiveMessage),
/* harmony export */   "offReceivedThingModelMessage": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.offReceivedThingModelMessage),
/* harmony export */   "offRecordingEvent": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.offRecordingEvent),
/* harmony export */   "offRouterEvent": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.offRouterEvent),
/* harmony export */   "offRouterResult": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.offRouterResult),
/* harmony export */   "offSocketMessageReceived": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.offSocketMessageReceived),
/* harmony export */   "offSubDeviceAdded": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.offSubDeviceAdded),
/* harmony export */   "offSubDeviceDpUpdate": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.offSubDeviceDpUpdate),
/* harmony export */   "offSubDeviceInfoUpdate": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.offSubDeviceInfoUpdate),
/* harmony export */   "offSubDeviceInfoUpdateEvent": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.offSubDeviceInfoUpdateEvent),
/* harmony export */   "offSubDeviceRemoved": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.offSubDeviceRemoved),
/* harmony export */   "offSystemVolumeChangeEvent": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.offSystemVolumeChangeEvent),
/* harmony export */   "offThemeChange": () => (/* reexport safe */ _lifecycles__WEBPACK_IMPORTED_MODULE_1__.offThemeChange),
/* harmony export */   "offTimerUpdate": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.offTimerUpdate),
/* harmony export */   "offUploadProgressUpdate": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.offUploadProgressUpdate),
/* harmony export */   "offWindowResize": () => (/* reexport safe */ _lifecycles__WEBPACK_IMPORTED_MODULE_1__.offWindowResize),
/* harmony export */   "onAccelerometerChange": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.onAccelerometerChange),
/* harmony export */   "onAppEvent": () => (/* reexport safe */ _lifecycles__WEBPACK_IMPORTED_MODULE_1__.onAppEvent),
/* harmony export */   "onAppHide": () => (/* reexport safe */ _lifecycles__WEBPACK_IMPORTED_MODULE_1__.onAppHide),
/* harmony export */   "onAppShow": () => (/* reexport safe */ _lifecycles__WEBPACK_IMPORTED_MODULE_1__.onAppShow),
/* harmony export */   "onBLEBigDataChannelDeviceToAppSuccess": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.onBLEBigDataChannelDeviceToAppSuccess),
/* harmony export */   "onBLEBigDataChannelProgressEvent": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.onBLEBigDataChannelProgressEvent),
/* harmony export */   "onBLEBigDataChannelUploadCloudProgress": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.onBLEBigDataChannelUploadCloudProgress),
/* harmony export */   "onBLEConnectStatusChange": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.onBLEConnectStatusChange),
/* harmony export */   "onBLEScanBindDevice": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.onBLEScanBindDevice),
/* harmony export */   "onBLETransparentDataReport": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.onBLETransparentDataReport),
/* harmony export */   "onBluetoothAdapterStateChange": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.onBluetoothAdapterStateChange),
/* harmony export */   "onCompassChange": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.onCompassChange),
/* harmony export */   "onCountrySelectResult": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.onCountrySelectResult),
/* harmony export */   "onDeviceInfoUpdated": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.onDeviceInfoUpdated),
/* harmony export */   "onDeviceMotionChange": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.onDeviceMotionChange),
/* harmony export */   "onDeviceOnlineStatusUpdate": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.onDeviceOnlineStatusUpdate),
/* harmony export */   "onDeviceRemoved": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.onDeviceRemoved),
/* harmony export */   "onDirectlyConnectedSearchDeviceEvent": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.onDirectlyConnectedSearchDeviceEvent),
/* harmony export */   "onDpDataChange": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.onDpDataChange),
/* harmony export */   "onError": () => (/* reexport safe */ _lifecycles__WEBPACK_IMPORTED_MODULE_1__.onError),
/* harmony export */   "onFileTransferProgress": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.onFileTransferProgress),
/* harmony export */   "onGetWifiList": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.onGetWifiList),
/* harmony export */   "onGroupDpCodeChange": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.onGroupDpCodeChange),
/* harmony export */   "onGroupDpDataChangeEvent": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.onGroupDpDataChangeEvent),
/* harmony export */   "onGroupInfoChange": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.onGroupInfoChange),
/* harmony export */   "onGroupRemovedEvent": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.onGroupRemovedEvent),
/* harmony export */   "onGyroscopeChange": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.onGyroscopeChange),
/* harmony export */   "onLeaveBeaconFence": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.onLeaveBeaconFence),
/* harmony export */   "onMemoryWarning": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.onMemoryWarning),
/* harmony export */   "onMqttConnectState": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.onMqttConnectState),
/* harmony export */   "onMqttMessageReceived": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.onMqttMessageReceived),
/* harmony export */   "onNativeEvent": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.onNativeEvent),
/* harmony export */   "onNavigationBarBack": () => (/* reexport safe */ _onNavigationBarBack__WEBPACK_IMPORTED_MODULE_18__["default"]),
/* harmony export */   "onNetworkStatusChange": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.onNetworkStatusChange),
/* harmony export */   "onPageNotFound": () => (/* reexport safe */ _lifecycles__WEBPACK_IMPORTED_MODULE_1__.onPageNotFound),
/* harmony export */   "onReceiveMessage": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.onReceiveMessage),
/* harmony export */   "onReceivedThingModelMessage": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.onReceivedThingModelMessage),
/* harmony export */   "onRecordingEvent": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.onRecordingEvent),
/* harmony export */   "onRouterEvent": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.onRouterEvent),
/* harmony export */   "onRouterResult": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.onRouterResult),
/* harmony export */   "onSocketMessageReceived": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.onSocketMessageReceived),
/* harmony export */   "onSubDeviceAdded": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.onSubDeviceAdded),
/* harmony export */   "onSubDeviceDpUpdate": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.onSubDeviceDpUpdate),
/* harmony export */   "onSubDeviceInfoUpdate": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.onSubDeviceInfoUpdate),
/* harmony export */   "onSubDeviceInfoUpdateEvent": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.onSubDeviceInfoUpdateEvent),
/* harmony export */   "onSubDeviceRemoved": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.onSubDeviceRemoved),
/* harmony export */   "onSystemVolumeChangeEvent": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.onSystemVolumeChangeEvent),
/* harmony export */   "onThemeChange": () => (/* reexport safe */ _lifecycles__WEBPACK_IMPORTED_MODULE_1__.onThemeChange),
/* harmony export */   "onTimerUpdate": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.onTimerUpdate),
/* harmony export */   "onUploadProgressUpdate": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.onUploadProgressUpdate),
/* harmony export */   "onWindowResize": () => (/* reexport safe */ _lifecycles__WEBPACK_IMPORTED_MODULE_1__.onWindowResize),
/* harmony export */   "openAppSystemSettingPage": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.openAppSystemSettingPage),
/* harmony export */   "openCategoryActivatorPage": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.openCategoryActivatorPage),
/* harmony export */   "openCountrySelectPage": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.openCountrySelectPage),
/* harmony export */   "openDeviceDetailPage": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.openDeviceDetailPage),
/* harmony export */   "openDeviceEdit": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.openDeviceEdit),
/* harmony export */   "openDeviceExecutionAndAnutomation": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.openDeviceExecutionAndAnutomation),
/* harmony export */   "openDeviceInfo": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.openDeviceInfo),
/* harmony export */   "openDeviceQuestionsAndFeedback": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.openDeviceQuestionsAndFeedback),
/* harmony export */   "openDeviceWifiNetworkMonitorPage": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.openDeviceWifiNetworkMonitorPage),
/* harmony export */   "openGroupDetailPage": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.openGroupDetailPage),
/* harmony export */   "openGroupEdit": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.openGroupEdit),
/* harmony export */   "openGroupTimerPage": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.openGroupTimerPage),
/* harmony export */   "openHelpCenter": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.openHelpCenter),
/* harmony export */   "openInnerH5": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.openInnerH5),
/* harmony export */   "openMeshLocalGroup": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.openMeshLocalGroup),
/* harmony export */   "openMiniWidget": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.openMiniWidget),
/* harmony export */   "openOTAUpgrade": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.openOTAUpgrade),
/* harmony export */   "openPanel": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.openPanel),
/* harmony export */   "openPreConditionPage": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.openPreConditionPage),
/* harmony export */   "openRNPanel": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.openRNPanel),
/* harmony export */   "openRecommendSceneDetail": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.openRecommendSceneDetail),
/* harmony export */   "openReconnectPage": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.openReconnectPage),
/* harmony export */   "openSetting": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.openSetting),
/* harmony export */   "openShareDevice": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.openShareDevice),
/* harmony export */   "openSystemBluetoothSetting": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.openSystemBluetoothSetting),
/* harmony export */   "openSystemSettingPage": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.openSystemSettingPage),
/* harmony export */   "openTimerPage": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.openTimerPage),
/* harmony export */   "openURL": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.openURL),
/* harmony export */   "playnet": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.playnet),
/* harmony export */   "postBLEBigDataChannelWithProgress": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.postBLEBigDataChannelWithProgress),
/* harmony export */   "postBLEFileTransfer": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.postBLEFileTransfer),
/* harmony export */   "preDownloadMiniApp": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.preDownloadMiniApp),
/* harmony export */   "preloadPanel": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.preloadPanel),
/* harmony export */   "previewImage": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.previewImage),
/* harmony export */   "publishBLETransparentData": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.publishBLETransparentData),
/* harmony export */   "publishCommands": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.publishCommands),
/* harmony export */   "publishDps": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.publishDps),
/* harmony export */   "publishDpsWithPipeType": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.publishDpsWithPipeType),
/* harmony export */   "publishGroupDpCodes": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.publishGroupDpCodes),
/* harmony export */   "publishGroupDps": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.publishGroupDps),
/* harmony export */   "publishLanMessage": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.publishLanMessage),
/* harmony export */   "publishMqttMessage": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.publishMqttMessage),
/* harmony export */   "publishSigMeshMultiDps": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.publishSigMeshMultiDps),
/* harmony export */   "publishSocketMessage": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.publishSocketMessage),
/* harmony export */   "publishThingModelMessage": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.publishThingModelMessage),
/* harmony export */   "queryDps": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.queryDps),
/* harmony export */   "queryGroupTimerTasks": () => (/* reexport safe */ _cloud__WEBPACK_IMPORTED_MODULE_22__.queryGroupTimerTasks),
/* harmony export */   "queryTimerTasks": () => (/* reexport safe */ _cloud__WEBPACK_IMPORTED_MODULE_22__.queryTimerTasks),
/* harmony export */   "reLaunch": () => (/* reexport safe */ _reLaunch__WEBPACK_IMPORTED_MODULE_10__["default"]),
/* harmony export */   "readBeaconFenceConfig": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.readBeaconFenceConfig),
/* harmony export */   "redirectTo": () => (/* reexport safe */ _redirectTo__WEBPACK_IMPORTED_MODULE_11__["default"]),
/* harmony export */   "registerChannel": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.registerChannel),
/* harmony export */   "registerDeviceListListener": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.registerDeviceListListener),
/* harmony export */   "registerGateWaySubDeviceListener": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.registerGateWaySubDeviceListener),
/* harmony export */   "registerGroupChange": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.registerGroupChange),
/* harmony export */   "registerLeaveBeaconFenceEvent": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.registerLeaveBeaconFenceEvent),
/* harmony export */   "registerMQTTDeviceListener": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.registerMQTTDeviceListener),
/* harmony export */   "registerMQTTProtocolListener": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.registerMQTTProtocolListener),
/* harmony export */   "registerSystemVolumeChange": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.registerSystemVolumeChange),
/* harmony export */   "registerTopicListListener": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.registerTopicListListener),
/* harmony export */   "registerZigbeeGateWaySubDeviceListener": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.registerZigbeeGateWaySubDeviceListener),
/* harmony export */   "removeAstronomical": () => (/* reexport safe */ _cloud__WEBPACK_IMPORTED_MODULE_22__.removeAstronomical),
/* harmony export */   "removeDevice": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.removeDevice),
/* harmony export */   "removeRule": () => (/* reexport safe */ _cloud__WEBPACK_IMPORTED_MODULE_22__.removeRule),
/* harmony export */   "removeShareDevice": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.removeShareDevice),
/* harmony export */   "removeStorage": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.removeStorage),
/* harmony export */   "removeStorageSync": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.removeStorageSync),
/* harmony export */   "removeTabBarBadge": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.removeTabBarBadge),
/* harmony export */   "removeTimer": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.removeTimer),
/* harmony export */   "renameDeviceName": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.renameDeviceName),
/* harmony export */   "request": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.request),
/* harmony export */   "requestCloud": () => (/* reexport safe */ _requestCloud__WEBPACK_IMPORTED_MODULE_12__["default"]),
/* harmony export */   "resetFactory": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.resetFactory),
/* harmony export */   "resizeImage": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.resizeImage),
/* harmony export */   "rotateImage": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.rotateImage),
/* harmony export */   "router": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.router),
/* harmony export */   "saveCustomizePosition": () => (/* reexport safe */ _cloud__WEBPACK_IMPORTED_MODULE_22__.saveCustomizePosition),
/* harmony export */   "saveDevProperty": () => (/* reexport safe */ _cloud__WEBPACK_IMPORTED_MODULE_22__.saveDevProperty),
/* harmony export */   "saveSceneAction": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.saveSceneAction),
/* harmony export */   "saveToAlbum": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.saveToAlbum),
/* harmony export */   "saveVideoToPhotosAlbum": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.saveVideoToPhotosAlbum),
/* harmony export */   "scanCode": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.scanCode),
/* harmony export */   "sendMqttMessage": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.sendMqttMessage),
/* harmony export */   "setAlarmSwitch": () => (/* reexport safe */ _cloud__WEBPACK_IMPORTED_MODULE_22__.setAlarmSwitch),
/* harmony export */   "setBoardIcon": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.setBoardIcon),
/* harmony export */   "setBoardIconSync": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.setBoardIconSync),
/* harmony export */   "setBoardTitle": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.setBoardTitle),
/* harmony export */   "setBoardTitleSync": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.setBoardTitleSync),
/* harmony export */   "setClipboardData": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.setClipboardData),
/* harmony export */   "setDeviceProperty": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.setDeviceProperty),
/* harmony export */   "setGroupProperty": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.setGroupProperty),
/* harmony export */   "setKeepScreenOn": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.setKeepScreenOn),
/* harmony export */   "setNavigationBarBack": () => (/* reexport safe */ _setNavigationBarBack__WEBPACK_IMPORTED_MODULE_19__["default"]),
/* harmony export */   "setNavigationBarColor": () => (/* reexport safe */ _setNavigationBarColor__WEBPACK_IMPORTED_MODULE_13__["default"]),
/* harmony export */   "setNavigationBarTitle": () => (/* reexport safe */ _setNavigationBarTitle__WEBPACK_IMPORTED_MODULE_14__["default"]),
/* harmony export */   "setPageOrientation": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.setPageOrientation),
/* harmony export */   "setScreenBrightness": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.setScreenBrightness),
/* harmony export */   "setStorage": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.setStorage),
/* harmony export */   "setStorageSync": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.setStorageSync),
/* harmony export */   "setTabBarBadge": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.setTabBarBadge),
/* harmony export */   "setTabBarItem": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.setTabBarItem),
/* harmony export */   "setTabBarStyle": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.setTabBarStyle),
/* harmony export */   "share": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.share),
/* harmony export */   "showActionSheet": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.showActionSheet),
/* harmony export */   "showBoardTitleIcon": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.showBoardTitleIcon),
/* harmony export */   "showBoardTitleIconSync": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.showBoardTitleIconSync),
/* harmony export */   "showLoading": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.showLoading),
/* harmony export */   "showMenuButton": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.showMenuButton),
/* harmony export */   "showModal": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.showModal),
/* harmony export */   "showNavigationBarLoading": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.showNavigationBarLoading),
/* harmony export */   "showNotification": () => (/* reexport safe */ _showNotification__WEBPACK_IMPORTED_MODULE_15__["default"]),
/* harmony export */   "showSceneDialog": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.showSceneDialog),
/* harmony export */   "showStatusBar": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.showStatusBar),
/* harmony export */   "showTabBar": () => (/* reexport safe */ _showTabBar__WEBPACK_IMPORTED_MODULE_16__["default"]),
/* harmony export */   "showTabBarRedDot": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.showTabBarRedDot),
/* harmony export */   "showToast": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.showToast),
/* harmony export */   "startAccelerometer": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.startAccelerometer),
/* harmony export */   "startBLEMeshLowPowerConnection": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.startBLEMeshLowPowerConnection),
/* harmony export */   "startBLEScan": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.startBLEScan),
/* harmony export */   "startBLEScanBeacon": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.startBLEScanBeacon),
/* harmony export */   "startBLEScanBindDevice": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.startBLEScanBindDevice),
/* harmony export */   "startBLEScanSync": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.startBLEScanSync),
/* harmony export */   "startCompass": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.startCompass),
/* harmony export */   "startDeviceMotionListening": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.startDeviceMotionListening),
/* harmony export */   "startDeviceWifiActivator": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.startDeviceWifiActivator),
/* harmony export */   "startDirectlyConnectedDeviceActivator": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.startDirectlyConnectedDeviceActivator),
/* harmony export */   "startDirectlyConnectedSearchDevice": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.startDirectlyConnectedSearchDevice),
/* harmony export */   "startGWActivation": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.startGWActivation),
/* harmony export */   "startGyroscope": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.startGyroscope),
/* harmony export */   "startPullDownRefresh": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.startPullDownRefresh),
/* harmony export */   "stopAccelerometer": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.stopAccelerometer),
/* harmony export */   "stopBLEMeshLowPowerConnection": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.stopBLEMeshLowPowerConnection),
/* harmony export */   "stopBLEScan": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.stopBLEScan),
/* harmony export */   "stopBLEScanBeacon": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.stopBLEScanBeacon),
/* harmony export */   "stopBLEScanSync": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.stopBLEScanSync),
/* harmony export */   "stopCompass": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.stopCompass),
/* harmony export */   "stopDeviceMotionListening": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.stopDeviceMotionListening),
/* harmony export */   "stopDirectlyConnectedDeviceActivator": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.stopDirectlyConnectedDeviceActivator),
/* harmony export */   "stopDirectlyConnectedSearchDevice": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.stopDirectlyConnectedSearchDevice),
/* harmony export */   "stopGWActivation": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.stopGWActivation),
/* harmony export */   "stopGyroscope": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.stopGyroscope),
/* harmony export */   "stopPullDownRefresh": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.stopPullDownRefresh),
/* harmony export */   "subscribeBLEConnectStatus": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.subscribeBLEConnectStatus),
/* harmony export */   "subscribeBLETransparentDataReport": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.subscribeBLETransparentDataReport),
/* harmony export */   "subscribeDeviceRemoved": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.subscribeDeviceRemoved),
/* harmony export */   "subscribeReceivedThingModelMessage": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.subscribeReceivedThingModelMessage),
/* harmony export */   "switchTab": () => (/* reexport safe */ _switchTab__WEBPACK_IMPORTED_MODULE_17__["default"]),
/* harmony export */   "syncDeviceInfo": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.syncDeviceInfo),
/* harmony export */   "syncTimerTask": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.syncTimerTask),
/* harmony export */   "toggleDeviceOfflineReminder": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.toggleDeviceOfflineReminder),
/* harmony export */   "trackEvent": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.trackEvent),
/* harmony export */   "triggerRule": () => (/* reexport safe */ _cloud__WEBPACK_IMPORTED_MODULE_22__.triggerRule),
/* harmony export */   "unRegisterGroupChange": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.unRegisterGroupChange),
/* harmony export */   "unRegisterSystemVolumeChange": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.unRegisterSystemVolumeChange),
/* harmony export */   "unSubscribeDeviceRemoved": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.unSubscribeDeviceRemoved),
/* harmony export */   "unSubscribeReceivedThingModelMessage": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.unSubscribeReceivedThingModelMessage),
/* harmony export */   "unregisterDeviceListListener": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.unregisterDeviceListListener),
/* harmony export */   "unregisterGateWaySubDeviceListener": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.unregisterGateWaySubDeviceListener),
/* harmony export */   "unregisterLeaveBeaconFenceEvent": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.unregisterLeaveBeaconFenceEvent),
/* harmony export */   "unregisterMQTTDeviceListener": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.unregisterMQTTDeviceListener),
/* harmony export */   "unregisterMQTTProtocolListener": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.unregisterMQTTProtocolListener),
/* harmony export */   "unregisterTopicListListener": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.unregisterTopicListListener),
/* harmony export */   "unregisterZigbeeGateWaySubDeviceListener": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.unregisterZigbeeGateWaySubDeviceListener),
/* harmony export */   "unsubscribeBLEConnectStatus": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.unsubscribeBLEConnectStatus),
/* harmony export */   "unsubscribeBLETransparentDataReport": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.unsubscribeBLETransparentDataReport),
/* harmony export */   "updateAstronomical": () => (/* reexport safe */ _cloud__WEBPACK_IMPORTED_MODULE_22__.updateAstronomical),
/* harmony export */   "updateAstronomicalStatus": () => (/* reexport safe */ _cloud__WEBPACK_IMPORTED_MODULE_22__.updateAstronomicalStatus),
/* harmony export */   "updateDeviceThingModelInfo": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.updateDeviceThingModelInfo),
/* harmony export */   "updateDpName": () => (/* reexport safe */ _cloud__WEBPACK_IMPORTED_MODULE_22__.updateDpName),
/* harmony export */   "updateGroupDpName": () => (/* reexport safe */ _cloud__WEBPACK_IMPORTED_MODULE_22__.updateGroupDpName),
/* harmony export */   "updateTimer": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.updateTimer),
/* harmony export */   "updateTimerStatus": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.updateTimerStatus),
/* harmony export */   "updateVolume": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.updateVolume),
/* harmony export */   "uploadFile": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.uploadFile),
/* harmony export */   "uploadImage": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.uploadImage),
/* harmony export */   "validDeviceOnlineType": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.validDeviceOnlineType),
/* harmony export */   "vibrateLong": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.vibrateLong),
/* harmony export */   "vibrateShort": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.vibrateShort),
/* harmony export */   "writeBeaconFenceConfig": () => (/* reexport safe */ _all_kits__WEBPACK_IMPORTED_MODULE_0__.writeBeaconFenceConfig)
/* harmony export */ });
/* harmony import */ var _all_kits__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./all-kits */ "./node_modules/@ray-js/api/lib/all-kits.js");
/* harmony import */ var _lifecycles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lifecycles */ "./node_modules/@ray-js/api/lib/lifecycles/index.js");
/* harmony import */ var _getApp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getApp */ "./node_modules/@ray-js/api/lib/getApp/index.wechat.js");
/* harmony import */ var _getBoundingClientRect__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getBoundingClientRect */ "./node_modules/@ray-js/api/lib/getBoundingClientRect/index.wechat.js");
/* harmony import */ var _getCurrentPages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./getCurrentPages */ "./node_modules/@ray-js/api/lib/getCurrentPages/index.wechat.js");
/* harmony import */ var _getElementById__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./getElementById */ "./node_modules/@ray-js/api/lib/getElementById/index.wechat.js");
/* harmony import */ var _hideNotification__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./hideNotification */ "./node_modules/@ray-js/api/lib/hideNotification/index.js");
/* harmony import */ var _hideTabBar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./hideTabBar */ "./node_modules/@ray-js/api/lib/hideTabBar/index.wechat.js");
/* harmony import */ var _navigateBack__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./navigateBack */ "./node_modules/@ray-js/api/lib/navigateBack/index.wechat.js");
/* harmony import */ var _navigateTo__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./navigateTo */ "./node_modules/@ray-js/api/lib/navigateTo/index.wechat.js");
/* harmony import */ var _reLaunch__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./reLaunch */ "./node_modules/@ray-js/api/lib/reLaunch/index.wechat.js");
/* harmony import */ var _redirectTo__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./redirectTo */ "./node_modules/@ray-js/api/lib/redirectTo/index.wechat.js");
/* harmony import */ var _requestCloud__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./requestCloud */ "./node_modules/@ray-js/api/lib/requestCloud/index.wechat.js");
/* harmony import */ var _setNavigationBarColor__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./setNavigationBarColor */ "./node_modules/@ray-js/api/lib/setNavigationBarColor/index.wechat.js");
/* harmony import */ var _setNavigationBarTitle__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./setNavigationBarTitle */ "./node_modules/@ray-js/api/lib/setNavigationBarTitle/index.wechat.js");
/* harmony import */ var _showNotification__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./showNotification */ "./node_modules/@ray-js/api/lib/showNotification/index.js");
/* harmony import */ var _showTabBar__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./showTabBar */ "./node_modules/@ray-js/api/lib/showTabBar/index.wechat.js");
/* harmony import */ var _switchTab__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./switchTab */ "./node_modules/@ray-js/api/lib/switchTab/index.wechat.js");
/* harmony import */ var _onNavigationBarBack__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./onNavigationBarBack */ "./node_modules/@ray-js/api/lib/onNavigationBarBack/index.wechat.js");
/* harmony import */ var _setNavigationBarBack__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./setNavigationBarBack */ "./node_modules/@ray-js/api/lib/setNavigationBarBack/index.wechat.js");
/* harmony import */ var _getCdnUrl__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./getCdnUrl */ "./node_modules/@ray-js/api/lib/getCdnUrl/index.wechat.js");
/* harmony import */ var _global_api__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./global-api */ "./node_modules/@ray-js/api/lib/global-api/index.wechat.js");
/* harmony import */ var _cloud__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./cloud */ "./node_modules/@ray-js/api/lib/cloud/index.js");
/// <reference path="../@types/api.d.ts" />





















/**
 * 提供 glboal-api 将 wx / ty 对象暴露出去，供给业务在Ray为显示导出api时进行快速响应开发。
 */




/***/ }),

/***/ "./node_modules/@ray-js/api/lib/lifecycles/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@ray-js/api/lib/lifecycles/index.js ***!
  \**********************************************************/
/* istanbul ignore next */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "offAppEvent": () => (/* reexport safe */ _offAppEvent__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   "offAppHide": () => (/* reexport safe */ _offAppHide__WEBPACK_IMPORTED_MODULE_1__["default"]),
/* harmony export */   "offAppShow": () => (/* reexport safe */ _offAppShow__WEBPACK_IMPORTED_MODULE_2__["default"]),
/* harmony export */   "offError": () => (/* reexport safe */ _offError__WEBPACK_IMPORTED_MODULE_3__["default"]),
/* harmony export */   "offThemeChange": () => (/* reexport safe */ _offThemeChange__WEBPACK_IMPORTED_MODULE_4__["default"]),
/* harmony export */   "offWindowResize": () => (/* reexport safe */ _offWindowResize__WEBPACK_IMPORTED_MODULE_5__["default"]),
/* harmony export */   "onAppEvent": () => (/* reexport safe */ _onAppEvent__WEBPACK_IMPORTED_MODULE_6__["default"]),
/* harmony export */   "onAppHide": () => (/* reexport safe */ _onAppHide__WEBPACK_IMPORTED_MODULE_7__["default"]),
/* harmony export */   "onAppShow": () => (/* reexport safe */ _onAppShow__WEBPACK_IMPORTED_MODULE_8__["default"]),
/* harmony export */   "onError": () => (/* reexport safe */ _onError__WEBPACK_IMPORTED_MODULE_9__["default"]),
/* harmony export */   "onPageNotFound": () => (/* reexport safe */ _onPageNotFound__WEBPACK_IMPORTED_MODULE_10__["default"]),
/* harmony export */   "onThemeChange": () => (/* reexport safe */ _onThemeChange__WEBPACK_IMPORTED_MODULE_11__["default"]),
/* harmony export */   "onWindowResize": () => (/* reexport safe */ _onWindowResize__WEBPACK_IMPORTED_MODULE_12__["default"])
/* harmony export */ });
/* harmony import */ var _offAppEvent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./offAppEvent */ "./node_modules/@ray-js/api/lib/lifecycles/offAppEvent/index.wechat.js");
/* harmony import */ var _offAppHide__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./offAppHide */ "./node_modules/@ray-js/api/lib/lifecycles/offAppHide/index.wechat.js");
/* harmony import */ var _offAppShow__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./offAppShow */ "./node_modules/@ray-js/api/lib/lifecycles/offAppShow/index.wechat.js");
/* harmony import */ var _offError__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./offError */ "./node_modules/@ray-js/api/lib/lifecycles/offError/index.wechat.js");
/* harmony import */ var _offThemeChange__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./offThemeChange */ "./node_modules/@ray-js/api/lib/lifecycles/offThemeChange/index.wechat.js");
/* harmony import */ var _offWindowResize__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./offWindowResize */ "./node_modules/@ray-js/api/lib/lifecycles/offWindowResize/index.wechat.js");
/* harmony import */ var _onAppEvent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./onAppEvent */ "./node_modules/@ray-js/api/lib/lifecycles/onAppEvent/index.wechat.js");
/* harmony import */ var _onAppHide__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./onAppHide */ "./node_modules/@ray-js/api/lib/lifecycles/onAppHide/index.wechat.js");
/* harmony import */ var _onAppShow__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./onAppShow */ "./node_modules/@ray-js/api/lib/lifecycles/onAppShow/index.wechat.js");
/* harmony import */ var _onError__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./onError */ "./node_modules/@ray-js/api/lib/lifecycles/onError/index.wechat.js");
/* harmony import */ var _onPageNotFound__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./onPageNotFound */ "./node_modules/@ray-js/api/lib/lifecycles/onPageNotFound/index.wechat.js");
/* harmony import */ var _onThemeChange__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./onThemeChange */ "./node_modules/@ray-js/api/lib/lifecycles/onThemeChange/index.wechat.js");
/* harmony import */ var _onWindowResize__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./onWindowResize */ "./node_modules/@ray-js/api/lib/lifecycles/onWindowResize/index.wechat.js");














/***/ }),

/***/ "./node_modules/@ray-js/api/lib/lifecycles/offAppEvent/index.wechat.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@ray-js/api/lib/lifecycles/offAppEvent/index.wechat.js ***!
  \*****************************************************************************/
/* istanbul ignore next */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  console.warn('// TODO 暂未实现方法');
  return undefined;
}

/***/ }),

/***/ "./node_modules/@ray-js/api/lib/lifecycles/offAppHide/index.wechat.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@ray-js/api/lib/lifecycles/offAppHide/index.wechat.js ***!
  \****************************************************************************/
/* istanbul ignore next */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (wx.offAppHide);

/***/ }),

/***/ "./node_modules/@ray-js/api/lib/lifecycles/offAppShow/index.wechat.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@ray-js/api/lib/lifecycles/offAppShow/index.wechat.js ***!
  \****************************************************************************/
/* istanbul ignore next */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (wx.offAppShow);

/***/ }),

/***/ "./node_modules/@ray-js/api/lib/lifecycles/offError/index.wechat.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@ray-js/api/lib/lifecycles/offError/index.wechat.js ***!
  \**************************************************************************/
/* istanbul ignore next */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (wx.offError);

/***/ }),

/***/ "./node_modules/@ray-js/api/lib/lifecycles/offThemeChange/index.wechat.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@ray-js/api/lib/lifecycles/offThemeChange/index.wechat.js ***!
  \********************************************************************************/
/* istanbul ignore next */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (wx.offThemeChange);

/***/ }),

/***/ "./node_modules/@ray-js/api/lib/lifecycles/offWindowResize/index.wechat.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@ray-js/api/lib/lifecycles/offWindowResize/index.wechat.js ***!
  \*********************************************************************************/
/* istanbul ignore next */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (wx.offWindowResize);

/***/ }),

/***/ "./node_modules/@ray-js/api/lib/lifecycles/onAppEvent/index.wechat.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@ray-js/api/lib/lifecycles/onAppEvent/index.wechat.js ***!
  \****************************************************************************/
/* istanbul ignore next */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  console.warn('// TODO 暂未实现方法');
  return undefined;
}

/***/ }),

/***/ "./node_modules/@ray-js/api/lib/lifecycles/onAppHide/index.wechat.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@ray-js/api/lib/lifecycles/onAppHide/index.wechat.js ***!
  \***************************************************************************/
/* istanbul ignore next */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (wx.onAppHide);

/***/ }),

/***/ "./node_modules/@ray-js/api/lib/lifecycles/onAppShow/index.wechat.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@ray-js/api/lib/lifecycles/onAppShow/index.wechat.js ***!
  \***************************************************************************/
/* istanbul ignore next */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (wx.onAppShow);

/***/ }),

/***/ "./node_modules/@ray-js/api/lib/lifecycles/onError/index.wechat.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@ray-js/api/lib/lifecycles/onError/index.wechat.js ***!
  \*************************************************************************/
/* istanbul ignore next */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (wx.onError);

/***/ }),

/***/ "./node_modules/@ray-js/api/lib/lifecycles/onPageNotFound/index.wechat.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@ray-js/api/lib/lifecycles/onPageNotFound/index.wechat.js ***!
  \********************************************************************************/
/* istanbul ignore next */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (wx.onPageNotFound);

/***/ }),

/***/ "./node_modules/@ray-js/api/lib/lifecycles/onThemeChange/index.wechat.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@ray-js/api/lib/lifecycles/onThemeChange/index.wechat.js ***!
  \*******************************************************************************/
/* istanbul ignore next */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (wx.onThemeChange);

/***/ }),

/***/ "./node_modules/@ray-js/api/lib/lifecycles/onWindowResize/index.wechat.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@ray-js/api/lib/lifecycles/onWindowResize/index.wechat.js ***!
  \********************************************************************************/
/* istanbul ignore next */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (wx.onWindowResize);

/***/ }),

/***/ "./node_modules/@ray-js/api/lib/onNavigationBarBack/index.wechat.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@ray-js/api/lib/onNavigationBarBack/index.wechat.js ***!
  \**************************************************************************/
/* istanbul ignore next */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var onNavigationBarBack = function () {
  console.warn('尚未支持');
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (onNavigationBarBack);

/***/ }),

/***/ "./node_modules/@ray-js/api/lib/requestCloud/index.wechat.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@ray-js/api/lib/requestCloud/index.wechat.js ***!
  \*******************************************************************/
/* istanbul ignore next */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  if (!wx.requestCloud) {
    console.warn('// TODO 暂未实现方法 wx.requestCloud');
    return;
  }
  return wx.requestCloud.apply(this, arguments);
}

/***/ }),

/***/ "./node_modules/@ray-js/api/lib/setNavigationBarBack/index.wechat.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@ray-js/api/lib/setNavigationBarBack/index.wechat.js ***!
  \***************************************************************************/
/* istanbul ignore next */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var setNavigationBarBack = function () {
  console.warn('尚未支持');
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (setNavigationBarBack);

/***/ }),

/***/ "./node_modules/@ray-js/api/lib/setNavigationBarColor/index.wechat.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@ray-js/api/lib/setNavigationBarColor/index.wechat.js ***!
  \****************************************************************************/
/* istanbul ignore next */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (wx.setNavigationBarColor);

/***/ }),

/***/ "./node_modules/@ray-js/api/lib/setNavigationBarTitle/index.wechat.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@ray-js/api/lib/setNavigationBarTitle/index.wechat.js ***!
  \****************************************************************************/
/* istanbul ignore next */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (wx.setNavigationBarTitle);

/***/ }),

/***/ "./node_modules/@ray-js/api/lib/showNotification/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/@ray-js/api/lib/showNotification/index.js ***!
  \****************************************************************/
/* istanbul ignore next */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  console.warn('// TODO: 暂未实现方法 showNotification');
}

/***/ }),

/***/ "./node_modules/@ray-js/api/lib/showTabBar/index.wechat.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@ray-js/api/lib/showTabBar/index.wechat.js ***!
  \*****************************************************************/
/* istanbul ignore next */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (wx.showTabBar);

/***/ }),

/***/ "./node_modules/@ray-js/framework-mp/index.js":
/*!****************************************************!*\
  !*** ./node_modules/@ray-js/framework-mp/index.js ***!
  \****************************************************/
/* istanbul ignore next */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PageInstance": () => (/* reexport safe */ _ray_js_runtime__WEBPACK_IMPORTED_MODULE_0__.PageInstance),
/* harmony export */   "PageInstanceContext": () => (/* reexport safe */ _ray_js_runtime__WEBPACK_IMPORTED_MODULE_0__.PageInstanceContext),
/* harmony export */   "lifecycle": () => (/* reexport safe */ _ray_js_runtime__WEBPACK_IMPORTED_MODULE_0__.lifecycle),
/* harmony export */   "useAppEvent": () => (/* reexport safe */ _ray_js_runtime__WEBPACK_IMPORTED_MODULE_0__.useAppEvent),
/* harmony export */   "useComponentInstance": () => (/* reexport safe */ _ray_js_runtime__WEBPACK_IMPORTED_MODULE_0__.useComponentInstance),
/* harmony export */   "useNativeEffect": () => (/* reexport safe */ _ray_js_runtime__WEBPACK_IMPORTED_MODULE_0__.useNativeEffect),
/* harmony export */   "usePageEvent": () => (/* reexport safe */ _ray_js_runtime__WEBPACK_IMPORTED_MODULE_0__.usePageEvent),
/* harmony export */   "usePageInstance": () => (/* reexport safe */ _ray_js_runtime__WEBPACK_IMPORTED_MODULE_0__.usePageInstance),
/* harmony export */   "useQuery": () => (/* reexport safe */ _ray_js_runtime__WEBPACK_IMPORTED_MODULE_0__.useQuery),
/* harmony export */   "withPageLifecycle": () => (/* reexport safe */ _ray_js_runtime__WEBPACK_IMPORTED_MODULE_0__.withPageLifecycle)
/* harmony export */ });
/* harmony import */ var _ray_js_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ray-js/runtime */ "./node_modules/@ray-js/runtime/main.js");


/***/ }),

/***/ "./node_modules/@ray-js/location/lib/index.js":
/*!****************************************************!*\
  !*** ./node_modules/@ray-js/location/lib/index.js ***!
  \****************************************************/
/* istanbul ignore next */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _location__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./location */ "./node_modules/@ray-js/location/lib/location.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_location__WEBPACK_IMPORTED_MODULE_0__.location);

/***/ }),

/***/ "./node_modules/@ray-js/location/lib/location.js":
/*!*******************************************************!*\
  !*** ./node_modules/@ray-js/location/lib/location.js ***!
  \*******************************************************/
/* istanbul ignore next */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "location": () => (/* binding */ location)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.define-properties.js */ "./node_modules/core-js/modules/es.object.define-properties.js");
/* harmony import */ var core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.string.search.js */ "./node_modules/core-js/modules/es.string.search.js");
/* harmony import */ var core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ray_js_library__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ray-js/library */ "./node_modules/@ray-js/library/lib/index.js");
/* harmony import */ var _ray_js_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ray-js/router */ "./node_modules/@ray-js/router-mp/lib/index.js");






/**
 * 跨平台全局 location 对象，惰性获取，读取时再进行页面路径计算，性能较低
 * 小程序原生 NavBar 跳转的页面无法预先进行设置，所以仅支持在读取可用
 */

var location = {
  href: '',
  hash: '',
  host: '',
  hostname: '',
  params: {},
  pathname: '',
  port: '',
  protocol: '',
  query: {},
  search: '',
  basename: '/' // 只用于web端
};

Object.defineProperties(location, {
  href: {
    enumerable: true,
    configurable: false,
    get: function () {
      return _ray_js_router__WEBPACK_IMPORTED_MODULE_5__["default"].href;
    }
  },
  hash: {
    enumerable: true,
    configurable: false,
    get: function () {
      var q = _ray_js_library__WEBPACK_IMPORTED_MODULE_4__.url.parse(_ray_js_router__WEBPACK_IMPORTED_MODULE_5__["default"].href);
      return q.hash;
    }
  },
  host: {
    enumerable: true,
    configurable: false,
    get: function () {
      return _ray_js_library__WEBPACK_IMPORTED_MODULE_4__.url.parse(this.href).host;
    }
  },
  hostname: {
    enumerable: true,
    configurable: false,
    get: function () {
      return _ray_js_library__WEBPACK_IMPORTED_MODULE_4__.url.parse(this.href).hostname;
    }
  },
  pathname: {
    enumerable: true,
    configurable: false,
    get: function () {
      // pathname 不需要basename前缀
      var basename = this.basename;
      var pathname = _ray_js_library__WEBPACK_IMPORTED_MODULE_4__.url.parse(this.href).pathname;
      if (basename !== '/') {
        return pathname.replace(basename, '');
      }
      return pathname;
    }
  },
  port: {
    enumerable: true,
    configurable: false,
    get: function () {
      return _ray_js_library__WEBPACK_IMPORTED_MODULE_4__.url.parse(this.href).port;
    }
  },
  protocol: {
    enumerable: true,
    configurable: false,
    get: function () {
      return _ray_js_library__WEBPACK_IMPORTED_MODULE_4__.url.parse(this.href).protocol;
    }
  },
  search: {
    enumerable: true,
    configurable: false,
    get: function () {
      return _ray_js_library__WEBPACK_IMPORTED_MODULE_4__.url.parse(this.href).search;
    }
  },
  query: {
    enumerable: true,
    configurable: false,
    get: function () {
      return _ray_js_library__WEBPACK_IMPORTED_MODULE_4__.url.parse(this.href).query;
    }
  },
  params: {
    enumerable: true,
    configurable: false,
    get: function () {
      var page = _ray_js_router__WEBPACK_IMPORTED_MODULE_5__["default"].scheduler.getMatchedPage(this.pathname);
      return (page === null || page === void 0 ? void 0 : page.params) || {};
    }
  },
  basename: {
    enumerable: true,
    configurable: false,
    get: function () {
      var _router$scheduler$bas;

      // 小程序中没有basename
      return ((_router$scheduler$bas = _ray_js_router__WEBPACK_IMPORTED_MODULE_5__["default"].scheduler.basename) !== null && _router$scheduler$bas !== void 0 ? _router$scheduler$bas : '/') || '/';
    }
  }
});


/***/ }),

/***/ "./node_modules/@ray-js/ray/index.js":
/*!*******************************************!*\
  !*** ./node_modules/@ray-js/ray/index.js ***!
  \*******************************************/
/* istanbul ignore next */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Button": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.Button),
/* harmony export */   "Camera": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.Camera),
/* harmony export */   "Checkbox": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.Checkbox),
/* harmony export */   "CheckboxGroup": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.CheckboxGroup),
/* harmony export */   "CoverView": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.CoverView),
/* harmony export */   "Form": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.Form),
/* harmony export */   "Icon": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.Icon),
/* harmony export */   "Image": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.Image),
/* harmony export */   "Input": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.Input),
/* harmony export */   "IpcPlayer": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.IpcPlayer),
/* harmony export */   "Label": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.Label),
/* harmony export */   "Map": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.Map),
/* harmony export */   "MovableArea": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.MovableArea),
/* harmony export */   "MovableView": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.MovableView),
/* harmony export */   "NativeVideo": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.NativeVideo),
/* harmony export */   "PageContainer": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.PageContainer),
/* harmony export */   "PageInstance": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.PageInstance),
/* harmony export */   "PageInstanceContext": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.PageInstanceContext),
/* harmony export */   "Picker": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.Picker),
/* harmony export */   "PickerView": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.PickerView),
/* harmony export */   "PickerViewColumn": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.PickerViewColumn),
/* harmony export */   "Progress": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.Progress),
/* harmony export */   "Radio": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.Radio),
/* harmony export */   "RadioGroup": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.RadioGroup),
/* harmony export */   "RichText": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.RichText),
/* harmony export */   "ScrollView": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.ScrollView),
/* harmony export */   "Slider": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.Slider),
/* harmony export */   "Swiper": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.Swiper),
/* harmony export */   "SwiperItem": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.SwiperItem),
/* harmony export */   "Switch": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.Switch),
/* harmony export */   "Text": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.Text),
/* harmony export */   "Textarea": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.Textarea),
/* harmony export */   "View": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.View),
/* harmony export */   "WebView": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.WebView),
/* harmony export */   "addAstronomical": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.addAstronomical),
/* harmony export */   "addDeviceToDesk": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.addDeviceToDesk),
/* harmony export */   "addGroupTimer": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.addGroupTimer),
/* harmony export */   "addSingleTimer": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.addSingleTimer),
/* harmony export */   "addTimer": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.addTimer),
/* harmony export */   "apiRequestByAtop": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.apiRequestByAtop),
/* harmony export */   "apiRequestByHighway": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.apiRequestByHighway),
/* harmony export */   "authorize": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.authorize),
/* harmony export */   "authorizeStatus": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.authorizeStatus),
/* harmony export */   "backToHomeAndOpenPanel": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.backToHomeAndOpenPanel),
/* harmony export */   "beginEvent": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.beginEvent),
/* harmony export */   "bindRule": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.bindRule),
/* harmony export */   "bluetoothCapabilityIsSupport": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.bluetoothCapabilityIsSupport),
/* harmony export */   "bluetoothCapabilityOfBLEBeacon": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.bluetoothCapabilityOfBLEBeacon),
/* harmony export */   "bluetoothIsPowerOn": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.bluetoothIsPowerOn),
/* harmony export */   "canIUseRouter": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.canIUseRouter),
/* harmony export */   "canOpenURL": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.canOpenURL),
/* harmony export */   "canOpenURLSync": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.canOpenURLSync),
/* harmony export */   "cancelBLEFileTransfer": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.cancelBLEFileTransfer),
/* harmony export */   "changeDebugMode": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.changeDebugMode),
/* harmony export */   "checkOTAUpdateInfo": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.checkOTAUpdateInfo),
/* harmony export */   "checkOTAUpgradeStatus": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.checkOTAUpgradeStatus),
/* harmony export */   "chooseCropImage": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.chooseCropImage),
/* harmony export */   "chooseImage": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.chooseImage),
/* harmony export */   "chooseMedia": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.chooseMedia),
/* harmony export */   "clearStorage": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.clearStorage),
/* harmony export */   "clearStorageSync": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.clearStorageSync),
/* harmony export */   "connectBLEDevice": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.connectBLEDevice),
/* harmony export */   "connectBTBond": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.connectBTBond),
/* harmony export */   "connectBluetoothDevice": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.connectBluetoothDevice),
/* harmony export */   "createAction": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.createAction),
/* harmony export */   "createCondition": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.createCondition),
/* harmony export */   "createInnerAudioContext": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.createInnerAudioContext),
/* harmony export */   "device": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.device),
/* harmony export */   "deviceIsSupportThingModel": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.deviceIsSupportThingModel),
/* harmony export */   "directConnectBLEDevice": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.directConnectBLEDevice),
/* harmony export */   "disableRule": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.disableRule),
/* harmony export */   "disconnectBLEDevice": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.disconnectBLEDevice),
/* harmony export */   "disconnectBTBond": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.disconnectBTBond),
/* harmony export */   "disconnectBluetoothDevice": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.disconnectBluetoothDevice),
/* harmony export */   "downloadFile": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.downloadFile),
/* harmony export */   "editAction": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.editAction),
/* harmony export */   "editCondition": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.editCondition),
/* harmony export */   "emitChannel": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.emitChannel),
/* harmony export */   "enableRule": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.enableRule),
/* harmony export */   "endEvent": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.endEvent),
/* harmony export */   "event": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.event),
/* harmony export */   "exitMiniProgram": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.exitMiniProgram),
/* harmony export */   "exitMiniWidget": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.exitMiniWidget),
/* harmony export */   "extApiCanIUse": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.extApiCanIUse),
/* harmony export */   "extApiCanIUseSync": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.extApiCanIUseSync),
/* harmony export */   "extApiInvoke": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.extApiInvoke),
/* harmony export */   "extApiInvokeSync": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.extApiInvokeSync),
/* harmony export */   "getAccountInfo": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.getAccountInfo),
/* harmony export */   "getAccountInfoSync": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.getAccountInfoSync),
/* harmony export */   "getApp": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.getApp),
/* harmony export */   "getAppInfo": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.getAppInfo),
/* harmony export */   "getAssetHostname": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.getAssetHostname),
/* harmony export */   "getAstronomicalList": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.getAstronomicalList),
/* harmony export */   "getAudioFileDuration": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.getAudioFileDuration),
/* harmony export */   "getBLEDeviceRSSI": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.getBLEDeviceRSSI),
/* harmony export */   "getBLEOnlineState": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.getBLEOnlineState),
/* harmony export */   "getBTDeviceInfo": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.getBTDeviceInfo),
/* harmony export */   "getBindRuleList": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.getBindRuleList),
/* harmony export */   "getBoundingClientRect": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.getBoundingClientRect),
/* harmony export */   "getCdnUrl": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.getCdnUrl),
/* harmony export */   "getClipboardData": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.getClipboardData),
/* harmony export */   "getConnectedWifi": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.getConnectedWifi),
/* harmony export */   "getCurrentPages": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.getCurrentPages),
/* harmony export */   "getCurrentVolume": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.getCurrentVolume),
/* harmony export */   "getCurrentVolumeByMode": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.getCurrentVolumeByMode),
/* harmony export */   "getCurrentWifiSSID": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.getCurrentWifiSSID),
/* harmony export */   "getCustomizePosition": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.getCustomizePosition),
/* harmony export */   "getDataWithSpecified": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.getDataWithSpecified),
/* harmony export */   "getDevAlarmList": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.getDevAlarmList),
/* harmony export */   "getDevProperty": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.getDevProperty),
/* harmony export */   "getDeviceInfo": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.getDeviceInfo),
/* harmony export */   "getDeviceListByDevIds": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.getDeviceListByDevIds),
/* harmony export */   "getDeviceNumWithDpCode": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.getDeviceNumWithDpCode),
/* harmony export */   "getDeviceOfflineReminderState": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.getDeviceOfflineReminderState),
/* harmony export */   "getDeviceOfflineReminderWarningText": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.getDeviceOfflineReminderWarningText),
/* harmony export */   "getDeviceOnlineType": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.getDeviceOnlineType),
/* harmony export */   "getDeviceProperty": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.getDeviceProperty),
/* harmony export */   "getDeviceThingModelInfo": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.getDeviceThingModelInfo),
/* harmony export */   "getDeviceWifiActivatorStatus": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.getDeviceWifiActivatorStatus),
/* harmony export */   "getDpAllStatistResult": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.getDpAllStatistResult),
/* harmony export */   "getDpDataByMesh": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.getDpDataByMesh),
/* harmony export */   "getDpLastTimer": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.getDpLastTimer),
/* harmony export */   "getDpLogDays": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.getDpLogDays),
/* harmony export */   "getDpReportLog": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.getDpReportLog),
/* harmony export */   "getDpResultByHour": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.getDpResultByHour),
/* harmony export */   "getDpResultByMonth": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.getDpResultByMonth),
/* harmony export */   "getDpsInfos": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.getDpsInfos),
/* harmony export */   "getDpsLastTimer": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.getDpsLastTimer),
/* harmony export */   "getElementById": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.getElementById),
/* harmony export */   "getEncryptLocalKeyWithData": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.getEncryptLocalKeyWithData),
/* harmony export */   "getEnterOptions": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.getEnterOptions),
/* harmony export */   "getEnterOptionsSync": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.getEnterOptionsSync),
/* harmony export */   "getFileSystemManager": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.getFileSystemManager),
/* harmony export */   "getGroupDeviceList": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.getGroupDeviceList),
/* harmony export */   "getGroupDeviceNum": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.getGroupDeviceNum),
/* harmony export */   "getGroupDpsInfos": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.getGroupDpsInfos),
/* harmony export */   "getGroupInfo": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.getGroupInfo),
/* harmony export */   "getGroupProperty": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.getGroupProperty),
/* harmony export */   "getIconfontInfo": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.getIconfontInfo),
/* harmony export */   "getImageInfo": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.getImageInfo),
/* harmony export */   "getLangContent": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.getLangContent),
/* harmony export */   "getLangKey": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.getLangKey),
/* harmony export */   "getLastTimerPeriod": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.getLastTimerPeriod),
/* harmony export */   "getLaunchOptions": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.getLaunchOptions),
/* harmony export */   "getLaunchOptionsSync": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.getLaunchOptionsSync),
/* harmony export */   "getLinkageDeviceList": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.getLinkageDeviceList),
/* harmony export */   "getLogInSpecifiedTime": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.getLogInSpecifiedTime),
/* harmony export */   "getLogUserAction": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.getLogUserAction),
/* harmony export */   "getMenuButtonBoundingClientRect": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.getMenuButtonBoundingClientRect),
/* harmony export */   "getMenuButtonBoundingClientRectSync": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.getMenuButtonBoundingClientRectSync),
/* harmony export */   "getMeshDeviceId": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.getMeshDeviceId),
/* harmony export */   "getMobileDeviceInfo": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.getMobileDeviceInfo),
/* harmony export */   "getMonthWithSpecified": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.getMonthWithSpecified),
/* harmony export */   "getMqttConnectState": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.getMqttConnectState),
/* harmony export */   "getMultiDpsAllResult": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.getMultiDpsAllResult),
/* harmony export */   "getNetworkType": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.getNetworkType),
/* harmony export */   "getPermissionConfig": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.getPermissionConfig),
/* harmony export */   "getPermissionConfigSync": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.getPermissionConfigSync),
/* harmony export */   "getProductInfo": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.getProductInfo),
/* harmony export */   "getRecorderManager": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.getRecorderManager),
/* harmony export */   "getSceneList": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.getSceneList),
/* harmony export */   "getScreenBrightness": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.getScreenBrightness),
/* harmony export */   "getShareChannelList": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.getShareChannelList),
/* harmony export */   "getShareDeviceInfo": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.getShareDeviceInfo),
/* harmony export */   "getStorage": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.getStorage),
/* harmony export */   "getStorageSync": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.getStorageSync),
/* harmony export */   "getSubDeviceInfoList": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.getSubDeviceInfoList),
/* harmony export */   "getSupportedThirdPartyServices": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.getSupportedThirdPartyServices),
/* harmony export */   "getSystemInfo": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.getSystemInfo),
/* harmony export */   "getSystemInfoSync": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.getSystemInfoSync),
/* harmony export */   "getSystemSetting": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.getSystemSetting),
/* harmony export */   "getTempDirectory": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.getTempDirectory),
/* harmony export */   "getUserInfo": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.getUserInfo),
/* harmony export */   "getVideoInfo": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.getVideoInfo),
/* harmony export */   "getWeatherQuality": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.getWeatherQuality),
/* harmony export */   "getWeathers": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.getWeathers),
/* harmony export */   "getWeekWithSpecified": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.getWeekWithSpecified),
/* harmony export */   "getWifiList": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.getWifiList),
/* harmony export */   "globalApi": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.globalApi),
/* harmony export */   "goDeviceAlarm": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.goDeviceAlarm),
/* harmony export */   "goDeviceDetail": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.goDeviceDetail),
/* harmony export */   "handleShortcut": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.handleShortcut),
/* harmony export */   "hideBoardTitleIcon": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.hideBoardTitleIcon),
/* harmony export */   "hideBoardTitleIconSync": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.hideBoardTitleIconSync),
/* harmony export */   "hideHomeButton": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.hideHomeButton),
/* harmony export */   "hideLoading": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.hideLoading),
/* harmony export */   "hideMenuButton": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.hideMenuButton),
/* harmony export */   "hideNavigationBarLoading": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.hideNavigationBarLoading),
/* harmony export */   "hideNotification": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.hideNotification),
/* harmony export */   "hideStatusBar": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.hideStatusBar),
/* harmony export */   "hideTabBar": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.hideTabBar),
/* harmony export */   "hideTabBarRedDot": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.hideTabBarRedDot),
/* harmony export */   "hideToast": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.hideToast),
/* harmony export */   "isAssociatedShortcut": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.isAssociatedShortcut),
/* harmony export */   "isDeviceSupportOfflineReminder": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.isDeviceSupportOfflineReminder),
/* harmony export */   "isSupportedShortcut": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.isSupportedShortcut),
/* harmony export */   "lifecycle": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.lifecycle),
/* harmony export */   "location": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.location),
/* harmony export */   "login": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.login),
/* harmony export */   "makePhoneCall": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.makePhoneCall),
/* harmony export */   "modDeleteTaskByCategory": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.modDeleteTaskByCategory),
/* harmony export */   "modDeleteTaskByIds": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.modDeleteTaskByIds),
/* harmony export */   "modifyGroupTimer": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.modifyGroupTimer),
/* harmony export */   "modifySingleTimer": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.modifySingleTimer),
/* harmony export */   "nativeDisabled": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.nativeDisabled),
/* harmony export */   "nativeInovke": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.nativeInovke),
/* harmony export */   "nativeRouter": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.nativeRouter),
/* harmony export */   "navigateBack": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.navigateBack),
/* harmony export */   "navigateBackMiniProgram": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.navigateBackMiniProgram),
/* harmony export */   "navigateTo": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.navigateTo),
/* harmony export */   "navigateToMiniProgram": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.navigateToMiniProgram),
/* harmony export */   "offAccelerometerChange": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.offAccelerometerChange),
/* harmony export */   "offAppEvent": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.offAppEvent),
/* harmony export */   "offAppHide": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.offAppHide),
/* harmony export */   "offAppShow": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.offAppShow),
/* harmony export */   "offBLEBigDataChannelDeviceToAppSuccess": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.offBLEBigDataChannelDeviceToAppSuccess),
/* harmony export */   "offBLEBigDataChannelProgressEvent": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.offBLEBigDataChannelProgressEvent),
/* harmony export */   "offBLEBigDataChannelUploadCloudProgress": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.offBLEBigDataChannelUploadCloudProgress),
/* harmony export */   "offBLEConnectStatusChange": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.offBLEConnectStatusChange),
/* harmony export */   "offBLEScanBindDevice": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.offBLEScanBindDevice),
/* harmony export */   "offBLETransparentDataReport": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.offBLETransparentDataReport),
/* harmony export */   "offBluetoothAdapterStateChange": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.offBluetoothAdapterStateChange),
/* harmony export */   "offCompassChange": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.offCompassChange),
/* harmony export */   "offCountrySelectResult": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.offCountrySelectResult),
/* harmony export */   "offDeviceInfoUpdated": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.offDeviceInfoUpdated),
/* harmony export */   "offDeviceMotionChange": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.offDeviceMotionChange),
/* harmony export */   "offDeviceOnlineStatusUpdate": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.offDeviceOnlineStatusUpdate),
/* harmony export */   "offDeviceRemoved": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.offDeviceRemoved),
/* harmony export */   "offDirectlyConnectedSearchDeviceEvent": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.offDirectlyConnectedSearchDeviceEvent),
/* harmony export */   "offDpDataChange": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.offDpDataChange),
/* harmony export */   "offError": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.offError),
/* harmony export */   "offFileTransferProgress": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.offFileTransferProgress),
/* harmony export */   "offGetWifiList": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.offGetWifiList),
/* harmony export */   "offGroupDpCodeChange": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.offGroupDpCodeChange),
/* harmony export */   "offGroupDpDataChangeEvent": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.offGroupDpDataChangeEvent),
/* harmony export */   "offGroupInfoChange": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.offGroupInfoChange),
/* harmony export */   "offGroupRemovedEvent": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.offGroupRemovedEvent),
/* harmony export */   "offGyroscopeChange": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.offGyroscopeChange),
/* harmony export */   "offLeaveBeaconFence": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.offLeaveBeaconFence),
/* harmony export */   "offMemoryWarning": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.offMemoryWarning),
/* harmony export */   "offMqttConnectState": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.offMqttConnectState),
/* harmony export */   "offMqttMessageReceived": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.offMqttMessageReceived),
/* harmony export */   "offNativeEvent": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.offNativeEvent),
/* harmony export */   "offNetworkStatusChange": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.offNetworkStatusChange),
/* harmony export */   "offReceiveMessage": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.offReceiveMessage),
/* harmony export */   "offReceivedThingModelMessage": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.offReceivedThingModelMessage),
/* harmony export */   "offRecordingEvent": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.offRecordingEvent),
/* harmony export */   "offRouterEvent": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.offRouterEvent),
/* harmony export */   "offRouterResult": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.offRouterResult),
/* harmony export */   "offSocketMessageReceived": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.offSocketMessageReceived),
/* harmony export */   "offSubDeviceAdded": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.offSubDeviceAdded),
/* harmony export */   "offSubDeviceDpUpdate": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.offSubDeviceDpUpdate),
/* harmony export */   "offSubDeviceInfoUpdate": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.offSubDeviceInfoUpdate),
/* harmony export */   "offSubDeviceInfoUpdateEvent": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.offSubDeviceInfoUpdateEvent),
/* harmony export */   "offSubDeviceRemoved": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.offSubDeviceRemoved),
/* harmony export */   "offSystemVolumeChangeEvent": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.offSystemVolumeChangeEvent),
/* harmony export */   "offThemeChange": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.offThemeChange),
/* harmony export */   "offTimerUpdate": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.offTimerUpdate),
/* harmony export */   "offUploadProgressUpdate": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.offUploadProgressUpdate),
/* harmony export */   "offWindowResize": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.offWindowResize),
/* harmony export */   "onAccelerometerChange": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.onAccelerometerChange),
/* harmony export */   "onAppEvent": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.onAppEvent),
/* harmony export */   "onAppHide": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.onAppHide),
/* harmony export */   "onAppShow": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.onAppShow),
/* harmony export */   "onBLEBigDataChannelDeviceToAppSuccess": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.onBLEBigDataChannelDeviceToAppSuccess),
/* harmony export */   "onBLEBigDataChannelProgressEvent": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.onBLEBigDataChannelProgressEvent),
/* harmony export */   "onBLEBigDataChannelUploadCloudProgress": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.onBLEBigDataChannelUploadCloudProgress),
/* harmony export */   "onBLEConnectStatusChange": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.onBLEConnectStatusChange),
/* harmony export */   "onBLEScanBindDevice": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.onBLEScanBindDevice),
/* harmony export */   "onBLETransparentDataReport": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.onBLETransparentDataReport),
/* harmony export */   "onBluetoothAdapterStateChange": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.onBluetoothAdapterStateChange),
/* harmony export */   "onCompassChange": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.onCompassChange),
/* harmony export */   "onCountrySelectResult": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.onCountrySelectResult),
/* harmony export */   "onDeviceInfoUpdated": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.onDeviceInfoUpdated),
/* harmony export */   "onDeviceMotionChange": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.onDeviceMotionChange),
/* harmony export */   "onDeviceOnlineStatusUpdate": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.onDeviceOnlineStatusUpdate),
/* harmony export */   "onDeviceRemoved": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.onDeviceRemoved),
/* harmony export */   "onDirectlyConnectedSearchDeviceEvent": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.onDirectlyConnectedSearchDeviceEvent),
/* harmony export */   "onDpDataChange": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.onDpDataChange),
/* harmony export */   "onError": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.onError),
/* harmony export */   "onFileTransferProgress": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.onFileTransferProgress),
/* harmony export */   "onGetWifiList": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.onGetWifiList),
/* harmony export */   "onGroupDpCodeChange": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.onGroupDpCodeChange),
/* harmony export */   "onGroupDpDataChangeEvent": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.onGroupDpDataChangeEvent),
/* harmony export */   "onGroupInfoChange": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.onGroupInfoChange),
/* harmony export */   "onGroupRemovedEvent": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.onGroupRemovedEvent),
/* harmony export */   "onGyroscopeChange": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.onGyroscopeChange),
/* harmony export */   "onLeaveBeaconFence": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.onLeaveBeaconFence),
/* harmony export */   "onMemoryWarning": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.onMemoryWarning),
/* harmony export */   "onMqttConnectState": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.onMqttConnectState),
/* harmony export */   "onMqttMessageReceived": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.onMqttMessageReceived),
/* harmony export */   "onNativeEvent": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.onNativeEvent),
/* harmony export */   "onNavigationBarBack": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.onNavigationBarBack),
/* harmony export */   "onNetworkStatusChange": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.onNetworkStatusChange),
/* harmony export */   "onPageNotFound": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.onPageNotFound),
/* harmony export */   "onReceiveMessage": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.onReceiveMessage),
/* harmony export */   "onReceivedThingModelMessage": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.onReceivedThingModelMessage),
/* harmony export */   "onRecordingEvent": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.onRecordingEvent),
/* harmony export */   "onRouterEvent": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.onRouterEvent),
/* harmony export */   "onRouterResult": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.onRouterResult),
/* harmony export */   "onSocketMessageReceived": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.onSocketMessageReceived),
/* harmony export */   "onSubDeviceAdded": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.onSubDeviceAdded),
/* harmony export */   "onSubDeviceDpUpdate": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.onSubDeviceDpUpdate),
/* harmony export */   "onSubDeviceInfoUpdate": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.onSubDeviceInfoUpdate),
/* harmony export */   "onSubDeviceInfoUpdateEvent": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.onSubDeviceInfoUpdateEvent),
/* harmony export */   "onSubDeviceRemoved": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.onSubDeviceRemoved),
/* harmony export */   "onSystemVolumeChangeEvent": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.onSystemVolumeChangeEvent),
/* harmony export */   "onThemeChange": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.onThemeChange),
/* harmony export */   "onTimerUpdate": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.onTimerUpdate),
/* harmony export */   "onUploadProgressUpdate": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.onUploadProgressUpdate),
/* harmony export */   "onWindowResize": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.onWindowResize),
/* harmony export */   "openAppSystemSettingPage": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.openAppSystemSettingPage),
/* harmony export */   "openCategoryActivatorPage": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.openCategoryActivatorPage),
/* harmony export */   "openCountrySelectPage": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.openCountrySelectPage),
/* harmony export */   "openDeviceDetailPage": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.openDeviceDetailPage),
/* harmony export */   "openDeviceEdit": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.openDeviceEdit),
/* harmony export */   "openDeviceExecutionAndAnutomation": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.openDeviceExecutionAndAnutomation),
/* harmony export */   "openDeviceInfo": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.openDeviceInfo),
/* harmony export */   "openDeviceQuestionsAndFeedback": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.openDeviceQuestionsAndFeedback),
/* harmony export */   "openDeviceWifiNetworkMonitorPage": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.openDeviceWifiNetworkMonitorPage),
/* harmony export */   "openGroupDetailPage": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.openGroupDetailPage),
/* harmony export */   "openGroupEdit": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.openGroupEdit),
/* harmony export */   "openGroupTimerPage": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.openGroupTimerPage),
/* harmony export */   "openHelpCenter": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.openHelpCenter),
/* harmony export */   "openInnerH5": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.openInnerH5),
/* harmony export */   "openMeshLocalGroup": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.openMeshLocalGroup),
/* harmony export */   "openMiniWidget": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.openMiniWidget),
/* harmony export */   "openOTAUpgrade": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.openOTAUpgrade),
/* harmony export */   "openPanel": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.openPanel),
/* harmony export */   "openPreConditionPage": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.openPreConditionPage),
/* harmony export */   "openRNPanel": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.openRNPanel),
/* harmony export */   "openRecommendSceneDetail": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.openRecommendSceneDetail),
/* harmony export */   "openReconnectPage": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.openReconnectPage),
/* harmony export */   "openSetting": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.openSetting),
/* harmony export */   "openShareDevice": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.openShareDevice),
/* harmony export */   "openSystemBluetoothSetting": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.openSystemBluetoothSetting),
/* harmony export */   "openSystemSettingPage": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.openSystemSettingPage),
/* harmony export */   "openTimerPage": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.openTimerPage),
/* harmony export */   "openURL": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.openURL),
/* harmony export */   "platform": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.platform),
/* harmony export */   "playnet": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.playnet),
/* harmony export */   "postBLEBigDataChannelWithProgress": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.postBLEBigDataChannelWithProgress),
/* harmony export */   "postBLEFileTransfer": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.postBLEFileTransfer),
/* harmony export */   "preDownloadMiniApp": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.preDownloadMiniApp),
/* harmony export */   "preloadPanel": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.preloadPanel),
/* harmony export */   "previewImage": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.previewImage),
/* harmony export */   "publishBLETransparentData": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.publishBLETransparentData),
/* harmony export */   "publishCommands": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.publishCommands),
/* harmony export */   "publishDps": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.publishDps),
/* harmony export */   "publishDpsWithPipeType": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.publishDpsWithPipeType),
/* harmony export */   "publishGroupDpCodes": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.publishGroupDpCodes),
/* harmony export */   "publishGroupDps": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.publishGroupDps),
/* harmony export */   "publishLanMessage": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.publishLanMessage),
/* harmony export */   "publishMqttMessage": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.publishMqttMessage),
/* harmony export */   "publishSigMeshMultiDps": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.publishSigMeshMultiDps),
/* harmony export */   "publishSocketMessage": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.publishSocketMessage),
/* harmony export */   "publishThingModelMessage": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.publishThingModelMessage),
/* harmony export */   "queryDps": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.queryDps),
/* harmony export */   "queryGroupTimerTasks": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.queryGroupTimerTasks),
/* harmony export */   "queryTimerTasks": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.queryTimerTasks),
/* harmony export */   "reLaunch": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.reLaunch),
/* harmony export */   "readBeaconFenceConfig": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.readBeaconFenceConfig),
/* harmony export */   "redirectTo": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.redirectTo),
/* harmony export */   "registerChannel": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.registerChannel),
/* harmony export */   "registerDeviceListListener": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.registerDeviceListListener),
/* harmony export */   "registerGateWaySubDeviceListener": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.registerGateWaySubDeviceListener),
/* harmony export */   "registerGroupChange": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.registerGroupChange),
/* harmony export */   "registerLeaveBeaconFenceEvent": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.registerLeaveBeaconFenceEvent),
/* harmony export */   "registerMQTTDeviceListener": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.registerMQTTDeviceListener),
/* harmony export */   "registerMQTTProtocolListener": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.registerMQTTProtocolListener),
/* harmony export */   "registerSystemVolumeChange": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.registerSystemVolumeChange),
/* harmony export */   "registerTopicListListener": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.registerTopicListListener),
/* harmony export */   "registerZigbeeGateWaySubDeviceListener": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.registerZigbeeGateWaySubDeviceListener),
/* harmony export */   "removeAstronomical": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.removeAstronomical),
/* harmony export */   "removeDevice": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.removeDevice),
/* harmony export */   "removeRule": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.removeRule),
/* harmony export */   "removeShareDevice": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.removeShareDevice),
/* harmony export */   "removeStorage": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.removeStorage),
/* harmony export */   "removeStorageSync": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.removeStorageSync),
/* harmony export */   "removeTabBarBadge": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.removeTabBarBadge),
/* harmony export */   "removeTimer": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.removeTimer),
/* harmony export */   "renameDeviceName": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.renameDeviceName),
/* harmony export */   "request": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.request),
/* harmony export */   "requestCloud": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.requestCloud),
/* harmony export */   "resetFactory": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.resetFactory),
/* harmony export */   "resizeImage": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.resizeImage),
/* harmony export */   "rotateImage": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.rotateImage),
/* harmony export */   "router": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.router),
/* harmony export */   "saveCustomizePosition": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.saveCustomizePosition),
/* harmony export */   "saveDevProperty": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.saveDevProperty),
/* harmony export */   "saveSceneAction": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.saveSceneAction),
/* harmony export */   "saveToAlbum": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.saveToAlbum),
/* harmony export */   "saveVideoToPhotosAlbum": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.saveVideoToPhotosAlbum),
/* harmony export */   "scanCode": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.scanCode),
/* harmony export */   "sendMqttMessage": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.sendMqttMessage),
/* harmony export */   "setAlarmSwitch": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.setAlarmSwitch),
/* harmony export */   "setBoardIcon": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.setBoardIcon),
/* harmony export */   "setBoardIconSync": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.setBoardIconSync),
/* harmony export */   "setBoardTitle": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.setBoardTitle),
/* harmony export */   "setBoardTitleSync": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.setBoardTitleSync),
/* harmony export */   "setClipboardData": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.setClipboardData),
/* harmony export */   "setDeviceProperty": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.setDeviceProperty),
/* harmony export */   "setGroupProperty": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.setGroupProperty),
/* harmony export */   "setKeepScreenOn": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.setKeepScreenOn),
/* harmony export */   "setNavigationBarBack": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.setNavigationBarBack),
/* harmony export */   "setNavigationBarColor": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.setNavigationBarColor),
/* harmony export */   "setNavigationBarTitle": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.setNavigationBarTitle),
/* harmony export */   "setPageOrientation": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.setPageOrientation),
/* harmony export */   "setScreenBrightness": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.setScreenBrightness),
/* harmony export */   "setStorage": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.setStorage),
/* harmony export */   "setStorageSync": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.setStorageSync),
/* harmony export */   "setTabBarBadge": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.setTabBarBadge),
/* harmony export */   "setTabBarItem": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.setTabBarItem),
/* harmony export */   "setTabBarStyle": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.setTabBarStyle),
/* harmony export */   "share": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.share),
/* harmony export */   "showActionSheet": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.showActionSheet),
/* harmony export */   "showBoardTitleIcon": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.showBoardTitleIcon),
/* harmony export */   "showBoardTitleIconSync": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.showBoardTitleIconSync),
/* harmony export */   "showLoading": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.showLoading),
/* harmony export */   "showMenuButton": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.showMenuButton),
/* harmony export */   "showModal": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.showModal),
/* harmony export */   "showNavigationBarLoading": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.showNavigationBarLoading),
/* harmony export */   "showNotification": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.showNotification),
/* harmony export */   "showSceneDialog": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.showSceneDialog),
/* harmony export */   "showStatusBar": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.showStatusBar),
/* harmony export */   "showTabBar": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.showTabBar),
/* harmony export */   "showTabBarRedDot": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.showTabBarRedDot),
/* harmony export */   "showToast": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.showToast),
/* harmony export */   "startAccelerometer": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.startAccelerometer),
/* harmony export */   "startBLEMeshLowPowerConnection": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.startBLEMeshLowPowerConnection),
/* harmony export */   "startBLEScan": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.startBLEScan),
/* harmony export */   "startBLEScanBeacon": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.startBLEScanBeacon),
/* harmony export */   "startBLEScanBindDevice": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.startBLEScanBindDevice),
/* harmony export */   "startBLEScanSync": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.startBLEScanSync),
/* harmony export */   "startCompass": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.startCompass),
/* harmony export */   "startDeviceMotionListening": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.startDeviceMotionListening),
/* harmony export */   "startDeviceWifiActivator": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.startDeviceWifiActivator),
/* harmony export */   "startDirectlyConnectedDeviceActivator": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.startDirectlyConnectedDeviceActivator),
/* harmony export */   "startDirectlyConnectedSearchDevice": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.startDirectlyConnectedSearchDevice),
/* harmony export */   "startGWActivation": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.startGWActivation),
/* harmony export */   "startGyroscope": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.startGyroscope),
/* harmony export */   "startPullDownRefresh": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.startPullDownRefresh),
/* harmony export */   "stopAccelerometer": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.stopAccelerometer),
/* harmony export */   "stopBLEMeshLowPowerConnection": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.stopBLEMeshLowPowerConnection),
/* harmony export */   "stopBLEScan": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.stopBLEScan),
/* harmony export */   "stopBLEScanBeacon": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.stopBLEScanBeacon),
/* harmony export */   "stopBLEScanSync": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.stopBLEScanSync),
/* harmony export */   "stopCompass": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.stopCompass),
/* harmony export */   "stopDeviceMotionListening": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.stopDeviceMotionListening),
/* harmony export */   "stopDirectlyConnectedDeviceActivator": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.stopDirectlyConnectedDeviceActivator),
/* harmony export */   "stopDirectlyConnectedSearchDevice": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.stopDirectlyConnectedSearchDevice),
/* harmony export */   "stopGWActivation": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.stopGWActivation),
/* harmony export */   "stopGyroscope": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.stopGyroscope),
/* harmony export */   "stopPullDownRefresh": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.stopPullDownRefresh),
/* harmony export */   "subscribeBLEConnectStatus": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.subscribeBLEConnectStatus),
/* harmony export */   "subscribeBLETransparentDataReport": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.subscribeBLETransparentDataReport),
/* harmony export */   "subscribeDeviceRemoved": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.subscribeDeviceRemoved),
/* harmony export */   "subscribeReceivedThingModelMessage": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.subscribeReceivedThingModelMessage),
/* harmony export */   "switchTab": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.switchTab),
/* harmony export */   "syncDeviceInfo": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.syncDeviceInfo),
/* harmony export */   "syncTimerTask": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.syncTimerTask),
/* harmony export */   "toggleDeviceOfflineReminder": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.toggleDeviceOfflineReminder),
/* harmony export */   "trackEvent": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.trackEvent),
/* harmony export */   "triggerRule": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.triggerRule),
/* harmony export */   "unRegisterGroupChange": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.unRegisterGroupChange),
/* harmony export */   "unRegisterSystemVolumeChange": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.unRegisterSystemVolumeChange),
/* harmony export */   "unSubscribeDeviceRemoved": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.unSubscribeDeviceRemoved),
/* harmony export */   "unSubscribeReceivedThingModelMessage": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.unSubscribeReceivedThingModelMessage),
/* harmony export */   "unregisterDeviceListListener": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.unregisterDeviceListListener),
/* harmony export */   "unregisterGateWaySubDeviceListener": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.unregisterGateWaySubDeviceListener),
/* harmony export */   "unregisterLeaveBeaconFenceEvent": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.unregisterLeaveBeaconFenceEvent),
/* harmony export */   "unregisterMQTTDeviceListener": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.unregisterMQTTDeviceListener),
/* harmony export */   "unregisterMQTTProtocolListener": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.unregisterMQTTProtocolListener),
/* harmony export */   "unregisterTopicListListener": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.unregisterTopicListListener),
/* harmony export */   "unregisterZigbeeGateWaySubDeviceListener": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.unregisterZigbeeGateWaySubDeviceListener),
/* harmony export */   "unsubscribeBLEConnectStatus": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.unsubscribeBLEConnectStatus),
/* harmony export */   "unsubscribeBLETransparentDataReport": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.unsubscribeBLETransparentDataReport),
/* harmony export */   "updateAstronomical": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.updateAstronomical),
/* harmony export */   "updateAstronomicalStatus": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.updateAstronomicalStatus),
/* harmony export */   "updateDeviceThingModelInfo": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.updateDeviceThingModelInfo),
/* harmony export */   "updateDpName": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.updateDpName),
/* harmony export */   "updateGroupDpName": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.updateGroupDpName),
/* harmony export */   "updateTimer": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.updateTimer),
/* harmony export */   "updateTimerStatus": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.updateTimerStatus),
/* harmony export */   "updateVolume": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.updateVolume),
/* harmony export */   "uploadFile": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.uploadFile),
/* harmony export */   "uploadImage": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.uploadImage),
/* harmony export */   "useAppEvent": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.useAppEvent),
/* harmony export */   "useComponentInstance": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.useComponentInstance),
/* harmony export */   "useNativeEffect": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.useNativeEffect),
/* harmony export */   "usePageEvent": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.usePageEvent),
/* harmony export */   "usePageInstance": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.usePageInstance),
/* harmony export */   "useQuery": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.useQuery),
/* harmony export */   "validDeviceOnlineType": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.validDeviceOnlineType),
/* harmony export */   "vibrateLong": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.vibrateLong),
/* harmony export */   "vibrateShort": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.vibrateShort),
/* harmony export */   "withPageLifecycle": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.withPageLifecycle),
/* harmony export */   "writeBeaconFenceConfig": () => (/* reexport safe */ _unified__WEBPACK_IMPORTED_MODULE_0__.writeBeaconFenceConfig)
/* harmony export */ });
/* harmony import */ var _unified__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./unified */ "./node_modules/@ray-js/ray/unified.mini.js");
// 构建web、小程序时，导入的模块 `import * form 'ray';`



/***/ }),

/***/ "./node_modules/@ray-js/ray/unified.mini.js":
/*!**************************************************!*\
  !*** ./node_modules/@ray-js/ray/unified.mini.js ***!
  \**************************************************/
/* istanbul ignore next */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Button": () => (/* reexport safe */ _ray_js_components__WEBPACK_IMPORTED_MODULE_1__.Button),
/* harmony export */   "Camera": () => (/* reexport safe */ _ray_js_components__WEBPACK_IMPORTED_MODULE_1__.Camera),
/* harmony export */   "Checkbox": () => (/* reexport safe */ _ray_js_components__WEBPACK_IMPORTED_MODULE_1__.Checkbox),
/* harmony export */   "CheckboxGroup": () => (/* reexport safe */ _ray_js_components__WEBPACK_IMPORTED_MODULE_1__.CheckboxGroup),
/* harmony export */   "CoverView": () => (/* reexport safe */ _ray_js_components__WEBPACK_IMPORTED_MODULE_1__.CoverView),
/* harmony export */   "Form": () => (/* reexport safe */ _ray_js_components__WEBPACK_IMPORTED_MODULE_1__.Form),
/* harmony export */   "Icon": () => (/* reexport safe */ _ray_js_components__WEBPACK_IMPORTED_MODULE_1__.Icon),
/* harmony export */   "Image": () => (/* reexport safe */ _ray_js_components__WEBPACK_IMPORTED_MODULE_1__.Image),
/* harmony export */   "Input": () => (/* reexport safe */ _ray_js_components__WEBPACK_IMPORTED_MODULE_1__.Input),
/* harmony export */   "IpcPlayer": () => (/* reexport safe */ _ray_js_components__WEBPACK_IMPORTED_MODULE_1__.IpcPlayer),
/* harmony export */   "Label": () => (/* reexport safe */ _ray_js_components__WEBPACK_IMPORTED_MODULE_1__.Label),
/* harmony export */   "Map": () => (/* reexport safe */ _ray_js_components__WEBPACK_IMPORTED_MODULE_1__.Map),
/* harmony export */   "MovableArea": () => (/* reexport safe */ _ray_js_components__WEBPACK_IMPORTED_MODULE_1__.MovableArea),
/* harmony export */   "MovableView": () => (/* reexport safe */ _ray_js_components__WEBPACK_IMPORTED_MODULE_1__.MovableView),
/* harmony export */   "NativeVideo": () => (/* reexport safe */ _ray_js_components__WEBPACK_IMPORTED_MODULE_1__.NativeVideo),
/* harmony export */   "PageContainer": () => (/* reexport safe */ _ray_js_components__WEBPACK_IMPORTED_MODULE_1__.PageContainer),
/* harmony export */   "PageInstance": () => (/* reexport safe */ _ray_js_framework__WEBPACK_IMPORTED_MODULE_0__.PageInstance),
/* harmony export */   "PageInstanceContext": () => (/* reexport safe */ _ray_js_framework__WEBPACK_IMPORTED_MODULE_0__.PageInstanceContext),
/* harmony export */   "Picker": () => (/* reexport safe */ _ray_js_components__WEBPACK_IMPORTED_MODULE_1__.Picker),
/* harmony export */   "PickerView": () => (/* reexport safe */ _ray_js_components__WEBPACK_IMPORTED_MODULE_1__.PickerView),
/* harmony export */   "PickerViewColumn": () => (/* reexport safe */ _ray_js_components__WEBPACK_IMPORTED_MODULE_1__.PickerViewColumn),
/* harmony export */   "Progress": () => (/* reexport safe */ _ray_js_components__WEBPACK_IMPORTED_MODULE_1__.Progress),
/* harmony export */   "Radio": () => (/* reexport safe */ _ray_js_components__WEBPACK_IMPORTED_MODULE_1__.Radio),
/* harmony export */   "RadioGroup": () => (/* reexport safe */ _ray_js_components__WEBPACK_IMPORTED_MODULE_1__.RadioGroup),
/* harmony export */   "RichText": () => (/* reexport safe */ _ray_js_components__WEBPACK_IMPORTED_MODULE_1__.RichText),
/* harmony export */   "ScrollView": () => (/* reexport safe */ _ray_js_components__WEBPACK_IMPORTED_MODULE_1__.ScrollView),
/* harmony export */   "Slider": () => (/* reexport safe */ _ray_js_components__WEBPACK_IMPORTED_MODULE_1__.Slider),
/* harmony export */   "Swiper": () => (/* reexport safe */ _ray_js_components__WEBPACK_IMPORTED_MODULE_1__.Swiper),
/* harmony export */   "SwiperItem": () => (/* reexport safe */ _ray_js_components__WEBPACK_IMPORTED_MODULE_1__.SwiperItem),
/* harmony export */   "Switch": () => (/* reexport safe */ _ray_js_components__WEBPACK_IMPORTED_MODULE_1__.Switch),
/* harmony export */   "Text": () => (/* reexport safe */ _ray_js_components__WEBPACK_IMPORTED_MODULE_1__.Text),
/* harmony export */   "Textarea": () => (/* reexport safe */ _ray_js_components__WEBPACK_IMPORTED_MODULE_1__.Textarea),
/* harmony export */   "View": () => (/* reexport safe */ _ray_js_components__WEBPACK_IMPORTED_MODULE_1__.View),
/* harmony export */   "WebView": () => (/* reexport safe */ _ray_js_components__WEBPACK_IMPORTED_MODULE_1__.WebView),
/* harmony export */   "addAstronomical": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.addAstronomical),
/* harmony export */   "addDeviceToDesk": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.addDeviceToDesk),
/* harmony export */   "addGroupTimer": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.addGroupTimer),
/* harmony export */   "addSingleTimer": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.addSingleTimer),
/* harmony export */   "addTimer": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.addTimer),
/* harmony export */   "apiRequestByAtop": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.apiRequestByAtop),
/* harmony export */   "apiRequestByHighway": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.apiRequestByHighway),
/* harmony export */   "authorize": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.authorize),
/* harmony export */   "authorizeStatus": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.authorizeStatus),
/* harmony export */   "backToHomeAndOpenPanel": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.backToHomeAndOpenPanel),
/* harmony export */   "beginEvent": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.beginEvent),
/* harmony export */   "bindRule": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.bindRule),
/* harmony export */   "bluetoothCapabilityIsSupport": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.bluetoothCapabilityIsSupport),
/* harmony export */   "bluetoothCapabilityOfBLEBeacon": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.bluetoothCapabilityOfBLEBeacon),
/* harmony export */   "bluetoothIsPowerOn": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.bluetoothIsPowerOn),
/* harmony export */   "canIUseRouter": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.canIUseRouter),
/* harmony export */   "canOpenURL": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.canOpenURL),
/* harmony export */   "canOpenURLSync": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.canOpenURLSync),
/* harmony export */   "cancelBLEFileTransfer": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.cancelBLEFileTransfer),
/* harmony export */   "changeDebugMode": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.changeDebugMode),
/* harmony export */   "checkOTAUpdateInfo": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.checkOTAUpdateInfo),
/* harmony export */   "checkOTAUpgradeStatus": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.checkOTAUpgradeStatus),
/* harmony export */   "chooseCropImage": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.chooseCropImage),
/* harmony export */   "chooseImage": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.chooseImage),
/* harmony export */   "chooseMedia": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.chooseMedia),
/* harmony export */   "clearStorage": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.clearStorage),
/* harmony export */   "clearStorageSync": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.clearStorageSync),
/* harmony export */   "connectBLEDevice": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.connectBLEDevice),
/* harmony export */   "connectBTBond": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.connectBTBond),
/* harmony export */   "connectBluetoothDevice": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.connectBluetoothDevice),
/* harmony export */   "createAction": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.createAction),
/* harmony export */   "createCondition": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.createCondition),
/* harmony export */   "createInnerAudioContext": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.createInnerAudioContext),
/* harmony export */   "device": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.device),
/* harmony export */   "deviceIsSupportThingModel": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.deviceIsSupportThingModel),
/* harmony export */   "directConnectBLEDevice": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.directConnectBLEDevice),
/* harmony export */   "disableRule": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.disableRule),
/* harmony export */   "disconnectBLEDevice": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.disconnectBLEDevice),
/* harmony export */   "disconnectBTBond": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.disconnectBTBond),
/* harmony export */   "disconnectBluetoothDevice": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.disconnectBluetoothDevice),
/* harmony export */   "downloadFile": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.downloadFile),
/* harmony export */   "editAction": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.editAction),
/* harmony export */   "editCondition": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.editCondition),
/* harmony export */   "emitChannel": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.emitChannel),
/* harmony export */   "enableRule": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.enableRule),
/* harmony export */   "endEvent": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.endEvent),
/* harmony export */   "event": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.event),
/* harmony export */   "exitMiniProgram": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.exitMiniProgram),
/* harmony export */   "exitMiniWidget": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.exitMiniWidget),
/* harmony export */   "extApiCanIUse": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.extApiCanIUse),
/* harmony export */   "extApiCanIUseSync": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.extApiCanIUseSync),
/* harmony export */   "extApiInvoke": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.extApiInvoke),
/* harmony export */   "extApiInvokeSync": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.extApiInvokeSync),
/* harmony export */   "getAccountInfo": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.getAccountInfo),
/* harmony export */   "getAccountInfoSync": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.getAccountInfoSync),
/* harmony export */   "getApp": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.getApp),
/* harmony export */   "getAppInfo": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.getAppInfo),
/* harmony export */   "getAssetHostname": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.getAssetHostname),
/* harmony export */   "getAstronomicalList": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.getAstronomicalList),
/* harmony export */   "getAudioFileDuration": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.getAudioFileDuration),
/* harmony export */   "getBLEDeviceRSSI": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.getBLEDeviceRSSI),
/* harmony export */   "getBLEOnlineState": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.getBLEOnlineState),
/* harmony export */   "getBTDeviceInfo": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.getBTDeviceInfo),
/* harmony export */   "getBindRuleList": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.getBindRuleList),
/* harmony export */   "getBoundingClientRect": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.getBoundingClientRect),
/* harmony export */   "getCdnUrl": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.getCdnUrl),
/* harmony export */   "getClipboardData": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.getClipboardData),
/* harmony export */   "getConnectedWifi": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.getConnectedWifi),
/* harmony export */   "getCurrentPages": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.getCurrentPages),
/* harmony export */   "getCurrentVolume": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.getCurrentVolume),
/* harmony export */   "getCurrentVolumeByMode": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.getCurrentVolumeByMode),
/* harmony export */   "getCurrentWifiSSID": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.getCurrentWifiSSID),
/* harmony export */   "getCustomizePosition": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.getCustomizePosition),
/* harmony export */   "getDataWithSpecified": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.getDataWithSpecified),
/* harmony export */   "getDevAlarmList": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.getDevAlarmList),
/* harmony export */   "getDevProperty": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.getDevProperty),
/* harmony export */   "getDeviceInfo": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.getDeviceInfo),
/* harmony export */   "getDeviceListByDevIds": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.getDeviceListByDevIds),
/* harmony export */   "getDeviceNumWithDpCode": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.getDeviceNumWithDpCode),
/* harmony export */   "getDeviceOfflineReminderState": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.getDeviceOfflineReminderState),
/* harmony export */   "getDeviceOfflineReminderWarningText": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.getDeviceOfflineReminderWarningText),
/* harmony export */   "getDeviceOnlineType": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.getDeviceOnlineType),
/* harmony export */   "getDeviceProperty": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.getDeviceProperty),
/* harmony export */   "getDeviceThingModelInfo": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.getDeviceThingModelInfo),
/* harmony export */   "getDeviceWifiActivatorStatus": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.getDeviceWifiActivatorStatus),
/* harmony export */   "getDpAllStatistResult": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.getDpAllStatistResult),
/* harmony export */   "getDpDataByMesh": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.getDpDataByMesh),
/* harmony export */   "getDpLastTimer": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.getDpLastTimer),
/* harmony export */   "getDpLogDays": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.getDpLogDays),
/* harmony export */   "getDpReportLog": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.getDpReportLog),
/* harmony export */   "getDpResultByHour": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.getDpResultByHour),
/* harmony export */   "getDpResultByMonth": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.getDpResultByMonth),
/* harmony export */   "getDpsInfos": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.getDpsInfos),
/* harmony export */   "getDpsLastTimer": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.getDpsLastTimer),
/* harmony export */   "getElementById": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.getElementById),
/* harmony export */   "getEncryptLocalKeyWithData": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.getEncryptLocalKeyWithData),
/* harmony export */   "getEnterOptions": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.getEnterOptions),
/* harmony export */   "getEnterOptionsSync": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.getEnterOptionsSync),
/* harmony export */   "getFileSystemManager": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.getFileSystemManager),
/* harmony export */   "getGroupDeviceList": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.getGroupDeviceList),
/* harmony export */   "getGroupDeviceNum": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.getGroupDeviceNum),
/* harmony export */   "getGroupDpsInfos": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.getGroupDpsInfos),
/* harmony export */   "getGroupInfo": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.getGroupInfo),
/* harmony export */   "getGroupProperty": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.getGroupProperty),
/* harmony export */   "getIconfontInfo": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.getIconfontInfo),
/* harmony export */   "getImageInfo": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.getImageInfo),
/* harmony export */   "getLangContent": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.getLangContent),
/* harmony export */   "getLangKey": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.getLangKey),
/* harmony export */   "getLastTimerPeriod": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.getLastTimerPeriod),
/* harmony export */   "getLaunchOptions": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.getLaunchOptions),
/* harmony export */   "getLaunchOptionsSync": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.getLaunchOptionsSync),
/* harmony export */   "getLinkageDeviceList": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.getLinkageDeviceList),
/* harmony export */   "getLogInSpecifiedTime": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.getLogInSpecifiedTime),
/* harmony export */   "getLogUserAction": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.getLogUserAction),
/* harmony export */   "getMenuButtonBoundingClientRect": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.getMenuButtonBoundingClientRect),
/* harmony export */   "getMenuButtonBoundingClientRectSync": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.getMenuButtonBoundingClientRectSync),
/* harmony export */   "getMeshDeviceId": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.getMeshDeviceId),
/* harmony export */   "getMobileDeviceInfo": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.getMobileDeviceInfo),
/* harmony export */   "getMonthWithSpecified": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.getMonthWithSpecified),
/* harmony export */   "getMqttConnectState": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.getMqttConnectState),
/* harmony export */   "getMultiDpsAllResult": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.getMultiDpsAllResult),
/* harmony export */   "getNetworkType": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.getNetworkType),
/* harmony export */   "getPermissionConfig": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.getPermissionConfig),
/* harmony export */   "getPermissionConfigSync": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.getPermissionConfigSync),
/* harmony export */   "getProductInfo": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.getProductInfo),
/* harmony export */   "getRecorderManager": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.getRecorderManager),
/* harmony export */   "getSceneList": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.getSceneList),
/* harmony export */   "getScreenBrightness": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.getScreenBrightness),
/* harmony export */   "getShareChannelList": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.getShareChannelList),
/* harmony export */   "getShareDeviceInfo": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.getShareDeviceInfo),
/* harmony export */   "getStorage": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.getStorage),
/* harmony export */   "getStorageSync": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.getStorageSync),
/* harmony export */   "getSubDeviceInfoList": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.getSubDeviceInfoList),
/* harmony export */   "getSupportedThirdPartyServices": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.getSupportedThirdPartyServices),
/* harmony export */   "getSystemInfo": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.getSystemInfo),
/* harmony export */   "getSystemInfoSync": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.getSystemInfoSync),
/* harmony export */   "getSystemSetting": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.getSystemSetting),
/* harmony export */   "getTempDirectory": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.getTempDirectory),
/* harmony export */   "getUserInfo": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.getUserInfo),
/* harmony export */   "getVideoInfo": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.getVideoInfo),
/* harmony export */   "getWeatherQuality": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.getWeatherQuality),
/* harmony export */   "getWeathers": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.getWeathers),
/* harmony export */   "getWeekWithSpecified": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.getWeekWithSpecified),
/* harmony export */   "getWifiList": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.getWifiList),
/* harmony export */   "globalApi": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.globalApi),
/* harmony export */   "goDeviceAlarm": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.goDeviceAlarm),
/* harmony export */   "goDeviceDetail": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.goDeviceDetail),
/* harmony export */   "handleShortcut": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.handleShortcut),
/* harmony export */   "hideBoardTitleIcon": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.hideBoardTitleIcon),
/* harmony export */   "hideBoardTitleIconSync": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.hideBoardTitleIconSync),
/* harmony export */   "hideHomeButton": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.hideHomeButton),
/* harmony export */   "hideLoading": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.hideLoading),
/* harmony export */   "hideMenuButton": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.hideMenuButton),
/* harmony export */   "hideNavigationBarLoading": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.hideNavigationBarLoading),
/* harmony export */   "hideNotification": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.hideNotification),
/* harmony export */   "hideStatusBar": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.hideStatusBar),
/* harmony export */   "hideTabBar": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.hideTabBar),
/* harmony export */   "hideTabBarRedDot": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.hideTabBarRedDot),
/* harmony export */   "hideToast": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.hideToast),
/* harmony export */   "isAssociatedShortcut": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.isAssociatedShortcut),
/* harmony export */   "isDeviceSupportOfflineReminder": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.isDeviceSupportOfflineReminder),
/* harmony export */   "isSupportedShortcut": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.isSupportedShortcut),
/* harmony export */   "lifecycle": () => (/* reexport safe */ _ray_js_framework__WEBPACK_IMPORTED_MODULE_0__.lifecycle),
/* harmony export */   "location": () => (/* reexport safe */ _ray_js_location__WEBPACK_IMPORTED_MODULE_5__["default"]),
/* harmony export */   "login": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.login),
/* harmony export */   "makePhoneCall": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.makePhoneCall),
/* harmony export */   "modDeleteTaskByCategory": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.modDeleteTaskByCategory),
/* harmony export */   "modDeleteTaskByIds": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.modDeleteTaskByIds),
/* harmony export */   "modifyGroupTimer": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.modifyGroupTimer),
/* harmony export */   "modifySingleTimer": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.modifySingleTimer),
/* harmony export */   "nativeDisabled": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.nativeDisabled),
/* harmony export */   "nativeInovke": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.nativeInovke),
/* harmony export */   "nativeRouter": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_3__.router),
/* harmony export */   "navigateBack": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.navigateBack),
/* harmony export */   "navigateBackMiniProgram": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.navigateBackMiniProgram),
/* harmony export */   "navigateTo": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.navigateTo),
/* harmony export */   "navigateToMiniProgram": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.navigateToMiniProgram),
/* harmony export */   "offAccelerometerChange": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.offAccelerometerChange),
/* harmony export */   "offAppEvent": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.offAppEvent),
/* harmony export */   "offAppHide": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.offAppHide),
/* harmony export */   "offAppShow": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.offAppShow),
/* harmony export */   "offBLEBigDataChannelDeviceToAppSuccess": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.offBLEBigDataChannelDeviceToAppSuccess),
/* harmony export */   "offBLEBigDataChannelProgressEvent": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.offBLEBigDataChannelProgressEvent),
/* harmony export */   "offBLEBigDataChannelUploadCloudProgress": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.offBLEBigDataChannelUploadCloudProgress),
/* harmony export */   "offBLEConnectStatusChange": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.offBLEConnectStatusChange),
/* harmony export */   "offBLEScanBindDevice": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.offBLEScanBindDevice),
/* harmony export */   "offBLETransparentDataReport": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.offBLETransparentDataReport),
/* harmony export */   "offBluetoothAdapterStateChange": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.offBluetoothAdapterStateChange),
/* harmony export */   "offCompassChange": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.offCompassChange),
/* harmony export */   "offCountrySelectResult": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.offCountrySelectResult),
/* harmony export */   "offDeviceInfoUpdated": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.offDeviceInfoUpdated),
/* harmony export */   "offDeviceMotionChange": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.offDeviceMotionChange),
/* harmony export */   "offDeviceOnlineStatusUpdate": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.offDeviceOnlineStatusUpdate),
/* harmony export */   "offDeviceRemoved": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.offDeviceRemoved),
/* harmony export */   "offDirectlyConnectedSearchDeviceEvent": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.offDirectlyConnectedSearchDeviceEvent),
/* harmony export */   "offDpDataChange": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.offDpDataChange),
/* harmony export */   "offError": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.offError),
/* harmony export */   "offFileTransferProgress": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.offFileTransferProgress),
/* harmony export */   "offGetWifiList": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.offGetWifiList),
/* harmony export */   "offGroupDpCodeChange": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.offGroupDpCodeChange),
/* harmony export */   "offGroupDpDataChangeEvent": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.offGroupDpDataChangeEvent),
/* harmony export */   "offGroupInfoChange": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.offGroupInfoChange),
/* harmony export */   "offGroupRemovedEvent": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.offGroupRemovedEvent),
/* harmony export */   "offGyroscopeChange": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.offGyroscopeChange),
/* harmony export */   "offLeaveBeaconFence": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.offLeaveBeaconFence),
/* harmony export */   "offMemoryWarning": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.offMemoryWarning),
/* harmony export */   "offMqttConnectState": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.offMqttConnectState),
/* harmony export */   "offMqttMessageReceived": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.offMqttMessageReceived),
/* harmony export */   "offNativeEvent": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.offNativeEvent),
/* harmony export */   "offNetworkStatusChange": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.offNetworkStatusChange),
/* harmony export */   "offReceiveMessage": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.offReceiveMessage),
/* harmony export */   "offReceivedThingModelMessage": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.offReceivedThingModelMessage),
/* harmony export */   "offRecordingEvent": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.offRecordingEvent),
/* harmony export */   "offRouterEvent": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.offRouterEvent),
/* harmony export */   "offRouterResult": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.offRouterResult),
/* harmony export */   "offSocketMessageReceived": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.offSocketMessageReceived),
/* harmony export */   "offSubDeviceAdded": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.offSubDeviceAdded),
/* harmony export */   "offSubDeviceDpUpdate": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.offSubDeviceDpUpdate),
/* harmony export */   "offSubDeviceInfoUpdate": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.offSubDeviceInfoUpdate),
/* harmony export */   "offSubDeviceInfoUpdateEvent": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.offSubDeviceInfoUpdateEvent),
/* harmony export */   "offSubDeviceRemoved": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.offSubDeviceRemoved),
/* harmony export */   "offSystemVolumeChangeEvent": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.offSystemVolumeChangeEvent),
/* harmony export */   "offThemeChange": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.offThemeChange),
/* harmony export */   "offTimerUpdate": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.offTimerUpdate),
/* harmony export */   "offUploadProgressUpdate": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.offUploadProgressUpdate),
/* harmony export */   "offWindowResize": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.offWindowResize),
/* harmony export */   "onAccelerometerChange": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.onAccelerometerChange),
/* harmony export */   "onAppEvent": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.onAppEvent),
/* harmony export */   "onAppHide": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.onAppHide),
/* harmony export */   "onAppShow": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.onAppShow),
/* harmony export */   "onBLEBigDataChannelDeviceToAppSuccess": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.onBLEBigDataChannelDeviceToAppSuccess),
/* harmony export */   "onBLEBigDataChannelProgressEvent": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.onBLEBigDataChannelProgressEvent),
/* harmony export */   "onBLEBigDataChannelUploadCloudProgress": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.onBLEBigDataChannelUploadCloudProgress),
/* harmony export */   "onBLEConnectStatusChange": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.onBLEConnectStatusChange),
/* harmony export */   "onBLEScanBindDevice": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.onBLEScanBindDevice),
/* harmony export */   "onBLETransparentDataReport": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.onBLETransparentDataReport),
/* harmony export */   "onBluetoothAdapterStateChange": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.onBluetoothAdapterStateChange),
/* harmony export */   "onCompassChange": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.onCompassChange),
/* harmony export */   "onCountrySelectResult": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.onCountrySelectResult),
/* harmony export */   "onDeviceInfoUpdated": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.onDeviceInfoUpdated),
/* harmony export */   "onDeviceMotionChange": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.onDeviceMotionChange),
/* harmony export */   "onDeviceOnlineStatusUpdate": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.onDeviceOnlineStatusUpdate),
/* harmony export */   "onDeviceRemoved": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.onDeviceRemoved),
/* harmony export */   "onDirectlyConnectedSearchDeviceEvent": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.onDirectlyConnectedSearchDeviceEvent),
/* harmony export */   "onDpDataChange": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.onDpDataChange),
/* harmony export */   "onError": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.onError),
/* harmony export */   "onFileTransferProgress": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.onFileTransferProgress),
/* harmony export */   "onGetWifiList": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.onGetWifiList),
/* harmony export */   "onGroupDpCodeChange": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.onGroupDpCodeChange),
/* harmony export */   "onGroupDpDataChangeEvent": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.onGroupDpDataChangeEvent),
/* harmony export */   "onGroupInfoChange": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.onGroupInfoChange),
/* harmony export */   "onGroupRemovedEvent": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.onGroupRemovedEvent),
/* harmony export */   "onGyroscopeChange": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.onGyroscopeChange),
/* harmony export */   "onLeaveBeaconFence": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.onLeaveBeaconFence),
/* harmony export */   "onMemoryWarning": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.onMemoryWarning),
/* harmony export */   "onMqttConnectState": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.onMqttConnectState),
/* harmony export */   "onMqttMessageReceived": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.onMqttMessageReceived),
/* harmony export */   "onNativeEvent": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.onNativeEvent),
/* harmony export */   "onNavigationBarBack": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.onNavigationBarBack),
/* harmony export */   "onNetworkStatusChange": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.onNetworkStatusChange),
/* harmony export */   "onPageNotFound": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.onPageNotFound),
/* harmony export */   "onReceiveMessage": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.onReceiveMessage),
/* harmony export */   "onReceivedThingModelMessage": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.onReceivedThingModelMessage),
/* harmony export */   "onRecordingEvent": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.onRecordingEvent),
/* harmony export */   "onRouterEvent": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.onRouterEvent),
/* harmony export */   "onRouterResult": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.onRouterResult),
/* harmony export */   "onSocketMessageReceived": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.onSocketMessageReceived),
/* harmony export */   "onSubDeviceAdded": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.onSubDeviceAdded),
/* harmony export */   "onSubDeviceDpUpdate": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.onSubDeviceDpUpdate),
/* harmony export */   "onSubDeviceInfoUpdate": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.onSubDeviceInfoUpdate),
/* harmony export */   "onSubDeviceInfoUpdateEvent": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.onSubDeviceInfoUpdateEvent),
/* harmony export */   "onSubDeviceRemoved": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.onSubDeviceRemoved),
/* harmony export */   "onSystemVolumeChangeEvent": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.onSystemVolumeChangeEvent),
/* harmony export */   "onThemeChange": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.onThemeChange),
/* harmony export */   "onTimerUpdate": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.onTimerUpdate),
/* harmony export */   "onUploadProgressUpdate": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.onUploadProgressUpdate),
/* harmony export */   "onWindowResize": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.onWindowResize),
/* harmony export */   "openAppSystemSettingPage": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.openAppSystemSettingPage),
/* harmony export */   "openCategoryActivatorPage": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.openCategoryActivatorPage),
/* harmony export */   "openCountrySelectPage": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.openCountrySelectPage),
/* harmony export */   "openDeviceDetailPage": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.openDeviceDetailPage),
/* harmony export */   "openDeviceEdit": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.openDeviceEdit),
/* harmony export */   "openDeviceExecutionAndAnutomation": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.openDeviceExecutionAndAnutomation),
/* harmony export */   "openDeviceInfo": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.openDeviceInfo),
/* harmony export */   "openDeviceQuestionsAndFeedback": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.openDeviceQuestionsAndFeedback),
/* harmony export */   "openDeviceWifiNetworkMonitorPage": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.openDeviceWifiNetworkMonitorPage),
/* harmony export */   "openGroupDetailPage": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.openGroupDetailPage),
/* harmony export */   "openGroupEdit": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.openGroupEdit),
/* harmony export */   "openGroupTimerPage": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.openGroupTimerPage),
/* harmony export */   "openHelpCenter": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.openHelpCenter),
/* harmony export */   "openInnerH5": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.openInnerH5),
/* harmony export */   "openMeshLocalGroup": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.openMeshLocalGroup),
/* harmony export */   "openMiniWidget": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.openMiniWidget),
/* harmony export */   "openOTAUpgrade": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.openOTAUpgrade),
/* harmony export */   "openPanel": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.openPanel),
/* harmony export */   "openPreConditionPage": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.openPreConditionPage),
/* harmony export */   "openRNPanel": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.openRNPanel),
/* harmony export */   "openRecommendSceneDetail": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.openRecommendSceneDetail),
/* harmony export */   "openReconnectPage": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.openReconnectPage),
/* harmony export */   "openSetting": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.openSetting),
/* harmony export */   "openShareDevice": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.openShareDevice),
/* harmony export */   "openSystemBluetoothSetting": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.openSystemBluetoothSetting),
/* harmony export */   "openSystemSettingPage": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.openSystemSettingPage),
/* harmony export */   "openTimerPage": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.openTimerPage),
/* harmony export */   "openURL": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.openURL),
/* harmony export */   "platform": () => (/* reexport safe */ _ray_js_env__WEBPACK_IMPORTED_MODULE_6__["default"]),
/* harmony export */   "playnet": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.playnet),
/* harmony export */   "postBLEBigDataChannelWithProgress": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.postBLEBigDataChannelWithProgress),
/* harmony export */   "postBLEFileTransfer": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.postBLEFileTransfer),
/* harmony export */   "preDownloadMiniApp": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.preDownloadMiniApp),
/* harmony export */   "preloadPanel": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.preloadPanel),
/* harmony export */   "previewImage": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.previewImage),
/* harmony export */   "publishBLETransparentData": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.publishBLETransparentData),
/* harmony export */   "publishCommands": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.publishCommands),
/* harmony export */   "publishDps": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.publishDps),
/* harmony export */   "publishDpsWithPipeType": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.publishDpsWithPipeType),
/* harmony export */   "publishGroupDpCodes": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.publishGroupDpCodes),
/* harmony export */   "publishGroupDps": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.publishGroupDps),
/* harmony export */   "publishLanMessage": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.publishLanMessage),
/* harmony export */   "publishMqttMessage": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.publishMqttMessage),
/* harmony export */   "publishSigMeshMultiDps": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.publishSigMeshMultiDps),
/* harmony export */   "publishSocketMessage": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.publishSocketMessage),
/* harmony export */   "publishThingModelMessage": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.publishThingModelMessage),
/* harmony export */   "queryDps": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.queryDps),
/* harmony export */   "queryGroupTimerTasks": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.queryGroupTimerTasks),
/* harmony export */   "queryTimerTasks": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.queryTimerTasks),
/* harmony export */   "reLaunch": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.reLaunch),
/* harmony export */   "readBeaconFenceConfig": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.readBeaconFenceConfig),
/* harmony export */   "redirectTo": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.redirectTo),
/* harmony export */   "registerChannel": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.registerChannel),
/* harmony export */   "registerDeviceListListener": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.registerDeviceListListener),
/* harmony export */   "registerGateWaySubDeviceListener": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.registerGateWaySubDeviceListener),
/* harmony export */   "registerGroupChange": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.registerGroupChange),
/* harmony export */   "registerLeaveBeaconFenceEvent": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.registerLeaveBeaconFenceEvent),
/* harmony export */   "registerMQTTDeviceListener": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.registerMQTTDeviceListener),
/* harmony export */   "registerMQTTProtocolListener": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.registerMQTTProtocolListener),
/* harmony export */   "registerSystemVolumeChange": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.registerSystemVolumeChange),
/* harmony export */   "registerTopicListListener": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.registerTopicListListener),
/* harmony export */   "registerZigbeeGateWaySubDeviceListener": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.registerZigbeeGateWaySubDeviceListener),
/* harmony export */   "removeAstronomical": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.removeAstronomical),
/* harmony export */   "removeDevice": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.removeDevice),
/* harmony export */   "removeRule": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.removeRule),
/* harmony export */   "removeShareDevice": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.removeShareDevice),
/* harmony export */   "removeStorage": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.removeStorage),
/* harmony export */   "removeStorageSync": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.removeStorageSync),
/* harmony export */   "removeTabBarBadge": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.removeTabBarBadge),
/* harmony export */   "removeTimer": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.removeTimer),
/* harmony export */   "renameDeviceName": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.renameDeviceName),
/* harmony export */   "request": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.request),
/* harmony export */   "requestCloud": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.requestCloud),
/* harmony export */   "resetFactory": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.resetFactory),
/* harmony export */   "resizeImage": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.resizeImage),
/* harmony export */   "rotateImage": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.rotateImage),
/* harmony export */   "router": () => (/* reexport safe */ _ray_js_router__WEBPACK_IMPORTED_MODULE_4__["default"]),
/* harmony export */   "saveCustomizePosition": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.saveCustomizePosition),
/* harmony export */   "saveDevProperty": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.saveDevProperty),
/* harmony export */   "saveSceneAction": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.saveSceneAction),
/* harmony export */   "saveToAlbum": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.saveToAlbum),
/* harmony export */   "saveVideoToPhotosAlbum": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.saveVideoToPhotosAlbum),
/* harmony export */   "scanCode": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.scanCode),
/* harmony export */   "sendMqttMessage": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.sendMqttMessage),
/* harmony export */   "setAlarmSwitch": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.setAlarmSwitch),
/* harmony export */   "setBoardIcon": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.setBoardIcon),
/* harmony export */   "setBoardIconSync": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.setBoardIconSync),
/* harmony export */   "setBoardTitle": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.setBoardTitle),
/* harmony export */   "setBoardTitleSync": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.setBoardTitleSync),
/* harmony export */   "setClipboardData": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.setClipboardData),
/* harmony export */   "setDeviceProperty": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.setDeviceProperty),
/* harmony export */   "setGroupProperty": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.setGroupProperty),
/* harmony export */   "setKeepScreenOn": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.setKeepScreenOn),
/* harmony export */   "setNavigationBarBack": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.setNavigationBarBack),
/* harmony export */   "setNavigationBarColor": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.setNavigationBarColor),
/* harmony export */   "setNavigationBarTitle": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.setNavigationBarTitle),
/* harmony export */   "setPageOrientation": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.setPageOrientation),
/* harmony export */   "setScreenBrightness": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.setScreenBrightness),
/* harmony export */   "setStorage": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.setStorage),
/* harmony export */   "setStorageSync": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.setStorageSync),
/* harmony export */   "setTabBarBadge": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.setTabBarBadge),
/* harmony export */   "setTabBarItem": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.setTabBarItem),
/* harmony export */   "setTabBarStyle": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.setTabBarStyle),
/* harmony export */   "share": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.share),
/* harmony export */   "showActionSheet": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.showActionSheet),
/* harmony export */   "showBoardTitleIcon": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.showBoardTitleIcon),
/* harmony export */   "showBoardTitleIconSync": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.showBoardTitleIconSync),
/* harmony export */   "showLoading": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.showLoading),
/* harmony export */   "showMenuButton": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.showMenuButton),
/* harmony export */   "showModal": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.showModal),
/* harmony export */   "showNavigationBarLoading": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.showNavigationBarLoading),
/* harmony export */   "showNotification": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.showNotification),
/* harmony export */   "showSceneDialog": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.showSceneDialog),
/* harmony export */   "showStatusBar": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.showStatusBar),
/* harmony export */   "showTabBar": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.showTabBar),
/* harmony export */   "showTabBarRedDot": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.showTabBarRedDot),
/* harmony export */   "showToast": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.showToast),
/* harmony export */   "startAccelerometer": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.startAccelerometer),
/* harmony export */   "startBLEMeshLowPowerConnection": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.startBLEMeshLowPowerConnection),
/* harmony export */   "startBLEScan": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.startBLEScan),
/* harmony export */   "startBLEScanBeacon": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.startBLEScanBeacon),
/* harmony export */   "startBLEScanBindDevice": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.startBLEScanBindDevice),
/* harmony export */   "startBLEScanSync": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.startBLEScanSync),
/* harmony export */   "startCompass": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.startCompass),
/* harmony export */   "startDeviceMotionListening": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.startDeviceMotionListening),
/* harmony export */   "startDeviceWifiActivator": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.startDeviceWifiActivator),
/* harmony export */   "startDirectlyConnectedDeviceActivator": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.startDirectlyConnectedDeviceActivator),
/* harmony export */   "startDirectlyConnectedSearchDevice": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.startDirectlyConnectedSearchDevice),
/* harmony export */   "startGWActivation": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.startGWActivation),
/* harmony export */   "startGyroscope": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.startGyroscope),
/* harmony export */   "startPullDownRefresh": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.startPullDownRefresh),
/* harmony export */   "stopAccelerometer": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.stopAccelerometer),
/* harmony export */   "stopBLEMeshLowPowerConnection": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.stopBLEMeshLowPowerConnection),
/* harmony export */   "stopBLEScan": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.stopBLEScan),
/* harmony export */   "stopBLEScanBeacon": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.stopBLEScanBeacon),
/* harmony export */   "stopBLEScanSync": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.stopBLEScanSync),
/* harmony export */   "stopCompass": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.stopCompass),
/* harmony export */   "stopDeviceMotionListening": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.stopDeviceMotionListening),
/* harmony export */   "stopDirectlyConnectedDeviceActivator": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.stopDirectlyConnectedDeviceActivator),
/* harmony export */   "stopDirectlyConnectedSearchDevice": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.stopDirectlyConnectedSearchDevice),
/* harmony export */   "stopGWActivation": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.stopGWActivation),
/* harmony export */   "stopGyroscope": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.stopGyroscope),
/* harmony export */   "stopPullDownRefresh": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.stopPullDownRefresh),
/* harmony export */   "subscribeBLEConnectStatus": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.subscribeBLEConnectStatus),
/* harmony export */   "subscribeBLETransparentDataReport": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.subscribeBLETransparentDataReport),
/* harmony export */   "subscribeDeviceRemoved": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.subscribeDeviceRemoved),
/* harmony export */   "subscribeReceivedThingModelMessage": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.subscribeReceivedThingModelMessage),
/* harmony export */   "switchTab": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.switchTab),
/* harmony export */   "syncDeviceInfo": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.syncDeviceInfo),
/* harmony export */   "syncTimerTask": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.syncTimerTask),
/* harmony export */   "toggleDeviceOfflineReminder": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.toggleDeviceOfflineReminder),
/* harmony export */   "trackEvent": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.trackEvent),
/* harmony export */   "triggerRule": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.triggerRule),
/* harmony export */   "unRegisterGroupChange": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.unRegisterGroupChange),
/* harmony export */   "unRegisterSystemVolumeChange": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.unRegisterSystemVolumeChange),
/* harmony export */   "unSubscribeDeviceRemoved": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.unSubscribeDeviceRemoved),
/* harmony export */   "unSubscribeReceivedThingModelMessage": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.unSubscribeReceivedThingModelMessage),
/* harmony export */   "unregisterDeviceListListener": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.unregisterDeviceListListener),
/* harmony export */   "unregisterGateWaySubDeviceListener": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.unregisterGateWaySubDeviceListener),
/* harmony export */   "unregisterLeaveBeaconFenceEvent": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.unregisterLeaveBeaconFenceEvent),
/* harmony export */   "unregisterMQTTDeviceListener": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.unregisterMQTTDeviceListener),
/* harmony export */   "unregisterMQTTProtocolListener": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.unregisterMQTTProtocolListener),
/* harmony export */   "unregisterTopicListListener": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.unregisterTopicListListener),
/* harmony export */   "unregisterZigbeeGateWaySubDeviceListener": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.unregisterZigbeeGateWaySubDeviceListener),
/* harmony export */   "unsubscribeBLEConnectStatus": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.unsubscribeBLEConnectStatus),
/* harmony export */   "unsubscribeBLETransparentDataReport": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.unsubscribeBLETransparentDataReport),
/* harmony export */   "updateAstronomical": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.updateAstronomical),
/* harmony export */   "updateAstronomicalStatus": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.updateAstronomicalStatus),
/* harmony export */   "updateDeviceThingModelInfo": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.updateDeviceThingModelInfo),
/* harmony export */   "updateDpName": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.updateDpName),
/* harmony export */   "updateGroupDpName": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.updateGroupDpName),
/* harmony export */   "updateTimer": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.updateTimer),
/* harmony export */   "updateTimerStatus": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.updateTimerStatus),
/* harmony export */   "updateVolume": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.updateVolume),
/* harmony export */   "uploadFile": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.uploadFile),
/* harmony export */   "uploadImage": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.uploadImage),
/* harmony export */   "useAppEvent": () => (/* reexport safe */ _ray_js_framework__WEBPACK_IMPORTED_MODULE_0__.useAppEvent),
/* harmony export */   "useComponentInstance": () => (/* reexport safe */ _ray_js_framework__WEBPACK_IMPORTED_MODULE_0__.useComponentInstance),
/* harmony export */   "useNativeEffect": () => (/* reexport safe */ _ray_js_framework__WEBPACK_IMPORTED_MODULE_0__.useNativeEffect),
/* harmony export */   "usePageEvent": () => (/* reexport safe */ _ray_js_framework__WEBPACK_IMPORTED_MODULE_0__.usePageEvent),
/* harmony export */   "usePageInstance": () => (/* reexport safe */ _ray_js_framework__WEBPACK_IMPORTED_MODULE_0__.usePageInstance),
/* harmony export */   "useQuery": () => (/* reexport safe */ _ray_js_framework__WEBPACK_IMPORTED_MODULE_0__.useQuery),
/* harmony export */   "validDeviceOnlineType": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.validDeviceOnlineType),
/* harmony export */   "vibrateLong": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.vibrateLong),
/* harmony export */   "vibrateShort": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.vibrateShort),
/* harmony export */   "withPageLifecycle": () => (/* reexport safe */ _ray_js_framework__WEBPACK_IMPORTED_MODULE_0__.withPageLifecycle),
/* harmony export */   "writeBeaconFenceConfig": () => (/* reexport safe */ _ray_js_api__WEBPACK_IMPORTED_MODULE_2__.writeBeaconFenceConfig)
/* harmony export */ });
/* harmony import */ var _ray_js_framework__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ray-js/framework */ "./node_modules/@ray-js/framework-mp/index.js");
/* harmony import */ var _ray_js_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ray-js/components */ "./node_modules/@ray-js/components/lib/index.js");
/* harmony import */ var _ray_js_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ray-js/api */ "./node_modules/@ray-js/api/lib/index.js");
/* harmony import */ var _ray_js_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ray-js/api */ "./node_modules/@ray-js/api/lib/BizKit-3.2.7.js");
/* harmony import */ var _ray_js_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ray-js/router */ "./node_modules/@ray-js/router-mp/lib/index.js");
/* harmony import */ var _ray_js_location__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ray-js/location */ "./node_modules/@ray-js/location/lib/index.js");
/* harmony import */ var _ray_js_env__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ray-js/env */ "./node_modules/@ray-js/env/esm/index.js");








/***/ }),

/***/ "./node_modules/@ray-js/runtime/lib/PageInstance.js":
/*!**********************************************************!*\
  !*** ./node_modules/@ray-js/runtime/lib/PageInstance.js ***!
  \**********************************************************/
/* istanbul ignore next */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PageInstance": () => (/* binding */ PageInstance),
/* harmony export */   "generatePageKey": () => (/* binding */ generatePageKey),
/* harmony export */   "generateUniqueId": () => (/* binding */ generateUniqueId)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.splice.js */ "./node_modules/core-js/modules/es.array.splice.js");
/* harmony import */ var core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.index-of.js */ "./node_modules/core-js/modules/es.array.index-of.js");
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_6__);








/**
 * 管理 web 页面生命周期的调用
 * 小程序端
 * TODO: 支持 RN
 */
var UniqueId = 0;
var generateUniqueId = function () {
  return UniqueId += 1;
};
var generatePageKey = function (uniqueId) {
  return 'Page-' + uniqueId;
};
var PageInstance = /*#__PURE__*/function () {
  function PageInstance(uniqueId) {
    (0,_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, PageInstance);
    this.uniqueId = uniqueId !== null && uniqueId !== void 0 ? uniqueId : generateUniqueId();
    this.lifecycleCallback = {};
  }
  /**
   * 注册生命周期事件, 页面运行底层实例
   * @param lifecycleName - 事件名
   * @param context - fn 上下文
   * @param fn - 回调函数
   */

  (0,_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(PageInstance, [{
    key: "registerLifecycle",
    value: function (lifecycleName, context, fn) {
      var _this = this;
      this.lifecycleCallback[lifecycleName] = this.lifecycleCallback[lifecycleName] || [];
      var fnObj = {
        context: context,
        fn: fn
      }; // 先注册的函数先调用

      this.lifecycleCallback[lifecycleName].push(fnObj);
      return function () {
        _this.lifecycleCallback[lifecycleName].splice(_this.lifecycleCallback[lifecycleName].indexOf(fnObj), 1);
      };
    }
    /**
     * 触发生命周期函数
     * @param lifecycleName
     * @param args
     */
  }, {
    key: "callLifecycle",
    value: function (params) {
      var callbacks = this.lifecycleCallback[params.name] || [];
      var result;
      (0,_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(callbacks).forEach(function (_ref) {
        var _ref$context = _ref.context,
          context = _ref$context === void 0 ? null : _ref$context,
          fn = _ref.fn;
        result = fn.apply(context, Array.isArray(params.args) ? params.args : [params.args]);
      });
      if (result) {
        return result;
      }
    }
  }]);
  return PageInstance;
}();

/***/ }),

/***/ "./node_modules/@ray-js/runtime/lib/PageInstanceContext.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@ray-js/runtime/lib/PageInstanceContext.js ***!
  \*****************************************************************/
/* istanbul ignore next */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PageInstanceContext": () => (/* binding */ PageInstanceContext)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var PageInstanceContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext(null);
PageInstanceContext.displayName = 'PageInstanceContext';


/***/ }),

/***/ "./node_modules/@ray-js/runtime/lib/index.mini.js":
/*!********************************************************!*\
  !*** ./node_modules/@ray-js/runtime/lib/index.mini.js ***!
  \********************************************************/
/* istanbul ignore next */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PageInstance": () => (/* reexport safe */ _PageInstance__WEBPACK_IMPORTED_MODULE_3__.PageInstance),
/* harmony export */   "PageInstanceContext": () => (/* reexport safe */ _PageInstanceContext__WEBPACK_IMPORTED_MODULE_4__.PageInstanceContext),
/* harmony export */   "PluginDriver": () => (/* reexport safe */ _ray_core_runtime__WEBPACK_IMPORTED_MODULE_0__.PluginDriver),
/* harmony export */   "RuntimeOptions": () => (/* reexport safe */ _ray_core_runtime__WEBPACK_IMPORTED_MODULE_0__.RuntimeOptions),
/* harmony export */   "bindBlendedAppInstance": () => (/* reexport safe */ _ray_core_runtime__WEBPACK_IMPORTED_MODULE_0__.bindBlendedAppInstance),
/* harmony export */   "createAppConfig": () => (/* reexport safe */ _ray_core_runtime__WEBPACK_IMPORTED_MODULE_0__.createAppConfig),
/* harmony export */   "createHostComponent": () => (/* reexport safe */ _ray_core_runtime__WEBPACK_IMPORTED_MODULE_0__.createHostComponent),
/* harmony export */   "createNativeComponent": () => (/* reexport safe */ _ray_core_runtime__WEBPACK_IMPORTED_MODULE_0__.createNativeComponent),
/* harmony export */   "createPageConfig": () => (/* reexport safe */ _ray_core_runtime__WEBPACK_IMPORTED_MODULE_0__.createPageConfig),
/* harmony export */   "createPortal": () => (/* reexport safe */ _ray_core_runtime__WEBPACK_IMPORTED_MODULE_0__.createPortal),
/* harmony export */   "getBlendedAppInstance": () => (/* reexport safe */ _ray_core_runtime__WEBPACK_IMPORTED_MODULE_0__.getBlendedAppInstance),
/* harmony export */   "lifecycle": () => (/* reexport safe */ _lifecycle__WEBPACK_IMPORTED_MODULE_2__.lifecycle),
/* harmony export */   "nativeRequire": () => (/* reexport safe */ _ray_core_runtime__WEBPACK_IMPORTED_MODULE_0__.nativeRequire),
/* harmony export */   "overloadNativeAppConstructor": () => (/* reexport safe */ _ray_core_runtime__WEBPACK_IMPORTED_MODULE_0__.overloadNativeAppConstructor),
/* harmony export */   "overloadNativeComponentConstructor": () => (/* reexport safe */ _ray_core_runtime__WEBPACK_IMPORTED_MODULE_0__.overloadNativeComponentConstructor),
/* harmony export */   "render": () => (/* reexport safe */ _ray_core_runtime__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "toNativeComponentConfigCreator": () => (/* reexport safe */ _ray_core_runtime__WEBPACK_IMPORTED_MODULE_0__.toNativeComponentConfigCreator),
/* harmony export */   "unstable_batchedUpdates": () => (/* reexport safe */ _ray_core_runtime__WEBPACK_IMPORTED_MODULE_0__.unstable_batchedUpdates),
/* harmony export */   "useAppEvent": () => (/* reexport safe */ _ray_core_runtime__WEBPACK_IMPORTED_MODULE_0__.useAppEvent),
/* harmony export */   "useComponentInstance": () => (/* reexport safe */ _ray_core_runtime__WEBPACK_IMPORTED_MODULE_0__.useComponentInstance),
/* harmony export */   "useModal": () => (/* reexport safe */ _ray_core_runtime__WEBPACK_IMPORTED_MODULE_0__.useModal),
/* harmony export */   "useNativeEffect": () => (/* reexport safe */ _ray_core_runtime__WEBPACK_IMPORTED_MODULE_0__.useNativeEffect),
/* harmony export */   "usePageEvent": () => (/* reexport safe */ _ray_core_runtime__WEBPACK_IMPORTED_MODULE_0__.usePageEvent),
/* harmony export */   "usePageInstance": () => (/* reexport safe */ _ray_core_runtime__WEBPACK_IMPORTED_MODULE_0__.usePageInstance),
/* harmony export */   "useQuery": () => (/* reexport safe */ _ray_core_runtime__WEBPACK_IMPORTED_MODULE_0__.useQuery),
/* harmony export */   "withPageLifecycle": () => (/* reexport safe */ _withPageLifecycle__WEBPACK_IMPORTED_MODULE_1__.withPageLifecycle)
/* harmony export */ });
/* harmony import */ var _ray_core_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ray-core/runtime */ "./node_modules/@ray-core/runtime/esm/index.js");
/* harmony import */ var _withPageLifecycle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./withPageLifecycle */ "./node_modules/@ray-js/runtime/lib/withPageLifecycle/index.js");
/* harmony import */ var _lifecycle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lifecycle */ "./node_modules/@ray-js/runtime/lib/lifecycle.js");
/* harmony import */ var _PageInstance__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./PageInstance */ "./node_modules/@ray-js/runtime/lib/PageInstance.js");
/* harmony import */ var _PageInstanceContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./PageInstanceContext */ "./node_modules/@ray-js/runtime/lib/PageInstanceContext.js");






/***/ }),

/***/ "./node_modules/@ray-js/runtime/lib/lifecycle.js":
/*!*******************************************************!*\
  !*** ./node_modules/@ray-js/runtime/lib/lifecycle.js ***!
  \*******************************************************/
/* istanbul ignore next */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "lifecycle": () => (/* binding */ lifecycle)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_map_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.map.js */ "./node_modules/core-js/modules/es.map.js");
/* harmony import */ var core_js_modules_es_map_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_map_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _PageInstance__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./PageInstance */ "./node_modules/@ray-js/runtime/lib/PageInstance.js");








var Lifecycle = /*#__PURE__*/function () {
  function Lifecycle() {
    (0,_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Lifecycle);
    this.instanceMap = new Map();
  }
  /**
   * 增加一个 PageWrapper 实例
   *
   * @param uniqueId - 页面的 ID
   * @param ins - 示例对象
   */

  (0,_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Lifecycle, [{
    key: "addInstance",
    value: function (ins) {
      var key = (0,_PageInstance__WEBPACK_IMPORTED_MODULE_7__.generatePageKey)(ins.uniqueId);
      this.instanceMap.set(key, ins);
    }
    /**
     * 删除一个 PageWrapper 实例
     *
     * @param uniqueId - 页面的 ID
     * @param ins - 示例对象
     */
  }, {
    key: "removeInstance",
    value: function (ins) {
      var key = (0,_PageInstance__WEBPACK_IMPORTED_MODULE_7__.generatePageKey)(ins.uniqueId);
      this.instanceMap.delete(key);
    }
  }, {
    key: "emit",
    value: function (params) {
      var key = (0,_PageInstance__WEBPACK_IMPORTED_MODULE_7__.generatePageKey)(params.uniqueId);
      var $instance = this.instanceMap.get(key);
      if ($instance) {
        $instance.callLifecycle(params);
      }
    }
  }]);
  return Lifecycle;
}();
var lifecycle = new Lifecycle();

/***/ }),

/***/ "./node_modules/@ray-js/runtime/lib/withPageLifecycle/index.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@ray-js/runtime/lib/withPageLifecycle/index.js ***!
  \*********************************************************************/
/* istanbul ignore next */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "withPageLifecycle": () => (/* binding */ withPageLifecycle)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/typeof */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createSuper */ "./node_modules/@babel/runtime/helpers/esm/createSuper.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.object.keys.js */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _ray_js_types__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ray-js/types */ "./node_modules/@ray-js/types/esm/index.js");
/* harmony import */ var _PageInstanceContext__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../PageInstanceContext */ "./node_modules/@ray-js/runtime/lib/PageInstanceContext.js");








var _excluded = ["forwardedRef"];






function withPageLifecycle(Component) {
  var displayName = "WithPageLifecycle(".concat(Component.displayName || Component.name, ")");
  var WithPageLifeCycle = /*#__PURE__*/function (_React$Component) {
    (0,_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(WithPageLifeCycle, _React$Component);
    var _super = (0,_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_6__["default"])(WithPageLifeCycle);
    function WithPageLifeCycle() {
      (0,_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, WithPageLifeCycle);
      return _super.apply(this, arguments);
    }
    (0,_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(WithPageLifeCycle, [{
      key: "render",
      value: function () {
        var _this$props = this.props,
          forwardedRef = _this$props.forwardedRef,
          rest = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(_this$props, _excluded);
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11__.createElement(_PageInstanceContext__WEBPACK_IMPORTED_MODULE_13__.PageInstanceContext.Consumer, null, function (context) {
          var $instance = context.$instance; // 挂载页面事件

          function additionToLifecycle(ins) {
            Object.keys(_ray_js_types__WEBPACK_IMPORTED_MODULE_12__.pageLifecycles).forEach(function (event) {
              if (typeof ins[event] === 'function') {
                $instance.registerLifecycle(event, ins, ins[event]);
              }
            });
          }
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11__.createElement(Component, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
            ref: function (_ref) {
              if (_ref) {
                additionToLifecycle(_ref);
              }
              if (forwardedRef) {
                if (typeof forwardedRef === 'function') {
                  forwardedRef(_ref);
                } else if ((0,_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_1__["default"])(forwardedRef) === 'object') {
                  forwardedRef.current = _ref;
                }
              }
            }
          }, rest));
        });
      }
    }]);
    return WithPageLifeCycle;
  }(react__WEBPACK_IMPORTED_MODULE_11__.Component);
  (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(WithPageLifeCycle, "displayName", displayName);
  var forwardRef = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11__.forwardRef(function (props, ref) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11__.createElement(WithPageLifeCycle, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
      forwardedRef: ref
    }));
  });
  forwardRef.displayName = displayName;
  return forwardRef;
}

/***/ }),

/***/ "./node_modules/@ray-js/runtime/main.js":
/*!**********************************************!*\
  !*** ./node_modules/@ray-js/runtime/main.js ***!
  \**********************************************/
/* istanbul ignore next */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PageInstance": () => (/* reexport safe */ _lib_index__WEBPACK_IMPORTED_MODULE_0__.PageInstance),
/* harmony export */   "PageInstanceContext": () => (/* reexport safe */ _lib_index__WEBPACK_IMPORTED_MODULE_0__.PageInstanceContext),
/* harmony export */   "PluginDriver": () => (/* reexport safe */ _lib_index__WEBPACK_IMPORTED_MODULE_0__.PluginDriver),
/* harmony export */   "RuntimeOptions": () => (/* reexport safe */ _lib_index__WEBPACK_IMPORTED_MODULE_0__.RuntimeOptions),
/* harmony export */   "bindBlendedAppInstance": () => (/* reexport safe */ _lib_index__WEBPACK_IMPORTED_MODULE_0__.bindBlendedAppInstance),
/* harmony export */   "createAppConfig": () => (/* reexport safe */ _lib_index__WEBPACK_IMPORTED_MODULE_0__.createAppConfig),
/* harmony export */   "createHostComponent": () => (/* reexport safe */ _lib_index__WEBPACK_IMPORTED_MODULE_0__.createHostComponent),
/* harmony export */   "createNativeComponent": () => (/* reexport safe */ _lib_index__WEBPACK_IMPORTED_MODULE_0__.createNativeComponent),
/* harmony export */   "createPageConfig": () => (/* reexport safe */ _lib_index__WEBPACK_IMPORTED_MODULE_0__.createPageConfig),
/* harmony export */   "createPortal": () => (/* reexport safe */ _lib_index__WEBPACK_IMPORTED_MODULE_0__.createPortal),
/* harmony export */   "getBlendedAppInstance": () => (/* reexport safe */ _lib_index__WEBPACK_IMPORTED_MODULE_0__.getBlendedAppInstance),
/* harmony export */   "lifecycle": () => (/* reexport safe */ _lib_index__WEBPACK_IMPORTED_MODULE_0__.lifecycle),
/* harmony export */   "nativeRequire": () => (/* reexport safe */ _lib_index__WEBPACK_IMPORTED_MODULE_0__.nativeRequire),
/* harmony export */   "overloadNativeAppConstructor": () => (/* reexport safe */ _lib_index__WEBPACK_IMPORTED_MODULE_0__.overloadNativeAppConstructor),
/* harmony export */   "overloadNativeComponentConstructor": () => (/* reexport safe */ _lib_index__WEBPACK_IMPORTED_MODULE_0__.overloadNativeComponentConstructor),
/* harmony export */   "render": () => (/* reexport safe */ _lib_index__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "toNativeComponentConfigCreator": () => (/* reexport safe */ _lib_index__WEBPACK_IMPORTED_MODULE_0__.toNativeComponentConfigCreator),
/* harmony export */   "unstable_batchedUpdates": () => (/* reexport safe */ _lib_index__WEBPACK_IMPORTED_MODULE_0__.unstable_batchedUpdates),
/* harmony export */   "useAppEvent": () => (/* reexport safe */ _lib_index__WEBPACK_IMPORTED_MODULE_0__.useAppEvent),
/* harmony export */   "useComponentInstance": () => (/* reexport safe */ _lib_index__WEBPACK_IMPORTED_MODULE_0__.useComponentInstance),
/* harmony export */   "useModal": () => (/* reexport safe */ _lib_index__WEBPACK_IMPORTED_MODULE_0__.useModal),
/* harmony export */   "useNativeEffect": () => (/* reexport safe */ _lib_index__WEBPACK_IMPORTED_MODULE_0__.useNativeEffect),
/* harmony export */   "usePageEvent": () => (/* reexport safe */ _lib_index__WEBPACK_IMPORTED_MODULE_0__.usePageEvent),
/* harmony export */   "usePageInstance": () => (/* reexport safe */ _lib_index__WEBPACK_IMPORTED_MODULE_0__.usePageInstance),
/* harmony export */   "useQuery": () => (/* reexport safe */ _lib_index__WEBPACK_IMPORTED_MODULE_0__.useQuery),
/* harmony export */   "withPageLifecycle": () => (/* reexport safe */ _lib_index__WEBPACK_IMPORTED_MODULE_0__.withPageLifecycle)
/* harmony export */ });
/* harmony import */ var _lib_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/index */ "./node_modules/@ray-js/runtime/lib/index.mini.js");


/***/ }),

/***/ "./node_modules/base64-browser/index.js":
/*!**********************************************!*\
  !*** ./node_modules/base64-browser/index.js ***!
  \**********************************************/
/* istanbul ignore next */
/***/ ((module) => {

module.exports = {
  encode: encode,
  decode: decode
};
function encode(data) {
  return base64encode(utf16to8(data));
}
function decode(data) {
  return utf8to16(base64decode(data));
}
function utf16to8(str) {
  var out, i, len, c;
  out = "";
  len = str.length;
  for (i = 0; i < len; i++) {
    c = str.charCodeAt(i);
    if (c >= 0x0001 && c <= 0x007F) {
      out += str.charAt(i);
    } else if (c > 0x07FF) {
      out += String.fromCharCode(0xE0 | c >> 12 & 0x0F);
      out += String.fromCharCode(0x80 | c >> 6 & 0x3F);
      out += String.fromCharCode(0x80 | c >> 0 & 0x3F);
    } else {
      out += String.fromCharCode(0xC0 | c >> 6 & 0x1F);
      out += String.fromCharCode(0x80 | c >> 0 & 0x3F);
    }
  }
  return out;
}
function utf8to16(str) {
  var out, i, len, c;
  var char2, char3;
  out = "";
  len = str.length;
  i = 0;
  while (i < len) {
    c = str.charCodeAt(i++);
    switch (c >> 4) {
      case 0:
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
      case 6:
      case 7:
        // 0xxxxxxx
        out += str.charAt(i - 1);
        break;
      case 12:
      case 13:
        // 110x xxxx 10xx xxxx
        char2 = str.charCodeAt(i++);
        out += String.fromCharCode((c & 0x1F) << 6 | char2 & 0x3F);
        break;
      case 14:
        // 1110 xxxx 10xx xxxx 10xx xxxx
        char2 = str.charCodeAt(i++);
        char3 = str.charCodeAt(i++);
        out += String.fromCharCode((c & 0x0F) << 12 | (char2 & 0x3F) << 6 | (char3 & 0x3F) << 0);
        break;
    }
  }
  return out;
}
var base64EncodeChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
var base64DecodeChars = new Array(-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 62, -1, -1, -1, 63, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, -1, -1, -1, -1, -1, -1, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, -1, -1, -1, -1, -1, -1, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, -1, -1, -1, -1, -1);
function base64encode(str) {
  var out, i, len;
  var c1, c2, c3;
  len = str.length;
  i = 0;
  out = "";
  while (i < len) {
    c1 = str.charCodeAt(i++) & 0xff;
    if (i == len) {
      out += base64EncodeChars.charAt(c1 >> 2);
      out += base64EncodeChars.charAt((c1 & 0x3) << 4);
      out += "==";
      break;
    }
    c2 = str.charCodeAt(i++);
    if (i == len) {
      out += base64EncodeChars.charAt(c1 >> 2);
      out += base64EncodeChars.charAt((c1 & 0x3) << 4 | (c2 & 0xF0) >> 4);
      out += base64EncodeChars.charAt((c2 & 0xF) << 2);
      out += "=";
      break;
    }
    c3 = str.charCodeAt(i++);
    out += base64EncodeChars.charAt(c1 >> 2);
    out += base64EncodeChars.charAt((c1 & 0x3) << 4 | (c2 & 0xF0) >> 4);
    out += base64EncodeChars.charAt((c2 & 0xF) << 2 | (c3 & 0xC0) >> 6);
    out += base64EncodeChars.charAt(c3 & 0x3F);
  }
  return out;
}
function base64decode(str) {
  var c1, c2, c3, c4;
  var i, len, out;
  len = str.length;
  i = 0;
  out = "";
  while (i < len) {
    /* c1 */
    do {
      c1 = base64DecodeChars[str.charCodeAt(i++) & 0xff];
    } while (i < len && c1 == -1);
    if (c1 == -1) break;

    /* c2 */
    do {
      c2 = base64DecodeChars[str.charCodeAt(i++) & 0xff];
    } while (i < len && c2 == -1);
    if (c2 == -1) break;
    out += String.fromCharCode(c1 << 2 | (c2 & 0x30) >> 4);

    /* c3 */
    do {
      c3 = str.charCodeAt(i++) & 0xff;
      if (c3 == 61) return out;
      c3 = base64DecodeChars[c3];
    } while (i < len && c3 == -1);
    if (c3 == -1) break;
    out += String.fromCharCode((c2 & 0XF) << 4 | (c3 & 0x3C) >> 2);

    /* c4 */
    do {
      c4 = str.charCodeAt(i++) & 0xff;
      if (c4 == 61) return out;
      c4 = base64DecodeChars[c4];
    } while (i < len && c4 == -1);
    if (c4 == -1) break;
    out += String.fromCharCode((c3 & 0x03) << 6 | c4);
  }
  return out;
}

/***/ }),

/***/ "./node_modules/core-js/internals/array-buffer-non-extensible.js":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js/internals/array-buffer-non-extensible.js ***!
  \***********************************************************************/
/* istanbul ignore next */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// FF26- bug: ArrayBuffers are non-extensible, but Object.isExtensible does not report it
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
module.exports = fails(function () {
  if (typeof ArrayBuffer == 'function') {
    var buffer = new ArrayBuffer(8);
    // eslint-disable-next-line es/no-object-isextensible, es/no-object-defineproperty -- safe
    if (Object.isExtensible(buffer)) Object.defineProperty(buffer, 'a', {
      value: 8
    });
  }
});

/***/ }),

/***/ "./node_modules/core-js/internals/array-slice-simple.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/internals/array-slice-simple.js ***!
  \**************************************************************/
/* istanbul ignore next */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var toAbsoluteIndex = __webpack_require__(/*! ../internals/to-absolute-index */ "./node_modules/core-js/internals/to-absolute-index.js");
var lengthOfArrayLike = __webpack_require__(/*! ../internals/length-of-array-like */ "./node_modules/core-js/internals/length-of-array-like.js");
var createProperty = __webpack_require__(/*! ../internals/create-property */ "./node_modules/core-js/internals/create-property.js");
var $Array = Array;
var max = Math.max;
module.exports = function (O, start, end) {
  var length = lengthOfArrayLike(O);
  var k = toAbsoluteIndex(start, length);
  var fin = toAbsoluteIndex(end === undefined ? length : end, length);
  var result = $Array(max(fin - k, 0));
  for (var n = 0; k < fin; k++, n++) createProperty(result, n, O[k]);
  result.length = n;
  return result;
};

/***/ }),

/***/ "./node_modules/core-js/internals/collection-strong.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/collection-strong.js ***!
  \*************************************************************/
/* istanbul ignore next */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var create = __webpack_require__(/*! ../internals/object-create */ "./node_modules/core-js/internals/object-create.js");
var defineBuiltInAccessor = __webpack_require__(/*! ../internals/define-built-in-accessor */ "./node_modules/core-js/internals/define-built-in-accessor.js");
var defineBuiltIns = __webpack_require__(/*! ../internals/define-built-ins */ "./node_modules/core-js/internals/define-built-ins.js");
var bind = __webpack_require__(/*! ../internals/function-bind-context */ "./node_modules/core-js/internals/function-bind-context.js");
var anInstance = __webpack_require__(/*! ../internals/an-instance */ "./node_modules/core-js/internals/an-instance.js");
var isNullOrUndefined = __webpack_require__(/*! ../internals/is-null-or-undefined */ "./node_modules/core-js/internals/is-null-or-undefined.js");
var iterate = __webpack_require__(/*! ../internals/iterate */ "./node_modules/core-js/internals/iterate.js");
var defineIterator = __webpack_require__(/*! ../internals/iterator-define */ "./node_modules/core-js/internals/iterator-define.js");
var createIterResultObject = __webpack_require__(/*! ../internals/create-iter-result-object */ "./node_modules/core-js/internals/create-iter-result-object.js");
var setSpecies = __webpack_require__(/*! ../internals/set-species */ "./node_modules/core-js/internals/set-species.js");
var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var fastKey = (__webpack_require__(/*! ../internals/internal-metadata */ "./node_modules/core-js/internals/internal-metadata.js").fastKey);
var InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ "./node_modules/core-js/internals/internal-state.js");
var setInternalState = InternalStateModule.set;
var internalStateGetterFor = InternalStateModule.getterFor;
module.exports = {
  getConstructor: function getConstructor(wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER) {
    var Constructor = wrapper(function (that, iterable) {
      anInstance(that, Prototype);
      setInternalState(that, {
        type: CONSTRUCTOR_NAME,
        index: create(null),
        first: undefined,
        last: undefined,
        size: 0
      });
      if (!DESCRIPTORS) that.size = 0;
      if (!isNullOrUndefined(iterable)) iterate(iterable, that[ADDER], {
        that: that,
        AS_ENTRIES: IS_MAP
      });
    });
    var Prototype = Constructor.prototype;
    var getInternalState = internalStateGetterFor(CONSTRUCTOR_NAME);
    var define = function (that, key, value) {
      var state = getInternalState(that);
      var entry = getEntry(that, key);
      var previous, index;
      // change existing entry
      if (entry) {
        entry.value = value;
        // create new entry
      } else {
        state.last = entry = {
          index: index = fastKey(key, true),
          key: key,
          value: value,
          previous: previous = state.last,
          next: undefined,
          removed: false
        };
        if (!state.first) state.first = entry;
        if (previous) previous.next = entry;
        if (DESCRIPTORS) state.size++;else that.size++;
        // add to index
        if (index !== 'F') state.index[index] = entry;
      }
      return that;
    };
    var getEntry = function (that, key) {
      var state = getInternalState(that);
      // fast case
      var index = fastKey(key);
      var entry;
      if (index !== 'F') return state.index[index];
      // frozen object case
      for (entry = state.first; entry; entry = entry.next) {
        if (entry.key == key) return entry;
      }
    };
    defineBuiltIns(Prototype, {
      // `{ Map, Set }.prototype.clear()` methods
      // https://tc39.es/ecma262/#sec-map.prototype.clear
      // https://tc39.es/ecma262/#sec-set.prototype.clear
      clear: function () {
        var that = this;
        var state = getInternalState(that);
        var data = state.index;
        var entry = state.first;
        while (entry) {
          entry.removed = true;
          if (entry.previous) entry.previous = entry.previous.next = undefined;
          delete data[entry.index];
          entry = entry.next;
        }
        state.first = state.last = undefined;
        if (DESCRIPTORS) state.size = 0;else that.size = 0;
      },
      // `{ Map, Set }.prototype.delete(key)` methods
      // https://tc39.es/ecma262/#sec-map.prototype.delete
      // https://tc39.es/ecma262/#sec-set.prototype.delete
      'delete': function _delete(key) {
        var that = this;
        var state = getInternalState(that);
        var entry = getEntry(that, key);
        if (entry) {
          var next = entry.next;
          var prev = entry.previous;
          delete state.index[entry.index];
          entry.removed = true;
          if (prev) prev.next = next;
          if (next) next.previous = prev;
          if (state.first == entry) state.first = next;
          if (state.last == entry) state.last = prev;
          if (DESCRIPTORS) state.size--;else that.size--;
        }
        return !!entry;
      },
      // `{ Map, Set }.prototype.forEach(callbackfn, thisArg = undefined)` methods
      // https://tc39.es/ecma262/#sec-map.prototype.foreach
      // https://tc39.es/ecma262/#sec-set.prototype.foreach
      forEach: function (callbackfn /* , that = undefined */) {
        var state = getInternalState(this);
        var boundFunction = bind(callbackfn, arguments.length > 1 ? arguments[1] : undefined);
        var entry;
        while (entry = entry ? entry.next : state.first) {
          boundFunction(entry.value, entry.key, this);
          // revert to the last existing entry
          while (entry && entry.removed) entry = entry.previous;
        }
      },
      // `{ Map, Set}.prototype.has(key)` methods
      // https://tc39.es/ecma262/#sec-map.prototype.has
      // https://tc39.es/ecma262/#sec-set.prototype.has
      has: function (key) {
        return !!getEntry(this, key);
      }
    });
    defineBuiltIns(Prototype, IS_MAP ? {
      // `Map.prototype.get(key)` method
      // https://tc39.es/ecma262/#sec-map.prototype.get
      get: function (key) {
        var entry = getEntry(this, key);
        return entry && entry.value;
      },
      // `Map.prototype.set(key, value)` method
      // https://tc39.es/ecma262/#sec-map.prototype.set
      set: function (key, value) {
        return define(this, key === 0 ? 0 : key, value);
      }
    } : {
      // `Set.prototype.add(value)` method
      // https://tc39.es/ecma262/#sec-set.prototype.add
      add: function (value) {
        return define(this, value = value === 0 ? 0 : value, value);
      }
    });
    if (DESCRIPTORS) defineBuiltInAccessor(Prototype, 'size', {
      configurable: true,
      get: function get() {
        return getInternalState(this).size;
      }
    });
    return Constructor;
  },
  setStrong: function setStrong(Constructor, CONSTRUCTOR_NAME, IS_MAP) {
    var ITERATOR_NAME = CONSTRUCTOR_NAME + ' Iterator';
    var getInternalCollectionState = internalStateGetterFor(CONSTRUCTOR_NAME);
    var getInternalIteratorState = internalStateGetterFor(ITERATOR_NAME);
    // `{ Map, Set }.prototype.{ keys, values, entries, @@iterator }()` methods
    // https://tc39.es/ecma262/#sec-map.prototype.entries
    // https://tc39.es/ecma262/#sec-map.prototype.keys
    // https://tc39.es/ecma262/#sec-map.prototype.values
    // https://tc39.es/ecma262/#sec-map.prototype-@@iterator
    // https://tc39.es/ecma262/#sec-set.prototype.entries
    // https://tc39.es/ecma262/#sec-set.prototype.keys
    // https://tc39.es/ecma262/#sec-set.prototype.values
    // https://tc39.es/ecma262/#sec-set.prototype-@@iterator
    defineIterator(Constructor, CONSTRUCTOR_NAME, function (iterated, kind) {
      setInternalState(this, {
        type: ITERATOR_NAME,
        target: iterated,
        state: getInternalCollectionState(iterated),
        kind: kind,
        last: undefined
      });
    }, function () {
      var state = getInternalIteratorState(this);
      var kind = state.kind;
      var entry = state.last;
      // revert to the last existing entry
      while (entry && entry.removed) entry = entry.previous;
      // get next entry
      if (!state.target || !(state.last = entry = entry ? entry.next : state.state.first)) {
        // or finish the iteration
        state.target = undefined;
        return createIterResultObject(undefined, true);
      }
      // return step by kind
      if (kind == 'keys') return createIterResultObject(entry.key, false);
      if (kind == 'values') return createIterResultObject(entry.value, false);
      return createIterResultObject([entry.key, entry.value], false);
    }, IS_MAP ? 'entries' : 'values', !IS_MAP, true);

    // `{ Map, Set }.prototype[@@species]` accessors
    // https://tc39.es/ecma262/#sec-get-map-@@species
    // https://tc39.es/ecma262/#sec-get-set-@@species
    setSpecies(CONSTRUCTOR_NAME);
  }
};

/***/ }),

/***/ "./node_modules/core-js/internals/collection.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/collection.js ***!
  \******************************************************/
/* istanbul ignore next */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "./node_modules/core-js/internals/function-uncurry-this.js");
var isForced = __webpack_require__(/*! ../internals/is-forced */ "./node_modules/core-js/internals/is-forced.js");
var defineBuiltIn = __webpack_require__(/*! ../internals/define-built-in */ "./node_modules/core-js/internals/define-built-in.js");
var InternalMetadataModule = __webpack_require__(/*! ../internals/internal-metadata */ "./node_modules/core-js/internals/internal-metadata.js");
var iterate = __webpack_require__(/*! ../internals/iterate */ "./node_modules/core-js/internals/iterate.js");
var anInstance = __webpack_require__(/*! ../internals/an-instance */ "./node_modules/core-js/internals/an-instance.js");
var isCallable = __webpack_require__(/*! ../internals/is-callable */ "./node_modules/core-js/internals/is-callable.js");
var isNullOrUndefined = __webpack_require__(/*! ../internals/is-null-or-undefined */ "./node_modules/core-js/internals/is-null-or-undefined.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var checkCorrectnessOfIteration = __webpack_require__(/*! ../internals/check-correctness-of-iteration */ "./node_modules/core-js/internals/check-correctness-of-iteration.js");
var setToStringTag = __webpack_require__(/*! ../internals/set-to-string-tag */ "./node_modules/core-js/internals/set-to-string-tag.js");
var inheritIfRequired = __webpack_require__(/*! ../internals/inherit-if-required */ "./node_modules/core-js/internals/inherit-if-required.js");
module.exports = function (CONSTRUCTOR_NAME, wrapper, common) {
  var IS_MAP = CONSTRUCTOR_NAME.indexOf('Map') !== -1;
  var IS_WEAK = CONSTRUCTOR_NAME.indexOf('Weak') !== -1;
  var ADDER = IS_MAP ? 'set' : 'add';
  var NativeConstructor = global[CONSTRUCTOR_NAME];
  var NativePrototype = NativeConstructor && NativeConstructor.prototype;
  var Constructor = NativeConstructor;
  var exported = {};
  var fixMethod = function (KEY) {
    var uncurriedNativeMethod = uncurryThis(NativePrototype[KEY]);
    defineBuiltIn(NativePrototype, KEY, KEY == 'add' ? function (value) {
      uncurriedNativeMethod(this, value === 0 ? 0 : value);
      return this;
    } : KEY == 'delete' ? function (key) {
      return IS_WEAK && !isObject(key) ? false : uncurriedNativeMethod(this, key === 0 ? 0 : key);
    } : KEY == 'get' ? function (key) {
      return IS_WEAK && !isObject(key) ? undefined : uncurriedNativeMethod(this, key === 0 ? 0 : key);
    } : KEY == 'has' ? function (key) {
      return IS_WEAK && !isObject(key) ? false : uncurriedNativeMethod(this, key === 0 ? 0 : key);
    } : function (key, value) {
      uncurriedNativeMethod(this, key === 0 ? 0 : key, value);
      return this;
    });
  };
  var REPLACE = isForced(CONSTRUCTOR_NAME, !isCallable(NativeConstructor) || !(IS_WEAK || NativePrototype.forEach && !fails(function () {
    new NativeConstructor().entries().next();
  })));
  if (REPLACE) {
    // create collection constructor
    Constructor = common.getConstructor(wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER);
    InternalMetadataModule.enable();
  } else if (isForced(CONSTRUCTOR_NAME, true)) {
    var instance = new Constructor();
    // early implementations not supports chaining
    var HASNT_CHAINING = instance[ADDER](IS_WEAK ? {} : -0, 1) != instance;
    // V8 ~ Chromium 40- weak-collections throws on primitives, but should return false
    var THROWS_ON_PRIMITIVES = fails(function () {
      instance.has(1);
    });
    // most early implementations doesn't supports iterables, most modern - not close it correctly
    // eslint-disable-next-line no-new -- required for testing
    var ACCEPT_ITERABLES = checkCorrectnessOfIteration(function (iterable) {
      new NativeConstructor(iterable);
    });
    // for early implementations -0 and +0 not the same
    var BUGGY_ZERO = !IS_WEAK && fails(function () {
      // V8 ~ Chromium 42- fails only with 5+ elements
      var $instance = new NativeConstructor();
      var index = 5;
      while (index--) $instance[ADDER](index, index);
      return !$instance.has(-0);
    });
    if (!ACCEPT_ITERABLES) {
      Constructor = wrapper(function (dummy, iterable) {
        anInstance(dummy, NativePrototype);
        var that = inheritIfRequired(new NativeConstructor(), dummy, Constructor);
        if (!isNullOrUndefined(iterable)) iterate(iterable, that[ADDER], {
          that: that,
          AS_ENTRIES: IS_MAP
        });
        return that;
      });
      Constructor.prototype = NativePrototype;
      NativePrototype.constructor = Constructor;
    }
    if (THROWS_ON_PRIMITIVES || BUGGY_ZERO) {
      fixMethod('delete');
      fixMethod('has');
      IS_MAP && fixMethod('get');
    }
    if (BUGGY_ZERO || HASNT_CHAINING) fixMethod(ADDER);

    // weak collections should not contains .clear method
    if (IS_WEAK && NativePrototype.clear) delete NativePrototype.clear;
  }
  exported[CONSTRUCTOR_NAME] = Constructor;
  $({
    global: true,
    constructor: true,
    forced: Constructor != NativeConstructor
  }, exported);
  setToStringTag(Constructor, CONSTRUCTOR_NAME);
  if (!IS_WEAK) common.setStrong(Constructor, CONSTRUCTOR_NAME, IS_MAP);
  return Constructor;
};

/***/ }),

/***/ "./node_modules/core-js/internals/correct-prototype-getter.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/internals/correct-prototype-getter.js ***!
  \********************************************************************/
/* istanbul ignore next */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
module.exports = !fails(function () {
  function F() {/* empty */}
  F.prototype.constructor = null;
  // eslint-disable-next-line es/no-object-getprototypeof -- required for testing
  return Object.getPrototypeOf(new F()) !== F.prototype;
});

/***/ }),

/***/ "./node_modules/core-js/internals/create-iter-result-object.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/internals/create-iter-result-object.js ***!
  \*********************************************************************/
/* istanbul ignore next */
/***/ ((module) => {

// `CreateIterResultObject` abstract operation
// https://tc39.es/ecma262/#sec-createiterresultobject
module.exports = function (value, done) {
  return {
    value: value,
    done: done
  };
};

/***/ }),

/***/ "./node_modules/core-js/internals/define-built-ins.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/internals/define-built-ins.js ***!
  \************************************************************/
/* istanbul ignore next */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var defineBuiltIn = __webpack_require__(/*! ../internals/define-built-in */ "./node_modules/core-js/internals/define-built-in.js");
module.exports = function (target, src, options) {
  for (var key in src) defineBuiltIn(target, key, src[key], options);
  return target;
};

/***/ }),

/***/ "./node_modules/core-js/internals/freezing.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/internals/freezing.js ***!
  \****************************************************/
/* istanbul ignore next */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
module.exports = !fails(function () {
  // eslint-disable-next-line es/no-object-isextensible, es/no-object-preventextensions -- required for testing
  return Object.isExtensible(Object.preventExtensions({}));
});

/***/ }),

/***/ "./node_modules/core-js/internals/internal-metadata.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/internal-metadata.js ***!
  \*************************************************************/
/* istanbul ignore next */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "./node_modules/core-js/internals/function-uncurry-this.js");
var hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ "./node_modules/core-js/internals/hidden-keys.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
var hasOwn = __webpack_require__(/*! ../internals/has-own-property */ "./node_modules/core-js/internals/has-own-property.js");
var defineProperty = (__webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js").f);
var getOwnPropertyNamesModule = __webpack_require__(/*! ../internals/object-get-own-property-names */ "./node_modules/core-js/internals/object-get-own-property-names.js");
var getOwnPropertyNamesExternalModule = __webpack_require__(/*! ../internals/object-get-own-property-names-external */ "./node_modules/core-js/internals/object-get-own-property-names-external.js");
var isExtensible = __webpack_require__(/*! ../internals/object-is-extensible */ "./node_modules/core-js/internals/object-is-extensible.js");
var uid = __webpack_require__(/*! ../internals/uid */ "./node_modules/core-js/internals/uid.js");
var FREEZING = __webpack_require__(/*! ../internals/freezing */ "./node_modules/core-js/internals/freezing.js");
var REQUIRED = false;
var METADATA = uid('meta');
var id = 0;
var setMetadata = function (it) {
  defineProperty(it, METADATA, {
    value: {
      objectID: 'O' + id++,
      // object ID
      weakData: {} // weak collections IDs
    }
  });
};

var fastKey = function (it, create) {
  // return a primitive with prefix
  if (!isObject(it)) return _typeof(it) == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!hasOwn(it, METADATA)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMetadata(it);
    // return object ID
  }
  return it[METADATA].objectID;
};
var getWeakData = function (it, create) {
  if (!hasOwn(it, METADATA)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMetadata(it);
    // return the store of weak collections IDs
  }
  return it[METADATA].weakData;
};

// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZING && REQUIRED && isExtensible(it) && !hasOwn(it, METADATA)) setMetadata(it);
  return it;
};
var enable = function () {
  meta.enable = function () {/* empty */};
  REQUIRED = true;
  var getOwnPropertyNames = getOwnPropertyNamesModule.f;
  var splice = uncurryThis([].splice);
  var test = {};
  test[METADATA] = 1;

  // prevent exposing of metadata key
  if (getOwnPropertyNames(test).length) {
    getOwnPropertyNamesModule.f = function (it) {
      var result = getOwnPropertyNames(it);
      for (var i = 0, length = result.length; i < length; i++) {
        if (result[i] === METADATA) {
          splice(result, i, 1);
          break;
        }
      }
      return result;
    };
    $({
      target: 'Object',
      stat: true,
      forced: true
    }, {
      getOwnPropertyNames: getOwnPropertyNamesExternalModule.f
    });
  }
};
var meta = module.exports = {
  enable: enable,
  fastKey: fastKey,
  getWeakData: getWeakData,
  onFreeze: onFreeze
};
hiddenKeys[METADATA] = true;

/***/ }),

/***/ "./node_modules/core-js/internals/iterator-create-constructor.js":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js/internals/iterator-create-constructor.js ***!
  \***********************************************************************/
/* istanbul ignore next */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var IteratorPrototype = (__webpack_require__(/*! ../internals/iterators-core */ "./node_modules/core-js/internals/iterators-core.js").IteratorPrototype);
var create = __webpack_require__(/*! ../internals/object-create */ "./node_modules/core-js/internals/object-create.js");
var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ "./node_modules/core-js/internals/create-property-descriptor.js");
var setToStringTag = __webpack_require__(/*! ../internals/set-to-string-tag */ "./node_modules/core-js/internals/set-to-string-tag.js");
var Iterators = __webpack_require__(/*! ../internals/iterators */ "./node_modules/core-js/internals/iterators.js");
var returnThis = function () {
  return this;
};
module.exports = function (IteratorConstructor, NAME, next, ENUMERABLE_NEXT) {
  var TO_STRING_TAG = NAME + ' Iterator';
  IteratorConstructor.prototype = create(IteratorPrototype, {
    next: createPropertyDescriptor(+!ENUMERABLE_NEXT, next)
  });
  setToStringTag(IteratorConstructor, TO_STRING_TAG, false, true);
  Iterators[TO_STRING_TAG] = returnThis;
  return IteratorConstructor;
};

/***/ }),

/***/ "./node_modules/core-js/internals/iterator-define.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/internals/iterator-define.js ***!
  \***********************************************************/
/* istanbul ignore next */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var call = __webpack_require__(/*! ../internals/function-call */ "./node_modules/core-js/internals/function-call.js");
var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ "./node_modules/core-js/internals/is-pure.js");
var FunctionName = __webpack_require__(/*! ../internals/function-name */ "./node_modules/core-js/internals/function-name.js");
var isCallable = __webpack_require__(/*! ../internals/is-callable */ "./node_modules/core-js/internals/is-callable.js");
var createIteratorConstructor = __webpack_require__(/*! ../internals/iterator-create-constructor */ "./node_modules/core-js/internals/iterator-create-constructor.js");
var getPrototypeOf = __webpack_require__(/*! ../internals/object-get-prototype-of */ "./node_modules/core-js/internals/object-get-prototype-of.js");
var setPrototypeOf = __webpack_require__(/*! ../internals/object-set-prototype-of */ "./node_modules/core-js/internals/object-set-prototype-of.js");
var setToStringTag = __webpack_require__(/*! ../internals/set-to-string-tag */ "./node_modules/core-js/internals/set-to-string-tag.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/core-js/internals/create-non-enumerable-property.js");
var defineBuiltIn = __webpack_require__(/*! ../internals/define-built-in */ "./node_modules/core-js/internals/define-built-in.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");
var Iterators = __webpack_require__(/*! ../internals/iterators */ "./node_modules/core-js/internals/iterators.js");
var IteratorsCore = __webpack_require__(/*! ../internals/iterators-core */ "./node_modules/core-js/internals/iterators-core.js");
var PROPER_FUNCTION_NAME = FunctionName.PROPER;
var CONFIGURABLE_FUNCTION_NAME = FunctionName.CONFIGURABLE;
var IteratorPrototype = IteratorsCore.IteratorPrototype;
var BUGGY_SAFARI_ITERATORS = IteratorsCore.BUGGY_SAFARI_ITERATORS;
var ITERATOR = wellKnownSymbol('iterator');
var KEYS = 'keys';
var VALUES = 'values';
var ENTRIES = 'entries';
var returnThis = function () {
  return this;
};
module.exports = function (Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {
  createIteratorConstructor(IteratorConstructor, NAME, next);
  var getIterationMethod = function (KIND) {
    if (KIND === DEFAULT && defaultIterator) return defaultIterator;
    if (!BUGGY_SAFARI_ITERATORS && KIND in IterablePrototype) return IterablePrototype[KIND];
    switch (KIND) {
      case KEYS:
        return function () {
          return new IteratorConstructor(this, KIND);
        };
      case VALUES:
        return function () {
          return new IteratorConstructor(this, KIND);
        };
      case ENTRIES:
        return function () {
          return new IteratorConstructor(this, KIND);
        };
    }
    return function () {
      return new IteratorConstructor(this);
    };
  };
  var TO_STRING_TAG = NAME + ' Iterator';
  var INCORRECT_VALUES_NAME = false;
  var IterablePrototype = Iterable.prototype;
  var nativeIterator = IterablePrototype[ITERATOR] || IterablePrototype['@@iterator'] || DEFAULT && IterablePrototype[DEFAULT];
  var defaultIterator = !BUGGY_SAFARI_ITERATORS && nativeIterator || getIterationMethod(DEFAULT);
  var anyNativeIterator = NAME == 'Array' ? IterablePrototype.entries || nativeIterator : nativeIterator;
  var CurrentIteratorPrototype, methods, KEY;

  // fix native
  if (anyNativeIterator) {
    CurrentIteratorPrototype = getPrototypeOf(anyNativeIterator.call(new Iterable()));
    if (CurrentIteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {
      if (!IS_PURE && getPrototypeOf(CurrentIteratorPrototype) !== IteratorPrototype) {
        if (setPrototypeOf) {
          setPrototypeOf(CurrentIteratorPrototype, IteratorPrototype);
        } else if (!isCallable(CurrentIteratorPrototype[ITERATOR])) {
          defineBuiltIn(CurrentIteratorPrototype, ITERATOR, returnThis);
        }
      }
      // Set @@toStringTag to native iterators
      setToStringTag(CurrentIteratorPrototype, TO_STRING_TAG, true, true);
      if (IS_PURE) Iterators[TO_STRING_TAG] = returnThis;
    }
  }

  // fix Array.prototype.{ values, @@iterator }.name in V8 / FF
  if (PROPER_FUNCTION_NAME && DEFAULT == VALUES && nativeIterator && nativeIterator.name !== VALUES) {
    if (!IS_PURE && CONFIGURABLE_FUNCTION_NAME) {
      createNonEnumerableProperty(IterablePrototype, 'name', VALUES);
    } else {
      INCORRECT_VALUES_NAME = true;
      defaultIterator = function () {
        return call(nativeIterator, this);
      };
    }
  }

  // export additional methods
  if (DEFAULT) {
    methods = {
      values: getIterationMethod(VALUES),
      keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),
      entries: getIterationMethod(ENTRIES)
    };
    if (FORCED) for (KEY in methods) {
      if (BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) {
        defineBuiltIn(IterablePrototype, KEY, methods[KEY]);
      }
    } else $({
      target: NAME,
      proto: true,
      forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME
    }, methods);
  }

  // define iterator
  if ((!IS_PURE || FORCED) && IterablePrototype[ITERATOR] !== defaultIterator) {
    defineBuiltIn(IterablePrototype, ITERATOR, defaultIterator, {
      name: DEFAULT
    });
  }
  Iterators[NAME] = defaultIterator;
  return methods;
};

/***/ }),

/***/ "./node_modules/core-js/internals/iterators-core.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/iterators-core.js ***!
  \**********************************************************/
/* istanbul ignore next */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var isCallable = __webpack_require__(/*! ../internals/is-callable */ "./node_modules/core-js/internals/is-callable.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
var create = __webpack_require__(/*! ../internals/object-create */ "./node_modules/core-js/internals/object-create.js");
var getPrototypeOf = __webpack_require__(/*! ../internals/object-get-prototype-of */ "./node_modules/core-js/internals/object-get-prototype-of.js");
var defineBuiltIn = __webpack_require__(/*! ../internals/define-built-in */ "./node_modules/core-js/internals/define-built-in.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");
var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ "./node_modules/core-js/internals/is-pure.js");
var ITERATOR = wellKnownSymbol('iterator');
var BUGGY_SAFARI_ITERATORS = false;

// `%IteratorPrototype%` object
// https://tc39.es/ecma262/#sec-%iteratorprototype%-object
var IteratorPrototype, PrototypeOfArrayIteratorPrototype, arrayIterator;

/* eslint-disable es/no-array-prototype-keys -- safe */
if ([].keys) {
  arrayIterator = [].keys();
  // Safari 8 has buggy iterators w/o `next`
  if (!('next' in arrayIterator)) BUGGY_SAFARI_ITERATORS = true;else {
    PrototypeOfArrayIteratorPrototype = getPrototypeOf(getPrototypeOf(arrayIterator));
    if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype = PrototypeOfArrayIteratorPrototype;
  }
}
var NEW_ITERATOR_PROTOTYPE = !isObject(IteratorPrototype) || fails(function () {
  var test = {};
  // FF44- legacy iterators case
  return IteratorPrototype[ITERATOR].call(test) !== test;
});
if (NEW_ITERATOR_PROTOTYPE) IteratorPrototype = {};else if (IS_PURE) IteratorPrototype = create(IteratorPrototype);

// `%IteratorPrototype%[@@iterator]()` method
// https://tc39.es/ecma262/#sec-%iteratorprototype%-@@iterator
if (!isCallable(IteratorPrototype[ITERATOR])) {
  defineBuiltIn(IteratorPrototype, ITERATOR, function () {
    return this;
  });
}
module.exports = {
  IteratorPrototype: IteratorPrototype,
  BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS
};

/***/ }),

/***/ "./node_modules/core-js/internals/object-get-own-property-names-external.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/core-js/internals/object-get-own-property-names-external.js ***!
  \**********************************************************************************/
/* istanbul ignore next */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
/* eslint-disable es/no-object-getownpropertynames -- safe */
var classof = __webpack_require__(/*! ../internals/classof-raw */ "./node_modules/core-js/internals/classof-raw.js");
var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/core-js/internals/to-indexed-object.js");
var $getOwnPropertyNames = (__webpack_require__(/*! ../internals/object-get-own-property-names */ "./node_modules/core-js/internals/object-get-own-property-names.js").f);
var arraySlice = __webpack_require__(/*! ../internals/array-slice-simple */ "./node_modules/core-js/internals/array-slice-simple.js");
var windowNames = (typeof window === "undefined" ? "undefined" : _typeof(window)) == 'object' && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];
var getWindowNames = function (it) {
  try {
    return $getOwnPropertyNames(it);
  } catch (error) {
    return arraySlice(windowNames);
  }
};

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
module.exports.f = function (it) {
  return windowNames && classof(it) == 'Window' ? getWindowNames(it) : $getOwnPropertyNames(toIndexedObject(it));
};

/***/ }),

/***/ "./node_modules/core-js/internals/object-get-prototype-of.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/internals/object-get-prototype-of.js ***!
  \*******************************************************************/
/* istanbul ignore next */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var hasOwn = __webpack_require__(/*! ../internals/has-own-property */ "./node_modules/core-js/internals/has-own-property.js");
var isCallable = __webpack_require__(/*! ../internals/is-callable */ "./node_modules/core-js/internals/is-callable.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/core-js/internals/to-object.js");
var sharedKey = __webpack_require__(/*! ../internals/shared-key */ "./node_modules/core-js/internals/shared-key.js");
var CORRECT_PROTOTYPE_GETTER = __webpack_require__(/*! ../internals/correct-prototype-getter */ "./node_modules/core-js/internals/correct-prototype-getter.js");
var IE_PROTO = sharedKey('IE_PROTO');
var $Object = Object;
var ObjectPrototype = $Object.prototype;

// `Object.getPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.getprototypeof
// eslint-disable-next-line es/no-object-getprototypeof -- safe
module.exports = CORRECT_PROTOTYPE_GETTER ? $Object.getPrototypeOf : function (O) {
  var object = toObject(O);
  if (hasOwn(object, IE_PROTO)) return object[IE_PROTO];
  var constructor = object.constructor;
  if (isCallable(constructor) && object instanceof constructor) {
    return constructor.prototype;
  }
  return object instanceof $Object ? ObjectPrototype : null;
};

/***/ }),

/***/ "./node_modules/core-js/internals/object-is-extensible.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/internals/object-is-extensible.js ***!
  \****************************************************************/
/* istanbul ignore next */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
var classof = __webpack_require__(/*! ../internals/classof-raw */ "./node_modules/core-js/internals/classof-raw.js");
var ARRAY_BUFFER_NON_EXTENSIBLE = __webpack_require__(/*! ../internals/array-buffer-non-extensible */ "./node_modules/core-js/internals/array-buffer-non-extensible.js");

// eslint-disable-next-line es/no-object-isextensible -- safe
var $isExtensible = Object.isExtensible;
var FAILS_ON_PRIMITIVES = fails(function () {
  $isExtensible(1);
});

// `Object.isExtensible` method
// https://tc39.es/ecma262/#sec-object.isextensible
module.exports = FAILS_ON_PRIMITIVES || ARRAY_BUFFER_NON_EXTENSIBLE ? function (it) {
  if (!isObject(it)) return false;
  if (ARRAY_BUFFER_NON_EXTENSIBLE && classof(it) == 'ArrayBuffer') return false;
  return $isExtensible ? $isExtensible(it) : true;
} : $isExtensible;

/***/ }),

/***/ "./node_modules/core-js/modules/es.array.iterator.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.iterator.js ***!
  \***********************************************************/
/* istanbul ignore next */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/core-js/internals/to-indexed-object.js");
var addToUnscopables = __webpack_require__(/*! ../internals/add-to-unscopables */ "./node_modules/core-js/internals/add-to-unscopables.js");
var Iterators = __webpack_require__(/*! ../internals/iterators */ "./node_modules/core-js/internals/iterators.js");
var InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ "./node_modules/core-js/internals/internal-state.js");
var defineProperty = (__webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js").f);
var defineIterator = __webpack_require__(/*! ../internals/iterator-define */ "./node_modules/core-js/internals/iterator-define.js");
var createIterResultObject = __webpack_require__(/*! ../internals/create-iter-result-object */ "./node_modules/core-js/internals/create-iter-result-object.js");
var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ "./node_modules/core-js/internals/is-pure.js");
var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var ARRAY_ITERATOR = 'Array Iterator';
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(ARRAY_ITERATOR);

// `Array.prototype.entries` method
// https://tc39.es/ecma262/#sec-array.prototype.entries
// `Array.prototype.keys` method
// https://tc39.es/ecma262/#sec-array.prototype.keys
// `Array.prototype.values` method
// https://tc39.es/ecma262/#sec-array.prototype.values
// `Array.prototype[@@iterator]` method
// https://tc39.es/ecma262/#sec-array.prototype-@@iterator
// `CreateArrayIterator` internal method
// https://tc39.es/ecma262/#sec-createarrayiterator
module.exports = defineIterator(Array, 'Array', function (iterated, kind) {
  setInternalState(this, {
    type: ARRAY_ITERATOR,
    target: toIndexedObject(iterated),
    // target
    index: 0,
    // next index
    kind: kind // kind
  });
  // `%ArrayIteratorPrototype%.next` method
  // https://tc39.es/ecma262/#sec-%arrayiteratorprototype%.next
}, function () {
  var state = getInternalState(this);
  var target = state.target;
  var kind = state.kind;
  var index = state.index++;
  if (!target || index >= target.length) {
    state.target = undefined;
    return createIterResultObject(undefined, true);
  }
  if (kind == 'keys') return createIterResultObject(index, false);
  if (kind == 'values') return createIterResultObject(target[index], false);
  return createIterResultObject([index, target[index]], false);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values%
// https://tc39.es/ecma262/#sec-createunmappedargumentsobject
// https://tc39.es/ecma262/#sec-createmappedargumentsobject
var values = Iterators.Arguments = Iterators.Array;

// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');

// V8 ~ Chrome 45- bug
if (!IS_PURE && DESCRIPTORS && values.name !== 'values') try {
  defineProperty(values, 'name', {
    value: 'values'
  });
} catch (error) {/* empty */}

/***/ }),

/***/ "./node_modules/core-js/modules/es.map.constructor.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es.map.constructor.js ***!
  \************************************************************/
/* istanbul ignore next */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var collection = __webpack_require__(/*! ../internals/collection */ "./node_modules/core-js/internals/collection.js");
var collectionStrong = __webpack_require__(/*! ../internals/collection-strong */ "./node_modules/core-js/internals/collection-strong.js");

// `Map` constructor
// https://tc39.es/ecma262/#sec-map-objects
collection('Map', function (init) {
  return function () {
    return init(this, arguments.length ? arguments[0] : undefined);
  };
}, collectionStrong);

/***/ }),

/***/ "./node_modules/core-js/modules/es.map.js":
/*!************************************************!*\
  !*** ./node_modules/core-js/modules/es.map.js ***!
  \************************************************/
/* istanbul ignore next */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// TODO: Remove this module from `core-js@4` since it's replaced to module below
__webpack_require__(/*! ../modules/es.map.constructor */ "./node_modules/core-js/modules/es.map.constructor.js");

/***/ }),

/***/ "./node_modules/core-js/modules/es.object.define-properties.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/modules/es.object.define-properties.js ***!
  \*********************************************************************/
/* istanbul ignore next */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var defineProperties = (__webpack_require__(/*! ../internals/object-define-properties */ "./node_modules/core-js/internals/object-define-properties.js").f);

// `Object.defineProperties` method
// https://tc39.es/ecma262/#sec-object.defineproperties
// eslint-disable-next-line es/no-object-defineproperties -- safe
$({
  target: 'Object',
  stat: true,
  forced: Object.defineProperties !== defineProperties,
  sham: !DESCRIPTORS
}, {
  defineProperties: defineProperties
});

/***/ }),

/***/ "./node_modules/core-js/modules/es.string.iterator.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es.string.iterator.js ***!
  \************************************************************/
/* istanbul ignore next */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var charAt = (__webpack_require__(/*! ../internals/string-multibyte */ "./node_modules/core-js/internals/string-multibyte.js").charAt);
var toString = __webpack_require__(/*! ../internals/to-string */ "./node_modules/core-js/internals/to-string.js");
var InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ "./node_modules/core-js/internals/internal-state.js");
var defineIterator = __webpack_require__(/*! ../internals/iterator-define */ "./node_modules/core-js/internals/iterator-define.js");
var createIterResultObject = __webpack_require__(/*! ../internals/create-iter-result-object */ "./node_modules/core-js/internals/create-iter-result-object.js");
var STRING_ITERATOR = 'String Iterator';
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(STRING_ITERATOR);

// `String.prototype[@@iterator]` method
// https://tc39.es/ecma262/#sec-string.prototype-@@iterator
defineIterator(String, 'String', function (iterated) {
  setInternalState(this, {
    type: STRING_ITERATOR,
    string: toString(iterated),
    index: 0
  });
  // `%StringIteratorPrototype%.next` method
  // https://tc39.es/ecma262/#sec-%stringiteratorprototype%.next
}, function () {
  var state = getInternalState(this);
  var string = state.string;
  var index = state.index;
  var point;
  if (index >= string.length) return createIterResultObject(undefined, true);
  point = charAt(string, index);
  state.index += point.length;
  return createIterResultObject(point, false);
});

/***/ }),

/***/ "./node_modules/core-js/modules/web.dom-collections.iterator.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/modules/web.dom-collections.iterator.js ***!
  \**********************************************************************/
/* istanbul ignore next */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var DOMIterables = __webpack_require__(/*! ../internals/dom-iterables */ "./node_modules/core-js/internals/dom-iterables.js");
var DOMTokenListPrototype = __webpack_require__(/*! ../internals/dom-token-list-prototype */ "./node_modules/core-js/internals/dom-token-list-prototype.js");
var ArrayIteratorMethods = __webpack_require__(/*! ../modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/core-js/internals/create-non-enumerable-property.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");
var ITERATOR = wellKnownSymbol('iterator');
var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var ArrayValues = ArrayIteratorMethods.values;
var handlePrototype = function (CollectionPrototype, COLLECTION_NAME) {
  if (CollectionPrototype) {
    // some Chrome versions have non-configurable methods on DOMTokenList
    if (CollectionPrototype[ITERATOR] !== ArrayValues) try {
      createNonEnumerableProperty(CollectionPrototype, ITERATOR, ArrayValues);
    } catch (error) {
      CollectionPrototype[ITERATOR] = ArrayValues;
    }
    if (!CollectionPrototype[TO_STRING_TAG]) {
      createNonEnumerableProperty(CollectionPrototype, TO_STRING_TAG, COLLECTION_NAME);
    }
    if (DOMIterables[COLLECTION_NAME]) for (var METHOD_NAME in ArrayIteratorMethods) {
      // some Chrome versions have non-configurable methods on DOMTokenList
      if (CollectionPrototype[METHOD_NAME] !== ArrayIteratorMethods[METHOD_NAME]) try {
        createNonEnumerableProperty(CollectionPrototype, METHOD_NAME, ArrayIteratorMethods[METHOD_NAME]);
      } catch (error) {
        CollectionPrototype[METHOD_NAME] = ArrayIteratorMethods[METHOD_NAME];
      }
    }
  }
};
for (var COLLECTION_NAME in DOMIterables) {
  handlePrototype(global[COLLECTION_NAME] && global[COLLECTION_NAME].prototype, COLLECTION_NAME);
}
handlePrototype(DOMTokenListPrototype, 'DOMTokenList');

/***/ }),

/***/ "./src/pages/home/index.entry.js":
/*!***************************************!*\
  !*** ./src/pages/home/index.entry.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ray_core_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ray-core/runtime */ "./node_modules/@ray-core/runtime/esm/index.js");
/* harmony import */ var _index_tsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.tsx */ "./src/pages/home/index.tsx");


Page((0,_ray_core_runtime__WEBPACK_IMPORTED_MODULE_0__.createPageConfig)(_index_tsx__WEBPACK_IMPORTED_MODULE_1__["default"], 'pages/home/index'));

/***/ }),

/***/ "./src/pages/home/index.tsx":
/*!**********************************!*\
  !*** ./src/pages/home/index.tsx ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _Users_xsh_workspace_godzilla_ray_demos_examples_blended_multi_rays_main_project_node_modules_ray_js_ray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@ray-js/ray */ "./node_modules/@ray-js/ray/index.js");
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }




var _PageAnonymous = function () {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Users_xsh_workspace_godzilla_ray_demos_examples_blended_multi_rays_main_project_node_modules_ray_js_ray__WEBPACK_IMPORTED_MODULE_1__.View, null, "current main page: home", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Users_xsh_workspace_godzilla_ray_demos_examples_blended_multi_rays_main_project_node_modules_ray_js_ray__WEBPACK_IMPORTED_MODULE_1__.Button, {
    onClick: function onClick() {
      return (0,_Users_xsh_workspace_godzilla_ray_demos_examples_blended_multi_rays_main_project_node_modules_ray_js_ray__WEBPACK_IMPORTED_MODULE_1__.navigateTo)({
        url: '/ray/one/pages/home/index'
      });
    }
  }, "to page home of the first sub package"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Users_xsh_workspace_godzilla_ray_demos_examples_blended_multi_rays_main_project_node_modules_ray_js_ray__WEBPACK_IMPORTED_MODULE_1__.Button, {
    onClick: function onClick() {
      return (0,_Users_xsh_workspace_godzilla_ray_demos_examples_blended_multi_rays_main_project_node_modules_ray_js_ray__WEBPACK_IMPORTED_MODULE_1__.navigateTo)({
        url: '/ray/two/pages/home/index'
      });
    }
  }, "to page home of the second sub package"));
};
var _PageAnonymous2 = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function (props, ref) {
  var $instance = new _Users_xsh_workspace_godzilla_ray_demos_examples_blended_multi_rays_main_project_node_modules_ray_js_ray__WEBPACK_IMPORTED_MODULE_1__.PageInstance();
  (0,_Users_xsh_workspace_godzilla_ray_demos_examples_blended_multi_rays_main_project_node_modules_ray_js_ray__WEBPACK_IMPORTED_MODULE_1__.usePageEvent)('onLoad', function () {
    _Users_xsh_workspace_godzilla_ray_demos_examples_blended_multi_rays_main_project_node_modules_ray_js_ray__WEBPACK_IMPORTED_MODULE_1__.lifecycle.addInstance($instance);
    _Users_xsh_workspace_godzilla_ray_demos_examples_blended_multi_rays_main_project_node_modules_ray_js_ray__WEBPACK_IMPORTED_MODULE_1__.lifecycle.emit({
      name: 'onLoad',
      uniqueId: $instance.uniqueId
    });
  });
  (0,_Users_xsh_workspace_godzilla_ray_demos_examples_blended_multi_rays_main_project_node_modules_ray_js_ray__WEBPACK_IMPORTED_MODULE_1__.usePageEvent)('onUnload', function () {
    _Users_xsh_workspace_godzilla_ray_demos_examples_blended_multi_rays_main_project_node_modules_ray_js_ray__WEBPACK_IMPORTED_MODULE_1__.lifecycle.emit({
      name: 'onUnload',
      uniqueId: $instance.uniqueId
    });
    _Users_xsh_workspace_godzilla_ray_demos_examples_blended_multi_rays_main_project_node_modules_ray_js_ray__WEBPACK_IMPORTED_MODULE_1__.lifecycle.removeInstance($instance);
  });
  (0,_Users_xsh_workspace_godzilla_ray_demos_examples_blended_multi_rays_main_project_node_modules_ray_js_ray__WEBPACK_IMPORTED_MODULE_1__.usePageEvent)('onShow', function () {
    _Users_xsh_workspace_godzilla_ray_demos_examples_blended_multi_rays_main_project_node_modules_ray_js_ray__WEBPACK_IMPORTED_MODULE_1__.lifecycle.emit({
      name: 'onShow',
      uniqueId: $instance.uniqueId
    });
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Users_xsh_workspace_godzilla_ray_demos_examples_blended_multi_rays_main_project_node_modules_ray_js_ray__WEBPACK_IMPORTED_MODULE_1__.PageInstanceContext.Provider, {
    value: {
      $instance: $instance
    }
  }, function (c) {
    return c.prototype && typeof c.prototype.render === 'function';
  }(_PageAnonymous) ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_PageAnonymous, _extends({
    ref: ref
  }, props)) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_PageAnonymous, props));
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_PageAnonymous2);

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["ray-vendors","ray-styles"], () => (__webpack_exec__("./src/pages/home/index.entry.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ module.exports = __webpack_exports__["default"];
/******/ }
]);