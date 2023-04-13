// Arrays:

// Immutably add an item to the end of an array
export function addToEnd(array, item) {
  // const newArray assigned to the test array with the new item added to the end
  const newArray = [...array, item];
  return newArray;
}

// Immutably add an item to the beginning of an array
export function addToBeginning(array, item) {
  // const newArray assigned to the test array with the new item added to the beginning
  const newArray = [item, ...array];
  return newArray;
}

// Immutably insert an item at a specific position/index within an array
export function insertItem(array, item, index) {
  // const newArray assigned to the test array sliced from the beginning to the index, a new item added, and then sliced from the index to the end
  const newArray = [...array.slice(0, index), item, ...array.slice(index)];
  return newArray;
}

// Immutably replace an item at a specific position/index within an array
export function replaceItem(array, item, index) {
  // const newArray assigned to the test array sliced from the begginning to the index, a new item added, and then sliced from the index + 1 to the end
  const newArray = [...array.slice(0, index), item, ...array.slice(index + 1)];
  return newArray;
}

// Immutably remove an item at a specific position/index within an array
export function removeItem(array, index) {
  // const called newArray assigned to the test array sliced from the beginning to the index and then sliced from the index + 1 to the end
  const newArray = [...array.slice(0, index), ...array.slice(index + 1)];
  return newArray;
}

//Objects:

// Immutably update the object so that the value under the "name" property becomes the new name
// For example calling:
//     updateName({ name: "Abe" }, "Barbara")
// should give back:
//     { name: "Barbara"}
export function updateName(object, newName) {
  // const called newObject assigned to the test object with the name property updated to the new name
  const newObject = { ...object, name: newName };
  return newObject;

}

// Immutably update the object so that the value under the "needsACupOfTea" property becomes the opposite of what it was.
// Any other properties in the object should be maintained.
// For example calling:
//     toggleTeaStatus({ name: "Abe", needsACupOfTea: false })
// should give back:
//     { name: "Abe", needsACupOfTea: true }
export function toggleTeaStatus(object) {
  // const named NewObject using spread operator to create a shallow copy of the test object.
  // then a the value of the needsACupOfTea property is updated with a NEGATION of the property's previous state, changing from false to true and vice versa
  const newObject = {...object, needsACupOfTea: !object.needsACupOfTea};
  return newObject;
}

// Combo Time!!

// Immutably update the array as well as the object at the given position/index within the array, so that the value under the "completed" property becomes the opposite of what it was.
// Any other properties in the object should be maintained.
// For example calling:
//    toggleListItemCompleted([{ task: "Cooking", completed: true }, { task: "Walking", completed: false }], 1)
// should give back:
//    [{ task: "Cooking", completed: true }, { task: "Walking", completed: true }]

// *** MY SOLUTION ***

// export function toggleListItemCompleted(array, index) {
//   const newArray = [...array.slice(0, index), {...array[index], completed: !array[index].completed}];
//   return newArray;
// }

// *** COPILOTS SOLUTION ***
export function toggleListItemCompleted(array, index) {
  // const newArray assigned to the test array sliced from the beginning to the index, a new object added, and then sliced from the index + 1 to the end
  const newArray = [...array.slice(0, index), {...array[index], completed: !array[index].completed}, ...array.slice(index + 1)];
  return newArray;
}
