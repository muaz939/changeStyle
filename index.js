function changeStyle ({color,fontSize}){

    const elements = document.querySelectorAll('.element');

    elements.style.color = color;
    elements.style.fontSize = fontSize;


}

module.exports.changeStyle = changeStyle;