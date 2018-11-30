#  OctoPrint-3DGeeks

This OctoPrint Plugin is a companion plugn to the "Upload to OctoPrint" feature seen in the  [3D Geeks](https://play.google.com/store/apps/details?id=work.twob.threed) app for Android. It allows for quick uploading of your favorite models to everybody's favorite 3D Printing interface: OctoPrint!

This plugin will create an addtional tab to your OctoPrint settings which will display a QR Code that can be scanned from within the 3D Geeks: Thingiverse Browser app. The QR Code will allow for quick registration of all your OctoPrint instances, without manually typing hard API Keys and IP Addresses.

## Setup

Install via the bundled [Plugin Manager](https://github.com/foosel/OctoPrint/wiki/Plugin:-Plugin-Manager)
or manually using this URL:

    https://github.com/2BWorks/OctoPrint_3DGeeks/archive/master.zip

## Usage

After installation restart `OctoPrint`, and go to the `Settings` tab. You should see a new tab named `3D Geeks`, go ahead and click that tab. You should be presented with a QR Code.

On your Android powered device open the [3D Geeks](https://play.google.com/store/apps/details?id=work.twob.threed) app, go to:

```
Settings > OctoPrint settings
```

Press the `+`-Icon in the bottom-right hand corner.

Press the `scan` icon, scan the QR code you're being presented. If everything goes well all the nesecary fields will be filled in automatically for you. You can now press `Test connection` for a quick test of the connection to your OctoPrint instance. **NOTE**: Be sure you're Android device is connected to the same network as your OctoPrint instance, as they communicate through the local network. When the test succeeds you can press `Create`. Your OctoPrint instance is now saved and can receive files from 3D Geeks.

**NOTE**: You can create as much OctoPrint instances as you desire. When uploading a file, the app will ask you which instance to upload to.

**TIP:** You can use Color coding to quickly distinguish your OctoPrint instances.

<img src="docs/tut_1.png?raw=true" width="200px">

<img src="docs/tut_2.png?raw=true" width="200px">

<img src="docs/tut_3.png?raw=true" width="200px">

<img src="docs/tut_4.png?raw=true" width="200px">

<img src="docs/tut_5.png?raw=true" width="200px">



## Uploading Files

Search for you favorite model, `Baby Groot` for example. In the `Details` section scroll down untill you see the files that are linked to this model. Press the `save`-icon, and select `Upload to OctoPrint`. Let app do it's magic!

<img src="docs/tut_6.png?raw=true" width="200px">









