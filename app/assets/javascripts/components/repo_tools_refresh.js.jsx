class RepoToolsRefresh extends React.Component {
  render() {
    const { isSyncing, onRefreshClicked } = this.props;

    let buttonText = null;

    if (isSyncing) {
      buttonText = Hound.settings.syncingButtonText;
    } else {
      buttonText = Hound.settings.syncNowButtonText;
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
