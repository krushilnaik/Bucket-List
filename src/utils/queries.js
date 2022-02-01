import { gql } from "@apollo/client";

// export const QUERY_WISH = gql`
// 	query wish($id: ID!) {
// 		wish(_id: $id) {
// 			_id
// 			wishText
// 			createdAt
// 			name
// 		}
// 	}
// `;

export const QUERY_USER = gql`
	query user($userId: String!) {
		user(id: $userId) {
			wishes {
				id
				wishText
				isCompleted
			}
		}
	}
`;

// export const QUERY_ME = gql`
// 	{
// 		me {
// 			_id
// 			name
// 			email
// 		}
// 	}
// `;

// export const QUERY_ME_BASIC = gql`
// 	{
// 		me {
// 			_id
// 			name
// 			email
// 			friendCount
// 			friends {
// 				_id
// 				name
// 			}
// 		}
// 	}
// `;
