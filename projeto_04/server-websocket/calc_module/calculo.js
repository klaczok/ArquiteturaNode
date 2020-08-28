module.exports = function(expressao){
    var result =  eval(expressao);
    console.log("Valor da expressao: "+result);
    return result;
}