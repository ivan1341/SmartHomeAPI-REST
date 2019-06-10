
const router = require('express-promise-router')();

router.route('/')
  .get(function(req,res,next){
      console.log("event.get");
      respuesta = {
        error: false,
        codigo: 200,
        mensaje: 'GET'
       };
       res.send(respuesta);
  })
  .post(function(req,res,next){
    console.log("event.get");
    respuesta = {
      error: false,
      codigo: 200,
      mensaje: 'POST'
     };
     res.send(respuesta);
  });


module.exports = router;
