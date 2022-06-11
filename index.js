function receivesAFunction (callback) {
   console.log(callback());
  }
  function returnsANamedFunction () {
    return returnsANamedFunction
  }
  function returnsAnAnonymousFunction () {
    return function(){};
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