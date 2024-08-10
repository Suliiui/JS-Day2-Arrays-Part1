let groceries = ["garlic", "tomatoes", "rice", "indomie", "onions", "milk"]

function groceries2(grocery){
     console.log(grocery[1])
}
groceries2(groceries)

     console.log(groceries.length)

     function groceries6(grocery){
          console.log(grocery[5])
     }
     groceries6(groceries)

    
     groceries.pop([5])
     console.log(groceries)

     groceries.push("Butter")
     groceries.push("Lettuce")
     console.log(groceries)

     let firstThreeItems = ["garlic", "tomatoes", "rice"]

     firstThreeItems.pop([2])
     console.log(firstThreeItems)
     firstThreeItems.splice(0, 0, "Kale")
     console.log(firstThreeItems)
     let twoItems = firstThreeItems.slice(2)
     console.log(twoItems)
     firstThreeItems.splice(0, 0, "ketchup", "chilli")
     console.log(firstThreeItems)
