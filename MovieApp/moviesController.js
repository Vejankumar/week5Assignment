let Movie = require('./movieModel');

exports.create = function(req,res){
    console.log('Came inside the save method of movie Controller');
    console.log(`${req.body.name}`);
    let movie = new Movie();
    movie.name = req.body.name;
    movie._id = req.body._id;
    movie.actress = req.body.actress;
    movie.actor = req.body.actor;
    movie.director = req.body.director;
    movie.save(function(err){
        res.json({
            status: 'SUCCESS',
            message:'Saved Movie Successfully'
        });
    });
    
}

exports.listAll = function(req,res){
    Movie.find(req.params.movie_id, function (err, movies) {
        if (err)
            res.send(err);
        res.json({
             movies
        });
    });
};

exports.findByID = function(req, res){
    Movie.findById(req.params._id, function (err, movies) {
        if (err)
            res.send(err);
        res.json({
            movies
        });
    });
}

exports.delete = function(req, res){
    Movie.deleteOne({_id : req.params._id}, function (err, movies) {
        if (err)
            res.send(err);
        res.json({
            message: 'Movie details loading..',
            name: movies.name
        });
    });
}