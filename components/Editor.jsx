import React, { useRef, useState } from 'react'
import { Controlled as ControlledEditor } from 'react-codemirror2'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCompressAlt, faExpandAlt } from '@fortawesome/free-solid-svg-icons'

function Editor(props) {
    const [open, setOpen] = useState(true)
    const {
        language,
        displayName,
        value,
        onChange
    } = props;

    const handleChange = (editor, data, value) => {
        onChange(value)
    }

    const editor = useRef()
    const wrapper = useRef()
    const editorWillUnmount = () => {
        editor.current.display.wrapper.remove()
    }
    
  return (
    <div className={`basis-0 flex flex-col p-4 ${open? 'grow' : 'grow-0'}`}>

        <div className='flex gap-6 justify-between items-center bg-gray-600 p-4 rounded-t-md text-white font-bold'>
            {displayName}
            <button 
                type="button" 
                onClick={() => setOpen(prevOpen => !prevOpen)} 
                className="py-1 px-2 bg-gray-900 hover:bg-gray-800 text-white rounded-md cursor-pointer">
                <FontAwesomeIcon icon={open? faCompressAlt : faExpandAlt} />
            </button>
        </div>

        <ControlledEditor 
            onBeforeChange={handleChange}
            value={value}
            className="grow rounded-b-md overflow-hidden h-32 sm:h-half-screen"
            ref={wrapper}
            options={{
                lineWrapping: true,
                lint: true,
                mode: language,
                theme: 'material',
                lineNumbers: true
            }}
            editorDidMount={(e) => editor.current = e}
            editorWillUnmount={editorWillUnmount}
        />
    </div>
  )
}

export default Editor