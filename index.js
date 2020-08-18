const core = require('@actions/core');

try {
  const a = core.getInput('a');
  const b = core.getInput('b');
  const error_result = core.getInput('b');
  const error_message = core.getInput('b');

  let result = getResult(a, b);
  if (result === error_result){
    core.setFailed(error_message);
  }

} catch (error) {
  core.setFailed(error.message);
}

function getResult(a, b){
  let return_result = a === b ? "true" : "false";
  core.setOutput("result", return_result);
  return return_result;
}
