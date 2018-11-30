$(function() {
    function geeks3dViewModel(parameters) {
        var self = this;

        self.loginState = parameters[0];
        self.settings = parameters[1];


        console.log("Settings:")
        console.log(self.settings)
        console.log(self.loginState)

        // this will hold the URL currently displayed by the iframe
        self.ip = ko.observable();

        // this will hold the URL entered in the text field
        self.newUrl = ko.observable();


// Debug
        window.settings = self.settings

        // This will get called before the geeks3dViewModel gets bound to the DOM, but after its depedencies have
        // already been initialized. It is especially guaranteed that this method gets called _after_ the settings
        // have been retrieved from the OctoPrint backend and thus the SettingsViewModel been properly populated.
        self.onBeforeBinding = function() {

//            ip = self.settings.settings.plugins.geeks3d.ip()
//            if(ip.indexOf("127.0.0.1") !== -1){
                ip = window.location.hostname
//            }

            port = window.location.port
            protocol = window.location.protocol
            name = self.settings.appearance_name()
            if(name == ""){
                name = "OctoPrint"
            }
            color = window.settings.appearance_color()
            if(protocol == "http" && port == 0){
                port = 80
            }
            if(protocol == "https" && port == 0){
                port = 443
            }

            if(self.settings.api_enabled()){
                 $("#geeks-status").html("Open the 3D Geeks app on your Android device, go to: <br><pre>Settings > OctoPrint Settings</pre>And press the '+'-sign. Then scan this QR-code to get started")
                 $("#geeks").html("")
                 $("#geeks").qrcode({text: '{"color":"'+color+'", "name":"'+name+'","port":"'+port+'", "host":"'+ip+'","key":"'+ self.settings.api_key()+'"}', size: 300})


            }else{
                $("#geeks-status").html("Please enable the <a href='#settings_api' data-toggle='tab'>OctoPrint API</a> and <a href='http://"+ip+":"+port+"#settings_plugin_geeks3d'>Refresh</a> the page to start using this feature")
            }






        }
    }

    // This is how our plugin registers itself with the application, by adding some configuration information to
    // the global variable ADDITIONAL_VIEWMODELS
    ADDITIONAL_VIEWMODELS.push([
        // This is the constructor to call for instantiating the plugin
        geeks3dViewModel,

        // This is a list of dependencies to inject into the plugin, the order which you request here is the order
        // in which the dependencies will be injected into your view model upon instantiation via the parameters
        // argument
        ["loginStateViewModel", "settingsViewModel"],

        // Finally, this is the list of all elements we want this view model to be bound to.
        [document.getElementById("tab_plugin_geeks3d")]
    ]);






});
