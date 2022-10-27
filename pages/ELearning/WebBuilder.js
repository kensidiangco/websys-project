import Head from 'next/head'
import React, { useState, useEffect } from 'react'
import dynamic from 'next/dynamic'
import UseLocalStorage from '../../hooks/UseLocalStorage'

const Editor = dynamic(() => {
  require('codemirror/lib/codemirror.css');
  require('codemirror/theme/material.css');
  require('codemirror/mode/xml/xml');
  require('codemirror/mode/javascript/javascript');
  require('codemirror/mode/css/css');

  return import('../../components/Editor')
  
}, {ssr: false})

function WebBuilder() {
  const [html, setHtml] = useState('')
  const [css, setCss] = useState('')
  const [js, setJs] = useState('')
  const [srcDoc, setSrcDoc] = useState('')

  const [langguageWillUse, setLanguageWillUse] = useState([])

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setSrcDoc(`
        <html>
          <style>${css}</style>
          <body>${html}</body>
          <script>${js}</script>
        </html>
      `)
    }, 250)

    return () => clearTimeout(timeOut);

  }, [html, css, js])

  return (
    <>
      <Head>
        <title>Web Builder</title>
      </Head>
      <div className="sm:h-half-screen flex sm:flex-row flex-col bg-violet-300">
        <Editor 
          language="xml" 
          displayName="HTML" 
          value={html} 
          onChange={setHtml} 
        />
        <Editor 
          language="css" 
          displayName="CSS" 
          value={css} 
          onChange={setCss} 
        />
        <Editor 
          language="javascript" 
          displayName="JavaScript" 
          value={js} 
          onChange={setJs} 
        />
        
      </div>
      <div className="h-half-screen">
        {!html && !css && !js && 
          <span className="flex justify-center">
            <p className="text-center font-bold text-[100px]">👇OUTPUT👇</p>
          </span>
        }
        <iframe 
          srcDoc={srcDoc}
          title="output"
          sandbox="allow-scripts"
          width="100%"
          height="100%"
        />
      </div>
    </>
  )
}

export default WebBuilder