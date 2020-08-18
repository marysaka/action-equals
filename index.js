const core = require('@actions/core');

try {
  const a = core.getInput('a');
  const b = core.getInput('b');
  if (a === b){
    core.setOutput("result", "true");
  } else {
    core.setOutput("result", "false");
  }
} catch (error) {
  core.setFailed(error.message);
}
