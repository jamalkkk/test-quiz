<template>
    <div class="app">
        <home></home>
    </div>
</template>

<script>
import Home from "./block/home/Home.vue";
import { mapMutations } from "vuex";

const OPENWEATHERMAP_API_KEY = process.env.openWeatherMapAPIKey;

export default {
    components: { Home },
    name: "App",
    async fetch() {
        const ZurichCoordinates = "lat=47.22&lon=8.33";
        const url = `https://api.openweathermap.org/data/2.5/weather?${ZurichCoordinates}&appid=${OPENWEATHERMAP_API_KEY}`;

        const data = await fetch(url)
            .then((response) => {
                if (response.status != 200) {
                    throw response.status;
                } else {
                    return response.json();
                }
            })
            .then(({ weather }) => {
                const weatherMain = weather[0]?.main || "Clear";
                this.setWeather(weatherMain);
            })
            .catch((error) => {
                console.error(error);
            });
    },
    methods: {
        ...mapMutations({
            setWeather: "setWeather",
        }),
    },
};
</script>
