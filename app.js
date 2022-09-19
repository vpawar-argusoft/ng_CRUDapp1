(function(){

var uId= 0;

angular.module('myCRUDApp',[])
.controller('ContactController', ['$scope',ContactController]);

function ContactController($scope){
    $scope.newContact = null;
    $scope.contacts = [];

    $scope.saveContact = function () {
        if ($scope.newContact.id == null){
            uId = uId + 1;
            $scope.newContact.id = uId;
            $scope.contacts.push($scope.newContact);
        }
        else{
            for(i in $scope.contacts){
                if($scope.contacts[i].id == $scope.newContact.id){
                    $scope.contacts[i] = $scope.newContact;
                }
            }
        }
        $scope.newContact = null ;
       
    }
    

    
    $scope.edit = function(id){
        for (var i in $scope.contacts){
            if ($scope.contacts[i].id == id){
                $scope.newContact = angular.copy($scope.contacts[i]);
            }
        }
    }

    $scope.delete = function(id){
        for (var i in $scope.contacts){
            if ($scope.contacts[i].id == id){
                $scope.contacts.splice(i, 1);
                $scope.newContact = {};
           }
        }
    }


}

})();