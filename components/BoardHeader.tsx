'use client';
import { Button, Input, Modal, Form, Select } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { useState } from 'react';
import { useBoardStore } from '@/lib/store';
import { PRIORITIES } from '@/lib/types';

const { TextArea } = Input;

const BoardHeader = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form] = Form.useForm();
  const addTask = useBoardStore((state) => state.addTask);
  const columns = useBoardStore((state) => state.columns);

  const handleAddTask = () => {
    form.validateFields().then((values) => {
      addTask({
        taskCode: `T${Date.now().toString().slice(-4)}`,
        title: values.title,
        description: values.description || '',
        priority: values.priority,
        status: values.status,
        assignee: values.assignee ? {
          name: values.assignee,
          avatar: undefined,
        } : undefined,
        tags: values.tags ? values.tags.split(',').map((t: string) => t.trim()) : [],
        createdAt: new Date().toISOString(),
        id: `task-${Date.now().toString().slice(-4)}`,
      });

      form.resetFields();
      setIsModalOpen(false);
    });
  };

  const handleCancel = () => {
    form.resetFields();
    setIsModalOpen(false);
  };

  return (
    <header className="flex items-center justify-between px-6 py-4 bg-white border-b border-gray-100">
      <div className="flex items-center gap-10">
        <h1 className="text-xl font-semibold text-gray-800">
          Sprint Dashboard
        </h1>
        <Input
          prefix={<SearchOutlined className="text-gray-400" />}
          placeholder="Search tasks..."
          className="!w-64 rounded-full bg-gray-50"
          variant="filled"
        />
      </div>

      <Button
        onClick={() => setIsModalOpen(true)}
        className="!bg-pastel-purple-dark !text-white hover:bg-pastel-purple-dark/50"
      >
        Add Task
      </Button>

      <Modal
        title="Add New Task"
        open={isModalOpen}
        onOk={handleAddTask}
        onCancel={handleCancel}
        okText="Create Task"
        cancelText="Cancel"
        width={600}
        destroyOnClose
      >
        <Form
          form={form}
          layout="vertical"
          className="pt-4"
          initialValues={{
            priority: 'medium',
            status: 'todo',
          }}
        >
          {/* Title */}
          <Form.Item
            name="title"
            label="Task Title"
            rules={[{ required: true, message: 'Please enter task title' }]}
          >
            <Input placeholder="Enter task title" />
          </Form.Item>

          {/* Description */}
          <Form.Item
            name="description"
            label="Description"
          >
            <TextArea
              rows={3}
              placeholder="Enter task description (optional)"
            />
          </Form.Item>

          {/* Priority and Status in one row */}
          <div className="flex gap-4">
            <Form.Item
              name="priority"
              label="Priority"
              className="flex-1"
              rules={[{ required: true }]}
            >
              <Select options={PRIORITIES.map((priority) => ({ label: priority.toUpperCase(), value: priority }))} />
            </Form.Item>

            <Form.Item
              name="status"
              label="Status"
              className="flex-1"
              rules={[{ required: true }]}
            >
              <Select options={Object.values(columns).map((column) => ({ label: column.title, value: column.id }))} />

            </Form.Item>
          </div>

          {/* Assignee */}
          <Form.Item
            name="assignee"
            label="Assignee"
          >
            <Input placeholder="Enter assignee name (optional)" />
          </Form.Item>

          {/* Tags */}
          <Form.Item
            name="tags"
            label="Tags"
            help="Separate multiple tags with commas"
          >
            <Input placeholder="e.g., frontend, bug, urgent" />
          </Form.Item>
        </Form>
      </Modal>
    </header>
  );
};

export default BoardHeader;