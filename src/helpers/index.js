export function processDropElem(clonedElem) {
    clonedElem.setAttribute('tabIndex', 0)
    clonedElem.classList.add('absolute')

    if (clonedElem.hasAttribute('disabled')) {
        clonedElem.removeAttribute('disabled')
        // Add basic css class for styling
        clonedElem.classList.add('p-2')
    }

    if (clonedElem.hasAttribute('media')) {
        clonedElem.classList.remove('pb-44')
        clonedElem.style.width = '10em'
        clonedElem.style.height = '10em'
        clonedElem.style.backgroundSize = 'cover'
    }

    if (!clonedElem.hasAttribute('disabled') && !clonedElem.hasAttribute('media')) {
        // check for headers and make them editable
        if (clonedElem.hasAttribute('data-header')) {
            clonedElem.setAttribute('contentEditable', true)
        }
    }
    const posY = window.event.pageY - document.querySelector('[data-dropzone]').getBoundingClientRect().top;
    const posX = window.event.pageX - document.querySelector('[data-dropzone]').getBoundingClientRect().left;

    clonedElem.style.left = `${convertToREM(posX)}rem`;
    clonedElem.style.top = `${convertToREM(posY)}rem`;
}

export function convertToREM(value) {
    return Math.ceil(value/20)
}
