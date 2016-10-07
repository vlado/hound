const Repo = React.createClass({
  renderToggle() {
    if (this.props.repo.admin) {
      return (
        <button className="repo-toggle ">
        </button>
      )
    } else {
      return (
        <div className="repo-rtestricted">
          Only repo admins can activate
        </div>
      );
    }
  },

  render() {
    const { repo } = this.props;

    return (
      <li className={classNames("repo", {"repo--active": repo.active})}>
        <div className="repo-name">
          {repo.full_github_name}
        </div>
        <div className="repo-activation-toggle">
          {this.renderToggle()}
        </div>
      </li>
    );
  }
});
