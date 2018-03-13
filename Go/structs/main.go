package main

import (
	"fmt"
)

type contactInfo struct {
	email   string
	zipCode int
}

//Define new struct and tell Go exactly what properties it should have
//Custom type that will exist only inside our program
//Type person

type person struct {
	firstName string
	lastName  string
	//contact   contactInfo
	contactInfo
}

func main() {

	/**
	//Method 1
	//Create a variable alex
	//Put down type name which is person
	//Put curly braces
	//then first name and last name as strings with comma
	//alex := person{"Alex", "Anderson"}

	//Method 2 : Preferred
	//alex := person{firstName: "Alex", lastName: "Anderson"}
	//fmt.Println(alex)

	//Method 3
	var alex person //This declares a value of type person and assigns it to variable alex, who has no properties assigned to him yet

	//To update properties or fields on a struct
	alex.firstName = "Alex"
	alex.lastName = "Anderson"

	fmt.Println(alex)
	//Logout out each field name and value that is assigned to each one
	fmt.Printf("%+v", alex) //%v will print out all different field names and values from alex **/

	//How to declare person with contactInfo
	jim := person{firstName: "Jim",
		lastName: "Party",
		//contact: contactInfo{
		contactInfo: contactInfo{
			email:   "jim@gmail.com",
			zipCode: 94000,
		},
	}

	//fmt.Printf("%v", jim)

	//Update FirstName
	//jim.updateName("Jimmy")   // This does not change jim to jimmy

	///To update Jim to Jimmy
	//jimPointer := &jim //Jim is a reference to the struct in memory, using &jim we turn it into a pointer & then we assign that value to Jim pointer
	//jimPointer.updateName("jimmy")

	//or
	jim.updateName("jimmy")

	//Since Receiver print is there
	jim.print()
}

//To update First name of Jim
/**func (p person) updateName(newFirstName string) {
	p.firstName = newFirstName
}**/ //This did not work

//*person is a pointet that points to a person
func (pointerToPerson *person) updateName(newFirstName string) {
	(*pointerToPerson).firstName = newFirstName
}

//Using receriver
func (p person) print() {
	fmt.Printf("%v", p)
}
