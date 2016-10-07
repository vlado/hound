const RepoActivationButton = React.createClass({
  render() {
    const { repo } = this.props;

    if (repo.admin) {
      return (
        <button
          className="repo-toggle"
          onClick={() => this.toggle()}
        />
      )
    } else {
      return (
        <div className="repo-rtestricted">
          Only repo admins can activate
        </div>
      );
    }
  },

  toggle() {
    const { repo } = this.props;

    if (repo.active) {
      if (repo.stripe_subscription_id) {
        deleteSubscription();
      } else {
        this.deactivateRepo();
      }
    } else {
      this.createSubscription();
    }
  },

  createSubscription() {
    const { repo } = this.props;

    if (repo.price_in_cents > 0) {
      if (this.props.userCardExists) {
        alert("YEAH");
      }
    } else {
      this.activateRepo();
    }
  },

  activateRepo() {
    const { repo } = this.props;
    const token = $('meta[name="csrf-token"]').attr('content');

    $.ajax({
      data: {'authenticity_token': token},
      url: `/repos/${repo.id}/activation`,
      method: 'POST',
    });
  },

  deactivateRepo() {
    const { repo } = this.props;
    const token = $('meta[name="csrf-token"]').attr('content');

    $.ajax({
      data: {'authenticity_token': token},
      url: `/repos/${repo.id}/deactivation`,
      method: 'POST',
    });
  },

  deleteSubscription() {
    const { repo } = this.props;
    const token = $('meta[name="csrf-token"]').attr('content');

    $.ajax({
      data: {'authenticity_token': token},
      url: `/repos/${repo.id}/subscription`,
      method: 'DELETE',
    });
  }
});
