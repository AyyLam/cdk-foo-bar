import * as cdk from '@aws-cdk/core';
import { CdkWorkshopStack } from '../src/index'

const app = new cdk.App();
new CdkWorkshopStack(app, 'FooBar');
