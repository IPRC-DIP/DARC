import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { github } from 'react-syntax-highlighter/dist/esm/styles/hljs';

function CodeSnippet({ code }) {
  return (
    <SyntaxHighlighter language='python' style={github} showLineNumbers customStyle={{ height: '90%', overflow: 'auto' }}>
      {code}
    </SyntaxHighlighter>
  );
}

export default CodeSnippet;
