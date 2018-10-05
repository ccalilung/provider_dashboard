var Sequelize = require('sequelize');
var env       = process.env.NODE_ENV || 'development';
var config    = require(__dirname + '/../config/connection.js')[env];


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
    getScoresById: (callback) => {
        sequelize.query("select p.date, p.id, p.dvprs_score, p.pain_interference, p.physical_function, p.fatigue, p.sleep_impairment, p.depression, p.anxiety, p.anger, p.social_sat, p.alcohol, p.pcs, p.headache, p.ptsd, s.id from pastor p left join subject s on p.id = s.id order by p.id", {
            type: sequelize.QueryTypes.SELECT,
            required: false
        }).then(data=>{
            callback(data)
        })
    }, getScoresByDate: (callback) => {
        sequelize.query("select p.date, p.id, p.dvprs_score, p.pain_interference, p.physical_function, p.fatigue, p.sleep_impairment, p.depression, p.anxiety, p.anger, p.social_sat, p.alcohol, p.pcs, p.headache, p.ptsd, s.id from pastor p left join subject s on p.id = s.id order by p.date", {
            type: sequelize.QueryTypes.SELECT,
            required: false
        }).then(data=>{
            callback(data)
        })
    }
}

let postings = {
    addNewPost: (title, body, email, url, community, callback) => {
        postDb.upsert({
            post_title: title,
            post_body: body,
            post_email: email, 
            post_image_url: url,
            community_id: community
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
        
    }, 
    findUserPosts: (username, callback) => {
        sequelize.query("select p.id, u.username, p.post_title, p.post_body, c.community_name from posts p full outer join community c on c.community_id = p.community_id right join user u on u.username = p.post_email where u.username = :username",{ replacements: { username: username }, 
            type: sequelize.QueryTypes.SELECT
        }).then(posts => {
            callback(posts)
        })
    },
    findPostUser: (id, callback) => { 
        postDb.findOne({
        where: {
            id: id
        }
    }).then((user) => {
        callback(user)
    })
}
}

let users = {
    findUser: (username, callback) => { 
        userDb.findOne({
        where: {
            username: username
        }
    }).then((user) => {
        callback(user)
    })
},
    addUser: (username, hash, callback) => {
        userDb.findOne({
            where: {
                username: username
            }
        }).then(function (name) {
            if (name) {
                callback("fail")
            } else {
                userDb.create({
                    username: username,
                    password: hash
                }).then(function (data) {
                    callback(data)
                }).catch(function (err) {
                    console.log(err);
                })
            }
        })


    },

    login: (username, callback, errFunct) => {
        userDb.findOne({
            where: {
                username: username
            }
        }).then(function (data) {
            
            callback(data)
            
        })
    }
}




// writeDb.sync();


module.exports = {
    // writeDb: writeDb,
    community: community
};