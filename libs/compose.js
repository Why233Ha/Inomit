function selectorGet(idx) {
  return "[idx='" + idx + "']";
}

class View {
  constructor() {
    this.idx =
      Math.floor(Math.random() * (Number.MAX_VALUE - Number.MIN_VALUE + 1)) +
      Number.MIN_VALUE;
    this.startTag = "<view ";
    this.content = "";
    this.endTeg = "</view>";
  }

  init(rootElem) {
    $(
      this.startTag +
        "idx='" +
        this.idx +
        "'" +
        ">" +
        this.content +
        this.endTeg
    ).appendTo(rootElem);
  }
  attrAdd(attrName, value) {
    $(selectorGet(this.idx)).attr(attrName, value);
  }
}

class Text extends View {
  constructor() {
    super();

    this.startTag = "<text ";
    this.content = "";
    this.endTeg = "</text>";
  }
}

class Button extends Text {
  constructor() {
    super();

    this.startTag = "<btn ";
    this.content = "";
    this.endTeg = "</btn>";
    this.m = "normal";
  }

  init(rootElem) {
    $(
      this.startTag +
        " idx='" +
        this.idx +
        "'" +
        " m='" +
        this.m +
        "'" +
        ">" +
        this.content +
        this.endTeg
    ).appendTo(rootElem);

    switch (this.m) {
      case "icon":
        this.icon;
        this.content = "<iconpark-icon name='" + this.icon + "'></iconpark-icon>";

        $(selectorGet(this.idx)).attr("m-icon", this.icon);
        $(selectorGet(this.idx)).append(this.content);
        break;

      default:
        break;
    }
  }
}
