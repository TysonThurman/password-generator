import React, { Component } from 'react';

export default function InputField() {
    return (
    <div>
        <form>
            <button type='submit'>Generate</button>
            <br />
            <input type="text" required size="10" disabled />
        </form>
    </div>
    );
}