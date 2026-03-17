from models import Animal, Dog, Cat

def main():
    animal1 = Animal("Generic", 5, "Unknown")
    dog1 = Dog("Buddy", 3, "Golden Retriever")
    cat1 = Cat("Whiskers", 2, "Black")

    animals = [animal1, dog1, cat1]

    for a in animals:
        print(a.info())
        print(f"{a.name} says: {a.speak()}")
        print(a) 
        print("-" * 30)

    print(dog1.train())
    print(cat1.scratch())

if __name__ == "__main__":
    main()