const core = require('@actions/core');
const github = require('@actions/github');

async function run() {
  try {
    const token = process.env.GITHUB_TOKEN;
    if (!token) {
      throw new Error('GITHUB_TOKEN is not set');
    }

    const environmentName = core.getInput('environment_name');
    const owner = github.context.repo.owner;
    const repo = github.context.repo.repo;

    const octokit = github.getOctokit(token);

    console.log(`Requesting secrets for environment: ${environmentName} in repo: ${owner}/${repo}`);

    const response = await octokit.rest.actions.listEnvironmentSecrets({
      owner,
      repo,
      environment_name: environmentName,
    });

    console.log('Secrets:', response.data.secrets);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    console.error(`Stack: ${error.stack}`);
    core.setFailed(`Action failed with error: ${error.message}`);
  }
}

run();


