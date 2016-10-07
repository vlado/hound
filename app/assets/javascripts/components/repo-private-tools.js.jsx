const RepoPrivateTools = React.createClass({
  render() {
    console.log(this.props.hasPrivateRepoAccess);
    if (!this.props.hasPrivateRepoAccess) {
      const token = $('meta[name="csrf-token"]').attr('content');
      // HANDLE SYNCING
      return (
        <div className="repo-tools-private">
          <form className="button_to" action="/auth/github?access=full">
            <input type="hidden" value={token} name="authenticity_token"/>
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
