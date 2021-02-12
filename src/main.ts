import * as core from '@actions/core'
import { exec } from "@actions/exec";

async function run(): Promise<void> {
  try {
    console.log(process.env);
    console.log(process.env);

    core.info(`token: ${process.env.NPM_TOKEN}`);

    core.info('\nInstalling dependencies...');
    await installDependencies();

    core.info('\nBuilding...');
    await build();

    core.info('\nPublishing to npm...');
    await publish();

    core.info('\nAll good !');
  } catch (error) {
    core.setFailed(error.message);
  }
}

async function build(): Promise<number> {
  return exec('yarn run build');
}

async function publish(): Promise<number> {
  return exec('yarn publish');
}

async function installDependencies(): Promise<number> {
  return exec('yarn install --frozen-lockfile');
}

run();
