/*
   Implement a Blackjack hand value calculator.

   Open up the `index.html` file and your console
   to watch the assertions pass as you write your code.

   Also remember, that the parameter `hand` will be an array, so
   you'll need to parse through that first before you can start to
   write your logic.
*/


function handValue (hand) {
  var total = 0;
  var aceindexes = [];
  var newhand = [];
  var runningtotal = 0;
  for (var i = 0; i < hand.length; i++) {
    if (hand[i] === 'K' || hand[i] === 'Q' || hand[i] === 'J') {
      hand[i] = '10';
    } else if (hand[i] === 'A') {
      for (var t = 0; t < hand.length; t++) {
        if (hand[t] === 'A') {
          aceindexes.push(t);
        }
      }
    for (var x = 0; x < aceindexes.length; x++) {
      newhand = hand.splice((aceindexes[x]), 1);
    }
    for (var y = 0; y < newhand.length; y++) {
      if (newhand[y] === 'K' || newhand[y] === 'Q' || newhand[y] === 'J') {
        newhand[y] = '10';
    }
        runningtotal = parseInt(newhand[y] + runningtotal);
    }
    if (runningtotal < 11) {
      hand[i] = 11;
    } else if (2 < runningtotal < 10 && aceindexes.length === 1) {
      hand[i] = 11;
    } else if (runningtotal >= 20 && aceindexes.length === 1) {
      hand[i] = 1;
    } else if (runningtotal <= 1 && aceindexes.length > 1){
      hand[i] = 1;
    }

    }
    total = parseInt(hand[i]) + total;
  }




  return total;
}


/* -----  Hints ------

1..10   ==> Worth face value (1 = 1, 4 = 4, etc)
K, Q, J ==> Worth 10
A       ==> Worth 1 or 11

*/
