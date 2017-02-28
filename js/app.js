angular.module("appModule", [])

.controller("defaultCtrl", function ($scope) {
    $scope.query;
    $scope.currentView = "table";
    $scope.refresh =  () => {
        $scope.items = [
          {
            companyName: "Asus",
            companyGoods: ['first1','qwsecond1','dsecond1']
          },
          {
            companyName: "Item2",
            companyGoods: ['first2','wsecond2','dsecond2']
          },
          {
            companyName: "Item3",
            companyGoods: ['first3','wsecond3','nd3']
          }
        ];
    }

    $scope.delete =  (item) => {
        $scope.items.splice($scope.items.indexOf(item), 1);
    }

    $scope.editOrCreate =  (item) => {
        $scope.currentItem = item ? item : {
          companyGoods: ['']
        };
        $scope.currentView = "edit";
    }

    $scope.saveEdit =  (item) => {
      console.log(item);
      let isNewItem = true;
      for (var i = 0; i < $scope.items.length; i++) {
          if ($scope.items[i].companyName == item.companyName) {
              isNewItem = false;
              $scope.items[i] = item;
              break;
          }
      }
      if (isNewItem) {
        $scope.items.push(item);
      }
      $scope.currentView = "table"
    }

    $scope.addItem = () => {
      $scope.currentItem.companyGoods.push('');
    }

    $scope.deleteItem = (index) => {
      $scope.currentItem.companyGoods.splice(index,1);
    }

    $scope.cancelEdit =  () => {
        $scope.currentItem = {};
        $scope.currentView = "table";
    }

    $scope.refresh();
});
