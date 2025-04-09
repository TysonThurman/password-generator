import { useState } from 'react';
import stringGenerator from '../utils/stringGenerator';

export default function InputField() {

    const [password, setPassword] = useState('');

    async function handleGenerateButton(){
        var generatedString = await stringGenerator(1, 1, 1, 1);
        setPassword(generatedString);
    }

    return (
    <div className="mainForm">
        <button onClick={handleGenerateButton}>Generate</button>
        <br /> <br />
        <input type="text" disabled value={password} />
    </div>
    );
}