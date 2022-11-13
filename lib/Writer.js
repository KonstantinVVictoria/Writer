class Story {
    constructor(outline) {
        this.outline = outline;
        this.paragraphs = Object.values(outline);
        this.story = this.paragraphs.reduce((composition, paragraph) => {
            composition += "\n" + paragraph().replaceAll("\n", " ");
            return composition
        }, "");
    }
    print() {
        console.log(this.story)
        return this.story;
    }
    word_count() {
        console.log("Total words: ", this.story.split(' ').length)
    }
}

module.exports = { Story }