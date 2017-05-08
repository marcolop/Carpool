$(function(){
  $('#frm-prueba').form({
    nombre : {
      identifier: 'nombre',
      rules : [
         type : 'empty',
         prompt : 'Ingrese un nombre'
      ]
    },
    apellido : {
      indetifier: 'apellido',
      rule : [
        {

        type : 'empty',
        prompt: 'por favor ingrese un apellido'
      }
      {
         
      }
      ]
    }
  }, {
    onSuccess: function(e){
      e.preventDefault();

    }
  });
});
