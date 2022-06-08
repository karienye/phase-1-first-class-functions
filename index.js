function receivesAFunction (callback) {
    console.log(callback());
  }
  function returnsANamedFunction (name) {
   
    console.log(name("thing"));
  }
  function returnsAnAnonymousFunction (name) {
    console.log(name());
  }
  /*receivesAFunction ({ fName: 'Annah', lName: 'Kananu' });

  function receivesAFunction (Spy) {
    return Spy;
  }
  
  receivesAFunction ({ fName: 'Annah', lName: 'Kananu' });
  function receivesAFunction (Spy) {
    return Spy;
  }
  
  receivesAFunction ({ fName: 'Annah', lName: 'Kananu' });


/*function receivesAFunction (type, returnsANamedFunction) {
    return rreturnsAnAnonymousFunction(type);
  }
  
  bakingCake('black forest cake', function (type) { return 'Yeey we have, ' + type; });
  */