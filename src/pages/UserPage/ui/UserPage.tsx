import React from "react";
import { useParams } from "react-router-dom";

const UserPage = () => {
	const { id, type } = useParams<{ type: string; id: string }>();

	return (
		<div>
			UserPage {type} {id}
		</div>
	);
};

export default UserPage;
