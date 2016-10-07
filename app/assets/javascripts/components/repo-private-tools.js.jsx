const RepoPrivateTools = React.createClass({
  render() {
    if (!this.props.hasPrivateRepoAccess) {
      // HANDLE SYNCING
      return (
        <div className="repo-tools-private">
          <form className="button_to" action="/auth/github?access=full">
            <button
              className="repo-tools-private-button"
              type="submit"
              href=""
            >
              <span>Include private repos</span>
            </button>
          </form>
        </div>
      )
    } else {
      return null;
    }
  },
});
