let express = require("express");
let community = require("../model/write.js");
let router = express.Router();
require("dotenv").config();


router.get("/post", (req,res) => {
    res.render("post")
})

router.post("/post/:id", (req,res) => {
    
    community.postings.addScoresPost(req.body.date,req.params.id,req.body.dvprs,req.body.pain_int,req.body.physFuncScore,req.body.fatigueScore,req.body.sleep,req.body.depression,req.body.anxiety,req.body.anger,req.body.soc,req.body.alcohol,req.body.pcs,req.body.headache,req.body.ptsd, (data) => {
        res.redirect("/")
    })
})


router.get("/scores/:type/:arr", (req, res) => {

    if (req.params.type === 'dvprs') {
        community.community.getScores(req.params.arr, data => {
            res.render("dvprs", {
                data: data
            });
        });
    }
    if (req.params.type === 'pcs') {
        community.community.getScores(req.params.arr, data => {
            res.render("pcs", {
                data: data
            });
        });
    }

});


router.get("/individual", (req, res) => {
    res.render("individual")
})

router.get("/scoresid/:id/:val", (req, res) => {
    community.community.getIndividualScores(req.params.id, data => {
        
        if(req.params.val === "dvprs"){
        res.render("data1", {
            data: data,
            
            subject: data[0].id

        });
    }

        if(req.params.val === "pcs"){
            res.render("data2", {
                data: data,
                
                subject: data[0].id
    
            });
    }
    });
});

router.get("/api/:id/:val", (req, res) => {

    community.community.getIndividualScores(req.params.id, data => {

        let dvprs = [];
        let pain_int = [];
        let phys_fun = [];
        let fatigue = [];
        let sleep = [];
        let depress = [];
        let anx = [];
        let anger = [];
        let soc = [];
        let alc = [];
        let pcs = [];
        let headache = []
        let ptsd = [];
        let date = [];
        data.map(x => {

            dvprs.push(x.dvprs_score);
            pain_int.push(x.pain_interference)
            phys_fun.push(x.physical_function)
            fatigue.push(x.fatigue)
            sleep.push(x.sleep_impairment)
            depress.push(x.depression)
            anx.push(x.anxiety)
            anger.push(x.anger)
            soc.push(x.social_sat)
            alc.push(x.alcohol)
            pcs.push(x.pcs)
            headache.push(x.headache)
            ptsd.push(x.ptsd)
            date.push(x.date)

        })
        let data1 = {
            dvprs: dvprs,
            pain_int:pain_int,
            phys_fun:phys_fun,
            fatigue:fatigue,
            sleep:sleep,
            depress:depress,
            anx:anx,
            anger:anger,
            soc:soc,
            alc:alc,
            pcs:pcs,
            headache:headache,
            ptsd:ptsd,
            date: date
        }
        res.json(data1)
    });
});

router.get("/scores/bydate", (req, res) => {
    community.community.getScoresByDate(data => {
        res.render("data", {
            data: data
        })
    })
});


router.get("/", (req, res) => {

    res.render("index")
});








// Export routes for server.js to use.
module.exports = router;