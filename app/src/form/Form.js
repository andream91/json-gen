import JsonForm from "src/form/components/JsonForm";
import JsonFormService from 'src/form/services/JsonFormService';

export default angular
    .module("form", ['ngMaterial'])
    .component(JsonForm.name,JsonForm.config)

    .service("JsonFormService", JsonFormService);