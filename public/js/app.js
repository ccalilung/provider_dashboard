$(function () {

    $(".dbEntry").on("click",function() {
        event.preventDefault();
        let obj = {
            date:$("#dateEntry").val().trim(),
            id: $("#entryPatientID").val().trim(),
            dvprs: $("#dvprsScore").val().trim(),
            pain_int: $("#painIntScore").val().trim(),
            physFuncScore: $("#physFuncScore").val().trim(),
            fatigueScore: $("#fatigueScore").val().trim(),
            sleep: $("#sleepScore").val().trim(),
            depression: $("#depressScore").val().trim(),
            anxiety: $("#anxScore").val().trim(),
            anger: $("#angerScore").val().trim(),
            soc: $("#socScore").val().trim(),
            alcohol: $("#alcoholScore").val().trim(),
            pcs: $("#pcsScore").val().trim(),
            headache: $("#headacheScore").val().trim(),
            ptsd: $("#ptsdScore").val().trim()
                    }

       
        $.ajax("/post/" + obj.id, {
            type: "POST",
            data: obj
        }).then(data => {
            location.replace("/scoresid/" + obj.id + "/dvprs" )
        })

    })



    $(".dbQuery").on("click", function (event) {

        let obj = {
            assess: $(this).attr("assess"),
            arrange: $(this).attr("arrange")
        };
        console.log(obj)
       
        location.replace("/scores/" + obj.assess + "/" + obj.arrange)


    })

    $(".dbIndividual").on("click", () => {
        event.preventDefault();

        let patientID = $("#patientID").val().trim()
        let val = $("#selection").val()
      
       location.replace("/scoresid/" + patientID + "/" + val)
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
                title: "DVPRS"
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
                title: "PROMIS Pain Interference"
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
                title: "PROMIS Physical Function"
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
                title: "PROMIS Fatigue"
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
                title: "PROMIS Sleep"
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
                title: "PROMIS Depression"
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
                title: "PROMIS Anxiety"
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
                title: "PROMIS Anger"
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
                title: "PROMIS Social Satisfaction Roles"
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
                title: "PROMIS Alcohol"
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
                title: "Pain Catastrophizing Scale"
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
                title: "Headache"
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
                title: "PTSD Screener"
            };
           }

           

            Plotly.newPlot('graphHere', theData, layout);
        })

    })

})