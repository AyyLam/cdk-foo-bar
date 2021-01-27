const { AwsCdkConstructLibrary } = require('projen');

const project = new AwsCdkConstructLibrary({
  author: 'AyyLam',
  authorAddress: 'anthony.lam@datadoghq.com',
  cdkVersion: '1.73.0',
  jsiiFqn: 'projen.AwsCdkConstructLibrary',
  name: 'cdk-foo-bar',
  repositoryUrl: 'git@github.com:AyyLam/cdk-foo-bar.git',
  devDeps: [
    '@aws-cdk/assert',
    '@types/jest',
    '@types/node',
    '@typescript-eslint/eslint-plugin',
    '@typescript-eslint/parser',
    'aws-cdk',
    'eslint',
    'jest',
    'prettier',
    'ts-jest',
    'ts-node',
    'tslint',
    'typescript',
  ],
  cdkDependencies: [
    '@aws-cdk/aws-lambda',
    '@aws-cdk/core',
    '@aws-cdk/aws-sns',
    '@aws-cdk/aws-sqs',
    '@aws-cdk/aws-sns-subscriptions',
  ],
  python: {
    distName: 'foo-bar-construct',
    module: 'foo-bar-construct',
  }
});

project.synth();
