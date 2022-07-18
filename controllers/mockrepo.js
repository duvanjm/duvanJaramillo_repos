const repositories = [
  {
    "id": 1,
    "state": 604
    },
    {
    "id": 2,
    "state": 605
    },
    {
    "id": 3,
    "state": 606
    }
];

exports.getRepos = (req, res) => {
  res.status(200).json({ repositories });
}

exports.getRepo = (req, res) => {
  const repo = repositories.find((el) => el.id === req.params.id * 1 );

  if (!repo) return res.status(404).json({ status: 'fail', message: 'Not found' });

  res.status(200).json({ repo });
}
