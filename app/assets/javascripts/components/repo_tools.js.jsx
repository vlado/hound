class RepoTools extends React.Component {
  render() {
    const {
      onSearchInput,
      showPrivateButton,
      isSyncing,
      onRefreshClicked,
    } = this.props;

    return (
      <div className="repo-tools">
        <RepoToolsSearch onSearchInput={(term) => onSearchInput(term)} />
        {showPrivateButton ? <RepoToolsPrivate /> : null}
        <RepoToolsRefresh
          isSyncing={isSyncing}
          onRefreshClicked={onRefreshClicked}
        />
      </div>
    );
  }
}
