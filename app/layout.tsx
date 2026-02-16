import type { Metadata } from "next";
import { ConfigProvider } from "antd";
import "./globals.css";

export const metadata: Metadata = {
  title: "Task Manager",
  description: "Kanban-style task management application",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        <ConfigProvider
          theme={{
            token: {
              colorPrimary: "#1890ff",
              borderRadius: 8,
              colorBgContainer: "#ffffff",
            },
          }}
        >
          {children}
        </ConfigProvider>
      </body>
    </html>
  );
}