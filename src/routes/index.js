module.exports = function(app) {
    app.use('/SCG', require('./SCG.route'))
}