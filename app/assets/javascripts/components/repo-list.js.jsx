const RepoList = React.createClass({
  getInitialState() {
    return { loading: true, organizations: [], searchTerm: '' };
  },

  componentDidMount: function() {
    this.fetchRepos();
  },

  render() {
    return (
      <div className="organization-list">
        <div className="repo-tools">
          <div className="repo-tools-search">
            <input
              className="repo-search-tools-input"
              placeholder="Search by repo"
              onChange={e => this.setState({searchTerm: e.target.value})}
            />
          </div>
          <RepoPrivateTools hasPrivateRepoAccess={this.props.hasPrivateRepoAccess}/>
          <RefreshButton
            loading={this.state.loading}
            fetchRepos={() => this.fetchRepos()}
          />
        </div>

        <ReposLoading show={this.state.loading}/>

        <ul className="organizations">
          {Object.keys(this.state.organizations).map((organizationName) => {
            return (
              <Organization
                key={organizationName}
                organizationName={organizationName}
                repos={this.state.organizations[organizationName]}
                searchTerm={this.state.searchTerm}
                userHasCard={this.props.userHasCard}
              />
            );
          })}
        </ul>
      </div>
    );
  },

  fetchRepos() {
    this.setState({loading: true});

    $.get('/repos.json').then((repos) => {
      const organizations = _.groupBy(repos, repo => {
        return repo.owner.name;
      });

      // This should probably be handled by the back-end
      // if (repos.length === 0) {
      //   this.sync();
      // }

      this.setState({
        loading: false, 
        organizations
      });
    });
  },

  sync() {
    const token = $('meta[name="csrf-token"]').attr('content');

    $.ajax({
      data: {'authenticity_token': token},
      url: `/repo_syncs`,
      method: 'POST',
    });
  }
});
