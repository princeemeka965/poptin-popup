<script>
export default {
  setup() {}
}
</script>

<template>
  <div class="poptin-editor">
    <div class="toolbar">
      <div class="line">
        <div class="box">
          <span class="editor-btn icon smaller" data-action="bold" data-tag-name="b" title="Bold">
            <img src="https://img.icons8.com/fluency-systems-filled/48/000000/bold.png" />
          </span>
          <span
            class="editor-btn icon smaller"
            data-action="italic"
            data-tag-name="i"
            title="Italic"
          >
            <img src="https://img.icons8.com/fluency-systems-filled/48/000000/italic.png" />
          </span>
          <span
            class="editor-btn icon smaller"
            data-action="underline"
            data-tag-name="u"
            title="Underline"
          >
            <img src="https://img.icons8.com/fluency-systems-filled/48/000000/underline.png" />
          </span>
          <span
            class="editor-btn icon smaller"
            data-action="strikeThrough"
            data-tag-name="strike"
            title="Strike through"
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
              >
                <img src="https://img.icons8.com/fluency-systems-filled/48/000000/align-left.png" />
              </span>
              <span
                class="editor-btn icon"
                data-action="justifyCenter"
                data-style="textAlign:center"
                title="Justify center"
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
              >
                <img
                  src="https://img.icons8.com/fluency-systems-filled/48/000000/align-right.png"
                />
              </span>
              <span
                class="editor-btn icon"
                data-action="justifyRight"
                data-style="textAlign:right"
                title="Justify right"
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
          >
            <img src="https://img.icons8.com/fluency-systems-filled/48/000000/numbered-list.png" />
          </span>
          <span
            class="editor-btn icon"
            data-action="insertUnorderedList"
            data-tag-name="ul"
            title="Insert unordered list"
          >
            <img src="https://img.icons8.com/fluency-systems-filled/48/000000/bulleted-list.png" />
          </span>
          <span
            class="editor-btn icon"
            data-action="outdent"
            title="Outdent"
            data-required-tag="li"
          >
            <img src="https://img.icons8.com/fluency-systems-filled/48/000000/outdent.png" />
          </span>
          <span class="editor-btn icon" data-action="indent" title="Indent">
            <img src="https://img.icons8.com/fluency-systems-filled/48/000000/indent.png" />
          </span>
        </div>
        <div class="box">
          <span
            class="editor-btn icon"
            data-action="insertHorizontalRule"
            title="Insert horizontal rule"
          >
            <img
              src="https://img.icons8.com/fluency-systems-filled/48/000000/horizontal-line.png"
            />
          </span>
        </div>
        <div class="box">
          <span class="editor-btn icon smaller" data-action="undo" title="Undo">
            <img src="https://img.icons8.com/fluency-systems-filled/48/000000/undo--v1.png" />
          </span>
          <span class="editor-btn icon smaller" data-action="redo" title="Redo">
            <img src="https://img.icons8.com/fluency-systems-regular/48/null/redo.png"/>
          </span>
          <span class="editor-btn icon" data-action="removeFormat" title="Remove format">
            <img src="https://img.icons8.com/fluency-systems-filled/48/000000/remove-format.png" />
          </span>
        </div>

        <div class="box">
          <span class="editor-btn icon smaller" data-action="createLink" title="Insert Link">
            <img src="https://img.icons8.com/fluency-systems-filled/48/000000/add-link.png" />
          </span>
          <span
            class="editor-btn icon smaller"
            data-action="unlink"
            data-tag-name="a"
            title="Unlink"
          >
            <img src="https://img.icons8.com/fluency-systems-filled/48/000000/delete-link.png" />
          </span>
        </div>

        <div class="box">
          <span class="editor-btn icon" data-action="toggle-view" title="Show HTML-Code">
            <img src="https://img.icons8.com/fluency-systems-filled/48/000000/source-code.png" />
          </span>
        </div>

        <div class="box">
          <span
            class="editor-btn icon"
            data-action="colorPallette"
            title="Select Color"
          >
            <img
              src="https://img.icons8.com/external-flat-icons-inmotus-design/67/null/external-energy-natural-sources-of-energy-flat-icons-inmotus-design-5.png"
            />
          </span>
        </div>

        <div class="box">
          <span
            class="editor-btn icon"
            data-action="colorPallette"
            title="Select Color"
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
  width: 20px;
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
</style>
