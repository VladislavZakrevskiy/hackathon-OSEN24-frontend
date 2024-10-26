import { Modal } from "antd";
import { Dispatch, FC, SetStateAction } from "react";

type OptionInput = {
	type: "text" | "date";
	name: string;
	key: string;
};

interface AddModalProps {
	title: string;
	options: OptionInput[];
	open: boolean;
	setIsOpen: Dispatch<SetStateAction<boolean>>;
}

export const AddModal: FC<AddModalProps> = ({ title, open, options, setIsOpen }) => {
	return (
		<Modal title={title} open={open} onClose={() => setIsOpen(false)}>
			{/* TODO Сделать генерацию формы по опшинам */}
		</Modal>
	);
};
