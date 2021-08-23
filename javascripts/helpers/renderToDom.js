const renderToDom = (divId, textToPrint) => {
    const selectedDiv = document.querySelector(divId);
    selectedDiv.innerHTML = textToPrint;
};

export default renderToDom;