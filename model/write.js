var Sequelize = require('sequelize');
var env       = process.env.NODE_ENV || 'development';
var config    = require(__dirname + '/../config/connection.js')[env];
require('mysql2');

if (config.use_env_variable) {
  var sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  var sequelize = new Sequelize(config.database, config.username, config.password, config);
}

let writeDb = sequelize.define("pastor", {
    entry_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    date: Sequelize.DATE,
    id: Sequelize.INTEGER,
    dvprs_score: Sequelize.INTEGER,
    pain_interference: Sequelize.FLOAT,
    physical_function: Sequelize.FLOAT,
    fatigue: Sequelize.FLOAT,
    sleep_impairment: Sequelize.FLOAT,
    depression: Sequelize.FLOAT,
    anxiety: Sequelize.FLOAT,
    anger: Sequelize.FLOAT,
    social_sat: Sequelize.FLOAT,
    alcohol: Sequelize.FLOAT,
    pcs: Sequelize.FLOAT,
    headache: Sequelize.FLOAT,
    ptsd: Sequelize.FLOAT,
}, {
    freezeTableName: true,
    timestamps: false
})

let otherDb = sequelize.define("subject", {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    }},{ freezeTableName: true,
        timestamps: false
    })

let postings = {
    addScoresPost: (date, id, dvprs, painInt, physFun, fatigue, sleep, depress, anx, anger, soc, alcohol, pcs, headache, ptsd, callback) => {
        otherDb.upsert({
            id: id
        })
        writeDb.upsert({
            date: date,
        id: id,
    dvprs_score:dvprs,
    pain_interference: painInt,
    physical_function: physFun,
    fatigue: fatigue,
    sleep_impairment: sleep,
    depression: depress,
    anxiety: anx,
    anger: anger,
    social_sat: soc,
    alcohol: alcohol,
    pcs: pcs,
    headache: headache,
    ptsd: ptsd,
        }).then(data =>
            callback(data)
        )
    },
    deletePost: (id, callback) => {
        postDb.destroy({
            where: {
                id: id
            }
        }).then(data => {
            callback(data);
        })
        
    }} 

    // postings.addScoresPost("2018-09-25","6","7","7","7","7","7","7","7","7","7","7","7","7","7",() => {})

let community = {
    getScores: (arrangement,callback) => {
        console.log(arrangement)
        if (arrangement === 'byid'){
            sequelize.query("select p.date, p.id, p.dvprs_score, p.pain_interference, p.physical_function, p.fatigue, p.sleep_impairment, p.depression, p.anxiety, p.anger, p.social_sat, p.alcohol, p.pcs, p.headache, p.ptsd, s.id from pastor p left join subject s on p.id = s.id order by p.id, p.date desc", {
                type: sequelize.QueryTypes.SELECT,
                required: false
            }).then(data=>{
                callback(data) 
            }) 
        }
        if (arrangement === 'bydate'){
            sequelize.query("select p.date, p.id, p.dvprs_score, p.pain_interference, p.physical_function, p.fatigue, p.sleep_impairment, p.depression, p.anxiety, p.anger, p.social_sat, p.alcohol, p.pcs, p.headache, p.ptsd, s.id from pastor p left join subject s on p.id = s.id order by p.date desc", {
                type: sequelize.QueryTypes.SELECT,
                required: false
            }).then(data=>{
                callback(data)  
            })
        
        
        }
        
        
    },
    
    getIndividualScores: (id,callback) => {
        sequelize.query("select p.date, p.id, p.dvprs_score, p.pain_interference, p.physical_function, p.fatigue, p.sleep_impairment, p.depression, p.anxiety, p.anger, p.social_sat, p.alcohol, p.pcs, p.headache, p.ptsd, s.id from pastor p left join subject s on p.id = s.id where p.id = ? order by p.date desc", {
            replacements: [id],
            type: sequelize.QueryTypes.SELECT,
            required: false
    }).then(data=>{

        callback(data)
    })
}
}


writeDb.sync();
otherDb.sync();

module.exports = {
        community: community,
        postings: postings
};