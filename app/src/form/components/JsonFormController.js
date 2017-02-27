class JsonFormController {
    constructor($http, JsonFormService) {
        var self = this;

         var defaultNewDetailsColumn = [{
            'type': 'string',
            'label': 'key',
            'nullable': true,
            'options': {
                'unsigned': false
            },
        }, {
            'type': 'string',
            'label': 'value',
            'length': '255',
            'nullable': true,
            'options': {
                'fixed': false
            }
        }];

        var defaultNewColumn = [{
            'type': 'string',
            'label': 'Insert command',
            'length': '255',
            'nullable': true,
            'options': {
                'fixed': false
            },
            'detColumns': [angular.copy(defaultNewDetailsColumn)]
        }];
       

        this.commandColumns = {
            "columns": angular.copy(defaultNewColumn)
        };

        this.deleteColumnRow = function (index) {
            self.commandColumns.columns.splice(index, 1);
        };
        this.deleteColumnDetailsRow = function (parentIndex,index) {
            self.commandColumns.columns[parentIndex].detColumns.splice(index, 1);
        };
        this.addColumnRow = function (index) {
            self.commandColumns.columns.push(angular.copy(defaultNewColumn));
        };
        this.addColumnDetailsRow = function (index) {
            self.commandColumns.columns[index].detColumns.push(angular.copy(defaultNewDetailsColumn));
        };


    }
}

export default JsonFormController;