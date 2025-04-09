import { useState } from 'react';
import stringGenerator from '../utils/stringGenerator';

export default function InputField() {

    const [password, setPassword] = useState('');
    const [passwordChars,setPasswordChars] = useState(4);

    async function handleGenerateButton(){
        var generatedString = await stringGenerator(2, 2, 2, 2);
        setPassword(generatedString);
    }

    function updateSliderNumber(e) {
        setPasswordChars(e.target.value);
        console.log(e.target.value);
    }

    return (
    <div>
        <input onChange={(e) => updateSliderNumber(e)} type="range" min="4" max="16" step="1" />
        <p>Value: {passwordChars}</p>
        <br /> <br />
        <button onClick={handleGenerateButton}>Generate</button>
        <br /> <br />
        <input type="text" disabled value={password} />
    </div>
    );
}