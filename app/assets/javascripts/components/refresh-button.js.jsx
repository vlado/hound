const RefreshButton = React.createClass({
  render() {
    const { fetchRepos, loading } = this.props;
    const buttonText = loading ? 'Loading...' : 'Refresh Repo List';

    return (
      <div className="repo-tools-refresh">
        <button
          className="repo-tools-refresh-button"
          onClick={fetchRepos}
          disabled={loading}
        >
          {buttonText}
        </button>
      </div>
    );
  },
});
