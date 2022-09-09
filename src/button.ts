export default class WillButton extends HTMLButtonElement {
    constructor() {
        super();
    }
}
customElements.define('will-button', WillButton, { extends: 'button' })