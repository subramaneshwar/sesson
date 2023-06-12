import React from 'react'

function Text() {
    return (
        React.createElement(
            "div",
            { style: { padding: "0px 80px 0 30px", fontSize: "2rem" } },
            React.createElement(
                "h1",
                null,
                "Topics covered"
            ), 
            
            React.createElement(
                "p",
                null,
                "The following is a list of all the topics we cover in the MDN learning area."
            ),
            React.createElement(
                "a",
                { href: "" },
                "Getting started ",
                React.createElement("br", null)
            ),
            React.createElement(
                "p",
                { style: { padding: "0 30px" } },
                "with the webProvides a practical introduction to web development for complete beginners."
            ),
            React.createElement(
                "a",
                { href: "" },
                "HTML \u2014 Structuring the web ",
                React.createElement("br", null)
            ),
            React.createElement(
                "p",
                { style: { padding: "0 30px" } },
                "HTML is the language that we use to structure the different parts of our content and define what their meaning or purpose is. This topic teaches HTML in detail."
            ),
            React.createElement(
                "a",
                { href: "" },
                "CSS \u2014 Styling the web ",
                React.createElement("br", null)
            ),
            React.createElement(
                "p",
                { style: { padding: "0 30px" } },
                "CSS is the language that we use to control our web content's style and layout, as well as adding behavior like animation. This topic provides comprehensive coverage of CSS."
            )
        )
        
        
    )
}

export default Text