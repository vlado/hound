const RepoPrivateTools = React.createClass({
  render() {
    console.log(this.props.hasPrivateRepoAccess);
    if (!this.props.hasPrivateRepoAccess) {
      const token = $('meta[name="csrf-token"]').attr('content');
      // HANDLE SYNCING
      return (
        <div className="repo-tools-private">
          <form className="button_to" method="post" action="/auth/github?access=full">
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
