import React, { useEffect } from "react";

const DoctorPage = () => {
	useEffect(() => {
		document.title = `Врач`;
	}, []);
	return <div>DoctorPage</div>;
};

export default DoctorPage;
