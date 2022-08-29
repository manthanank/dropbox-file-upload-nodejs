//Name of the file : dropbox-file-upload.js
//Including the required moduless
var request = require('request');
var fs = require('fs');

//enter your access token

//var access_token = "WRITE_YOUR_ACCESS_TOKEN_HERE";

var access_token = "sl.BONqIAUuwm3O1USovK2D0kfVSAapnjHm6HlUonHZ-jQOXcksQDYwwa6GvhMLTgh8n2cMvgUE_BBWfsxH5tr0RMzYL2B4giSEdl5ZwFV_wHidhzlknhBKRPDrrqzOHeM-TZI4DWA";

//Name of the file to be uploaded
var filename = '44.png';
//reading the contents 
var content = fs.readFileSync(filename);
//write your folder name in place of YOUR_PATH_TO_FOLDER
// For example if the folder name is njera then we can write it in the following way :
// "Dropbox-API-Arg": "{\"path\": \"/njera/"+filename+"\",\"mode\": \"overwrite\",\"autorename\": true,\"mute\": false}"
options = {
            method: "POST",
            url: 'https://content.dropboxapi.com/2/files/upload',
            headers: {
              "Content-Type": "application/octet-stream",
              "Authorization": "Bearer " + access_token,
              "Dropbox-API-Arg": "{\"path\": \"/YOUR_PATH_TO_FOLDER/"+filename+"\",\"mode\": \"overwrite\",\"autorename\": true,\"mute\": false}",
            },
            body:content
};

request(options,function(err, res,body){
     console.log("Err : " + err);
     console.log("res : " + res);
     console.log("body : " + body);    
 })