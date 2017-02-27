import JsonFormController from './JsonFormController';
import JsonFormService from './../services/JsonFormService';

export default {
    name : 'jsonForm',
    config: {
        bindings: {data: '<'},
        templateUrl: 'src/form/templates/JsonForm.html',
        controller: ['$http','JsonFormService', JsonFormController]
    }
};