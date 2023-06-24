
const pacientesRouter = require('./pacientes.router');
const medicosRouter   = require('./medicos.router');

function routerApi(app){
  app.use('/pacientes', pacientesRouter);
  app.use('/medicos',    medicosRouter);
}

module.exports = routerApi;
