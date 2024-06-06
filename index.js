const core = require('@actions/core');
const github = require('@actions/github');
const { Octokit } = require('@octokit/core');

async function run() {
  try {
    const token = process.env.GITHUB_TOKEN;
    if (!token) {
      throw new Error('GITHUB_TOKEN is not set');
    }

    const environmentName = core.getInput('environment_name');
    if (!environmentName) {
      throw new Error('Environment name is not set or is empty');
    }

    const owner = core.getInput('owner') || github.context.repo.owner;
    const repo = core.getInput('repo') || github.context.repo.repo;

    const octokit = new Octokit({
      auth: token
    });

    console.log(`Requesting secrets for environment: ${environmentName} in repo: ${owner}/${repo}`);

    const response = await octokit.request('GET /repos/{owner}/{repo}/environments/{environment_name}/secrets', {
      owner,
      repo,
      environment_name: environmentName,
      headers: {
        'X-GitHub-Api-Version': '2022-11-28'
      }
    });

    console.log('Secrets:', response.data.secrets);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    console.error(`Stack: ${error.stack}`);
    core.setFailed(`Action failed with error: ${error.message}`);
  }
}

run();
