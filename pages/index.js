import { Section} from "../components/Section.js"
import { Card } from "../components/Card.js";
import initialCards from "../utils/constants.js";


const cardlist = new Section({
    items: initialCards,
    renderer: (item) => {
        const card = new Card(item, ".template");
        const cardElement = card.generateCard();
        cardlist.setItem(cardElement);
    }
}, ".sites");


cardlist.renderItems();
