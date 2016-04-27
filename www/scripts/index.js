// For an introduction to the Blank template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkID=397704
// To debug code on page load in Ripple or on Android devices/emulators: launch your app, set breakpoints,
// and then run "window.location.reload()" in the JavaScript Console.
(function () {
    "use strict";

    var online = navigator.onLine || false;

    document.addEventListener( 'deviceready', onDeviceReady.bind( this ), false );

    function onDeviceReady() {
        // Handle the Cordova pause and resume events
        document.addEventListener( 'pause', onPause.bind( this ), false );
        document.addEventListener( 'resume', onResume.bind( this ), false );
        document.addEventListener( 'offline', checkConnection, false);
        document.addEventListener( 'online', checkConnection, false);

        checkConnection();
        deviceProperties();

        // TODO: Cordova has been loaded. Perform any initialization that requires Cordova here.
    };

    function onPause() {
        // TODO: This application has been suspended. Save application state here.
    };

    function onResume() {
        // TODO: This application has been reactivated. Restore application state here.
    };

    var isConnected = false;
    function checkConnection() {
        alert("Checking connection");
        var networkState = navigator.network.connection.type;
        if (networkState == Connection.NONE) {isConnected = false;} else {isConnected = true;}

        var states = {};
        states[Connection.UNKNOWN]  = 'Unknown connection';
        states[Connection.ETHERNET] = 'Ethernet connection';
        states[Connection.WIFI]     = 'WiFi connected';
        states[Connection.CELL_2G]  = 'Cell 2G connection';
        states[Connection.CELL_3G]  = 'Cell 3G connection';
        states[Connection.CELL_4G]  = 'Cell 4G connection';
        states[Connection.NONE]     = 'No network connection';

            document.getElementById('statusWifi').innerHTML = states[networkState];
        if (isConnected) {
            document.getElementById('statusWifi').style.color = "green";
        } else {
            document.getElementById('statusWifi').style.color = "red";
        }

    }

    function deviceProperties() {

        document.getElementById('deviceProperties').innerHTML = 'Device Name: ' + device.name     + '<br />' +
                                                                'Device Cordova: '  + device.cordova + '<br />' +
                                                                'Device Platform: ' + device.platform + '<br />' +
                                                                'Device UUID: '     + device.uuid     + '<br />' +
                                                                'Device Version: '  + device.version  + '<br />';
    }

} )();
