import { FooterComponent, Header, ServiceCard } from "@/widgets";
import { Typography } from "antd";
import { memo } from "react";
import { useTranslation } from "react-i18next";
import { ContactInfo, AdvantagesSection } from "@/widgets";
import { ReviewsSection } from "@/widgets/ReviewsSection";

const { Title, Paragraph } = Typography;

const MainPage = memo(() => {
	const { t } = useTranslation("main");

	return (
		<>
			<div className="min-h-screen text-white flex flex-col items-center">
				<Header />
				<div className="flex flex-col items-center p-8 max-w-5xl w-full mx-auto">
					<h1 className="text-3xl font-bold mb-4">Добро пожаловать в нашу клинику</h1>
					<p className="text-lg mb-8">Мы предоставляем широкий спектр медицинских услуг.</p>

					<h2 className="text-2xl font-semibold mb-6">Наши услуги</h2>
					<div className="flex flex-wrap justify-center gap-6">
						<div className="flex-1 min-w-[250px]">
							<ServiceCard
								title="Консультация врача"
								description="Получите квалифицированную помощь от наших специалистов."
							/>
						</div>
						<div className="flex-1 min-w-[250px]">
							<ServiceCard title="Анализы" description="Проходите анализы в удобное для вас время." />
						</div>
						<div className="flex-1 min-w-[250px]">
							<ServiceCard
								title="Физиотерапия"
								description="Восстановление после заболеваний с помощью физиотерапии."
							/>
						</div>
					</div>

					<div className="mt-8 w-full">
						<AdvantagesSection />
					</div>
					<div className="mt-8 w-full">
						<ReviewsSection />
					</div>
					<div className="mt-8 w-full">
						<ContactInfo />
					</div>
				</div>
			</div>
			<FooterComponent />
		</>
	);
});

export default MainPage;
