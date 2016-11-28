class RepoActivationButton extends React.Component {
  get isActive() {
    return this.repo.active;
  }

  get buttonText() {
    if (!this.isActive) {
      return "Activate";
    }
  }

  get disabledState() {
    return (this.props.isProcessingId === this.props.repo.id) ? "disabled" : null;
  }

  get repo() {
    return this.props.repo;
  }

  render() {
    const {
      repo,
      onRepoClicked,
      isProcessingId,
    } = this.props;

    if (repo.admin) {
      return (
        <button
          className="repo-toggle"
          onClick={() => onRepoClicked(repo.id)}
          disabled={this.disabledState}
        >
          {this.buttonText}
        </button>
      );
    } else {
      return (
        <div className="repo-restricted">
          Only repo admins can activate
        </div>
      );
    }
  }
}
