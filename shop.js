/**
 * Created by ionut.dogaru on 6/30/2014.
 */

var app = angular.module('store',[]);

function ShopCtrl($scope, filterFilter) {

    $scope.items = [
        {id: 1, text: 'Cheese', bought: false, quantity:'2', description:'este foarte sanatoasa'},
        {id: 2, text: 'Bread', bought: true, quantity:'4', description:'tine bine de foame'},
        {id: 3, text: 'Onions', bought: false, quantity:'3', description:'este iute si iti curg ochii'}
    ];

    $scope.nextId = $scope.items.length + 1;


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


    $scope.addItem = function() {
        $scope.items.push({text: $scope.itemEntry, bought: false, id: ($scope.nextId) });
        $scope.nextId++;
        $scope.itemEntry = '';
    };

}