import { Section} from "./Section.js"
import { Card } from "./Card.js";
import initialCards from "./constants.js";
import { sites } from "./constants.js";

const cardlist = new Section({
    items: initialCards,
    renderer: (item) => {
        const card = new Card(item, ".template");
        const cardElement = card.generateCard();
        cardlist.setItem(cardElement);
    }
}, ".sites");


cardlist.renderItems();
