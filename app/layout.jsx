import './globals.css';

export const metadata = {
  title: '自选基金助手',
  description: '实时查看基金估值与排行',
  referrer: 'no-referrer',
};

export default function RootLayout({ children }) {
  return (
    <html lang="zh-CN">
      <head>
        {/* 双重保险：在 head 里也加上 meta 标签 */}
        <meta name="referrer" content="no-referrer" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
