import React from 'react'
import  './editor.css'
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
function Editor() {
    return (
        <div className="editor w-100 ">
               <div className="container">
                 
                <CKEditor
                    className="h-100"
                   height="300"
                    editor={ ClassicEditor }
                    data="<p>Write your message ...</p>"
                    onReady={ editor => {
                        // You can store the "editor" and use when it is needed.
                        console.log( 'Editor is ready to use!', editor );
                    } }
                    onChange={ ( event, editor ) => {
                        const data = editor.getData();
                        console.log( { event, editor, data } );
                    } }
                    onBlur={ ( event, editor ) => {
                        console.log( 'Blur.', editor );
                    } }
                    onFocus={ ( event, editor ) => {
                        console.log( 'Focus.', editor );
                    } }
                />
               </div>
        </div>
    )
}

export default Editor
