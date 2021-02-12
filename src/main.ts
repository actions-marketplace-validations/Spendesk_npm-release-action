import * as core from '@actions/core'
import { exec } from "@actions/exec";

async function run(): Promise<void> {
  try {
    const token: string = core.getInput('token');

    core.info('Installing dependencies...');
    await installDependencies();

    core.info('Building...');
    await build();

    core.info('Publishing to npm...');
    await publish();

    core.info('All good !');
  } catch (error) {
    core.setFailed(error.message);
  }
}

async function build(): Promise<number> {
  return exec('yarn run build');
}

async function publish(): Promise<number> {
  return exec('yarn run publish');
}

async function installDependencies(): Promise<number> {
  return exec('yarn install --frozen-lockfile');
}

run();
