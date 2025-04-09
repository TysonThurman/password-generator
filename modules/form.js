import { useState } from 'react';

export default function InputField() {

    const [password, setPassword] = useState('');

    function handleGenerateButton(){
        setPassword('Test');
    }

    return (
    <div>
        <button onClick={handleGenerateButton}>Generate</button>
        <br /> <br />
        <input type="text" disabled value={password} />
    </div>
    );
}