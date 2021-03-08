#!/usr/bin/env node

const cdk = require('@aws-cdk/core');
const { CdkLearnStack } = require('../lib/cdk-learn-stack');

const app = new cdk.App();
new CdkLearnStack(app, 'CdkLearnStack');
