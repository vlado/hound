const Organization = React.createClass({
  render() {
    return (
      <div>
        <header className="organization-header">
          <h2 className="organization-header-title">
            {this.props.organizationName}
          </h2>
        </header>

        <section className="repo-listing">
          <ul className="repos">
            {this.props.repos.map(repo => {
              return <Repo key={repo.github_id} repo={repo}/>
            })}
          </ul>
        </section>
      </div>
    );
  }
});
