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
        }
    });

    // // read data from back end
    // const tries = 0 
    // let urlfrom = '/.netlify/functions/backend';
    // getbackend(tries, urlfrom);

    // async function getbackend (url){
    //     $.ajax({
    //         url: url,
    //         context: document.body,
    //         type: 'get',
    //         statusCode: {
    //             404: function () {
    //                 console.log("page not found");
    //             } //
    //         }
    //     })
    //     .fail( async function (res){
    //         tries++; 
    //         console.log('retry===' + tries)
    //         if (tries < 10) {
    //             setTimeout(async function (){
    //                 await getbackend(tries, url)
    //             }, 1000)
    //         }            
    //     })
    //     .done(d=>{
    //         if (d.includes('frontendapps/frontend.js')){
    //             tries++
    //             console.log('wrong page, try again ===' + tries)
    //             if (tries < 10) {
    //                 setTimeout(async function (){
    //                     await getbackend(tries, url)
    //                 }, 1000)
    //             } 
    //         }
    //         console.log('received from backend \n', d)
    //         d3.select('body').append('h2').text(d)
    //     })
    // }


})()