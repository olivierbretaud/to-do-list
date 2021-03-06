import React from 'react';
import { connect } from  'react-redux';
import PropTypes from 'prop-types';
import { setVisibilityFilter } from '../actions/todoActions';


const FilterLink = ({ active, children, onClick }) => (
	<button
		onClick={onClick}
		disabled={active}
		style={{
			marginLeft: '4px'
		}}
	>
		{children}
	</button>
)

FilterLink.propTypes = {
	active: PropTypes.bool.isRequired,
	children: PropTypes.node.isRequired,
	onClick: PropTypes.func.isRequired
}

const mapStateToProps = (state, ownProps) => ({
	active: ownProps.filter === state.visibilityFilter
})

const mapDispatchToProps = (dispatch, ownProps) => ({
	onClick: () => dispatch(setVisibilityFilter(ownProps.filter))
})

export default connect(mapStateToProps, mapDispatchToProps)(FilterLink)