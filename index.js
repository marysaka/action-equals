const core = require('@actions/core');

function getResult(a, b){
  let return_result = a === b ? "true" : "false";
  core.setOutput("result", return_result);
  return return_result;
}

try {
  const a = core.getInput('a');
  const b = core.getInput('b');
  const error_result = core.getInput('error_result');
  const error_message = core.getInput('error_message');

  let result = getResult(a, b);
  if (result === error_result){
    core.setFailed(error_message);
  }

} catch (error) {
  core.setFailed(error.message);
}

