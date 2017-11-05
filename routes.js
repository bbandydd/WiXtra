const routes = module.exports = require('next-routes')();

routes
.add('index', '/')
.add('todo', '/todo')
.add('about', '/about/:name')
