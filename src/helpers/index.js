export function processDropElem(clonedElem) {
    clonedElem.removeAttribute('draggable')
    clonedElem.setAttribute('tabIndex', 0)

    if (clonedElem.hasAttribute('disabled')) {
        clonedElem.removeAttribute('disabled')
        // Add basic css class for styling
        clonedElem.classList.add('p-2')
    }

    if (clonedElem.hasAttribute('media')) {
        clonedElem.classList.remove('pb-44')
        clonedElem.style.width = '20em'
        clonedElem.style.height = '20em'
        clonedElem.style.backgroundSize = 'cover'
    }

    if (!clonedElem.hasAttribute('disabled') && !clonedElem.hasAttribute('media')) {
        // check for headers and make them editable
        if (clonedElem.hasAttribute('data-header')) {
            clonedElem.setAttribute('contentEditable', true)
        }
    }

    let dropZoneOffsets = document.querySelector('[data-dropzone]').getBoundingClientRect()
    let clonedElemHeight = clonedElem.getBoundingClientRect().height;

    clonedElem.style.left = `${convertToEm(dropZoneOffsets.left - clonedElemHeight)}em`;
    clonedElem.style.top = `${convertToEm((window.event.pageY - dropZoneOffsets.top) - clonedElemHeight)}em`;
}

export function convertToEm(value) {
    return Math.ceil(value /16)
}
