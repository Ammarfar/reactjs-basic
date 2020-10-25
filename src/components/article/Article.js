import React, { useState } from 'react'
import { TitleArticle } from './TitleArticle';
import { ContentArticle } from './ContentArticle';
import { CustomButton } from './CustomButton';

function alertButton() {
    alert('u have clicked the button')
}

export const Article = () => {

    const [number, setNumber] = useState(0)

    return (
        <div style={{ margin: '5px', width: '40%' }}>
            <TitleArticle text="This is title" />
            <ContentArticle>
                <p>This HTML file is a template.
                If you open it directly in the browser, you will see an empty page.</p>

                <p>You can add webfonts, meta tags, or analytics to this file.
                The build step will place the bundled scripts into the body tag.</p>

                <p>To begin the development, run `npm start` or `yarn start`.
                To create a production bundle, use `npm run build` or `yarn build`.</p>
            </ContentArticle>
            <CustomButton customClick={alertButton} title="Alert Button" />
            <br />
            <CustomButton customClick={() => setNumber(10)} title=" + " />
            <span> {number} </span>
            <CustomButton customClick={() => setNumber(number - 1)} title=" - " />
        </div>
    )
}
