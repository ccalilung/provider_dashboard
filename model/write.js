var Sequelize = require('sequelize');
var env       = process.env.NODE_ENV || 'development';
var config    = require(__dirname + '/../config/connection.js')[env];
require('mysql2');

if (config.use_env_variable) {
  var sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  var sequelize = new Sequelize(config.database, config.username, config.password, config);
}

// let writeDb = sequelize.define("pastor", {
//     id: {
//         type: Sequelize.INTEGER,
//         autoIncrement: true,
//         primaryKey: true
//     },
//     dvprs: Sequelize.INTEGER,
//     pain_interfernce: Sequelize.INTEGER
// }, {
//     freezeTableName: true,
//     timestamps: false
// })
 

let community = {
    getScores: (arrangement,callback) => {
        console.log(arrangement)
        if (arrangement === 'byid'){
            sequelize.query("select p.date, p.id, p.dvprs_score, p.pain_interference, p.physical_function, p.fatigue, p.sleep_impairment, p.depression, p.anxiety, p.anger, p.social_sat, p.alcohol, p.pcs, p.headache, p.ptsd, s.id from pastor p left join subject s on p.id = s.id order by p.id", {
                type: sequelize.QueryTypes.SELECT,
                required: false
            }).then(data=>{
                callback(data) 
            }) 
        }
        if (arrangement === 'bydate'){
            sequelize.query("select p.date, p.id, p.dvprs_score, p.pain_interference, p.physical_function, p.fatigue, p.sleep_impairment, p.depression, p.anxiety, p.anger, p.social_sat, p.alcohol, p.pcs, p.headache, p.ptsd, s.id from pastor p left join subject s on p.id = s.id order by p.date", {
                type: sequelize.QueryTypes.SELECT,
                required: false
            }).then(data=>{
                callback(data)  
            })
        
        
        }
        
        
    },
    
    getIndividualScores: (id,callback) => {
        sequelize.query("select p.date, p.id, p.dvprs_score, p.pain_interference, p.physical_function, p.fatigue, p.sleep_impairment, p.depression, p.anxiety, p.anger, p.social_sat, p.alcohol, p.pcs, p.headache, p.ptsd, s.id from pastor p left join subject s on p.id = s.id where p.id = ? order by p.date", {
            replacements: [id],
            type: sequelize.QueryTypes.SELECT,
            required: false
    }).then(data=>{

        callback(data)
    })
}
}


// writeDb.sync();


module.exports = {
        community: community
};