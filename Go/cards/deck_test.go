package main

import (
	"os"
	"testing"
)

func TestNewDeck(t *testing.T) {
	d := newDeck()

	if len(d) != 16 {
		t.Errorf("Expected deck length of 16, but got  %v", len(d))
	}

	if d[0] != "AceofSpades" {
		t.Errorf("Expected first card of Ace of Spades, but got %v", d[0])
	}

	if d[len(d)-1] != "FourofClubs" {
		t.Errorf("Expected last card of Four of Clubs, but got %v", d[len(d)-1])
	}
}

func TestSaveToDeckAndNewDeckFromFile(t *testing.T) {

	//To Remove current files in directory
	os.Remove("_decktesting")

	//Create a new deck
	deck := newDeck()

	//Save deck to file
	deck.saveToFile("_decktesting")

	//Load deck from hard drive
	loadedDeck := newDeckFromFile("_decktesting")

	//Assert length
	if len(loadedDeck) != 16 {
		t.Errorf("Expected 16 cards in deck, got %v", len(loadedDeck))
	}

	//Remove
	os.Remove("_decktesting")

}
