import "./bootstrap";
import Antd from "ant-design-vue";
import App from "./App.vue";
import router from "./router";
import { createApp, h, provide } from "vue";
import { DefaultApolloClient } from "@vue/apollo-composable";
import {
    ApolloClient,
    createHttpLink,
    InMemoryCache,
} from "@apollo/client/core";
//============== GraphQl Config ================

// HTTP connection to the API
const httpLink = createHttpLink({
    // You should use an absolute URL here
    uri: "http://localhost:8000/graphql",
});

// Cache implementation
const cache = new InMemoryCache();

// Create the apollo client
const apolloClient = new ApolloClient({
    link: httpLink,
    cache,
});
//============= Vue initialize ==============
const app = createApp({
    setup() {
        provide(DefaultApolloClient, apolloClient);
    },

    render: () => h(App),
});
app.use(Antd);
app.use(router);

app.mount("#app");
