// to parse the string from frontend

exports.handler = async (event, context, callback) => {

    // isn't it just like that????
    let thejson = event.body
    let thejsonstr = JSON.stringify(thejson)
    let strFromBackToFront = "The string from frontend " + thejsonstr
        + " was received. This message was from the backend."

    // return lambdaResponse
    return {
        statusCode: 200,
        body: strFromBackToFront
    };

}