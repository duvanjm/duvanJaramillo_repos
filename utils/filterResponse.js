const filterResponse = (response) => {

  const repo = response[0]

  const repositories = {
    id: repo.repository[0]._id,
    name: repo.repository[0].name,
    tribe: repo.repository[0].tribe[0].name,
    organization: repo.repository[0].tribe[0].organization[0].name,
    coverage: repo.coverage,
    codeSmells: repo.code_smell,
    bugs: repo.bugs,
    vulnerabilities: repo.vulnerabilities,
    hotspots: repo.hotspots,
    verificationState: repo.repository[0].state,
    state: repo.repository[0].status,
  }
  return repositories;
}

module.exports = filterResponse;
