// src/utils/fetchComponents.ts
import dummyComponents from './dummyComponents';

// Function to fetch all components
const fetchComponents = async () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(dummyComponents);
        }, 1000);
    });
};

// Function to fetch a component by ID
const fetchComponentById = async (id:string) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const component = dummyComponents.find(comp => comp.id === id);
            resolve(component);
        }, 1000);
    });
};

export { fetchComponents, fetchComponentById };
