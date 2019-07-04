const tasks = arr => arr.join(' && ');

module.exports = {
  hooks: {
    'post-commit': tasks([]),
    'pre-push': tasks([])
  }
};
