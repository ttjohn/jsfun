function outer(logTarget) {
  logger = logTarget;

  var executer = function(funcName, a, b) {
    logger.log("Executing :" + funcName +'('+a+','+b+')');
    result = funcName(a, b)
    logger.log("Result :", result);
    return result;
  }
  return executer
}

executer = outer(console);

function sum(a, b) {
  return a + b;
}

function sub(a, b) {
  return a - b;
}

executer(sum, 5, 5);
executer(sub, 5, 5);
