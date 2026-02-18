import { Input, Modal } from 'antd';
import { useState } from 'react';
import { useBoardStore } from '@/lib/store';
import { PlusCircleOutlined } from '@ant-design/icons';

const AddColumn = () => {
    const addColumn = useBoardStore((state) => state.addColumn);

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [columnTitle, setColumnTitle] = useState('');

    const handleAddColumn = () => {
        if (!columnTitle.trim()) return;

        const newColumnId = columnTitle.toLowerCase().replace(/\s+/g, '-');

        addColumn({
            id: newColumnId,
            title: columnTitle,
            taskIds: [],
        });

        setColumnTitle('');
        setIsModalOpen(false);
    };

    return (
        <>
            {/* Add Column Button */}
            <button
                onClick={() => setIsModalOpen(true)}
                className="border-2 border-dashed border-gray-300 rounded-xl bg-white min-w-74 min-h-full mt-6 flex flex-col items-center justify-center hover:border-gray-400 hover:bg-gray-50 transition-colors cursor-pointer"
            >
                <div className="text-gray-500 text-sm font-medium flex items-center gap-2">
                    <PlusCircleOutlined className="text-lg" />
                    <span>Add New Column</span>
                </div>
            </button>

            {/* Modal */}
            <Modal
                title="Add New Column"
                open={isModalOpen}
                onOk={handleAddColumn}
                onCancel={() => setIsModalOpen(false)}
                okText="Add Column"
                cancelText="Cancel"
                okButtonProps={{ disabled: !columnTitle.trim() }}
            >
                <div className="py-4">
                    <Input
                        placeholder="Enter column title (e.g., In Review, Testing)"
                        value={columnTitle}
                        onChange={(e) => setColumnTitle(e.target.value)}
                        onPressEnter={handleAddColumn}
                        autoFocus
                    />
                </div>
            </Modal>
        </>
    )
}

export default AddColumn