import { useRef } from 'react';
import '../styles/modelEditor.css';
import PartViewer from './partViewer';

function ModelEditor({prop}) {
    const ref = useRef(null);
    const part = prop;

    return (
        <div className="editBody">

            <PartViewer part={part} />

        </div>
    );
}

export default ModelEditor;