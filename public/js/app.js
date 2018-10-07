$(function () {



    // $(".sendEmail").on("click", (event) => {
    //     let userId = $(event.target).attr("value")
    //     console.log(userId)
    //     $.ajax("/email/" + userId , {
    //         type: "GET"
    //     }).then((data) => {
    //         location.replace("/email/" + userId)
    //     })

    $(".dbQuery").on("click", function (event) {

        let obj = {
            assess: $(this).attr("assess"),
            arrange: $(this).attr("arrange")
        };
        console.log(obj)
        // location.replace("/");
        location.replace("/scores/" + obj.assess + "/" + obj.arrange)


    })

    $(".dbIndividual").on("click", () => {
        event.preventDefault();

        let patientID = $("#patientID").val().trim()
        
       location.replace("/scoresid/" + patientID)
    })

    $(".pastorInstrument").on("click", function (event) {
        let id = $(this).attr("id")
        let val = $(this).attr("value")
       

        $.ajax("/api/" + id +"/"+ val, {
            type: "GET"
        }).then((data) => {

           if(val === 'dvprs') {
            let trace1 = {
                x: data.date,
                y: data.dvprs,
                type: 'scatter'
            };
            var theData = [trace1];
            var layout = {
                xaxis: {
                    type: 'date'
                },
                yaxis: {
                },
            };
           }

           if(val === 'pain_int') {
            let trace1 = {
                x: data.date,
                y: data.pain_int,
                type: 'scatter'
            };
            var theData = [trace1];
            var layout = {
                xaxis: {
                    type: 'date'
                },
                yaxis: {
                },
            };
           }
           if(val === 'phys_fun') {
            let trace1 = {
                x: data.date,
                y: data.phys_fun,
                type: 'scatter'
            };
            var theData = [trace1];
            var layout = {
                xaxis: {
                    type: 'date'
                },
                yaxis: {
                },
            };
           }
           if(val === 'fatigue') {
            let trace1 = {
                x: data.date,
                y: data.fatigue,
                type: 'scatter'
            };
            var theData = [trace1];
            var layout = {
                xaxis: {
                    type: 'date'
                },
                yaxis: {
                },
            };
           }
           if(val === 'sleep') {
            let trace1 = {
                x: data.date,
                y: data.sleep,
                type: 'scatter'
            };
            var theData = [trace1];
            var layout = {
                xaxis: {
                    type: 'date'
                },
                yaxis: {
                },
            };
           }
           if(val === 'depress') {
            let trace1 = {
                x: data.date,
                y: data.depress,
                type: 'scatter'
            };
            var theData = [trace1];
            var layout = {
                xaxis: {
                    type: 'date'
                },
                yaxis: {
                },
            };
           } 
           if(val === 'anx') {
            let trace1 = {
                x: data.date,
                y: data.anx,
                type: 'scatter'
            };
            var theData = [trace1];
            var layout = {
                xaxis: {
                    type: 'date'
                },
                yaxis: {
                },
            };
           }
           if(val === 'anger') {
            let trace1 = {
                x: data.date,
                y: data.anger,
                type: 'scatter'
            };
            var theData = [trace1];
            var layout = {
                xaxis: {
                    type: 'date'
                },
                yaxis: {
                },
            };
           }
           if(val === 'soc') {
            let trace1 = {
                x: data.date,
                y: data.soc,
                type: 'scatter'
            };
            var theData = [trace1];
            var layout = {
                xaxis: {
                    type: 'date'
                },
                yaxis: {
                },
            };
           }
           if(val === 'alcohol') {
            let trace1 = {
                x: data.date,
                y: data.alcohol,
                type: 'scatter'
            };
            var theData = [trace1];
            var layout = {
                xaxis: {
                    type: 'date'
                },
                yaxis: {
                },
            };
           }
           if(val === 'pcs') {
            let trace1 = {
                x: data.date,
                y: data.pcs,
                type: 'scatter'
            };
            var theData = [trace1];
            var layout = {
                xaxis: {
                    type: 'date'
                },
                yaxis: {
                },
            };
           }
           if(val === 'headache') {
            let trace1 = {
                x: data.date,
                y: data.headache,
                type: 'scatter'
            };
            var theData = [trace1];
            var layout = {
                xaxis: {
                    type: 'date'
                },
                yaxis: {
                },
            };
           }
           if(val === 'ptsd') {
            let trace1 = {
                x: data.date,
                y: data.ptsd,
                type: 'scatter'
            };
            var theData = [trace1];
            var layout = {
                xaxis: {
                    type: 'date'
                },
                yaxis: {
                },
            };
           }

           

            Plotly.newPlot('graphHere', theData, layout);
        })

    })

})