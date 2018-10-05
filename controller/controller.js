let express = require("express");
let community = require("../model/write.js");
let router = express.Router();
require("dotenv").config();



router.get("/scores/byID", (req, res) => {
    community.community.getScoresById(data => {
        // console.log(data)

        res.render("data", {
        data: data
      });
    });
  });


router.get("/scores/bydate", (req,res) => {
    community.community.getScoresByDate(data => {
        res.render("data", {
            data:data
        })
    })
});


router.get("/", (req, res) => {
   
        res.render("index")
  });


// router.get("/data", (req,res) => {
    // res.render("data", {
    //     data:data
    // })
// }) 







// Export routes for server.js to use.
module.exports = router;