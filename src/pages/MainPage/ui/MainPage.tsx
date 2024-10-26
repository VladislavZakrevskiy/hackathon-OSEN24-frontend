import { Header } from "@/widgets";
import { memo } from "react";
import { useTranslation } from "react-i18next";

const MainPage = memo(() => {
	const { t } = useTranslation("main");

	return (
		<div>
			<Header />
			{t("Главная страница")}
		</div>
	);
});

export default MainPage;
