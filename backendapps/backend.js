// to parse the string from frontend
const qs = require('querystring');
const bodyParser = require('body-parser');

exports.handler = async (event, context) => { 

    const { query } = qs.parse(event.body); 
    let str2 = JSON.stringify({query});
    
    const j3 = bodyParser.json(event.body);
    let str3 = 'j3:' + JSON.stringify(j3)

    
    // console.log("the string from frontend:", strfromfront)

    // const v2 = qs.parse(event.body);
    // const v3 = JSON.stringify(v2)

    // const strFromBackToFront = "The string from frontend '" 
    //     + strfromfront + v2 + v3 
    //     + JSON.stringify({strfromfront}) + "' was received. This message was from the backend";

    // const lambdaResponse = {
    //     statusCode: 200,
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: strFromBackToFront,
    //   };

    // isn't it just like that????
    let thejson = event.body
    let thejsonstr = JSON.stringify(thejson)
    let strFromBackToFront = str2 + "\n" + str3 + "\n" + "The string from frontend " 
        + thejsonstr + " was received. This message was from the backend";

    // return lambdaResponse
    return {
        statusCode: 200,
        body: strFromBackToFront 
      };

}