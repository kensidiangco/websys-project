import React, { useState } from 'react'
import Head from 'next/head';
import dynamic from 'next/dynamic';

const Editor = dynamic(() => {
  require('codemirror/lib/codemirror.css');
  require('codemirror/theme/material.css');
  require('codemirror/mode/python/python');

  return import('../../components/Editor')
  
}, {ssr: false})

function PythonCodeEditor() {
  const [python, setPython] = useState()
  
  return (
    <>
      <Head>
        <title>Python editor</title>
      </Head>
      <div className="sm:h-half-screen flex sm:flex-row flex-col bg-violet-300">
        <Editor 
          language="python" 
          displayName="Python" 
          value={python} 
          onChange={setPython} 
        />
        
      </div>
      <div className="h-half-screen">
        <iframe 
          srcDoc={python}
          title="output"
          sandbox="allow-scripts"
          width="100%"
          height="100%"
        />
      </div>
    </>
  )
}

export default PythonCodeEditor