import React, { useEffect } from "react";
import { Tabs, Button, Card } from "antd";
import { PageType, usePageStore } from "../model/browserStore";
import DataTable from "./Pages/DataTable";
import { v4 } from "uuid";

const { TabPane } = Tabs;

const MainScreen: React.FC = () => {
	const { pages, currentPageId, addPage, setCurrentPage } = usePageStore();

	useEffect(() => {
		if (pages.length === 0) {
			addPage("New");
		}
	}, []);

	const handleAddTab = () => {
		addPage("New");
		setCurrentPage(pages.length > 0 ? pages[pages.length - 1].id : "0");
	};

	const handleTypeSelect = (type: PageType) => {
		const newPageId = v4();
		addPage(type, newPageId);
		setCurrentPage(newPageId);
	};

	return (
		<Tabs
			className="p-12"
			activeKey={currentPageId || ""}
			onChange={setCurrentPage}
			onEdit={(targetKey, action) => action === "add" && handleAddTab()}
		>
			{pages.map((page) => (
				<TabPane tab={page.type} key={page.id} closable={page.type !== "New"}>
					{page.type === "New" ? (
						<div className="flex justify-center items-center w-full">
							<Card className="w-1/3" title="Выберите нужную сущность">
								<div className="flex flex-col justify-center gap-4">
									<Button type="primary" className="w-full" onClick={() => handleTypeSelect("Doctor")}>
										Doctor
									</Button>
									<Button type="primary" className="w-full" onClick={() => handleTypeSelect("Office")}>
										Office
									</Button>
									<Button type="primary" className="w-full" onClick={() => handleTypeSelect("DoctorAvaible")}>
										DoctorAvaible
									</Button>
								</div>
							</Card>
						</div>
					) : (
						<DataTable type={page.type} pageId={page.id} />
					)}
				</TabPane>
			))}
		</Tabs>
	);
};

export default MainScreen;
