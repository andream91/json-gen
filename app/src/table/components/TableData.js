import TableDataController from './TableDataController';
import JsonFormService from './../../form/services/JsonFormService';

export default {
    name : 'tableData',
    config : {
        bindings: {data: '<'},
        templateUrl: 'src/table/components/TableData.html',
        controller: ['$http', '$routeParams', '$log', '$mdDialog', 'JsonFormService', TableDataController ]
    }
};