"use client";

import { Drawer, Form, Input, Select, Button, Space } from "antd";
import { useEffect, useMemo } from "react";
import { useBoardStore } from "@/lib/store";
import { PRIORITIES, type Task } from "@/lib/types";

const { TextArea } = Input;

function parseTags(input?: string): string[] {
    if (!input) return [];
    return input
        .split(",")
        .map((t) => t.trim())
        .filter(Boolean);
}

function tagsToString(tags?: string[]): string {
    return (tags ?? []).join(", ");
}

export default function TaskDrawer({
    open,
    taskId,
    onClose,
}: {
    open: boolean;
    taskId: string | null;
    onClose: () => void;
}) {
    const [form] = Form.useForm();

    const task = useBoardStore((s) => (taskId ? s.tasks[taskId] : undefined));
    const updateTask = useBoardStore((s) => s.updateTask);

    const title = useMemo(() => {
        if (!task) return "Task details";
        return `${task.taskCode ?? task.id} • ${task.title}`;
    }, [task]);

    useEffect(() => {
        if (!task) {
            form.resetFields();
            return;
        }

        form.setFieldsValue({
            title: task.title ?? "",
            description: task.description ?? "",
            priority: task.priority ?? "medium",
            assigneeName: task.assignee?.name ?? "",
            taskCode: task.taskCode ?? "",
            tags: tagsToString(task.tags),
        });
    }, [task, form, open]);

    const handleSave = async () => {
        if (!task) return;

        const values = await form.validateFields();

        const patch: Partial<Task> = {
            title: values.title,
            description: values.description,
            priority: values.priority,
            taskCode: values.taskCode,
            tags: parseTags(values.tags),

            // keep avatar if already present, only edit the name here
            assignee: values.assigneeName
                ? { ...(task.assignee ?? {}), name: values.assigneeName }
                : undefined,
        };

        updateTask(task.id, patch);
        onClose();
    };

    const handleCancel = () => {
        if (task) {
            form.setFieldsValue({
                title: task.title ?? "",
                description: task.description ?? "",
                priority: task.priority ?? "medium",
                assigneeName: task.assignee?.name ?? "",
                taskCode: task.taskCode ?? "",
                tags: tagsToString(task.tags),
            });
        }
        onClose();
    };

    return (
        <Drawer
            title={title}
            open={open}
            onClose={handleCancel}
            size="large"
            styles={{
                body: {
                    paddingBottom: 0,
                },
            }}
            footer={
                <div className="flex justify-end">
                    <Space>
                        <Button onClick={handleCancel}>Cancel</Button>
                        <Button onClick={handleSave} disabled={!task} className="!bg-pastel-purple-dark !text-white hover:bg-pastel-purple-dark/50">
                            Save
                        </Button>
                    </Space>
                </div>
            }
        >
            {!task ? (
                <div className="text-sm text-gray-500">No task selected</div>
            ) : (
                <Form form={form} layout="vertical">
                    <Form.Item
                        name="title"
                        label="Title"
                        rules={[{ required: true, message: "Title is required" }]}
                    >
                        <Input placeholder="e.g. Implement drag and drop" />
                    </Form.Item>

                    <Form.Item name="description" label="Description">
                        <TextArea rows={4} placeholder="Add details..." />
                    </Form.Item>

                    <div className="grid grid-cols-2 gap-3">
                        <Form.Item name="priority" label="Priority">
                            <Select options={PRIORITIES.map((priority) => ({ label: priority.toUpperCase(), value: priority }))} />
                        </Form.Item>

                        <Form.Item name="taskCode" label="Task code">
                            <Input placeholder="e.g. T001" />
                        </Form.Item>
                    </div>

                    <Form.Item name="assigneeName" label="Assignee">
                        <Input placeholder="e.g. Shahana" />
                    </Form.Item>

                    <Form.Item
                        name="tags"
                        label="Tags"
                        extra="Comma-separated (e.g. ui, feature, backend)"
                    >
                        <Input placeholder="ui, feature" />
                    </Form.Item>

                    <div className="mt-4 text-xs text-gray-500">
                        Created:{" "}
                        {task.createdAt ? new Date(task.createdAt).toLocaleString() : "-"}
                    </div>
                </Form>
            )}
        </Drawer>
    );
}
