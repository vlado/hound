class RepoToolsRefresh extends React.Component {
  render() {
    const { isSyncing, onRefreshClicked } = this.props;

    if (isSyncing) {
      var buttonText = Hound.settings.syncingButtonText;
    } else {
      var buttonText = Hound.settings.syncNowButtonText;
    }

    return (
      <div className="repo-tools-refresh">
        <button
          className="repo-tools-refresh-button"
          disabled={isSyncing ? "disabled" : null}
          onClick={onRefreshClicked}
        >
          <span>{buttonText}</span>
        </button>
      </div>
    );
  }
}
