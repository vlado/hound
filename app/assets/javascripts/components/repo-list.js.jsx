
const RepoList = React.createClass({
  getInitialState() {
    return { loading: true, organizations: [] };
  },

  componentDidMount: function() {
    $.get('/repos.json').then((repos) => {
      const organizations = _.groupBy(repos, repo => {
        return repo.owner.name;
      });

      this.setState({
        loading: false, 
        organizations
      });
    });
  },

  render() {
    return (
      <div className="organization-list">
        <div className="repo-tools">
          <div className="repo-tools-search">
            <input
              className="repo-search-tools-input"
              placeholder="Search by repo"
            />
          </div>
          <RepoPrivateTools hasPrivateRepoAccess={this.props.hasPrivateRepoAccess}/>
          <div className="repo-tools-refresh">
            <button
              className="repo-tools-refresh-button"
              onClick={() => alert('TODO REFRESH')}
            >
              Refresh Repo List
            </button>
          </div>
        </div>

        <ul className="organizations">
          {Object.keys(this.state.organizations).map((organizationName) => {
            return (
              <Organization
                key={organizationName}
                organizationName={organizationName}
                repos={this.state.organizations[organizationName]}
              />
            );
          })}
        </ul>
      </div>
    );
  }
});
