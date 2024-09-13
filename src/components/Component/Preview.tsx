import React, { useMemo } from 'react';

const Preview: React.FC<{ code: string }> = ({ code }) => {
  const srcDoc = useMemo(() => {
    return `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1">
          <script src="https://cdnjs.cloudflare.com/ajax/libs/react/18.2.0/umd/react.production.min.js"></script>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/react-dom/18.2.0/umd/react-dom.production.min.js"></script>
          <script src="https://cdn.tailwindcss.com"></script>
        </head>
        <body>
          <div id="root"></div>
          <script type="text/babel">
            const App = () => {
              return (
                ${code}
              );
            };
            ReactDOM.render(React.createElement(App), document.getElementById('root'));
          </script>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/babel-standalone/7.23.5/babel.min.js"></script>
        </body>
      </html>
    `;
  }, [code]);

  return (
    <iframe
      srcDoc={srcDoc}
      className="w-full h-full border-0"
      title="Component Preview"
      sandbox="allow-scripts"
    />
  );
};

export default Preview;