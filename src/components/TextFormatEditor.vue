<script setup>
const props = defineProps({
  activeNode: Object,
})

function colorPallete() {
  document.getElementById('color').click();
}

function executeCommand(cmd) {
document.execCommand(cmd, false, '')
}

function link() {
  const url = 'https://poptin.com'
  document.execCommand("createLink", false, url);
}

function unlink() {
  document.execCommand("unlink", false, '');
}

function executeColor(cmd, color) {
  console.log(color.target.value)
document.execCommand(cmd, false, color.target.value)
}

function componentDelete() {
 document.querySelector('[data-dropzone]').removeChild(props.activeNode.parentNode);
}

</script>

<template>
  <div class="poptin-editor">
    <div class="toolbar">
      <div class="line">
        <div class="box">
          <span class="editor-btn icon smaller" data-action="bold" data-tag-name="b" title="Bold" @click="executeCommand('bold')">
            <img src="https://img.icons8.com/fluency-systems-filled/48/000000/bold.png" />
          </span>
          <span
            class="editor-btn icon smaller"
            data-action="italic"
            data-tag-name="i"
            title="Italic"
            @click="executeCommand('italic')"
          >
            <img src="https://img.icons8.com/fluency-systems-filled/48/000000/italic.png" />
          </span>
          <span
            class="editor-btn icon smaller"
            data-action="underline"
            data-tag-name="u"
            title="Underline"
            @click="executeCommand('underline')"
          >
            <img src="https://img.icons8.com/fluency-systems-filled/48/000000/underline.png" />
          </span>
          <span
            class="editor-btn icon smaller"
            data-action="strikeThrough"
            data-tag-name="strike"
            title="Strike through"
            @click="executeCommand('strikeThrough')"
          >
            <img src="https://img.icons8.com/fluency-systems-filled/30/000000/strikethrough.png" />
          </span>
        </div>

        <div class="box">
          <span class="editor-btn icon has-submenu">
            <img src="https://img.icons8.com/fluency-systems-filled/48/000000/align-left.png" />
            <div class="submenu">
              <span
                class="editor-btn icon"
                data-action="justifyLeft"
                data-style="textAlign:left"
                title="Justify left"
                @click="executeCommand('justifyLeft')"
              >
                <img src="https://img.icons8.com/fluency-systems-filled/48/000000/align-left.png" />
              </span>
              <span
                class="editor-btn icon"
                data-action="justifyCenter"
                data-style="textAlign:center"
                title="Justify center"
                @click="executeCommand('justifyCenter')"
              >
                <img
                  src="https://img.icons8.com/fluency-systems-filled/48/000000/align-center.png"
                />
              </span>
              <span
                class="editor-btn icon"
                data-action="justifyRight"
                data-style="textAlign:right"
                title="Justify right"
                @click="executeCommand('justifyRight')"
              >
                <img
                  src="https://img.icons8.com/fluency-systems-filled/48/000000/align-right.png"
                />
              </span>
              <span
                class="editor-btn icon"
                data-action="formatBlock"
                data-style="textAlign:justify"
                title="Justify block"
                @click="executeCommand('justifyLeft')"
              >
                <img
                  src="https://img.icons8.com/fluency-systems-filled/48/000000/align-justify.png"
                />
              </span>
            </div>
          </span>
          <span
            class="editor-btn icon"
            data-action="insertOrderedList"
            data-tag-name="ol"
            title="Insert ordered list"
            @click="executeCommand('insertOrderedList')"
          >
            <img src="https://img.icons8.com/fluency-systems-filled/48/000000/numbered-list.png" />
          </span>
          <span
            class="editor-btn icon"
            data-action="insertUnorderedList"
            data-tag-name="ul"
            title="Insert unordered list"
            @click="executeCommand('insertUnorderedList')"
          >
            <img src="https://img.icons8.com/fluency-systems-filled/48/000000/bulleted-list.png" />
          </span>
          <span
            class="editor-btn icon"
            data-action="outdent"
            title="Outdent"
            data-required-tag="li"
            @click="executeCommand('outdent')"
          >
            <img src="https://img.icons8.com/fluency-systems-filled/48/000000/outdent.png" />
          </span>
          <span class="editor-btn icon" data-action="indent" title="Indent"
                      @click="executeCommand('indent')"
                      >
            <img src="https://img.icons8.com/fluency-systems-filled/48/000000/indent.png" />
          </span>
        </div>
        <div class="box">
          <span class="editor-btn icon smaller" data-action="undo" title="Undo"
                      @click="executeCommand('undo')"
                      >
            <img src="https://img.icons8.com/fluency-systems-filled/48/000000/undo--v1.png" />
          </span>
          <span class="editor-btn icon smaller" data-action="redo" title="Redo"
                      @click="executeCommand('redo')"
                      >
            <img src="https://img.icons8.com/fluency-systems-regular/48/null/redo.png"/>
          </span>
          <span class="editor-btn icon" data-action="removeFormat" title="Remove format"
          @click="executeCommand('removeformat')"
          >
            <img src="https://img.icons8.com/fluency-systems-filled/48/000000/remove-format.png" />
          </span>
        </div>

        <div class="box">
          <span class="editor-btn icon smaller" data-action="createLink" title="Insert Link"
          @click="link()"
          >
            <img src="https://img.icons8.com/fluency-systems-filled/48/000000/add-link.png" />
          </span>
          <span
            class="editor-btn icon smaller"
            data-action="unlink"
            data-tag-name="a"
            title="Unlink"
          @click="unlink()"
          >
            <img src="https://img.icons8.com/fluency-systems-filled/48/000000/delete-link.png" />
          </span>
        </div>

        <div class="box">
          <span
            class="editor-btn icon"
            data-action="colorPallette"
            title="Select Color"
            @click="colorPallete"
          >
            <img
              src="https://img.icons8.com/external-flat-icons-inmotus-design/67/null/external-energy-natural-sources-of-energy-flat-icons-inmotus-design-5.png"
            />
        </span>
            <input type="color" id="color" style="opacity: 0; width: 1px; height: 1px" @change="executeColor('foreColor', $event)" />
        </div>

        <div class="box">
          <span
            class="editor-btn icon"
            data-action="delete"
            title="Delete"
            @click="executeCommand('delete')"
          >
            <img
              src="https://img.icons8.com/material-outlined/24/null/add-trash.png"
            />
          </span>
        </div>

        <div class="box">
          <span
            class="editor-btn icon"
            data-action="delete"
            title="Delete Component"
            @click="componentDelete"
          >
            <img
              src="https://img.icons8.com/material-outlined/24/null/add-trash.png"
            />
          </span>
        </div>

      </div>
    </div>
  </div>
</template>

<style>
.poptin-editor {
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
}
.poptin-editor .toolbar .line {
  display: flex;
  border-bottom: 1px solid #e2e2e2;
}
.poptin-editor .toolbar .line:last-child {
  border-bottom: none;
}
.poptin-editor .toolbar .line .box {
  display: flex;
  border-left: 1px solid #e2e2e2;
}
.poptin-editor .toolbar .line .box .editor-btn {
  display: block;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  transition: 0.2s ease all;
}
.poptin-editor .toolbar .line .box .editor-btn:hover,
.poptin-editor .toolbar .line .box .editor-btn.active {
  background-color: #e1e1e1;
  cursor: pointer;
}
.poptin-editor .toolbar .line .box .editor-btn.icon img {
  width: 15px;
  padding: 9px;
  box-sizing: content-box;
}
.poptin-editor .toolbar .line .box .editor-btn.icon.smaller img {
  width: 16px;
}
.poptin-editor .toolbar .line .box .editor-btn.has-submenu {
  width: 53px;
  padding: 0 10px;
}
.poptin-editor .toolbar .line .box .editor-btn.has-submenu::after {
  content: '';
  width: 6px;
  height: 6px;
  position: absolute;
  background-image: url(https://img.icons8.com/ios-glyphs/30/000000/chevron-down.png);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  right: 4px;
}
.poptin-editor .toolbar .line .box .editor-btn.has-submenu .submenu {
  display: none;
  position: absolute;
  top: 34px;
  left: -1px;
  z-index: 10;
  background-color: #fff;
  border: 1px solid #b5b5b5;
  border-top: none;
}
.poptin-editor .toolbar .line .box .editor-btn.has-submenu .submenu .btn {
  width: 39px;
}
.poptin-editor .toolbar .line .box .editor-btn.has-submenu .submenu:hover {
  display: block;
}
.poptin-editor .toolbar .line .box .editor-btn.has-submenu:hover .submenu {
  display: block;
}

input[type="color"] {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background-color: transparent;
  width: 40px;
  height: 28px;
  border: none;
  cursor: pointer;
}
input[type="color"]::-webkit-color-swatch {
  border-radius: 15px;
  box-shadow: 0 0 0 2px #ffffff, 0 0 0 3px #020929;
}
input[type="color"]::-moz-color-swatch {
  border-radius: 15px;
  box-shadow: 0 0 0 2px #ffffff, 0 0 0 3px #020929;
}

</style>
