import React, { useEffect } from "react";
import { Tabs, Button, Card } from "antd";
import { PageType, usePageStore } from "../model/browserStore";
import DataTable from "./Pages/DataTable";
import { v4 } from "uuid";

const MainScreen: React.FC = () => {
  const { pages, currentPageId, addPage, setCurrentPage } = usePageStore();

  useEffect(() => {
    if (pages.length === 0) {
      addPage("Новая вкладка");
    }
  }, []);

  const handleAddTab = () => {
    addPage("Новая вкладка");
    setCurrentPage(pages.length > 0 ? pages[pages.length - 1].id : "0");
  };

  const handleTypeSelect = (type: PageType) => {
    const newPageId = v4();
    addPage(type, newPageId);
    setCurrentPage(newPageId);
  };

  const tabItems = pages.map((page) => ({
    label: page.type,
    key: page.id,
    closable: page.type !== "Новая вкладка",
    children: page.type === "Новая вкладка" ? (
      <div className="flex justify-center items-center w-full">
        <Card className="w-1/3" title="Выберите нужную сущность">
          <div className="flex flex-col justify-center gap-4">
            <Button type="primary" className="w-full" onClick={() => handleTypeSelect("Врачи")}>
              Врачи
            </Button>
            <Button type="primary" className="w-full" onClick={() => handleTypeSelect("Кабинеты")}>
              Кабинеты
            </Button>
            <Button type="primary" className="w-full" onClick={() => handleTypeSelect("Часы работы врачей")}>
              Часы работы врачей
            </Button>
            <Button type="primary" className="w-full" onClick={() => handleTypeSelect("Клиники")}>
              Клиники
            </Button>
          </div>
        </Card>
      </div>
    ) : (
      <DataTable type={page.type} pageId={page.id} />
    ),
  }));

  return (
    <Tabs
      className="p-12"
      activeKey={currentPageId || ""}
      onChange={setCurrentPage}
      onEdit={(targetKey, action) => action === "add" && handleAddTab()}
      items={tabItems}
    />
  );
};

export default MainScreen;
