/**

  * @desc Puts a synchronous delay of specified milliseconds

  * @param number $time - milliseconds of delay expected

  * @return void

*/

module.exports = function (time){

    let delayStop = new Date();
    
    delayStop.setMilliseconds(new Date().getMilliseconds()+time)

    while(new Date()<delayStop){}

}
