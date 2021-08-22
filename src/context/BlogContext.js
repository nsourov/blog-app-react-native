import React from 'react';

import createDataContext from './createDataContext';
import jsonServer from '../api/jsonServer';

const blogReducer = (state, action) => {
	switch (action.type) {
		case 'GET_POSTS':
			return action.payload;
		case 'ADD_POST':
			return [...state, action.payload];
		case 'EDIT_POST':
			return state.map((post) => {
				return post.id === action.payload.id ? action.payload : post;
			});
		case 'DELETE_POST':
			return state.filter((p) => p.id !== action.payload);
		default:
			return state;
	}
};

const getPosts = (dispatch) => {
	return async () => {
		const res = await jsonServer.get('/blogposts');
		dispatch({
			type: 'GET_POSTS',
			payload: res.data,
		});
	};
};

const addPost = (dispatch) => {
	return async (title, content, cb) => {
		const response = await jsonServer.post('/blogposts', { title, content });
		dispatch({ type: 'ADD_POST', payload: response.data });
		if (cb) {
			cb();
		}
	};
};

const editPost = (dispatch) => {
	return async (id, title, content, cb) => {
		const response = await jsonServer.put(`/blogposts/${id}`, {
			title,
			content,
		});
		dispatch({ type: 'EDIT_POST', payload: response.data });
		if (cb) {
			cb();
		}
	};
};

const deletePost = (dispatch) => {
	return (id) => {
		dispatch({ type: 'DELETE_POST', payload: id });
	};
};

export const { Context, Provider } = createDataContext(
	blogReducer,
	{
		addPost,
		deletePost,
		editPost,
		getPosts,
	},
	[]
);
