/**
 * Created by ionut.dogaru on 6/30/2014.
 */

var app = angular.module('store',[]);

function ShopCtrl($scope) {

    $scope.items = [
        {id: 1, text: 'Cheese', bought: false, quantity:'2', description:'este foarte sanatoasa'},
        {id: 2, text: 'Bread', bought: true, quantity:'4', description:'tine bine de foame'},
        {id: 3, text: 'Onions', bought: false, quantity:'3', description:'este iute si iti curg ochii'}
    ];

    $scope.nextId = $scope.items.length + 1;
    $scope.showInputProduct = false;
    $scope.showInputsEditedProduct = false;

    $scope.remaining = function() {
        var count = 0;
        angular.forEach($scope.items, function(item) {
            count += item.done ? 0 : 1;
        });
        return count;
    };


    $scope.deleted = function() {
        var oldItems = $scope.items;
        $scope.items = [];
        angular.forEach(oldItems, function(item) {
            if (!item.done) $scope.items.push(item);
        });
    };

    $scope.addProduct = function () {
        $scope.items.push({
            text: $scope.newProductName,
            quantity: $scope.newProductQuantity,
            description: $scope.newProductDescription,
            bought: false
        });
        $scope.newProductName = "";
        $scope.newProductQuantity = "";
        $scope.newProductDescription = "";
        $scope.productsInList=true;
    };

    $scope.show = function () {
        $scope.showInputProduct = !$scope.showInputProduct;
    };

    $scope.showNew = function () {
        this.showInputsEditedProduct = !this.showInputsEditedProduct;
    };
}


