package main

func main() {

	cards := newDeck()
	cards.shuffle()
	cards.print()

	/**cards := newDeckFromFile("my_cards")
	cards.print()**/

	/**cards := newDeck()
	cards.saveToFile("my_cards")**/

	//fmt.Println(cards.toString())

	/**hand, remainingCards := deal(cards, 5)
	hand.print()
	remainingCards.print()**/

	//cards.print()

	/**cards := deck{"Ace of Diamonds", newCard()}
	cards = append(cards, "Six of Spades")
	cards.print()**/

}

/**
func newCard() string {
	return "Five of Diamonds"
}**/
