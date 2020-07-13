cordova.define('cordova/plugin_list', function(require, exports, module) {
  module.exports = [
    {
      "id": "cordova-plugin-actionsheet.ActionSheet",
      "file": "plugins/cordova-plugin-actionsheet/www/ActionSheet.js",
      "pluginId": "cordova-plugin-actionsheet",
      "clobbers": [
        "window.plugins.actionsheet"
      ]
    },
    {
      "id": "cordova-plugin-inappbrowser.inappbrowser",
      "file": "plugins/cordova-plugin-inappbrowser/www/inappbrowser.js",
      "pluginId": "cordova-plugin-inappbrowser",
      "clobbers": [
        "cordova.InAppBrowser.open",
        "window.open"
      ]
    },
    {
      "id": "cordova-plugin-network-information.network",
      "file": "plugins/cordova-plugin-network-information/www/network.js",
      "pluginId": "cordova-plugin-network-information",
      "clobbers": [
        "navigator.connection",
        "navigator.network.connection"
      ]
    },
    {
      "id": "cordova-plugin-network-information.Connection",
      "file": "plugins/cordova-plugin-network-information/www/Connection.js",
      "pluginId": "cordova-plugin-network-information",
      "clobbers": [
        "Connection"
      ]
    },
    {
      "id": "cordova-plugin-spinner-dialog.SpinnerDialog",
      "file": "plugins/cordova-plugin-spinner-dialog/www/spinner.js",
      "pluginId": "cordova-plugin-spinner-dialog",
      "merges": [
        "window.plugins.spinnerDialog"
      ]
    },
    {
      "id": "cordova-plugin-splashscreen.SplashScreen",
      "file": "plugins/cordova-plugin-splashscreen/www/splashscreen.js",
      "pluginId": "cordova-plugin-splashscreen",
      "clobbers": [
        "navigator.splashscreen"
      ]
    },
    {
      "id": "cordova-plugin-zoom-control-2.ZoomControl",
      "file": "plugins/cordova-plugin-zoom-control-2/www/plugins.ZoomControl.js",
      "pluginId": "cordova-plugin-zoom-control-2",
      "clobbers": [
        "cordova.plugins.ZoomControl"
      ]
    }
  ];
  module.exports.metadata = {
    "cordova-plugin-actionsheet": "2.3.3",
    "cordova-plugin-console": "1.1.0",
    "cordova-plugin-inappbrowser": "1.7.1",
    "cordova-plugin-network-information": "2.0.2",
    "cordova-plugin-spinner-dialog": "1.3.1",
    "cordova-plugin-splashscreen": "5.0.4",
    "cordova-plugin-whitelist": "1.3.4",
    "cordova-plugin-zoom-control-2": "0.4.2"
  };
});