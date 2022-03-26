
export default class Button {
    constructor( text ) {
        this.text = text;
    }

    render() {
         return  `<button> ${this.text} </button>`; //retorna un texto en formato HTML, por ello al pegarlo con la property innerHTML dentro del div, nos queda como una etiqueta <button>
    }
}   
