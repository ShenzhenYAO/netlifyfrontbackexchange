// to parse the string from frontend
const qs = require('querystring');

module.handler = async (event, context) => { 

    const { strfromfront } = qs.parse(event.body);    
    console.log("the string from frontend:", strfromfront)

    const strFromBackToFront = "The string from frontend '" + JSON.stringify({strfromfront}) + "' was received. This message was from the backend";

    // const lambdaResponse = {
    //     statusCode: 200,
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: strFromBackToFront,
    //   };

    // return lambdaResponse
    return {
        statusCode: 200,
        body: strFromBackToFront 
      };

}