import { useEffect } from "react";

const AdminPage = () => {
	useEffect(() => {
		document.title = "Админская панель";
	}, []);
	return <div className="p-12"></div>;
};

export default AdminPage;
