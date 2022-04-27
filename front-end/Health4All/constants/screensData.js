const onboarding_screens = [
    {
        id: 1,
        bannerImage: require("../assets/images/splash/splash4.png"),
        title: "Improve Sleep  Quality",
        description: "Improve the quality of your sleep with us, good quality sleep can bring a good mood in the morning"
    },
    {
        id: 2,
        bannerImage: require("../assets/images/splash/splash9.png"),
        title: "Track Your Goal",
        description: "Don't worry if you have trouble determining your goals, We can help you determine your goals and track your goals"
    },
    {
        id: 3,
        bannerImage: require("../assets/images/splash/splash8.png"),
        title: "Get Burn",
        description: "Let’s keep burning, to achive yours goals, it hurts only temporarily, if you give up now you will be in pain forever"
    },
    {
        id: 4,
        bannerImage: require("../assets/images/splash/splash6.png"),
        title: "Get Burn",
        description: "Let’s keep burning, to achive yours goals, it hurts only temporarily, if you give up now you will be in pain forever"
    }
]

const screens = {
    home: "Home",
    search: "Search",
    image: "Image",
    calendar: "Calendar",
    profil: "Profile",
}

const bottom_tabs = [
    {
        id: 0,
        label: screens.home,
    },
    {
        id: 1,
        label: screens.search,
    },
    {
        id: 2,
        label: screens.image,
    },
    {
        id: 3,
        label: screens.calendar,
    },
    {
        id: 4,
        label: screens.profil,
    },
]

export default {
    screens,
    bottom_tabs,
    onboarding_screens
}