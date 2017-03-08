class JsonFormController {
    constructor($http, JsonFormService) {
        var self = this;

        var defaultNewDetailsColumn = [{
            //key
            'type': 'string',
            'label': '',
            'nullable': true,
            'options': {
                'unsigned': false
            },
        },
        //value
        {
            'type': 'string',
            'label': '',
            'nullable': true,
            'options': {
                'unsigned': false
            }
        },
        //regex
        {
            'type': 'string',
            'label': '',
            'nullable': true,
            'options': {
                'unsigned': false
            }
        },
        //type
        {
            'type': 'string',
            'label': '',
            'nullable': true,
            'options': {
                'unsigned': false
            }
        }
        ];

        var defaultNewColumn = {
            'type': 'string',
            'label': '',
            'length': '255',
            'nullable': true,
            'options': {
                'fixed': false
            },
            'detColumns': [angular.copy(defaultNewDetailsColumn)]
        };


        this.commandColumns = {
            "columns": [angular.copy(defaultNewColumn)]
        };

        this.deleteColumnRow = function (index) {
            console.log("deleted column " + index)
            self.commandColumns.columns.splice(index, 1);
        };
        this.deleteColumnDetailsRow = function (parentIndex, index) {
            console.log("deleted subcolumn " + index + " of column " + parentIndex)
            self.commandColumns.columns[parentIndex].detColumns.splice(index, 1);
        };
        this.addColumnRow = function () {
            self.commandColumns.columns.push(angular.copy(defaultNewColumn));
        };
        this.addColumnDetailsRow = function (index) {
            console.log(index)
            console.log(self.commandColumns.columns[index].detColumns)
            self.commandColumns.columns[index].detColumns.push(angular.copy(defaultNewDetailsColumn));
        };


    }
}

export default JsonFormController;