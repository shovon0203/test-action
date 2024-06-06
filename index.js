const core = require('@actions/core');
const github = require('@actions/github');

async function run() {
  try {
    const token = process.env.GITHUB_TOKEN;
    const environmentName = core.getInput('environment_name');
    const owner = github.context.repo.owner;
    const repo = github.context.repo.repo;

    const octokit = github.getOctokit(token);

    const response = await octokit.rest.actions.listEnvironmentSecrets({
      owner,
      repo,
      environment_name: environmentName,
    });

    console.log('Secrets:', response.data.secrets);
  } catch (error) {
    core.setFailed(`Action failed with error: ${error.message}`);
  }
}

run();

