class JsonFormController {
    constructor($http, JsonFormService) {
        var self = this;

        var jobOptions = {
            'account': '',
            'chunks': '',
            'error_log_path': '',
            'job_name': '',
            'memory': '',
            'mpi_procs': '',
            'ncpus': '',
            'output_log_path': '',
            'walltime': ''
        };

        var modules = [angular.copy(defaultNewModule)];

        var defaultNewModule = {
            'autoload': '',
            'name': '',
            'version': ''
        };

        var defaultNewDetailsColumn = {
            'key': '',
            'value': '',
            'regex': '',
            'type': '',
        };

        var defaultNewColumn = {
            'executable': '',
            'id': '',
            'branching_factor': '',
            'after': '',
            'options': [angular.copy(defaultNewDetailsColumn)]
        };

        /*var defaultNewColumn = [{
            //command
            'type': 'string',
            'label': '',
            'length': '255',
            'nullable': true,
            'options': {
                'fixed': false
            },
            'detColumns': [angular.copy(defaultNewDetailsColumn)]
        },
        //dependency
        {
            'type': 'string',
            'label': '',
            'length': '255',
            'nullable': true,
            'options': {
                'fixed': false
            },
        }];*/


      

        this.commandColumns = {
            "columns": [angular.copy(defaultNewColumn)]
        };

        this.deleteColumnRow = function (index) {
            console.log("deleted column " + index)
            self.commandColumns.columns.splice(index, 1);
        };
        this.deleteColumnDetailsRow = function (parentIndex, index) {
            console.log("deleted subcolumn " + index + " of column " + parentIndex)
            self.commandColumns.columns[parentIndex].options.splice(index, 1);
        };
        this.addColumnRow = function () {
            self.commandColumns.columns.push(angular.copy(defaultNewColumn));
        };
        this.addColumnDetailsRow = function (index) {
            console.log(index)
            console.log(self.commandColumns.columns[index].options)
            self.commandColumns.columns[index].options.push(angular.copy(defaultNewDetailsColumn));
        };

        this.generateyml = function (){
            var mydata = {
                'jobOptions': self.jobOptions,
                'modules': self.modules,
                'commands': self.commandColumns.columns
            };
            console.log(mydata);
            console.log("da questa funzione parte la generazione del file yml");
            $http.post('http://localhost/api/generate_yaml/',mydata).then(function(){console.log("success");}, function(){console.log("error");});


        }

    }
}

export default JsonFormController;