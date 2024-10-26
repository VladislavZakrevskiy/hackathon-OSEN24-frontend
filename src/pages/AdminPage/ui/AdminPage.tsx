import { PersonList } from "@/widgets/PersonList";
import { useEffect } from "react";

const AdminPage = () => {
	useEffect(() => {
		document.title = "Админская панель";
	}, []);
	return (
		<>
			<PersonList />
		</>
	);
};

export default AdminPage;
