const core = require('@actions/core');

try {
  const pass = process.env.PASS; // assuming the secret is available in the environment
  console.log(`The secret PASS is: ${pass}`);
} catch (error) {
  core.setFailed(`Action failed with error: ${error.message}`);
}
