import controller from '../controllers/index'

module.exports = function (app) {
    app.post('/api/verify', controller.emailVerifier)
}
