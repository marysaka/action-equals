const core = require('@actions/core');

try {
  const a = core.getInput('a');
  const b = core.getInput('b');
  core.setOutput("result", a === b);
} catch (error) {
  core.setFailed(error.message);
}
