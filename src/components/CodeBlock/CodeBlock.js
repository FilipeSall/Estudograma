import React, { useState } from 'react';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import './CodeBlock.css';

function CodeBlock({ children }) {
    const [copied, setCopied] = useState(false);

    const copyCode = () => {
        navigator.clipboard.writeText(children);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="code-block">
            <button className="copy-button" onClick={copyCode}>
                Copiar
            </button>
            <SyntaxHighlighter language="html" style={atomOneDark}>
                {children}
            </SyntaxHighlighter>
            <span className={`copied-message ${copied ? 'show' : ''}`}>Copiado!</span>
        </div>
    );

}

export default CodeBlock;
