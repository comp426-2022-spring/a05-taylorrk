// Configuration goes here
/** Multiple coin flips
 * 
 * Write a function that accepts one parameter (number of flips) and returns an array of 
 * resulting "heads" or "tails".
 * 
 * @param {number} flips 
 * @returns {string[]} results
 * 
 * example: coinFlips(10)
 * returns:
 *  [
      'heads', 'heads',
      'heads', 'tails',
      'heads', 'tails',
      'tails', 'heads',
      'tails', 'heads'
    ]
 */

    function coinFlips(flips) {
        if (flips < 0 || flips == '' || flips == null) {
          console.log('Error: no input');
        } else {
            var list = [];
            for(var i = 0; i < flips; i++) {
            list.push(coinFlip());
            }
            return list;
        }
      }
      
      /** Count multiple flips
       * 
       * Write a function that accepts an array consisting of "heads" or "tails" 
       * (e.g. the results of your `coinFlips()` function) and counts each, returning 
       * an object containing the number of each.
       * 
       * example: conutFlips(['heads', 'heads','heads', 'tails','heads', 'tails','tails', 'heads','tails', 'heads'])
       * { tails: 5, heads: 5 }
       * 
       * @param {string[]} array 
       * @returns {{ heads: number, tails: number }}
       */
      
      function countFlips(array) {
        var heads = 0;
        var tails = 0;
        for(var i = 0; array.length > i; i++) {
          if (array[i] == "heads") {
            heads++;
          }
          else {
            tails++
          }
        }
        const finalFlips = new Object();
        finalFlips.tails = tails;
        finalFlips.heads = heads;
        return finalFlips;
        
      
      }
      
      /** Flip a coin!
       * 
       * Write a function that accepts one input parameter: a string either "heads" or "tails", flips a coin, and then records "win" or "lose". 
       * 
       * @param {string} call 
       * @returns {object} with keys that are the input param (heads or tails), a flip (heads or tails), and the result (win or lose). See below example.
       * 
       * example: flipACoin('tails')
       * returns: { call: 'tails', flip: 'heads', result: 'lose' }
       */
      
      function flipACoin(call) {
        var flip = coinFlip();
        if (call == flip) {
          return "win";
        }
        else {
          return "lose";
        }
      }

      /** Export 
 * 
 * Export all of your named functions
*/
export {coinFlip, coinFlips, countFlips, flipACoin};

    