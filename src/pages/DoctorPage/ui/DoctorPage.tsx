import { memo } from "react";
import { useTranslation } from "react-i18next";

const DoctorPage = memo(() => {
	const { t } = useTranslation("doctor");

	return <div>{t("Страница доктора")}</div>;
});

export default DoctorPage;
