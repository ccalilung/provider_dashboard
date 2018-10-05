
$(function () {


    $("#dvprs").on("click", () =>{
       event.preventDefault()

    location.replace("/api/dvprs/")
    //     $.ajax("/api/dvprs/", {

    //     type: "GET"

    //    }).then((data) => {
        
    //     location.replace("/api/dvprs/")
    //    })
    // })


});

// $(".sendEmail").on("click", (event) => {
//     let userId = $(event.target).attr("value")
//     console.log(userId)
//     $.ajax("/email/" + userId , {
//         type: "GET"
//     }).then((data) => {
//         location.replace("/email/" + userId)
//     })
// })