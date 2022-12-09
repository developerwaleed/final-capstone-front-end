const deleteFunction = (listArray, index) => {
    listArray.splice(index, 1);
    return listArray;
  };

  export default deleteFunction;