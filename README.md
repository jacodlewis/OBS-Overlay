# Hypixel Bedwars Overlay for Streaming

This overlay is currently meant to be used for displaying Hypixel Bedwars stats.  
I'm very open to adding new features, if this concerns you please refer to the "Contributing" section.

## Usage
- Join the Hypixel Minecraft server and use ```/api``` to generate an API authentication key for your account.  
- Go to [MCUUID](https://mcuuid.net/), type in your usename, and copy the "Full UUID."

After downloading the latest release, replace the following lines of code shown below. (Line 2 & 3 of ```app.js```)


```javascript
var player_uuid = "YOUR UUID HERE";
var auth_key = "YOUR AUTH KEY HERE";
```

Open the ```index.html``` file in your browser to make sure it is working properly.  
Before closing the browser tab, take note of the URL, this is what you will use for the browser source.

Enjoy :)

## Customization

The overlay image size is 400px by 80px. If you want to create a custom graphic:
- Replace the ```overlay.png``` file with your custom graphic. 
- If your graphic is bigger or smaller than the dimensions, you can edit them in ```styles.css``` under ```.main-rect```.  
- 
If you are familiar with HTML, CSS, and Javascript, you can take a crack at customizing anything you want to.
If you are interested in having it customized and lack the resources to do it yourself, feel free to add me on Discord, ```stikcye#5725```.

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.
