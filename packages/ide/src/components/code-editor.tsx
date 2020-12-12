import React from 'react'
import { UnControlled as CodeMirror } from 'react-codemirror2'
import 'codemirror/addon/hint/show-hint'
import 'codemirror/addon/lint/lint'
import 'codemirror-graphql/hint'
import 'codemirror-graphql/lint'
import 'codemirror-graphql/mode'

export const CodeEditor = () => {
    return <CodeMirror
        options={{
            mode: 'graphql',
            lineNumbers: true
        }}
    />
}
