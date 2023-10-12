import {response} from "express";

var Promise = require("Promise");
const express = require("express")
const webApp = express()
/**
  * FetchModel - Fetch a model from the web server.
  *     url - string - The URL to issue the GET request.
  * Returns: a Promise that should be filled
  * with the response of the GET request parsed
  * as a JSON object and returned in the property
  * named "data" of an object.
  * If the requests has an error the promise should be
  * rejected with an object contain the properties:
  *    status:  The HTTP response status
  *    statusText:  The statusText from the xhr request
  *
*/


function fetchModel(url) {
  return new Promise(function(resolve, reject) {
      console.log(url);

      // Getting a logger error #TODO fix the logger error and get response from JSON
      // webApp.param('user',function (req, res, next, id){
      //     models.userModel.find(id,function(err,user){
              webApp.get(url,(req,res) =>{
                  let json_response;
                  json_response = res.send('list').json
                  console.log(json_response)
              })

              console.log(json_file)
              if(err){
                  next(err)
              }
              else if (this.id === response.par){
                 return response.json
              }
              else{
                  next(new Error('failed to load'))
              }
            });


      setTimeout(() => reject({status: 501, statusText: "Not Implemented"}),0);
      // On Success return:
      // resolve({data: getResponseObject});
  }

fetchModel("http://localhost:3000/user/list")
console.log('model fetched')
export default fetchModel;
