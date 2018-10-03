var Sequelize = require('sequelize');
var env       = process.env.NODE_ENV || 'development';
var config    = require(__dirname + '/../config/connection.js')[env];


if (config.use_env_variable) {
  var sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  var sequelize = new Sequelize(config.database, config.username, config.password, config);
}

let writeDb = sequelize.define("pastor", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    dvprs: Sequelize.INTEGER,
    pain_interfernce: Sequelize.INTEGER
}, {
    freezeTableName: true,
    timestamps: false
})
 

let community = {
    getAll: callback => {
        sequelize.query("select dvprs, pain_interference, date_completed from pastor", {
            type: sequelize.QueryTypes.SELECT
        }).then(data=>{
            callback(data)
        })
    }, 
    getAllArticlesInCommunity: (communityId, callback) => {
       postDb.findAll({
           where: {community_id: communityId}
       }).then(articles => 
        callback(articles)
    )}
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
        sequelize.query("select p.id, u.username, p.post_title, p.post_body, c.community_name from posts p right join community c on c.community_id = p.community_id right join user u on u.username = p.post_email where u.username = :username",{ replacements: { username: username }, 
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




writeDb.sync();


module.exports = {
    writeDb: writeDb,
    community: community
};