class RepoToolsRefresh extends React.Component {
  get disabledState() {
    return (this.isDisabled ? "disabled" : null);
  }

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
          disabled={this.disabledState}
          onClick={onRefreshClicked}
        >
          <span>{buttonText}</span>
        </button>
      </div>
    );
  }
}
