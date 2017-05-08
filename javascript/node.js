db.createDatabase('mydb', function(err, info){
  if (err) console.error(err.stack);
  else{
    //database create
  }
});

//using promises with ES2015
db.createDatabase('mydb')
.then(info => {
  //database created
}, err => console.error(err.stack));

//using proposed ES.next "async/await" syntax
try {
 left info = await db.createdDatabase('mydb');
 //database created
} catch (err) {
  console.error(err.stack);
}
