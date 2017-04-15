class JsonFormController {
    constructor($http, JsonFormService, $mdDialog) {
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

        var displayedFiles = [];

        var username = "";
      

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
            var postUrl = 'http://localhost/api/generate_yaml/'+self.username;
            $http.post(postUrl,mydata).then(function(){console.log("success");}, function(){console.log("error");});


        }
        this.loadAllFiles = function (){
            $http.post('http://localhost/api/get_all_files/').then(function(response){
                //console.log(response.data);
                /*for(var k in response.data){
                    var rd = 'response.data.';
                    console.log(eval(rd+k));
                    displayedFiles.push(eval(rd+k));
                }*/
               
                self.displayedFiles = response.data;
    
            }, function(){console.log("error");});
        }
        this.loadFilesFromUser = function (){
            $http.post('http://localhost/api/get_user_files/',self.username).then(function(response){
                //console.log(response.data);
                /*for(var k in response.data){
                    var rd = 'response.data.';
                    console.log(eval(rd+k));
                    displayedFiles.push(eval(rd+k));
                }*/
               
                self.displayedFiles = response.data;
    
            }, function(){console.log("error");});
        }
        this.populateFromFile = function(data){
            self.jobOptions = data.job_options;
            self.commandColumns.columns = data.commands;
            //self.modules = data.modules;

        }

    }
}

export default JsonFormController;