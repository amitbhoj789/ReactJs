/*
<div id="parent">
    <div id="child">
        <h1>I am h1 tag</h1>
        <h2>I am h2 tag</h2>
    </div>
    <div id="child2">
        <h1>I am h1 tag</h1>
        <h2>I am h2 tag</h2>
    </div>
</div>

Here, Parent is a ----> ReactElement(object) ====becomes===> HTML(Browser understands)

*/

const parent = React.createElement(
    "div", 
    {id: "parent"}, 
    [
        React.createElement("div", {id: "child"}, [
            React.createElement("h1", {}, "I am h1 tag"),
            React.createElement("h2", {}, "I am h2 tag")
        ]),
        React.createElement("div", {id: "child2"}, [
            React.createElement("h1", {}, "I am h1 tag"),
            React.createElement("h2", {}, "I am h2 tag")
        ])
    ]
);


// const heading = React.createElement("h1", 
//     {id: "heading", xyx: "abc"},
//     "Hello React World"
// );

// console.log(heading);  // object

console.log(parent); // object

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(parent);