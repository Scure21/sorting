describe('Bubble Sort', function(){
  it('handles an empty array', function(){
    expect( bubbleSort([]) ).toEqual( [] );
  });

  it('handles an array with 5 numbers', function(){
    expect( bubbleSort([5, 12, 1, 104, 7]) ).toEqual( [1, 5, 7, 12, 104]);
  });

  it('handles an array of strings', function(){
    expect( bubbleSort(['Hello', 'my', 'name', 'is', 'Stefanie']).toEqual( [////
                                                                          ]));
  });





});

