import '@/app/ui/global.css'
import { inter } from '@/app/ui/fonts';

// 整体样式在该文件添加
// 导航到不同页面时，只有页面组件会更新，而布局不会重新渲染。
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
