import { library, config } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons/faUser";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons/faChevronRight";

// This is important, we are going to let Nuxt worry about the CSS
config.autoAddCss = false;

// Here we add the entire free regular icon package to the library
library.add(faUser, faChevronRight);

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component("font-awesome-icon", FontAwesomeIcon, {});
});
