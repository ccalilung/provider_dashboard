let express = require("express");
let community = require("../model/write.js");
let router = express.Router();
require("dotenv").config();



router.get("/api/getpastor",(req,res)=> {

    community.getAll((data) => {
        res.json(data)
    })

})

router.get("/", (req, res) => {
    community.community.getAll(data => {
      res.render("data", {
        data: data
      });
    });
  });







// Export routes for server.js to use.
module.exports = router;