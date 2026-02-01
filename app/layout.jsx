import './globals.css';

export const metadata = {
  title: '实时基金估值',
  description: '输入基金编号添加基金，实时显示估值与前10重仓',
  referrer: 'no-referrer',
};

export default function RootLayout({ children }) {
  return (
    <html lang="zh-CN">
      <head>
        {/* 双重保险：针对部分旧版浏览器的兼容写法 */}
        <meta name="referrer" content="no-referrer" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
