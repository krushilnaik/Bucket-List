import { gql } from "@apollo/client";

// export const LOGIN_USER = gql`
// 	mutation login($email: String!, $password: String!) {
// 		login(email: $email, password: $password) {
// 			token
// 			user {
// 				_id
// 				name
// 			}
// 		}
// 	}
// `;

// export const ADD_USER = gql`
// 	mutation addUser($name: String!, $email: String!, $password: String!) {
// 		addUser(name: $name, email: $email, password: $password) {
// 			token
// 			user {
// 				_id
// 				name
// 			}
// 		}
// 	}
// `;

export const ADD_WISH = gql`
	mutation addWish($wishText: String!, $userId: String!) {
		addWish(wishText: $wishText, userId: $userId) {
			wishText
			isCompleted
		}
	}
`;

export const MARK_AS_DONE = gql`
	mutation MarkWishDone($wishId: String!) {
		markWishDone(wishId: $wishId) {
			id
			wishText
			isCompleted
		}
	}
`;
