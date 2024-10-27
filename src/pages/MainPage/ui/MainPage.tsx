import { ServiceCard, ContactInfo, AdvantagesSection } from "@/widgets";
import { memo, useEffect, useState } from "react";
import { ReviewsSection } from "@/widgets/ReviewsSection";
import { Layout } from "antd";
import "./MainPage.css";
import { UserRoles, useUserStore } from "@/entities/User";
import { Dashboard } from "./Dashboard/Dashboard";

const MainPage = memo(() => {
	const { userInfo } = useUserStore();

	useEffect(() => {
		document.title = "Сервис записи к врачу Pepper_coding";
	}, []);

	const [highlighted, setHighlighted] = useState<number>(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setHighlighted((prev) => (prev + 1) % 3);
		}, 3000);

		return () => clearInterval(interval);
	}, []);

	if (userInfo?.role === UserRoles.ADMIN) {
		return <Dashboard />;
	}

	return (
		<Layout>
			<div className="min-h-screen text-white flex flex-col items-center">
				<div className="flex flex-col items-center p-8 max-w-5xl w-full mx-auto">
					<h1 className="text-3xl font-bold mb-4">Добро пожаловать в наш сервис записи к врачу</h1>
					<p className="text-lg mb-8">Мы помогаем найти специалистов и записаться на приём в удобное для вас время.</p>

					<div className="flex flex-wrap justify-center gap-6">
						<div className={`flex-1 min-w-[250px] ${highlighted === 0 ? "highlight" : ""}`}>
							<ServiceCard
								title="Онлайн-запись"
								description="Быстро записывайтесь к нужному специалисту онлайн на удобное время"
							/>
						</div>
						<div className={`flex-1 min-w-[250px] ${highlighted === 1 ? "highlight" : ""}`}>
							<ServiceCard title="Выбор врача" description="Найдите подходящего специалиста по вашим требованиям" />
						</div>
						<div className={`flex-1 min-w-[250px] ${highlighted === 2 ? "highlight" : ""}`}>
							<ServiceCard
								title="История посещений"
								description="Всегда под рукой прошедшие посещения с вашими специалистами"
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
		</Layout>
	);
});

export default MainPage;
