import { createApp } from 'vue'
import App from './App.vue'
import components from './components/UI';
import router from '@/router/router';
import derectives from './directives';
import store from './store';

const app = createApp(App);

components.forEach(component => {
    app.component(component.name, component)
})
derectives.forEach((directiv) => {
	app.directive(directiv.name, directiv);
});

app.use(router).use(store).mount('#app');