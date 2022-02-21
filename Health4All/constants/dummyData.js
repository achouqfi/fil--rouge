const myProfile = {
    name: "Health4All",
    profile_image: require("../assets/images/logo.jpg"),
    address: "No. 88, Jln Padungan, Kuching"
}

const categories = [
    {
        id: 1,
        name: "Fast Food",
        icon: require("../assets/icons/burger.png")
    },
    {
        id: 2,
        name: "Fruit Item",
        icon: require("../assets/icons/cherry.png")
    }, 
    {
        id: 3,
        name: "Rice Item",
        icon: require("../assets/icons/rice.png")
    }
]

export default {
    myProfile,
    categories
}