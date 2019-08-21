import React, {Fragment} from 'react';
import PropTypes from 'prop-types';

const RepoItem = ({ repo }) => {

	return (
		<Fragment>
			<div className="card">
				<h3>
					<a href={repo.html_url}>{repo.name.toUpperCase()}</a>
				</h3>
				<strong>Description: </strong>
				<p>{repo.description}</p>
				<strong>Dominant Language: </strong>
				<p>{repo.language}</p>
				<strong>Fork Status: </strong>{' '}
				{repo.fork ? (<i className='fas fa-check text-success' />) : (<i className='fas fa-times-circle text-danger' />)}
			</div>
		</Fragment>	
	);
}

RepoItem.propTypes = {
	repo: PropTypes.object.isRequired
};

export default RepoItem;