const Repo = React.createClass({
  shouldHide() {
    const { repo, searchTerm } = this.props;

    const repoName = repo.full_github_name.toLowerCase();
    return repoName.indexOf(searchTerm.toLowerCase()) === -1;
  },

  render() {
    const { repo, searchTerm } = this.props;

    if (this.shouldHide()) {
      return null;
    }

    return (
      <li className={classNames("repo", {"repo--active": repo.active})}>
        <div className="repo-name">
          {repo.full_github_name}
        </div>
        <div className="repo-activation-toggle">
          <RepoActivationButton repo={repo}/>
        </div>
      </li>
    );
  }
});
