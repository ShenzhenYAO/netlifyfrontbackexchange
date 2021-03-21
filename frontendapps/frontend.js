// https://blog.postman.com/serverless-functions-the-fast-way/
(async()=>{

    // send data to back end
    let datajson= {str:"This is a string from the frontend."};
    let urlto = '/.netlify/functions/backend';
    // let urlto = '/.netlify/functions/backend';
    $.ajax({
        url: urlto,
        type: 'POST',
        contentType: 'application/json',
        data: JSON.stringify(datajson),
        success: function (res) {
            console.log('data sent from front end', res)
            d3.select('body').append('p').text(res)
        }
    });

})()