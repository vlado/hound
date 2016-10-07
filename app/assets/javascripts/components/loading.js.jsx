const ReposLoading = React.createClass({
  render() {
    if (this.props.show) {
      return (
        <div className="repos-syncing">
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
        </div>
      );
    } else {
      return null;
    }
  },
});
