import { Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

const BoardHeader = () => {
  return (
    <header className="flex items-center justify-between px-6 py-4 bg-white border-b border-gray-100">
      
      <h1 className="text-xl font-semibold text-gray-800">
        Sprint Dashboard
      </h1>

      <Input
        prefix={<SearchOutlined className="text-gray-400" />}
        placeholder="Search tasks..."
        className="!w-64 rounded-full bg-gray-50"
        variant="filled"
      />

    </header>
  );
};

export default BoardHeader;