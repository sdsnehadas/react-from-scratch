const heading = React.createElement("h1", {
    id: "heading"
}, "Hello world from React");
const root = ReactDOM.createRoot(document.getElementById("root"));
/*
<div id="parent">
    <div id="child1">
        <h1 id="h1">Hi its h1 from the first child of parent</h1>
        <h2 id="h2">Hi its  h2 from the first child of parent</h1>
    </div>
    <div id="child2">
         <h1 id="h1">Hi its h1 from the first child of parent</h1>
        <h2 id="h2">Hi its  h2 from the first child of parent</h1>
    </div>
</div>
*/ const childdiv1 = React.createElement("div", {
    id: "child1"
}, [
    React.createElement("h1", {
        id: "h1"
    }, "Hi its h1 from the first child of parent"),
    React.createElement("h2", {
        id: "h2"
    }, "Hi its h2 from the first child of parent")
]);
const childdiv2 = React.createElement("div", {
    id: "child2"
}, [
    React.createElement("h1", {
        id: "h1"
    }, "Hi its h1 from the second child of parent"),
    React.createElement("h2", {
        id: "h2"
    }, "Hi its h2 from the second child of parent")
]);
const parent = React.createElement("div", {
    id: "parent"
}, [
    childdiv1,
    childdiv2
]);
root.render(parent);

//# sourceMappingURL=index.6bd02f5a.js.map
