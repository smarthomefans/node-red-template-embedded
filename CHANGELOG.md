# Release Notes

## v0.0.7
* Node-RED 0.17, node-red-contrib-contextbrowser
* added nodemon to restart instance automatically on change of nodes when executing `npm run debug`. Node_modules is included in the path watch, but only extensions *.html and *.js. You can change this
in file `.nodemonrc.json`.

## v0.0.6
* added custom loggers for file output, syslog and a colorful console
* added public html folder
* added local nodes directory with sample node (not active), but speed ups node development if necessary
* moved source to ./src directory


## v0.0.5 
* Updated README
* Removed references to node-red-contrib-ui
* updated settings.js file for further style customizing
* added npm config section with most instance setup parameters, see [Configuration section](#configuration)
* added npm script to create self signed certificate for https, see [Enabling HTTPS section](#enabling-https)
* added npm script to create passwords for the node-red interface (user login), see [Enabling User authentication section](#enabling-user-authentication)
* added server listening on localhost by default, can be configured, see  [Granting access from other network interfaces](#allow-access-from-other-networks-than-localhost)
* using cross-env to set NodeJS environment variables 
* used prettier on code

## v0.0.4 
* Update readme - Added reference to SelfSigned-Cert-Creator for HTTPS

## v0.0.3 
* Update readme - Added alternative approaches and a warning about version constraints

## v0.0.2 
* Update readme - Added comment to configuration section of readme to inform that node-red-contrib-ui is installed. Initial testing also completed. Works on Windows 10 64bit with node.js v4.4.3 and Node-red v0.13.4. UI and http-in/out also tested.

## v0.0.1 
* INITIAL RELEASE - I've not yet fully tested this. Please use with caution. Let me know of any issues.