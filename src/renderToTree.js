
import _ from "lodash";

function makeTree (rendered) {
    let component = {};

    switch (typeof rendered.type) {
        case "function":
            component.name = rendered.type.name;
        break;

        case "string":
            component.name = rendered.type;
        break;

        case "object": // null
            component.name = rendered.props.tag;
        break;

        default:
            component.name = rendered.props.tag;
        break;
    }

    console.log(`Add element: ${component.name}`);
    
    let propsCopy = {};

    for (let key in rendered.props) {
        if (key !== "children" && key !== "tag") {
            propsCopy[key] = rendered.props[key];
        }
    }

    if (!_.isEmpty(propsCopy)) {
        component.props = propsCopy;
    }

    if (typeof rendered.props.children === "object") {
        component.children = [];

        for (let i = 0; i < rendered.props.children.length; i++) {
            if (rendered.props.children[i] !== null) {
                component.children.push(makeTree(rendered.props.children[i]));
            }
        }
    } else {
        component.children = rendered.props.children;
    }

    return component;
}

function renderToObject (Component) {
    const rendered = (new Component()).render();

    return rendered;
}

export default function (component) {
    const renderedComponent = renderToObject(component);
    
    console.log("Sources:");
    console.log(renderedComponent);
    
    const renderedTree = makeTree(renderedComponent);

    console.log("Tree:");
    console.log(renderedTree);

    return renderedTree;
}
