// This is where all the configuration for the project should happen. The ideal
// arrangement would keep you out of the gulpfile entirely.

var config = {};

config.deploy = {
  bucket: 'moose.texastribune.org',
  key: 'antlers',
  profile: 'newsapps'
};

config.dataFolder = './data';
config.templateFolder = './app/templates';

config.data = {
  docs: [
    {
      fileid: '1ehh3ISrwq5lHNQS-eEs_i30Wi7UAF9txWgYTo56NFBI',
      name: 'test'
    }
  ],
  sheets: [
    {
      fileid: '1i-RgfdltaWyxRVs3x_F9Xblj0Y9jUyHvoAPbgokR_bU',
      name: 'COLORS',
      copytext: {
        basetype: 'objectlist'
      }
    }
  ]
};

module.exports = config;
