const tasks = arr => arr.join(' && ');

module.exports = {
  hooks: {
    'post-commit': tasks([]),
    'pre-push': tasks(['npm run build', 'git add ./lib', 'git commit --amend -C HEAD --no-verify'])
  }
};
