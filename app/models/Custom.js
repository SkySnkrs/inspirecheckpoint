export class Custom {
    constructor(data) {
        this.quote = data.quote
        this.author = data.author
    }

    get currentQuote() {
        return /*html*/`
        <div id="quote-text" class="mb-0 text-light fs-5 fw-bold textShadow quote-text">
            <p>"${this.quote}"</p>
            <span class="author-text">${this.author}</span>
        </div>
        `
    }
}