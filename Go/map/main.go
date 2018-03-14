package main

import (
	"fmt"
)

func main() {

	//Map called colors and key and value are type string : Method 1
	//Map where all keys are type string and values too
	colors := map[string]string{
		"red":   "#ff0000",
		"green": "#008000",
		"white": "#ffff",
	}

	//Method 2
	//var colors map[string]string

	//Method 3
	/**colors := make(map[string]string)
	colors["White"] = "#ffff"

	//Delete
	delete(colors, "White")**/

	//fmt.Println(colors)

	printMap(colors)
}

func printMap(c map[string]string) {
	for color, hex := range c {
		fmt.Println("Hex code for", color, "is", hex)
	}
}
